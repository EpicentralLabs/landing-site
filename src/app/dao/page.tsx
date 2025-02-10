"use client"

import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowDown } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Bar, BarChart, Line, LineChart, XAxis, YAxis, ResponsiveContainer, Tooltip } from "recharts"
import { useState } from "react"

// Function to format numbers with k/m suffix (rounded to nearest thousand)
const formatValue = (value: number) => {
  if (value >= 1000000) return `${Math.round(value / 1000000)}m`
  if (value >= 1000) return `${Math.round(value / 1000)}k`
  return Math.round(value).toString()
}

// Function to format current value with 2 decimal places
const formatCurrentValue = (value: number) => {
  return value.toLocaleString('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  })
}

// Add YTD data
const ytdData = [
  { month: "Jan '25", treasury: 54000 },
  { month: "Feb '25", treasury: 42000 },
  { month: "Mar '25", treasury: 55000 },
]

// Update the all time data name
const allTimeData = [
  { month: "Jul '24", treasury: 2000 },
  { month: "Aug '24", treasury: 6000 },
  { month: "Sep '24", treasury: 5050 },
  { month: "Oct '24", treasury: 4560 },
  { month: "Nov '24", treasury: 15000 },
  { month: "Dec '24", treasury: 120000 },
  ...ytdData
]

// Add this near your other data
const activeProposals = [
  {
    id: "P-123",
    title: "Increase Staking Rewards by 2%",
    status: "Active",
    votes: { yes: 234, no: 45 },
    endsIn: "2d 5h",
  },
  {
    id: "P-122",
    title: "Add New Governance Parameters",
    status: "Active",
    votes: { yes: 567, no: 123 },
    endsIn: "3d 12h",
  },
  {
    id: "P-121",
    title: "Treasury Diversification Plan",
    status: "Active",
    votes: { yes: 890, no: 234 },
    endsIn: "4d 8h",
  },
]

// Add this helper to get current treasury value
const getCurrentTreasury = (data: typeof allTimeData) => {
  return formatValue(data[data.length - 1].treasury)
}

export default function DAOPage() {
  const [timeRange, setTimeRange] = useState<'AT' | 'YTD'>('AT')

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Modified Hero Section */}
      <main className="flex-1 min-h-[80vh] flex items-center justify-center py-40">
        <div className="container mx-auto px-4 flex flex-col lg:flex-row justify-between items-center gap-12">
          {/* Left side content */}
          <div className="max-w-2xl space-y-8 text-center lg:text-left">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
              <span className="font-extralight drop-shadow-[0_0_0.3rem_#ffffff70]">
                Epicentral<strong>DAO</strong>
              </span>
            </h1>
            <p className="text-xl text-white/70">
              A community-driven governance system for the future of DeFi on Solana
            </p>
            <div className="flex items-center lg:justify-start justify-center gap-4">
              <Button 
                size="lg" 
                className="bg-[#FFFFFF] hover:bg-[#FFFFFF]/90 transition-all duration-300 hover:scale-95"
              >
                Join DAO
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="transition-all duration-300"
                onClick={() => {
                  document.getElementById('active-proposals')?.scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'center'
                  });
                }}
              >
                View Proposals
              </Button>
            </div>

            {/* Gradient Divider */}
            <div className="relative w-full">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent blur-sm"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"></div>
              <div className="h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent relative"></div>
            </div>
          </div>

          {/* Right side container - Treasury Chart only */}
          <div className="w-full lg:w-[600px]">
            <div className="w-full h-[400px] bg-black/30 backdrop-blur-md border border-white/10 rounded-xl p-4 lg:p-8">
              <div className="flex justify-between items-center mb-4">
                <div>
                  <h3 className="text-xl font-medium text-white/90">Treasury Value</h3>
                  <p className="text-sm text-white/50">
                    Current: ${formatCurrentValue(timeRange === 'AT' ? allTimeData[allTimeData.length - 1].treasury : ytdData[ytdData.length - 1].treasury)}
                  </p>
                </div>
                <div className="flex gap-2">
                  <Button
                    variant={timeRange === 'YTD' ? 'outline' : 'ghost'}
                    size="sm"
                    onClick={() => setTimeRange('YTD')}
                    className="h-8 px-3 text-xs font-medium"
                  >
                    YTD
                  </Button>
                  <Button
                    variant={timeRange === 'AT' ? 'outline' : 'ghost'}
                    size="sm"
                    onClick={() => setTimeRange('AT')}
                    className="h-8 px-3 text-xs font-medium"
                  >
                    AT
                  </Button>
                </div>
              </div>
              <div className="h-[250px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart 
                    data={timeRange === 'AT' ? allTimeData : ytdData}
                    margin={{ top: 5, right: 5, left: 0, bottom: 0 }}
                  >
                    <XAxis 
                      dataKey="month" 
                      stroke="#ffffff50"
                      tick={{ fill: '#ffffff80' }}
                    />
                    <YAxis 
                      stroke="#ffffff50"
                      tick={{ fill: '#ffffff80' }}
                      tickFormatter={formatValue}
                    />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: 'rgba(0, 0, 0, 0.8)',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        borderRadius: '6px',
                      }}
                      itemStyle={{ color: '#ffffff' }}
                      formatter={(value: number) => [`$${formatValue(value)}`, 'Treasury']}
                      labelStyle={{ color: '#ffffff80' }}
                    />
                    <Line 
                      type="monotone"
                      dataKey="treasury"
                      name="Treasury Value"
                      stroke="#ffffff"
                      strokeWidth={2}
                      dot={false}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* DAO Information Section */}
      <section className="container mx-auto px-4 py-40">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {/* Active Proposals Container */}
          <div id="active-proposals" className="bg-black/30 backdrop-blur-md border border-white/10 rounded-xl p-4 lg:p-8">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-medium text-white/90">Active Proposals</h3>
              <Link href="https://app.realms.today/dao/LABS">
                <Button
                  variant="ghost"
                  size="sm"
                  className="h-8 px-3 text-xs font-medium"
                >
                  View All
                </Button>
              </Link>
            </div>
            
            <div className="space-y-3">
              {activeProposals.map((proposal) => (
                <div 
                  key={proposal.id}
                  className="flex items-center justify-between p-3 rounded-lg border border-white/5 bg-white/5 hover:bg-white/10 transition-colors"
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-white/50">{proposal.id}</span>
                      <span className="px-2 py-0.5 text-xs rounded-full bg-green-500/20 text-green-500">
                        {proposal.status}
                      </span>
                    </div>
                    <h4 className="text-sm text-white/90">{proposal.title}</h4>
                    <div className="flex items-center gap-4 text-xs text-white/50">
                      <span className="flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                        Yes: {proposal.votes.yes}
                      </span>
                      <span className="flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
                        No: {proposal.votes.no}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <Button
                      size="sm"
                      className="bg-[#FFFFFF] hover:bg-[#FFFFFF]/90 text-black transition-all duration-300 hover:scale-95 h-7 px-3 text-xs font-medium"
                    >
                      Vote
                    </Button>
                    <div className="text-right">
                      <div className="text-sm text-white/70 mb-1">Ends in</div>
                      <div className="text-xs font-medium text-white/90">{proposal.endsIn}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Overview Container */}
          <div className="bg-black/30 backdrop-blur-md border border-white/10 rounded-xl p-4 lg:p-8">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-medium text-white/90">Overview</h3>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 rounded-lg border border-white/5 bg-white/5">
                <h4 className="text-sm text-white/70 mb-1">Treasury Balance</h4>
                <p className="text-2xl font-medium text-white">$1.2M</p>
              </div>
              
              <div className="p-4 rounded-lg border border-white/5 bg-white/5">
                <h4 className="text-sm text-white/70 mb-1">Members</h4>
                <p className="text-2xl font-medium text-white">1,234</p>
              </div>
              
              <div className="p-4 rounded-lg border border-white/5 bg-white/5">
                <h4 className="text-sm text-white/70 mb-1">Proposals</h4>
                <p className="text-2xl font-medium text-white">156</p>
              </div>
              
              <div className="p-4 rounded-lg border border-white/5 bg-white/5">
                <h4 className="text-sm text-white/70 mb-1">All Time Votes Casted</h4>
                <p className="text-2xl font-medium text-white">45.2k</p>
              </div>

              <div className="col-span-2 grid grid-cols-2 gap-4">
                <div className="p-4 rounded-lg border border-white/5 bg-white/5">
                  <h4 className="text-sm text-white/70 mb-1">Monthly Inflow</h4>
                  <p className="text-2xl font-medium text-green-400">+$234.5k</p>
                </div>

                <div className="p-4 rounded-lg border border-white/5 bg-white/5">
                  <h4 className="text-sm text-white/70 mb-1">Monthly Outflow</h4>
                  <p className="text-2xl font-medium text-red-400">-$89.2k</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <div className="container mx-auto px-4 py-24">
        <div className="max-w-4xl mx-auto space-y-16">
          {/* How It Works Container */}
          <div className="bg-black/30 backdrop-blur-md border border-white/10 rounded-xl p-8 md:p-12">
            <div className="space-y-8">
              <h2 className="text-3xl font-light text-white/90">
                How It Works
              </h2>
              <Accordion type="single" collapsible className="w-full space-y-2">
                <AccordionItem value="governance" className="border-white/10">
                  <AccordionTrigger className="hover:no-underline group">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center transition-all duration-300">
                        <ArrowDown className="h-5 w-5 text-white/70 transition-transform duration-300 
                                           group-hover:text-white" />
                      </div>
                      <h4 className="text-xl font-medium text-white/90 transition-all duration-300 
                                    group-hover:text-white group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]">
                        Governance Process
                      </h4>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-white/70">
                    <div className="pt-4 leading-relaxed">
                      The governance process involves creating proposals, discussing them with the community, and voting using $LABS tokens. Each token represents one vote, ensuring a fair and democratic process.
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="voting" className="border-white/10">
                  <AccordionTrigger className="hover:no-underline group">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center transition-all duration-300">
                        <ArrowDown className="h-5 w-5 text-white/70 transition-transform duration-300 
                                           group-hover:text-white" />
                      </div>
                      <h4 className="text-xl font-medium text-white/90 transition-all duration-300 
                                    group-hover:text-white group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]">
                        Voting Power
                      </h4>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-white/70">
                    <div className="pt-4 leading-relaxed">
                      Voting power is determined by the amount of $LABS tokens held. Tokens can be staked to participate in governance and earn rewards from protocol fees.
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="rewards" className="border-white/10">
                  <AccordionTrigger className="hover:no-underline group">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center transition-all duration-300">
                        <ArrowDown className="h-5 w-5 text-white/70 transition-transform duration-300 
                                           group-hover:text-white" />
                      </div>
                      <h4 className="text-xl font-medium text-white/90 transition-all duration-300 
                                    group-hover:text-white group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]">
                        Rewards & Benefits
                      </h4>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-white/70">
                    <div className="pt-4 leading-relaxed">
                      DAO members receive various benefits including protocol fee sharing, exclusive access to new features, and the ability to shape the future of Epicentral Labs.
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>

          {/* Call to Action */}
          <div className="bg-black/30 backdrop-blur-md border border-white/10 rounded-xl p-8 md:p-12 text-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-light text-white/90">
                Ready to Join?
              </h2>
              <p className="text-white/70 max-w-2xl mx-auto">
                Become a part of the Epicentral DAO and help shape the future of DeFi on Solana. Start by acquiring $LABS tokens and joining our community.
              </p>
              <div className="flex items-center justify-center gap-4">
                <Button 
                  size="lg"
                  className="bg-[#FFFFFF] hover:bg-[#FFFFFF]/90 text-black transition-all duration-300 
                             hover:drop-shadow-[0_0_0.1rem_#FFFFFF] hover:scale-95"
                >
                  Get $LABS
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
} 