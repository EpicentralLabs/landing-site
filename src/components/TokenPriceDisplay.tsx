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
  const [initialLoading, setInitialLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetchTokenData(tokenAddress);
        console.log("Birdeye API response:", result);
        
        // Log each property to see the full structure
        if (result) {
          console.log("Data properties:", Object.keys(result));
          for (const key of Object.keys(result)) {
            console.log(`${key}:`, result[key]);
          }
        }
        
        setData(result);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("An unknown error occurred");
        }
      } finally {
        setInitialLoading(false);
      }
    };

    fetchData();
    
    // Set up an interval to fetch data every 30 seconds
    const intervalId = setInterval(fetchData, 30000);
    
    // Clean up the interval on component unmount
    return () => clearInterval(intervalId);
  }, [tokenAddress]);

  if (initialLoading) {
    return <p className="text-white text-lg animate-pulse">Loading token data...</p>;
  }

  if (error && !data) {
    return <p className="text-red-500 text-lg">Error: {error}</p>;
  }

  // Access the price value directly from the raw response structure
  const price = data && data.value 
    ? parseFloat(data.value).toFixed(9) 
    : "Price unavailable";
  
  const lastUpdated = data && data.updateUnixTime 
    ? new Date(data.updateUnixTime * 1000).toLocaleTimeString()
    : '';

  // Extract additional data from the API response
  const priceChange24h = data && data.priceChange24h !== undefined 
    ? data.priceChange24h.toFixed(2) 
    : null;
  
  // Try different field paths for token overview data
  // Many APIs nest token data under a data or token property
  const dataObject = data || {};
  
  const getValueSafely = (obj: any, paths: string[]) => {
    for (const path of paths) {
      const value = path.split('.').reduce((o, key) => (o && o[key] !== undefined) ? o[key] : undefined, obj);
      if (value !== undefined) return value;
    }
    return undefined;
  };
  
  const liquidity = getValueSafely(dataObject, ['liquidity', 'tokenInfo.liquidity', 'data.liquidity']);
  const volume = getValueSafely(dataObject, ['volume', 'volume24h', 'tokenInfo.volume', 'data.volume']);
  const marketCap = getValueSafely(dataObject, ['marketCap', 'mcap', 'tokenInfo.marketCap', 'data.marketCap']);
  const buyVolume24h = getValueSafely(dataObject, ['vBuy24hUSD', 'buyVolume24h', 'data.vBuy24hUSD']);
  const sellVolume24h = getValueSafely(dataObject, ['vSell24hUSD', 'sellVolume24h', 'data.vSell24hUSD']);
  const buyChange24h = getValueSafely(dataObject, ['vBuy24hChangePercent', 'buyVolumeChange24h', 'data.vBuy24hChangePercent']);
  const sellChange24h = getValueSafely(dataObject, ['vSell24hChangePercent', 'sellVolumeChange24h', 'data.vSell24hChangePercent']);
  const numberMarkets = getValueSafely(dataObject, ['numberMarkets', 'markets', 'data.numberMarkets']);

  // Format values
  const formatCurrency = (value: any) => {
    if (value === undefined || value === null) return 'N/A';
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(Number(value));
  };
  
  const formatPercentage = (value: any) => {
    if (value === undefined || value === null) return null;
    return Number(value).toFixed(2);
  };
  
  const formattedLiquidity = formatCurrency(liquidity);
  
  // Calculate total volume by combining buy and sell volumes
  let totalVolume = 'N/A';
  let buyPercentage = null;
  let sellPercentage = null;
  
  if (buyVolume24h !== undefined && sellVolume24h !== undefined) {
    const buyVol = Number(buyVolume24h) || 0;
    const sellVol = Number(sellVolume24h) || 0;
    const total = buyVol + sellVol;
    
    // Calculate what percentage of volume is buys vs sells
    if (total > 0) {
      buyPercentage = Math.round((buyVol / total) * 100);
      sellPercentage = 100 - buyPercentage;
    }
    
    totalVolume = formatCurrency(total);
  } else if (volume !== undefined) {
    // Fallback to the volume field if available
    totalVolume = formatCurrency(volume);
  }
  
  const formattedMarketCap = formatCurrency(marketCap);
  const formattedBuyVolume = formatCurrency(buyVolume24h);
  const formattedSellVolume = formatCurrency(sellVolume24h);
  
  const formattedBuyChange = formatPercentage(buyChange24h);
  const formattedSellChange = formatPercentage(sellChange24h);
  
  const priceChangeColor = priceChange24h && parseFloat(priceChange24h) >= 0 
    ? "text-green-400" 
    : "text-red-400";
  
  const buyChangeColor = formattedBuyChange && parseFloat(formattedBuyChange) >= 0 
    ? "text-green-400" 
    : "text-red-400";
  
  const sellChangeColor = formattedSellChange && parseFloat(formattedSellChange) >= 0 
    ? "text-green-400" 
    : "text-red-400";

  const formattedMarkets = numberMarkets !== undefined ? numberMarkets : 'N/A';

  return (
    <div className="bg-black/40 rounded-lg p-6 shadow-md space-y-6 hover:scale-105 transition-transform duration-300">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-lg text-white">
            <strong className="text-xl">Epicentral Labs</strong> (LABS)
          </p>
          {priceChange24h && (
            <p className={`text-sm font-medium ${priceChangeColor}`}>
              24h: {parseFloat(priceChange24h) >= 0 ? "+" : ""}{priceChange24h}%
            </p>
          )}
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

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        <div className="bg-black/30 p-3 rounded-lg">
          <p className="text-white/60 text-xs mb-1">Market Cap</p>
          <p className="text-white text-sm font-medium">{formattedMarketCap}</p>
        </div>
        <div className="bg-black/30 p-3 rounded-lg">
          <p className="text-white/60 text-xs mb-1">Liquidity</p>
          <p className="text-white text-sm font-medium">{formattedLiquidity}</p>
        </div>
        <div className="bg-black/30 p-3 rounded-lg">
          <p className="text-white/60 text-xs mb-1">Volume (24h)</p>
          <p className="text-white text-sm font-medium">{totalVolume}</p>
          {buyPercentage !== null && sellPercentage !== null && (
            <div className="flex items-center mt-1 h-1 bg-black/30 rounded-full overflow-hidden">
              <div 
                className="h-full bg-green-400" 
                style={{ width: `${buyPercentage}%` }}
              />
              <div 
                className="h-full bg-red-400" 
                style={{ width: `${sellPercentage}%` }}
              />
            </div>
          )}
          {buyPercentage !== null && sellPercentage !== null && (
            <div className="flex justify-between mt-1">
              <span className="text-green-400 text-xs">{buyPercentage}% Buy</span>
              <span className="text-red-400 text-xs">{sellPercentage}% Sell</span>
            </div>
          )}
        </div>
        <div className="bg-black/30 p-3 rounded-lg">
          <p className="text-white/60 text-xs mb-1">Buy Volume (24h)</p>
          <p className="text-white text-sm font-medium">{formattedBuyVolume}</p>
          {formattedBuyChange && (
            <p className={`text-xs font-medium ${buyChangeColor}`}>
              {parseFloat(formattedBuyChange) >= 0 ? "+" : ""}{formattedBuyChange}%
            </p>
          )}
        </div>
        <div className="bg-black/30 p-3 rounded-lg">
          <p className="text-white/60 text-xs mb-1">Sell Volume (24h)</p>
          <p className="text-white text-sm font-medium">{formattedSellVolume}</p>
          {formattedSellChange && (
            <p className={`text-xs font-medium ${sellChangeColor}`}>
              {parseFloat(formattedSellChange) >= 0 ? "+" : ""}{formattedSellChange}%
            </p>
          )}
        </div>
        <div className="bg-black/30 p-3 rounded-lg">
          <p className="text-white/60 text-xs mb-1">Markets</p>
          <p className="text-white text-sm font-medium">{formattedMarkets}</p>
        </div>
      </div>
    </div>
  );
} 