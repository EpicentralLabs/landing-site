/**
 * Represents data related to a specific token, including price, market information, and liquidity.
 */
export interface TokenData {
  /**
   * The price of the token in USD. It could be a string or null if not available.
   */
  priceUsd?: string | null;

  /**
   * The base token details including its name and symbol.
   */
  baseToken: {
    /**
     * The name of the base token (e.g., "Bitcoin").
     */
    name: string;

    /**
     * The symbol of the base token (e.g., "BTC").
     */
    symbol: string;
  };

  /**
   * The quote token details including its name and symbol.
   */
  quoteToken: {
    /**
     * The name of the quote token (e.g., "USD").
     */
    name: string;

    /**
     * The symbol of the quote token (e.g., "USD").
     */
    symbol: string;
  };

  /**
   * The price change of the token over different time periods.
   */
  priceChange: {
    /**
     * The percentage price change in the last 1 hour.
     */
    h1: number;

    /**
     * The percentage price change in the last 6 hours.
     */
    h6: number;

    /**
     * The percentage price change in the last 24 hours.
     */
    h24: number;
  };

  /**
   * The trading volume of the token over different time periods.
   */
  volume: {
    /**
     * The trading volume in the last 24 hours.
     */
    h24: number;

    /**
     * The trading volume in the last 6 hours.
     */
    h6: number;

    /**
     * The trading volume in the last 1 hour.
     */
    h1: number;
  };

  /**
   * The liquidity of the token in USD.
   */
  liquidity: {
    /**
     * The liquidity of the token in USD.
     */
    usd: number;
  };

  /**
   * The market capitalization of the token.
   */
  marketCap: number;

  /**
   * The liquidity of the token in USD.
   */
  liquidityUsd: number;
}
