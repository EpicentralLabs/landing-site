import { Connection, PublicKey } from '@solana/web3.js';
import { TOKEN_PROGRAM_ID, TOKEN_2022_PROGRAM_ID, MintLayout } from '@solana/spl-token';

/**
 * Fetches the top N holders of an SPL token mint by querying both Token Program and Token-2022 Program.
 * This approach matches what explorers like Solscan do to show comprehensive holder data.
 *
 * @param mintAddress - The SPL token mint address (string or PublicKey)
 * @param limit - Number of top holders to return (default 10)
 * @returns Array of { owner: string, total: number } sorted by total descending
 */
export async function fetchTopTokenHolders(mintAddress: string | PublicKey, limit = 10) {
  // --- Setup connection and mint ---
  const baseUrl = "https://epicentr-solanam-cb95.mainnet.rpcpool.com";
  const key = process.env.NEXT_PUBLIC_TRITON_MAINNET_KEY;
  if (!key) throw new Error("NEXT_PUBLIC_TRITON_MAINNET_KEY is not set");
  const endpoint = `${baseUrl}/${key}`;
  const connection = new Connection(endpoint, "confirmed");
  const mint = typeof mintAddress === 'string' ? new PublicKey(mintAddress) : mintAddress;

  // --- Fetch mint info to get decimals and determine which program owns it ---
  const mintInfo = await connection.getParsedAccountInfo(mint);
  let decimals = 0;
  let mintOwnerProgram: PublicKey | null = null;
  
  if (mintInfo.value) {
    mintOwnerProgram = mintInfo.value.owner;
    
    if (typeof mintInfo.value.data === 'object' && 'parsed' in mintInfo.value.data) {
      decimals = mintInfo.value.data.parsed.info.decimals;
    } else if (mintInfo.value.data instanceof Buffer || mintInfo.value.data instanceof Uint8Array) {
      const data = Buffer.from(mintInfo.value.data as Buffer);
      decimals = MintLayout.decode(data).decimals;
    }
  }

  // --- Aggregate balances from both token programs ---
  const balances: Record<string, bigint> = {};

  // Query Token Program accounts (165 bytes)
  try {
    const tokenProgramAccounts = await connection.getProgramAccounts(
      TOKEN_PROGRAM_ID,
      {
        filters: [
          { dataSize: 165 }, // SPL Token Account size
          { memcmp: { offset: 0, bytes: mint.toBase58() } }, // Mint filter
        ],
        commitment: 'confirmed',
      }
    );

    for (const { account } of tokenProgramAccounts) {
      const data = account.data;
      const owner = new PublicKey(data.slice(32, 64)).toBase58();
      const amountRaw = BigInt('0x' + Buffer.from(data.slice(64, 72)).toString('hex'));
      if (!balances[owner]) balances[owner] = BigInt(0);
      balances[owner] += amountRaw;
    }
  } catch (err) {
    console.warn('Error fetching Token Program accounts:', err);
  }

  // Query Token-2022 Program accounts (182 bytes for base account)
  try {
    const token2022Accounts = await connection.getProgramAccounts(
      TOKEN_2022_PROGRAM_ID,
      {
        filters: [
          { dataSize: 182 }, // Token-2022 base account size
          { memcmp: { offset: 0, bytes: mint.toBase58() } }, // Mint filter
        ],
        commitment: 'confirmed',
      }
    );

    for (const { account } of token2022Accounts) {
      const data = account.data;
      const owner = new PublicKey(data.slice(32, 64)).toBase58();
      const amountRaw = BigInt('0x' + Buffer.from(data.slice(64, 72)).toString('hex'));
      if (!balances[owner]) balances[owner] = BigInt(0);
      balances[owner] += amountRaw;
    }
  } catch (err) {
    console.warn('Error fetching Token-2022 accounts:', err);
  }

  // Note: Token-2022 accounts can have extensions making them larger than 182 bytes.
  // For comprehensive coverage, we should also check larger sizes, but 182 covers the base case.

  // TODO: Fetch and add balances held in governance program PDAs/vaults, mapping to user addresses

  // --- Convert to array, convert to human-readable, sort, and return top N ---
  const sorted = Object.entries(balances)
    .map(([owner, totalRaw]) => ({
      owner,
      total: Number(totalRaw) / Math.pow(10, decimals),
    }))
    .sort((a, b) => b.total - a.total)
    .slice(0, limit);

  return sorted;
} 