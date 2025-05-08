// Define a typed response for the token data
export interface TokenDataResponse {
  value?: string | number;
  updateUnixTime?: number;
  priceChange24h?: number;
  liquidity?: number;
  volume?: number;
  volume24h?: number;
  marketCap?: number;
  mcap?: number;
  vBuy24hUSD?: number;
  vSell24hUSD?: number;
  vBuy24hChangePercent?: number;
  vSell24hChangePercent?: number;
  numberMarkets?: number;
  markets?: number;
  [key: string]: any; // For other properties that may exist in the response
}

/**
 * Fetches token data from the Birdeye API.
 *
 * @param address - The token address to fetch data for.
 * @returns {Promise<TokenDataResponse>} The token data response from Birdeye API.
 * @throws {Error} Will throw an error if the fetch fails, if the response is not ok, or if the response data is malformed.
 */
export const fetchTokenData = async (address: string): Promise<TokenDataResponse> => {
  try {
    // First, get basic price data
    const priceUrl = `https://public-api.birdeye.so/defi/price?address=${address}`;
    const options = {
      method: "GET",
      headers: {
        "X-API-KEY": process.env.NEXT_PUBLIC_BIRDEYE_API_KEY || "",
        "Accept": "application/json",
      },
    };

    console.log("Fetching price data from:", priceUrl);
    const priceResponse = await fetch(priceUrl, options);
    
    if (!priceResponse.ok) {
      throw new Error(`Failed to fetch price data for ${address} (Status: ${priceResponse.status})`);
    }
    
    const priceResult = await priceResponse.json();
    console.log("Price API response:", priceResult);
    
    if (!priceResult.success) {
      throw new Error(`No price data found for ${address}`);
    }
    
    // Now try to get token overview data
    const overviewUrl = `https://public-api.birdeye.so/defi/token_overview?address=${address}`;
    console.log("Fetching overview data from:", overviewUrl);
    const overviewResponse = await fetch(overviewUrl, options);
    
    let overviewData = {};
    if (overviewResponse.ok) {
      const overviewResult = await overviewResponse.json();
      console.log("Overview API response:", overviewResult);
      
      if (overviewResult.success && overviewResult.data) {
        overviewData = overviewResult.data;
      }
    }
    
    // Also try to get token market data which might have liquidity info
    const marketUrl = `https://public-api.birdeye.so/public/tokenlist/token_market_data?address=${address}`;
    console.log("Fetching market data from:", marketUrl);
    const marketResponse = await fetch(marketUrl, options);
    
    let marketData = {};
    if (marketResponse.ok) {
      const marketResult = await marketResponse.json();
      console.log("Market API response:", marketResult);
      
      if (marketResult.success && marketResult.data) {
        marketData = marketResult.data;
      }
    }
    
    // Combine all data into a single object
    const combinedData = {
      ...priceResult.data,
      ...overviewData,
      ...marketData
    };
    
    console.log("Combined data:", combinedData);
    return combinedData;
    
  } catch (err) {
    const errorMessage = err instanceof Error ? err.message : "Unknown error";
    console.error("Error fetching token data:", errorMessage);
    throw new Error(`Error fetching token data: ${errorMessage}`);
  }
};
