/**
 * Mapping of allocation names to their respective Solscan wallet URLs.
 * This constant is used to provide links to the allocation wallet details on Solscan.
 * Each allocation is linked to its unique wallet address for easy access and tracking.
 */
export const allocationWallets = {
    /**
     * Public Allocation wallet link on Solscan.
     * Used for tracking the public allocation funds.
     */
    'Public Allocation': 'https://solscan.io/account/3wxhFgvVYGStoQj3XvMArNQF66WamWcVy4EgwBJfK1bM',
  
    /**
     * DeFi Allocation wallet link on Solscan.
     * Used for tracking the DeFi allocation funds.
     */
    'DeFi Allocation': 'https://solscan.io/account/6yuntQAS5gSwhhKaXG3QYbcwXPxhsbULu9Tzv9mizUUm',
  
    /**
     * DAO Treasury wallet link on Solscan.
     * Used for tracking the DAO treasury allocation funds.
     */
    'DAO Treasury': 'https://solscan.io/account/3BEvopNQ89zkM4r6ADva18i5fao1sqR1pmswyQyfj838',
  
    /**
     * Marketing wallet link on Solscan.
     * Used for tracking the marketing allocation funds.
     */
    'Marketing': 'https://solscan.io/account/6tpxdCf56XZQbdieLFZGDgaWpefc6SZPGy9Sg6MqYVRB',
  
    /**
     * Contributor Bonus wallet link on Solscan.
     * Used for tracking the contributor bonus allocation funds.
     */
    'Contributor Bonus': 'https://solscan.io/account/DR1P6yBNXQ8YLBrpYpU3FjnnruStMRzm2y2cAA3D6ynm',
  } as const;
  
/**
 * Mapping of known wallet addresses to their human-readable labels for display in the UI.
 */
export const knownWalletLabels: Record<string, string> = {
  '3BEvopNQ89zkM4r6ADva18i5fao1sqR1pmswyQyfj838': 'Epicentral DAO Main Treasury',
  '5PP7vKjJyLw1MR55LoexRsCj3CpZj9MdD6aNXRrvxG42': 'Epicentral DAO Staked Tokens',
  'GpMZbSM2GgvTKHJirzeGfMFoaZ8UR2X7F4v8vHTvxFbL': 'Raydium Pool (Burned Liquidity)',
  '2gb7eFNMsmWhYQzfo7mrbJCxng2LhSzmbLo3j3VgLF1L': 'Streamflow Vesting (LABS) Contract',
  'F5LBZCetsfcg2XYjitGbhgXp1fPgnTNG5xiF4FTptuRr': 'Meteora (LABS) Vault Authority',
  'BsuJFZZqmvy8MF3Ccfervot2mWp8xrrSGD18ETorRy7B': 'Streamflow Vesting (LABS) Contract',
  '6yuntQAS5gSwhhKaXG3QYbcwXPxhsbULu9Tzv9mizUUm': 'Epicentral DAO Rewards Treasury',
  '6tpxdCf56XZQbdieLFZGDgaWpefc6SZPGy9Sg6MqYVRB': 'Epicentral DAO Marketing Treasury',
};
  