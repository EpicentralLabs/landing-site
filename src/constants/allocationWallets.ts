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
  