import { SolanaAddress } from "./solanaAddress";

/**
 * isBase58.ts
 * Validates a Solana wallet address.
 * @param address - The address to validate.
 * @returns {SolanaAddress} if valid, otherwise throws an error.
 */
export function validateSolanaAddress(address: string): SolanaAddress {
  const base58Regex = /^[1-9A-HJ-NP-Za-km-z]{32,44}$/;
  
  if (!base58Regex.test(address)) {
    throw new Error(`Invalid Solana address: ${address}`);
  }

  return address as SolanaAddress;
}
