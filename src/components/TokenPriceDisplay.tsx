"use client";

import { useEffect, useState } from 'react';
import { DollarSign, Copy, Check } from "lucide-react";
import { TokenDataResponse, fetchTokenData } from "@/utils/api/useFetchTokenData";
import { calculateLiquidityToMarketCapRatio, calculateBuySellPressure } from "@/utils/labs-token/token-information";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface TokenPriceDisplayProps {
  tokenAddress: string;
}

export default function TokenPriceDisplay({ tokenAddress }: TokenPriceDisplayProps) {
  const [data, setData] = useState<TokenDataResponse | null>(null);
  const [initialLoading, setInitialLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  const labsTokenAddress = "LABSh5DTebUcUbEoLzXKCiXFJLecDFiDWiBGUU1GpxR";

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(labsTokenAddress);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetchTokenData(tokenAddress);
        if (process.env.NODE_ENV !== "production") {
          // eslint-disable-next-line no-console
          console.debug("[Birdeye] result", result);
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
    
    // Set up an interval to fetch data every 15 seconds
    const intervalId = setInterval(fetchData, 15000);
    
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
  const priceNum = Number(data?.value);
  const price =
    Number.isFinite(priceNum) ? priceNum.toFixed(9) : "Price unavailable";
  
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
  
  const getValueSafely = (obj: Record<string, any>, paths: string[]): unknown => {
    if (!obj) return undefined;
    
    for (const path of paths) {
      const keys = path.split('.');
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      let value: any = obj;
      
      // Navigate through each key in the path
      for (const key of keys) {
        if (value === undefined || value === null || typeof value !== 'object') {
          value = undefined;
          break;
        }
        value = value[key];
      }
      
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
  const formatCurrency = (value: unknown): string => {
    if (value === undefined || value === null) return 'N/A';
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(Number(value));
  };
  
  const formatPercentage = (value: unknown): string | null => {
    if (value === undefined || value === null) return null;
    return Number(value).toFixed(2);
  };
  
  const formattedLiquidity = formatCurrency(liquidity);
  
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

  const formattedMarkets = numberMarkets !== undefined 
    ? (numberMarkets as number).toString() 
    : 'N/A';

  // Calculate total volume by combining buy and sell volumes
  let totalVolume = 'N/A';
  let buyPercentage: number | null = null;
  let sellPercentage: number | null = null;
  let totalVolumeForPressure: number | null = null;
  
  if (buyVolume24h !== undefined && sellVolume24h !== undefined) {
    const buyVol = Number(buyVolume24h) || 0;
    const sellVol = Number(sellVolume24h) || 0;
    const total = buyVol + sellVol;
    totalVolumeForPressure = total;
    // Calculate what percentage of volume is buys vs sells
    if (total > 0) {
      buyPercentage = Math.round((buyVol / total) * 100);
      sellPercentage = 100 - buyPercentage;
    }
    totalVolume = formatCurrency(total);
  } else if (volume !== undefined) {
    totalVolumeForPressure = Number(volume);
    // Fallback to the volume field if available
    totalVolume = formatCurrency(volume);
  }
  
  // Calculate Liquidity to Market Cap ratio
  const liquidityToMarketCap = liquidity !== undefined && marketCap !== undefined
    ? calculateLiquidityToMarketCapRatio(Number(liquidity), Number(marketCap))
    : null;

  // Calculate Buy/Sell Pressure using the same totalVolume as displayed
  const buySellPressure = buyVolume24h !== undefined && sellVolume24h !== undefined && totalVolumeForPressure !== null && totalVolumeForPressure !== 0
    ? calculateBuySellPressure(
        Number(buyVolume24h),
        Number(sellVolume24h),
        totalVolumeForPressure
      )
    : null;

  return (
    <TooltipProvider>
      <div className="bg-black/40 rounded-lg p-4 md:p-6 shadow-md space-y-4 md:space-y-6 hover:scale-105 transition-transform duration-300">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-0">
          <div>
            <Tooltip>
              <TooltipTrigger asChild>
                <div 
                  className="flex items-center gap-2 cursor-pointer hover:bg-white/5 rounded-lg p-2 -m-2 transition-colors group"
                  onClick={copyToClipboard}
                >
                  <p className="text-base sm:text-lg text-white">
                    <strong className="text-lg sm:text-xl">Epicentral Labs</strong> <span className="text-sm sm:text-base">(LABS)</span>
                  </p>
                  {copied ? (
                    <Check className="h-4 w-4 text-green-400" />
                  ) : (
                    <Copy className="h-4 w-4 text-white/60 group-hover:text-white/80 transition-colors" />
                  )}
                </div>
              </TooltipTrigger>
              <TooltipContent>
                <p className="font-mono text-xs">{labsTokenAddress}</p>
                <p className="text-xs text-white/60 mt-1">Click to copy token address</p>
              </TooltipContent>
            </Tooltip>
            {priceChange24h && (
              <p className={`text-xs sm:text-sm font-medium ${priceChangeColor}`}>
                24h: {parseFloat(priceChange24h) >= 0 ? "+" : ""}{priceChange24h}%
              </p>
            )}
          </div>
          <div className="mt-1 sm:mt-0">
            <p className="text-xl sm:text-2xl font-bold text-white">
              <DollarSign className="inline-block text-green-400 h-4 w-4 sm:h-5 sm:w-5" />{" "}
              {price}
            </p>
            {lastUpdated && (
              <p className="text-xs text-white/50">
                Last updated: {lastUpdated}
              </p>
            )}
          </div>
        </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
            <div className="bg-black/30 p-2 md:p-3 rounded-lg">
              <Tooltip>
                <TooltipTrigger asChild>
                  <p className="text-white/60 text-xs mb-1 border-b border-dotted border-white/40 cursor-help w-fit">Market Cap</p>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Market Capitalization is the circulated supply multiplied by market price, representing the total value of all tokens in circulation.</p>
                </TooltipContent>
              </Tooltip>
              <p className="text-white text-sm font-medium">{formattedMarketCap}</p>
            </div>
            
            <div className="bg-black/30 p-2 md:p-3 rounded-lg">
              <Tooltip>
                <TooltipTrigger asChild>
                  <p className="text-white/60 text-xs mb-1 border-b border-dotted border-white/40 cursor-help w-fit">Liquidity</p>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Liquidity represents the total value available for trading in decentralized exchanges, indicating how easily the token can be bought or sold.</p>
                </TooltipContent>
              </Tooltip>
              <p className="text-white text-sm font-medium">{formattedLiquidity}</p>
            </div>
            
            <div className="bg-black/30 p-2 md:p-3 rounded-lg">
              <Tooltip>
                <TooltipTrigger asChild>
                  <p className="text-white/60 text-xs mb-1 border-b border-dotted border-white/40 cursor-help w-fit">Liquidity/Market Cap Ratio</p>
                </TooltipTrigger>
                <TooltipContent>
                  <p>The ratio of liquidity to market cap. A higher ratio indicates better trading conditions and lower price impact for large trades.</p>
                </TooltipContent>
              </Tooltip>
              <p className="text-white text-sm font-medium">{liquidityToMarketCap !== null ? liquidityToMarketCap : 'N/A'}</p>
            </div>
            
            <div className="bg-black/30 p-2 md:p-3 rounded-lg">
              <Tooltip>
                <TooltipTrigger asChild>
                  <p className="text-white/60 text-xs mb-1 border-b border-dotted border-white/40 cursor-help w-fit">Volume (24h)</p>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Total trading volume in the last 24 hours, combining both buy and sell transactions. The bar shows the proportion of buy vs sell volume.</p>
                </TooltipContent>
              </Tooltip>
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
            
            <div className="bg-black/30 p-2 md:p-3 rounded-lg">
              <Tooltip>
                <TooltipTrigger asChild>
                  <p className="text-white/60 text-xs mb-1 border-b border-dotted border-white/40 cursor-help w-fit">Buy/Sell Pressure Ratio (24h)</p>
                </TooltipTrigger>
                <TooltipContent>
                  <p>A measure of buying vs selling pressure. Positive values indicate more buying pressure, negative values indicate more selling pressure.</p>
                </TooltipContent>
              </Tooltip>
              <p className={`text-white text-sm font-medium ${buySellPressure !== null ? (buySellPressure >= 0 ? 'text-green-400' : 'text-red-400') : ''}`}>
                {buySellPressure !== null ? (buySellPressure >= 0 ? '+' : '') + buySellPressure : 'N/A'}
              </p>
            </div>
            
            <div className="bg-black/30 p-2 md:p-3 rounded-lg">
              <Tooltip>
                <TooltipTrigger asChild>
                  <p className="text-white/60 text-xs mb-1 border-b border-dotted border-white/40 cursor-help w-fit">Buy Volume (24h)</p>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Total value of buy orders executed in the last 24 hours. Higher buy volume typically indicates bullish sentiment.</p>
                </TooltipContent>
              </Tooltip>
              <p className="text-white text-sm font-medium">{formattedBuyVolume}</p>
              {formattedBuyChange && (
                <p className={`text-xs font-medium ${buyChangeColor}`}>
                  {parseFloat(formattedBuyChange) >= 0 ? "+" : ""}{formattedBuyChange}%
                </p>
              )}
            </div>
            
            <div className="bg-black/30 p-2 md:p-3 rounded-lg">
              <Tooltip>
                <TooltipTrigger asChild>
                  <p className="text-white/60 text-xs mb-1 border-b border-dotted border-white/40 cursor-help w-fit">Sell Volume (24h)</p>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Total value of sell orders executed in the last 24 hours. Higher sell volume typically indicates bearish sentiment or profit-taking.</p>
                </TooltipContent>
              </Tooltip>
              <p className="text-white text-sm font-medium">{formattedSellVolume}</p>
              {formattedSellChange && (
                <p className={`text-xs font-medium ${sellChangeColor}`}>
                  {parseFloat(formattedSellChange) >= 0 ? "+" : ""}{formattedSellChange}%
                </p>
              )}
            </div>
            
            <div className="bg-black/30 p-2 md:p-3 rounded-lg">
              <Tooltip>
                <TooltipTrigger asChild>
                  <p className="text-white/60 text-xs mb-1 border-b border-dotted border-white/40 cursor-help w-fit">Markets</p>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Number of different markets or exchanges where this token is actively traded. More markets typically mean better liquidity and price discovery.</p>
                </TooltipContent>
              </Tooltip>
              <p className="text-white text-sm font-medium">{formattedMarkets}</p>
            </div>
          </div>
        </div>
      </TooltipProvider>
    );
  } 