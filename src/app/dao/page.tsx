"use client"

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Line, LineChart, XAxis, YAxis, ResponsiveContainer, Tooltip } from "recharts"
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

export default function DAOPage() {
  const [timeRange, setTimeRange] = useState<'AT' | 'YTD'>('AT')

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section - Adjusted for better centering */}
      <main className="flex-1 flex flex-col items-center justify-center min-h-[calc(100vh-64px)] py-20"> {/* Subtract navbar height and add vertical padding */}
        {/* Hero Content */}
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto space-y-8 text-center">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
              <span className="font-extralight drop-shadow-[0_0_0.3rem_#ffffff70]">
                Epicentral<strong>DAO</strong>
              </span>
            </h1>
            <p className="text-xl text-white/70">
              A community-driven governance system for the future of DeFi on Solana
            </p>
            <div className="flex flex-col items-center gap-8">
              <div className="flex items-center justify-center gap-4">
                <Button 
                  size="lg" 
                  className="bg-[#FFFFFF] hover:bg-[#FFFFFF]/90 transition-all duration-300 hover:scale-95"
                  onClick={() => window.open('https://app.realms.today/dao/LABS', '_blank')}
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
              <div className="relative w-[320px]">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent blur-sm"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"></div>
                <div className="h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent relative"></div>
              </div>

              {/* New "How does it work?" button */}
              <Button 
                size="sm"
                variant="ghost" 
                className="text-white/50 hover:text-white/70 transition-all duration-300"
                onClick={() => {
                  document.getElementById('how-it-works')?.scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'center'
                  });
                }}
              >
                How does it work?
              </Button>
            </div>
          </div>
        </div>
      </main>

      {/* New DAO Introduction Section */}
      <section className="container mx-auto px-4 py-24">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-light text-white/90 mb-8">
            What is a DAO?
          </h2>
          <p className="text-lg text-white/70">
            A Decentralized Autonomous Organization (DAO) is a revolutionary form of governance that allows communities to make decisions collectively without centralized control. 
            DAOs are important because they empower individuals to have a direct say in the direction and management of projects, ensuring transparency, inclusivity, and decentralization. 
            By leveraging Solana's blockchain and goverance tools, EpicentralDAO provides a secure and efficient way to coordinate and manage resources, making them a vital component of the future of decentralized finance and beyond.
          </p>
        </div>
      </section>

      {/* DAO Information Section */}
      <section className="container mx-auto px-4 py-40">
        {/* Treasury Chart - Moved here */}
        <div className="max-w-7xl mx-auto mb-8">
          <div className="w-full h-[400px] bg-black/30 backdrop-blur-md border border-white/10 rounded-xl p-4 lg:p-8">
            <div className="flex justify-between items-center mb-4">
              <div>
                <h3 className="text-xl font-medium text-white/90">Treasury Value (PLACEHOLDER)</h3>
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

        {/* Metrics and Proposals Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {/* Active Proposals Container */}
          <div id="active-proposals" className="bg-black/30 backdrop-blur-md border border-white/10 rounded-xl p-4 lg:p-8">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-medium text-white/90">Active Proposals (PLACEHOLDERS)</h3>
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
              <h3 className="text-xl font-medium text-white/90">Overview (PLACEHOLDERS)</h3>
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
      <div className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mb-16"></div>
      {/* How It Works Section - Add id here */}
      <section id="how-it-works" className="container mx-auto px-4 py-24">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-light text-white/90 mb-16 text-center drop-shadow-[0_0_0.3rem_#ffffff70]">
            How does the DAO work?
          </h2>
          
          <div className="relative flex flex-col items-center">
            {/* Card 1 */}
            <div className="relative z-30 max-w-lg bg-black/30 backdrop-blur-md border border-white/10 rounded-xl p-8 transform hover:-translate-y-2 transition-transform duration-300">
              <h3 className="text-xl font-medium text-white/90 mb-2">1. Draft Proposal</h3>
              <p className="text-base text-white/70">
                Any member with <strong>1,000</strong> $LABS can draft a proposal in our <a href="https://discord.gg/5asAuY2sR8" className="text-[#4a85ff] hover:text-[#4a85ff] hover:drop-shadow-[0_0_0.3rem_#4a85ff] transition-all duration-300">Discord</a>. Proposals can range from parameter adjustments to new feature implementations.
              </p>
            </div>

            {/* Card 2 */}
            <div className="relative z-20 max-w-lg bg-black/30 backdrop-blur-md border border-white/10 rounded-xl p-8 -mt-4 ml-20 transform hover:-translate-y-2 transition-transform duration-300">
              <h3 className="text-xl font-medium text-white/90 mb-2">2. Community Review & Feedback</h3>
              <p className="text-base text-white/70">
                The community discusses the proposal, providing feedback and suggestions during a review period before offically submitting the proposal on-chain.
              </p>
            </div>

            {/* Card 3 */}
            <div className="relative z-10 max-w-lg bg-black/30 backdrop-blur-md border border-white/10 rounded-xl p-8 -mt-4 ml-40 transform hover:-translate-y-2 transition-transform duration-300">
              <h3 className="text-xl font-medium text-white/90 mb-2">3. Voting Period</h3>
              <p className="text-base text-white/70">
                $LABS token holders can stake their tokens in the Epicentral DAO to vote on proposals, with voting power proportional to their holdings.
              </p>
            </div>

            {/* Card 4 */}
            <div className="relative max-w-lg bg-black/30 backdrop-blur-md border border-white/10 rounded-xl p-8 -mt-4 ml-60 transform hover:-translate-y-2 transition-transform duration-300">
              <h3 className="text-xl font-medium text-white/90 mb-2">4. Implementation</h3>
              <p className="text-base text-white/70">
                If a proposal is approved, it is implemented then executed via on-chain instructions or a new feature is added to the protocol by the Core Team.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <div className="container mx-auto px-4 py-24">
        <div className="max-w-4xl mx-auto space-y-16">
          {/* Call to Action Container */}
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
                  onClick={() => window.open('https://jup.ag/swap/SOL-LABSh5DTebUcUbEoLzXKCiXFJLecDFiDWiBGUU1GpxR', '_blank')}
                >
                  Get $LABS
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button 
                  size="lg"
                  className="bg-[#FFFFFF] hover:bg-[#FFFFFF]/90 text-black transition-all duration-300 
                             hover:drop-shadow-[0_0_0.1rem_#FFFFFF] hover:scale-95"
                  onClick={() => window.open('https://app.realms.today/dao/LABS', '_blank')}
                >
                  Join DAO
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