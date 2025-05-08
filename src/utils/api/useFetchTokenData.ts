import { TokenData } from "@/types/tokenData";

/**
 * Fetches token data from the Birdeye API.
 *
 * @param address - The token address to fetch data for.
 * @returns {Promise<any>} The token data response from Birdeye API.
 * @throws {Error} Will throw an error if the fetch fails, if the response is not ok, or if the response data is malformed.
 */
export const fetchTokenData = async (address: string): Promise<any> => {
  const url = `https://public-api.birdeye.so/defi/price?address=${address}`;
  const options = {
    method: "GET",
    headers: {
      "X-API-KEY": process.env.NEXT_PUBLIC_BIRDEYE_API_KEY || "40e3c81a411d4265b61e7d969c80910b",
      "accept": "application/json",
    },
  };

  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error(`Failed to fetch data for ${address}`);
    }
    const result = await response.json();
    console.log("Raw Birdeye API response:", result);
    
    if (!result.success) {
      throw new Error(`No data found for ${address}`);
    }
    
    // Return the data object directly
    return result.data;
  } catch (err) {
    const errorMessage = err instanceof Error ? err.message : "Unknown error";
    throw new Error(`Error fetching token data: ${errorMessage}`);
  }
};
