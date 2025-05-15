export const calculateLiquidityToMarketCapRatio = (
  liquidity: number,
  marketCap: number
): number => {
  if (marketCap === 0) return 0;
  return Number((liquidity / marketCap).toFixed(2));
};

export const calculateBuySellPressure = (
  buyVolume: number,
  sellVolume: number,
  totalVolume: number
): number => {
  if (totalVolume === 0) return 0;
  return Number(((buyVolume - sellVolume) / totalVolume).toFixed(2));
};
