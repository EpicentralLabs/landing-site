import { TokenData } from "@/types/tokenData";
import { validateSolanaAddress, SolanaAddress } from '@/types/solana-utils/isBase58';

/**
 * Fetches token data from the DexScreener API.
 *
 * @param chain - The blockchain name (e.g., "solana").
 * @param address - The token address to fetch data for.
 * @returns {Promise<TokenData>} The token data response from DexScreener API.
 * @throws {Error} Will throw an error if the fetch fails, if the response is not ok, or if the response data is malformed.
 */
export const fetchTokenData = async (
  chain: string,
  address: SolanaAddress
): Promise<TokenData> => {
  try {
    const validAddress: SolanaAddress = validateSolanaAddress(address);
  } catch (error) {
    throw new Error(`Invalid Solana address: ${address}`);
  }

  const url = `https://api.dexscreener.com/token-pairs/v1/${chain}/${address}`;
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
    },
  };

  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error(`Failed to fetch data for ${address} on ${chain}`);
    }
    const result = await response.json();
    if (!Array.isArray(result) || result.length === 0) {
      throw new Error(`No data found for ${address} on ${chain}`);
    }
    return result[0];
  } catch (err) {
    const errorMessage = err instanceof Error ? err.message : "Unknown error";
    throw new Error(`Error fetching token data: ${errorMessage}`);
  }
};
