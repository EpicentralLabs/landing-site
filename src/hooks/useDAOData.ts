/**
 * Imports required dependencies from @solana/spl-governance and @solana/web3.js
 * for interacting with Solana's on-chain governance program
 */
import { 
  getGovernance,
  getProposalsByGovernance,
  getVoteRecord,
  Proposal,
  VoteRecord,
  ProgramAccount,
  ProposalState,
  getRealm
} from "@solana/spl-governance";
import { Connection, PublicKey } from "@solana/web3.js";
import { useState, useEffect } from "react";

// Constants for connecting to Solana network and governance program
const REALM_ADDRESS = new PublicKey("5PP7vKjJyLw1MR55LoexRsCj3CpZj9MdD6aNXRrvxG42");
const RPC_ENDPOINT = "https://mango.rpcpool.com";
const GOVERNANCE_PROGRAM_ID = new PublicKey("GovER5Lthms3bLBqWub97yVrMmEogzX7xNjdXpPPCVZw");
const GOVERNING_TOKEN_MINT = new PublicKey("LABSh5DTebUcUbEoLzXKCiXFJLecDFiDWiBGUU1GpxR");

/**
 * Interface defining the structure of DAO data
 * @property treasuryBalance - Current balance in the DAO treasury
 * @property memberCount - Number of DAO members
 * @property proposalCount - Total number of proposals
 * @property totalVotes - Total number of votes across active proposals
 * @property activeProposals - Array of currently active proposals
 */
export interface DAOData {
  treasuryBalance: number;
  memberCount: number;
  proposalCount: number;
  totalVotes: number;
  activeProposals: Array<{
    id: string;
    title: string;
    status: string;
    votes: { yes: number; no: number };
    endsIn: string;
  }>;
}

/**
 * Custom hook to fetch and manage DAO data
 * @returns Object containing DAO data and loading state
 */
export function useDAOData() {
  const [data, setData] = useState<DAOData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        // Initialize connection to Solana network
        const connection = new Connection(RPC_ENDPOINT);
        
        // Fetch realm data from governance program
        const realm = await getRealm(connection, REALM_ADDRESS);
        
        // Get governance account associated with the realm
        const governances = await getGovernance(
          connection, 
          GOVERNANCE_PROGRAM_ID,
        );

        // Fetch all proposals for the governance account
        const proposals = await getProposalsByGovernance(
          connection,
          GOVERNANCE_PROGRAM_ID,
          governances.pubkey
        );

        // Process active proposals and their vote records
        const activeProposals = await Promise.all(
          proposals
            .filter((p: ProgramAccount<Proposal>) => p.account.state === ProposalState.Voting)
            .slice(0, 5) // Limit to 5 most recent
            .map(async (p: ProgramAccount<Proposal>) => {
              // Fetch vote records for each proposal
              const voteRecords = await getVoteRecord(
                connection,
                p.pubkey
              );

              // Calculate total yes votes
              const yesVotes = Array.isArray(voteRecords) ? 
                voteRecords.reduce((acc: number, v: ProgramAccount<VoteRecord>) => 
                  acc + (v.account.voteWeight?.yes?.toNumber() || 0), 0) : 0;
                  
              // Calculate total no votes
              const noVotes = Array.isArray(voteRecords) ? 
                voteRecords.reduce((acc: number, v: ProgramAccount<VoteRecord>) => 
                  acc + (v.account.voteWeight?.no?.toNumber() || 0), 0) : 0;

              return {
                id: `P-${p.pubkey.toString().slice(0, 4)}`,
                title: p.account.name || 'Untitled Proposal',
                status: 'Active',
                votes: {
                  yes: yesVotes,
                  no: noVotes
                },
                endsIn: calculateTimeRemaining(p.account.votingAt?.toNumber() || 0)
              };
            })
        );

        // Calculate treasury balance from governance account (converting from lamports to SOL)
        const treasuryBalance = governances.account.reserved ? Number(Buffer.from(governances.account.reserved).readBigUInt64LE()) / 1e9 : 0;

        // Update state with fetched data
        setData({
          treasuryBalance,
          memberCount: realm.account.votingProposalCount,
          proposalCount: proposals.length,
          totalVotes: activeProposals.reduce((acc, p) => acc + p.votes.yes + p.votes.no, 0),
          activeProposals
        });
      } catch (error) {
        console.error("Error fetching DAO data:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  return { data, loading };
}

/**
 * Calculates remaining time for a proposal
 * @param endTime Unix timestamp when the proposal ends
 * @returns Formatted string showing days and hours remaining
 */
function calculateTimeRemaining(endTime: number): string {
  const now = Date.now() / 1000;
  const remaining = Math.max(0, endTime - now);
  const days = Math.floor(remaining / (24 * 60 * 60));
  const hours = Math.floor((remaining % (24 * 60 * 60)) / (60 * 60));
  return `${days}d ${hours}h`;
} 