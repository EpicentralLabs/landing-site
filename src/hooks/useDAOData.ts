import { 
  getGovernance,
  getProposalsByGovernance,
  getVoteRecord,
  Realm,
  Proposal,
  VoteRecord,
  ProgramAccount,
  ProposalState
} from "@solana/spl-governance";
import { Connection, PublicKey } from "@solana/web3.js";
import { useState, useEffect } from "react";
import { SplGovernance } from "governance-idl-sdk";

// Constants  
const REALM_ADDRESS = new PublicKey("5PP7vKjJyLw1MR55LoexRsCj3CpZj9MdD6aNXRrvxG42");
const RPC_ENDPOINT = "https://mango.rpcpool.com";
const GOVERNANCE_PROGRAM_ID = new PublicKey("GovER5Lthms3bLBqWub97yVrMmEogzX7xNjdXpPPCVZw");
const GOVERNING_TOKEN_MINT = new PublicKey("LABSh5DTebUcUbEoLzXKCiXFJLecDFiDWiBGUU1GpxR");

export interface DAOData {
  treasuryBalance: number;
  memberCount: number;
  proposalCount: number;
  totalVotes: number;
  monthlyInflow: number;
  monthlyOutflow: number;
  activeProposals: Array<{
    id: string;
    title: string;
    status: string;
    votes: { yes: number; no: number };
    endsIn: string;
  }>;
}

export function useDAOData() {
  const [data, setData] = useState<DAOData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const connection = new Connection(RPC_ENDPOINT);
        const splGovernance = new SplGovernance(connection, GOVERNANCE_PROGRAM_ID);
        
        // Get governance account
        const governance = await getGovernance(connection, GOVERNANCE_PROGRAM_ID);
        
        // Get member count (token owner records)
        const memberRecords = await splGovernance.getTokenOwnerRecordsForRealm(REALM_ADDRESS);

        // Adjust logic based on the actual structure
        const memberCount = Array.isArray(memberRecords) ? memberRecords.length : 0; // Assuming it returns an array

        // Get proposals for governance
        const proposals = await getProposalsByGovernance(
          connection,
          GOVERNANCE_PROGRAM_ID,
          governance.pubkey
        );

        // Get active proposals and their votes
        const activeProposals = await Promise.all(
          proposals
            .filter((p: ProgramAccount<Proposal>) => p.account.state === ProposalState.Voting)
            .map(async (p: ProgramAccount<Proposal>) => {
              const voteRecords = await getVoteRecord(
                connection,
                p.pubkey
              );

              return {
                id: p.pubkey.toString().slice(0, 6),
                title: p.account.name,
                status: 'Active',
                votes: {
                  yes: Array.isArray(voteRecords) ? voteRecords.reduce((acc: number, v: ProgramAccount<VoteRecord>) => 
                    acc + (v.account.voteWeight?.yes?.toNumber() || 0), 0) : 0,
                  no: Array.isArray(voteRecords) ? voteRecords.reduce((acc: number, v: ProgramAccount<VoteRecord>) => 
                    acc + (v.account.voteWeight?.no?.toNumber() || 0), 0) : 0
                },
                endsIn: calculateTimeRemaining(p.account.votingAt?.toNumber() || 0)
              };
            })
        );

        setData({
          treasuryBalance: Number(governance.account.reserved) / 1e9,
          memberCount: memberCount, // Use the adjusted member count
          proposalCount: proposals.length,
          totalVotes: activeProposals.reduce((acc: number, p) => acc + p.votes.yes + p.votes.no, 0),
          monthlyInflow: 234500, // Placeholder
          monthlyOutflow: 89200, // Placeholder
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

function calculateTimeRemaining(endTime: number): string {
  const now = Date.now() / 1000;
  const remaining = endTime - now;
  const days = Math.floor(remaining / (24 * 60 * 60));
  const hours = Math.floor((remaining % (24 * 60 * 60)) / (60 * 60));
  return `${days}d ${hours}h`;
} 