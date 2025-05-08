"use client";

import { useEffect, useState } from 'react';
import { DollarSign } from "lucide-react";
import { fetchTokenData } from "@/utils/api/useFetchTokenData";
import { TokenData } from "@/types/tokenData";

interface TokenPriceDisplayProps {
  tokenAddress: string;
}

export default function TokenPriceDisplay({ tokenAddress }: TokenPriceDisplayProps) {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const result = await fetchTokenData(tokenAddress);
        console.log("Birdeye API response:", result);
        setData(result);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("An unknown error occurred");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();
    
    // Set up an interval to fetch data every 30 seconds
    const intervalId = setInterval(fetchData, 30000);
    
    // Clean up the interval on component unmount
    return () => clearInterval(intervalId);
  }, [tokenAddress]);

  if (loading) {
    return <p className="text-white text-lg animate-pulse">Loading token data...</p>;
  }

  if (error) {
    return <p className="text-red-500 text-lg">Error: {error}</p>;
  }

  // Access the price value directly from the raw response structure
  const price = data && data.value 
    ? parseFloat(data.value).toFixed(9) 
    : "Price unavailable";
  
  const lastUpdated = data && data.updateUnixTime 
    ? new Date(data.updateUnixTime * 1000).toLocaleTimeString()
    : '';

  return (
    <div className="bg-black/40 rounded-lg p-6 shadow-md space-y-4 hover:scale-105 transition-transform duration-300">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-lg text-white">
            <strong className="text-xl">Epicentral Labs</strong> (LABS)
          </p>
        </div>
        <div>
          <p className="text-2xl font-bold text-white">
            <DollarSign className="inline-block text-green-400" />{" "}
            {price}
          </p>
          {lastUpdated && (
            <p className="text-xs text-white/50 text-right">
              Last updated: {lastUpdated}
            </p>
          )}
        </div>
      </div>
    </div>
  );
} 