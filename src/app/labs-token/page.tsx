"use client";
import { useState, useEffect } from "react";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Legend,
  Tooltip,
  LineChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Line,
  ReferenceLine,
  Label,
} from "recharts";
import { ArrowUp, ArrowDown, DollarSign, ArrowBigUpDash, ArrowBigDownDash, ArrowBigUp, ArrowBigDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { fetchTokenData } from "@/utils/api/useFetchTokenData";
import { TokenData } from "@/types/tokenData";
import { CustomTooltipProps } from "@/types/customTooltipProps";
import { CustomTickProps } from "@/types/CustomTickProps";
import { allocationWallets } from "@/constants/allocationWallets";
import { tokenDistributionData } from "@/constants/tokenDistributionData";
import { vestingScheduleData } from "@/constants/vestingScheduleData";
import {
  calculateExactPosition,
  calculateLockedPercentage,
  calculateTimeProgress,
  calculateTotalUnlockedSupply,
  calculateUnlockedPercentage,
  getProgressLabel,
} from "@/utils/roadmap/vestingHelpers";
import { validateSolanaAddress } from "@/types/solana-utils/isBase58";
import { SolanaAddress } from "@/types/solana-utils/solanaAddress";

// Update the tooltip component with proper typing
const CustomTooltip = ({ active, payload }: CustomTooltipProps) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-black/80 backdrop-blur-md border border-white/10 rounded-lg p-3 md:p-4 max-w-[90vw] md:max-w-none">
        <p className="text-white/90 font-medium text-sm md:text-base">
          {payload[0].payload.name}
        </p>
        <p className="text-white/70 text-sm md:text-base">
          {payload[0].payload.amount} LABS
        </p>
        <p className="text-white/70 text-sm md:text-base">
          {payload[0].payload.value}% of supply
        </p>
      </div>
    );
  }
  return null;
};

// Update the tick component with proper typing
const CustomTick = ({ x = 0, y = 0, payload }: CustomTickProps) => {
  if (!payload) return null;
  return (
    <g transform={`translate(${x},${y})`}>
      <text
        x={0}
        y={0}
        dy={16}
        textAnchor="end"
        fill="rgba(255,255,255,0.5)"
        fontSize={12}
        transform="rotate(-45)"
      >
        {payload.value}
      </text>
    </g>
  );
};

// Constants and helper functions for vesting calculations
const START_DATE = new Date("2024-07-28");

const timeProgress = calculateTimeProgress(START_DATE);

// Calculate the exact vesting position
const exactPosition = calculateExactPosition(START_DATE);

// Get the human-readable progress label
const progressLabel = getProgressLabel(START_DATE);

// Calculate the locked percentage for a specific allocation
const lockedPercentage = calculateLockedPercentage(
  "DeFi Allocation",
  START_DATE
);

// Calculate the unlocked percentage for a specific allocation
const unlockedPercentage = calculateUnlockedPercentage(
  "DeFi Allocation",
  START_DATE
);

// Calculate the total unlocked supply
const totalUnlockedSupply = calculateTotalUnlockedSupply(
  tokenDistributionData,
  START_DATE
);

console.log(
  timeProgress,
  exactPosition,
  progressLabel,
  lockedPercentage,
  unlockedPercentage,
  totalUnlockedSupply
);

// Update the Legend component to use dynamic layout based on client-side check
const PieChartLegend = () => {
  const [isWideScreen, setIsWideScreen] = useState(false);

  useEffect(() => {
    setIsWideScreen(window.innerWidth > 768);

    const handleResize = () => {
      setIsWideScreen(window.innerWidth > 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Legend
      layout={isWideScreen ? "vertical" : "horizontal"}
      align={isWideScreen ? "right" : "center"}
      verticalAlign={isWideScreen ? "middle" : "bottom"}
      wrapperStyle={{
        paddingLeft: isWideScreen ? "20px" : "0",
        paddingTop: !isWideScreen ? "20px" : "0",
      }}
      formatter={(value) => (
        <span className="text-white/70 text-sm md:text-base">{value}</span>
      )}
    />
  );
};

export default function LabsTokenPage() {
  const [data, setData] = useState<TokenData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted) return;

    const fetchData = async () => {
      setLoading(true);
      try {
        const chain = "solana";
        const address = "LABSh5DTebUcUbEoLzXKCiXFJLecDFiDWiBGUU1GpxR";
        const validAddress: SolanaAddress = validateSolanaAddress(address);
        const result = await fetchTokenData(chain, validAddress);
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
  }, [isMounted]);

  if (!isMounted) {
    return null;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <main className="flex-1 flex items-center justify-center min-h-[80vh] pt-16 md:pt-18">
        <div className="container mx-auto px-4 flex flex-col items-center justify-center">
          <div className="max-w-3xl w-full text-center space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight">
              <span className="font-extralight drop-shadow-[0_0_0.3rem_#ffffff70]">
                LABS Token
              </span>
            </h1>
            <p className="text-base md:text-lg text-white/70">
              Each token is a voice in Epicentral Labs
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                size="lg"
                className="bg-[#FFFFFF] hover:bg-[#FFFFFF]/90 transition-all duration-300 hover:scale-95 w-full sm:w-auto"
                onClick={() =>
                  window.open(
                    "https://jup.ag/swap/SOL-LABSh5DTebUcUbEoLzXKCiXFJLecDFiDWiBGUU1GpxR",
                    "_blank"
                  )
                }
              >
                Buy $LABS
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="transition-all duration-300 w-full sm:w-auto"
                onClick={() => {
                  document.getElementById("tokenomics")?.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  });
                }}
              >
                Tokenomics
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
            <div className="w-full max-w-md mx-auto pt-8">
              <div className="h-px bg-gradient-to-r from-transparent via-white/25 to-transparent" />
            </div>
          </div>
        </div>
      </main>

      {/* Token Distribution Section */}
      <section id="labs_token" className="container mx-auto px-4 py-24">
        <div className="max-w-7xl mx-auto p-6 space-y-12">
          {loading && (
            <p className="text-white text-lg animate-pulse">Loading...</p>
          )}
          {error && <p className="text-red-500 text-lg">{error}</p>}

          {data && (
            <div className="bg-black/40 backdrop-blur-md border border-white/20 rounded-xl p-8 md:p-12 lg:p-16 hover:border-white/30 transition-all duration-500 shadow-lg">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-extrabold text-white">
                  Token Information
                </h2>
                <p className="text-lg text-white/70">
                  The LABS Token powers the future of Epicentral Labs.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
  {/* Token Data Card */}
  <div 
  className="bg-white/10 p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 ease-in-out transform flex flex-col justify-center items-center space-y-4" 
  title={`This is the name and symbol of the token\n Price Change: ${data.priceChange.h24 > 0 ? "+" : ""}${data.priceChange.h24}% in the last 24 hours.`}
>
    {/* Token Name and Symbol */}
    <div className="text-center">
      <h3 className="text-3xl font-semibold text-white mb-2">
        {data.baseToken.name}
      </h3>
      <p className="text-xl text-gray-300">
        ({data.baseToken.symbol})
      </p>
    </div>

    {/* Price Information */}
    <div className="text-center">
      <p className="text-5xl font-bold text-white">
        <span className="text-green-400">$</span>
        USD{" "}
        {new Intl.NumberFormat("en-US", {
          style: "decimal",
          minimumFractionDigits: 6,
          maximumFractionDigits: 6,
        }).format(parseFloat(data.priceUsd || "0"))}
      </p>
    </div>
  </div>

  {/* 24h Price Change Card */}
  <div 
  className="bg-white/10 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 ease-in-out transform flex flex-col justify-center items-center"
  title={`Shows the percentage change in the token's price over the last 24 hours. (${data.priceChange.h24 > 0 ? "+" : ""}${data.priceChange.h24}%)`}
>
    <h3 className="text-2xl font-semibold text-white mb-4">24h Price Change</h3>
    <div className="text-5xl font-bold mb-2">
      <span
        className={`${
          data.priceChange.h24 > 0 ? "text-green-400" : "text-red-400"
        }`}
      >
        {data.priceChange.h24}%
      </span>
    </div>
    <div className="text-3xl">
      {data.priceChange.h24 > 0 ? (
        <ArrowBigUp size={48} className="text-green-400" />
      ) : (
        <ArrowBigDown size={48} className="text-red-400" />
      )}
    </div>
  </div>

  {/* Market Cap, Liquidity, and Volume Card */}
  <div 
    className="bg-white/10 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform"
    title="Contains key metrics like market cap, liquidity, and 24h trading volume."
  >
    <div className="space-y-6">
      {/* Market Cap Section */}
      <div className="flex flex-col items-center text-center">
        <h3 className="text-2xl font-semibold text-white mb-2" title="The total market value of the token in USD.">
          Market Cap
        </h3>
        <p className="text-3xl font-bold text-white">
          ${new Intl.NumberFormat("en-US").format(data.marketCap)}
        </p>
      </div>

      {/* Liquidity Section */}
      <div className="flex flex-col items-center text-center">
        <h3 className="text-2xl font-semibold text-white mb-2" title="The amount of USD liquidity available for trading the token.">
          Liquidity (USD)
        </h3>
        <p className="text-3xl font-bold text-white">
          ${new Intl.NumberFormat("en-US").format(data.liquidity.usd)}
        </p>
      </div>

      {/* Volume Section */}
      <div className="flex flex-col items-center text-center">
        <h3 className="text-2xl font-semibold text-white mb-2" title="The total volume of the token traded in the last 24 hours in USD.">
          Volume (24h)
        </h3>
        <p className="text-3xl font-bold text-white">
          ${new Intl.NumberFormat("en-US").format(data.volume.h24)}
        </p>
      </div>
    </div>
  </div>
</div>
            </div>
          )}
          </div>

        <div className="max-w-6xl mx-auto space-y-16">
          {/* Token Distribution */}
          <div
            id="tokenomics"
            className="bg-black/30 backdrop-blur-md border border-white/10 rounded-xl p-4 md:p-8 lg:p-12 
                          hover:border-white/20 transition-all duration-500
                          shadow-[0_0_15px_rgba(0,0,0,0.2)]"
          >
            <h2
              className="text-2xl md:text-3xl font-light text-white/90 mb-6 md:mb-12 drop-shadow-[0_0_0.3rem_#ffffff70]
                           text-center"
            >
              Token Distribution
              <div className="mt-2 text-sm md:text-base font-normal text-white/50">
                Total Supply: 54,652,600 LABS
              </div>
              <div className="mt-1 text-sm md:text-base font-normal text-white/70">
                {
                  calculateTotalUnlockedSupply(
                    tokenDistributionData,
                    START_DATE
                  ).amount
                }{" "}
                LABS in Circulation (
                {
                  calculateTotalUnlockedSupply(
                    tokenDistributionData,
                    START_DATE
                  ).percentage
                }
                % of Total Supply)
              </div>
            </h2>

            {/* Chart Container with styling */}
            <div className="w-full h-[300px] md:h-[400px] mb-6 md:mb-12 relative">
              <div
                className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent 
                              opacity-50 rounded-xl"
              ></div>
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={tokenDistributionData}
                    cx="50%"
                    cy="50%"
                    innerRadius={80}
                    outerRadius={140}
                    paddingAngle={3}
                    dataKey="value"
                    strokeWidth={2}
                    stroke="#000000"
                    isAnimationActive={false}
                    activeShape={false}
                  >
                    {tokenDistributionData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip
                    content={<CustomTooltip />}
                    cursor={{ fill: "transparent" }}
                  />
                  <PieChartLegend />
                </PieChart>
              </ResponsiveContainer>
            </div>

            {/* Distribution Cards with enhanced styling */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {tokenDistributionData.map((item, index) => (
                <Card
                  key={index}
                  className="bg-black/50 border-white/10 hover:border-white/20 
                             transition-all duration-300 hover:transform hover:scale-[1.02]
                             hover:shadow-[0_0_15px_rgba(255,255,255,0.1)]"
                >
                  <CardHeader className="p-4 md:p-6">
                    <div className="flex items-center gap-3">
                      <div
                        className="w-4 h-4 rounded-full shadow-[0_0_10px_rgba(255,255,255,0.2)]"
                        style={{
                          backgroundColor: item.color,
                          boxShadow: `0 0 10px ${item.color}40`,
                        }}
                      />
                      <CardTitle className="text-white/90 text-lg">
                        {item.name === "Core Team & Investors" ? (
                          <span>{item.name}</span>
                        ) : (
                          <a
                            href={
                              allocationWallets[
                                item.name as keyof typeof allocationWallets
                              ]
                            }
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-white/70 transition-colors duration-300"
                          >
                            {item.name}
                          </a>
                        )}
                      </CardTitle>
                    </div>
                    <CardDescription className="text-white/70 mt-2 text-base">
                      {item.value}% of Total Supply
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-col gap-2">
                      <p className="text-white/90 text-lg font-medium">
                        {item.amount} LABS
                      </p>
                      <div className="w-full bg-white/5 rounded-full h-2 overflow-hidden">
                        <div
                          className="h-full rounded-full transition-all duration-500 relative"
                          style={{
                            width: `${item.value}%`,
                            backgroundColor: item.color,
                          }}
                        >
                          <div
                            className="absolute inset-0 bg-black/50"
                            style={{
                              width: `${calculateLockedPercentage(
                                item.name,
                                START_DATE
                              )}%`,
                            }}
                          />
                        </div>
                      </div>
                      <div className="flex justify-between text-sm">
                        <p className="text-white/50 text-xs">
                          {item.name === "Public Allocation"
                            ? "100% Locked & Burned"
                            : `${Math.round(
                                calculateLockedPercentage(item.name, START_DATE)
                              )}% Locked (${Math.round(
                                calculateUnlockedPercentage(
                                  item.name,
                                  START_DATE
                                )
                              )}% Unlocked)`}
                        </p>
                        <p className="text-white/50 text-xs">
                          {Number(
                            (
                              (Number(item.amount.replace(/,/g, "")) *
                                calculateUnlockedPercentage(
                                  item.name,
                                  START_DATE
                                )) /
                              100
                            ).toFixed(0)
                          ).toLocaleString()}{" "}
                          LABS
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Vesting Schedule with matching styling */}
          <div
            className="bg-black/30 backdrop-blur-md border border-white/10 rounded-xl p-8 md:p-12
                          hover:border-white/20 transition-all duration-500
                          shadow-[0_0_15px_rgba(0,0,0,0.2)]"
          >
            <h2 className="text-3xl font-light text-white/90 mb-4 drop-shadow-[0_0_0.3rem_#ffffff70]">
              Vesting Schedule
            </h2>

            {/* Add the notes section */}
            <div className="mb-8 space-y-3 text-sm md:text-base">
              <p className="text-white/70 italic">
                Note: Vesting schedules are designed to ensure long-term
                alignment of stakeholder interests and prevent immediate
                sell-offs that could destabilize the token&apos;s value. All
                vesting schedules were created immutable via{" "}
                <a
                  href="https://streamflow.finance/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#4a85ff] hover:drop-shadow-[0_0_8px_#4a85ff] transition-all duration-300"
                >
                  Streamflow
                </a>
                .
              </p>
              <p className="text-white/70 italic">
                Schedule begins on{" "}
                <span className="text-[#4a85ff] font-medium">
                  July 28th, 2024
                </span>
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div
                className="bg-black/40 border border-white/10 rounded-xl p-6
                              hover:border-white/20 transition-all duration-300"
              >
                <h3 className="text-xl font-medium text-white/90 mb-4">
                  DeFi Allocation
                </h3>
                <div className="space-y-2 text-white/70">
                  <p>• 14 Month Vesting via Streamflow</p>
                  <p>• Deposited to DeFi Rewards Vault</p>
                  <p>
                    •{" "}
                    <a
                      href="https://app.streamflow.finance/contract/solana/mainnet/4xcfeTFsJtHJqMy4D7JKuwFeAhg1SeRoBF86M1jtnNJ7"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#4a85ff] hover:drop-shadow-[0_0_8px_#4a85ff] transition-all duration-300"
                    >
                      Immutable Contract
                    </a>
                  </p>
                </div>
              </div>

              <div
                className="bg-black/40 border border-white/10 rounded-xl p-6
                              hover:border-white/20 transition-all duration-300"
              >
                <h3 className="text-xl font-medium text-white/90 mb-4">
                  DAO Treasury
                </h3>
                <div className="space-y-2 text-white/70">
                  <p>• 13 Month Vesting via Streamflow</p>
                  <p>• Deposited to Main DAO Vault</p>
                  <p>
                    •{" "}
                    <a
                      href="https://app.streamflow.finance/contract/solana/mainnet/FJpB3T4Y73XRrK98VFH7VowR3x1yGpjEUXsuNm841yjo"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#4a85ff] hover:drop-shadow-[0_0_8px_#4a85ff] transition-all duration-300"
                    >
                      Immutable Contract
                    </a>
                  </p>
                </div>
              </div>

              <div
                className="bg-black/40 border border-white/10 rounded-xl p-6
                              hover:border-white/20 transition-all duration-300"
              >
                <h3 className="text-xl font-medium text-white/90 mb-4">
                  Core Team & Investors
                </h3>
                <div className="space-y-2 text-white/70">
                  <p>• 17 Month Vesting via Streamflow</p>
                  <p>• Individual Wallet Distribution</p>

                  <Accordion type="single" collapsible className="mt-4">
                    <AccordionItem value="team" className="border-white/10">
                      <AccordionTrigger className="text-white/80 hover:text-white/90 hover:no-underline">
                        Core Team Members
                      </AccordionTrigger>
                      <AccordionContent>
                        <div className="space-y-2 pl-4">
                          {[
                            {
                              label: "Member 1",
                              link: "8QNcH3ui247mK6xaBwZKm821WRz7FhbUVqPjRE92nBvR",
                            },
                            {
                              label: "Member 2",
                              link: "Hd74wLhrnMA761C8RseEhu3P9YCdNZSn9ZUhbnoRXsvR",
                            },
                            {
                              label: "Member 3",
                              link: "2Wra67QP34TzFYWfdN71f1CiEF3BWVd7cCyKrvDb6eAv",
                            },
                          ].map((member, i) => (
                            <p key={i}>
                              •{" "}
                              <a
                                href={`https://app.streamflow.finance/contract/solana/mainnet/${member.link}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[#4a85ff] hover:drop-shadow-[0_0_8px_#4a85ff] transition-all duration-300"
                              >
                                {member.label} Contract
                              </a>
                            </p>
                          ))}
                        </div>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem
                      value="investors"
                      className="border-white/10"
                    >
                      <AccordionTrigger className="text-white/80 hover:text-white/90 hover:no-underline">
                        Private Investors
                      </AccordionTrigger>
                      <AccordionContent>
                        <div className="space-y-2 pl-4">
                          {[
                            {
                              label: "Investor 1",
                              link: "HZwSTiBFXBmjbLeeLkid8KB2SP59tNEHA7sj9TXoVHRx",
                            },
                            {
                              label: "Investor 2",
                              link: "GTP1PPsjQrJAWB1tUqfyFrtDCzBKFjLyXWbQQwEhGH52",
                            },
                            {
                              label: "Investor 3",
                              link: "JCLcL3mZuBPwQdY61qxaUVxWh7f2UDyPaWuHBwYzoTFt",
                            },
                            {
                              label: "Investor 4",
                              link: "26CeyQhirDizgSrN5rNTr3Fs7zonHqiYhmEoU9sDEXWb",
                            },
                            {
                              label: "Investor 5",
                              link: "ETyJaZsKUQbjsjJn4Q66GidvhBVxxjmdJshEUAXLUmhM",
                            },
                            {
                              label: "Investor 6",
                              link: "ECeE5kMPMyA8QAsjv8DYf5NERQYVgNDzw8etMPiwxwjm",
                            },
                            {
                              label: "Investor 7",
                              link: "FQTMadFjGoTrENATn5iaAYgpdXmEMy1KQAzLr1ADbTzK",
                            },
                            {
                              label: "Investor 8",
                              link: "P8oBYnNE1o6j7abiMLeDe4xnxxxfw2yrbQRmxLz2dtx",
                            },
                            {
                              label: "Investor 9",
                              link: "EzFAbwy8fTwbZwpkoRJ69E9boANiqzgR21ioLnFMLdpz",
                            },
                          ].map((investor, i) => (
                            <p key={i}>
                              •{" "}
                              <a
                                href={`https://app.streamflow.finance/contract/solana/mainnet/${investor.link}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[#4a85ff] hover:drop-shadow-[0_0_8px_#4a85ff] transition-all duration-300"
                              >
                                {investor.label} Contract
                              </a>
                            </p>
                          ))}
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
              </div>
            </div>

            {/* Add Marketing and Contributor Bonus cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              <div
                className="bg-black/40 border border-white/10 rounded-xl p-6
                              hover:border-white/20 transition-all duration-300"
              >
                <h3 className="text-xl font-medium text-white/90 mb-4">
                  Marketing
                </h3>
                <div className="space-y-2 text-white/70">
                  <p>• 3 Month Vesting via Streamflow</p>
                  <p>• Deposited to Marketing Vault</p>
                  <p>
                    •{" "}
                    <a
                      href="https://app.streamflow.finance/contract/solana/mainnet/EgDxcfuDwCXhrrfczia9bFEvCtc2cUGqHZwr2bPWDqXT"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#4a85ff] hover:drop-shadow-[0_0_8px_#4a85ff] transition-all duration-300"
                    >
                      Immutable Contract
                    </a>
                  </p>
                </div>
              </div>

              <div
                className="bg-black/40 border border-white/10 rounded-xl p-6
                              hover:border-white/20 transition-all duration-300"
              >
                <h3 className="text-xl font-medium text-white/90 mb-4">
                  Contributor Bonus
                </h3>
                <div className="space-y-2 text-white/70">
                  <p>• 8 Month Vesting via Streamflow</p>
                  <p>• Deposited to Community Bonus Vault</p>
                  <p>
                    •{" "}
                    <a
                      href="https://app.streamflow.finance/contract/solana/mainnet/BcDHvTezFGL1iSooz682FjVUnUqTFcZ3PY4aaAYxRctP"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#4a85ff] hover:drop-shadow-[0_0_8px_#4a85ff] transition-all duration-300"
                    >
                      Immutable Contract
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Vesting Timeline Chart */}
          <div
            className="mt-12 p-6 bg-black/40 border border-white/10 rounded-xl
                          hover:border-white/20 transition-all duration-300"
          >
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-medium text-white/90">
                Vesting Timeline
              </h3>
              <div className="text-white/70 text-sm px-3 py-1 bg-white/5 rounded-full border border-white/10">
                {getProgressLabel(START_DATE)}
              </div>
            </div>
            <div className="w-full h-[300px] md:h-[400px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart
                  data={vestingScheduleData}
                  margin={{ top: 20, right: 30, left: 20, bottom: 40 }}
                >
                  <CartesianGrid
                    strokeDasharray="3 3"
                    stroke="rgba(255,255,255,0.1)"
                  />
                  <ReferenceLine
                    x={
                      vestingScheduleData[
                        Math.floor(calculateExactPosition(START_DATE))
                      ]?.month
                    }
                    stroke="rgba(255,255,255,0.8)"
                    strokeDasharray="3 3"
                    strokeWidth={2}
                    label={
                      <Label
                        value={`Current (${calculateTimeProgress(
                          START_DATE
                        ).toFixed(1)} months)`}
                        position="insideTopRight"
                        fill="rgba(255,255,255,0.8)"
                        fontSize={12}
                      />
                    }
                    isFront={true}
                  />
                  <XAxis
                    dataKey="month"
                    stroke="rgba(255,255,255,0.5)"
                    tick={<CustomTick />}
                    height={60}
                    interval={0}
                  />
                  <YAxis
                    stroke="rgba(255,255,255,0.5)"
                    tick={{
                      fill: "rgba(255,255,255,0.5)",
                      fontSize: 12,
                    }}
                    tickFormatter={(value) =>
                      `${(value / 1000000).toFixed(1)}M`
                    }
                  />
                  <Tooltip
                    content={({ active, payload, label }) => {
                      if (active && payload && payload.length) {
                        return (
                          <div className="bg-black/80 backdrop-blur-md border border-white/10 rounded-lg p-4">
                            <p className="text-white/90 font-medium mb-2">
                              {label}
                            </p>
                            {payload.map((entry, index) => (
                              <p
                                key={index}
                                className="text-white/70"
                                style={{ color: entry.color }}
                              >
                                {entry.name}:{" "}
                                {Number(entry.value).toLocaleString()} LABS
                              </p>
                            ))}
                          </div>
                        );
                      }
                      return null;
                    }}
                  />
                  <Legend
                    formatter={(value) => (
                      <span className="text-white/70">{value}</span>
                    )}
                    wrapperStyle={{
                      paddingTop: "20px",
                    }}
                  />
                  <Line
                    type="monotone"
                    dataKey="defi"
                    name="DeFi Allocation"
                    stroke="#34d399"
                    strokeWidth={2}
                    dot={{ fill: "#34d399", strokeWidth: 2, r: 4 }}
                  />
                  <Line
                    type="monotone"
                    dataKey="dao"
                    name="DAO Treasury"
                    stroke="#f59e0b"
                    strokeWidth={2}
                    dot={{ fill: "#f59e0b", strokeWidth: 2, r: 4 }}
                  />
                  <Line
                    type="monotone"
                    dataKey="team"
                    name="Core Team & Investors"
                    stroke="#ec4899"
                    strokeWidth={2}
                    dot={{ fill: "#ec4899", strokeWidth: 2, r: 4 }}
                  />
                  <Line
                    type="monotone"
                    dataKey="marketing"
                    name="Marketing"
                    stroke="#8b5cf6"
                    strokeWidth={2}
                    dot={{ fill: "#8b5cf6", strokeWidth: 2, r: 4 }}
                  />
                  <Line
                    type="monotone"
                    dataKey="contributors"
                    name="Contributor Bonus"
                    stroke="#6366f1"
                    strokeWidth={2}
                    dot={{ fill: "#6366f1", strokeWidth: 2, r: 4 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
