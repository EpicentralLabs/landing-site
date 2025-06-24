import { Connection, PublicKey } from '@solana/web3.js';
import { TOKEN_PROGRAM_ID } from '@solana/spl-token';

/**
 * Fetches the top 10 holders of a given SPL token mint by aggregating balances from all token accounts.
 * Only direct wallet balances are included for now. Governance program staked balances: TODO.
 *
 * @param mintAddress - The SPL token mint address (string or PublicKey)
 * @param limit - Number of top holders to return (default 10)
 * @returns Array of { owner: string, total: number } sorted by total descending
 */
export async function fetchTopTokenHolders(mintAddress: string | PublicKey, limit = 10) {
  const baseUrl = "https://epicentr-solanam-cb95.mainnet.rpcpool.com";
  const key = process.env.NEXT_PUBLIC_TRITON_MAINNET_KEY;
  if (!key) throw new Error("NEXT_PUBLIC_TRITON_MAINNET_KEY is not set");
  const endpoint = `${baseUrl}/${key}`;
  const connection = new Connection(endpoint, "confirmed");
  const mint = typeof mintAddress === 'string' ? new PublicKey(mintAddress) : mintAddress;

  // Fetch all token accounts for the mint
  const accounts = await connection.getProgramAccounts(
    TOKEN_PROGRAM_ID,
    {
      filters: [
        { dataSize: 165 }, // SPL Token Account size
        { memcmp: { offset: 0, bytes: mint.toBase58() } }, // Mint filter
      ],
      commitment: 'confirmed',
    }
  );

  // Aggregate balances by owner
  const balances: Record<string, number> = {};
  for (const { account } of accounts) {
    const data = account.data;
    // Parse owner and amount from account data
    const owner = new PublicKey(data.slice(32, 64)).toBase58();
    const amount = Number(BigInt('0x' + Buffer.from(data.slice(64, 72)).toString('hex')));
    if (!balances[owner]) balances[owner] = 0;
    balances[owner] += amount;
  }

  // TODO: Fetch and add balances held in governance program PDAs/vaults, mapping to user addresses

  // Convert to array and sort
  const sorted = Object.entries(balances)
    .map(([owner, total]) => ({ owner, total }))
    .sort((a, b) => b.total - a.total)
    .slice(0, limit);

  return sorted;
} 