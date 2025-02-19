export interface TokenData {
    priceUsd?: string | null;
    baseToken: {
      name: string;
      symbol: string;
    };
    quoteToken: {
      name: string;
      symbol: string;
    };
    priceChange: {
      h1: number;
      h6: number;
      h24: number;
    };
    volume: {
      h24: number;
      h6: number;
      h1: number;
    };
    liquidity: {
      usd: number;
    };
    marketCap: number;
    liquidityUsd: number;
  }
  