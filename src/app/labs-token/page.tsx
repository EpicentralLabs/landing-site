"use client"

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
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';

// Add this data array
const tokenDistributionData = [
  { name: 'Public Allocation', value: 50, amount: '27,326,300', color: '#4a85ff' },
  { name: 'DeFi Allocation', value: 20, amount: '10,930,520', color: '#34d399' },
  { name: 'DAO Treasury', value: 16, amount: '8,744,416', color: '#f59e0b' },
  { name: 'Core Team & Investors', value: 6, amount: '3,879,156', color: '#ec4899' },
  { name: 'Marketing', value: 5, amount: '2,732,630', color: '#8b5cf6' },
  { name: 'Contributor Bonus', value: 3, amount: '1,639,578', color: '#6366f1' },
];

// Add this custom tooltip component
const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-black/80 backdrop-blur-md border border-white/10 rounded-lg p-4">
        <p className="text-white/90 font-medium">{payload[0].payload.name}</p>
        <p className="text-white/70">{payload[0].payload.amount} LABS</p>
        <p className="text-white/70">{payload[0].payload.value}% of supply</p>
      </div>
    );
  }
  return null;
};

export default function LabsTokenPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <main className="flex-1 flex items-center justify-center min-h-[80vh] pt-48">
        <div className="container mx-auto px-4 flex flex-col items-center">
          <div className="max-w-3xl w-full text-center space-y-8">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
              <span className="font-extralight drop-shadow-[0_0_0.3rem_#ffffff70]">
                LABS Token
              </span>
            </h1>
            <p className="text-lg text-white/70">
                Each token is a voice in Epicentral Labs
            </p>
            <div className="flex items-center justify-center gap-4">
              <Button 
                size="lg" 
                className="bg-[#FFFFFF] hover:bg-[#FFFFFF]/90 transition-all duration-300 hover:scale-95"
                onClick={() => window.open('https://jup.ag/swap/SOL-LABSh5DTebUcUbEoLzXKCiXFJLecDFiDWiBGUU1GpxR', '_blank')}
              >
                Buy $LABS
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="transition-all duration-300"
                onClick={() => window.open('https://app.realms.today/dao/LABS', '_blank')}
              >
                Join DAO
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </main>

      {/* Token Distribution Section */}
      <section className="container mx-auto px-4 py-24">
        <div className="max-w-6xl mx-auto space-y-16">
          {/* Token Distribution */}
          <div className="bg-black/30 backdrop-blur-md border border-white/10 rounded-xl p-8 md:p-12 
                          hover:border-white/20 transition-all duration-500
                          shadow-[0_0_15px_rgba(0,0,0,0.2)]">
            <h2 className="text-3xl font-light text-white/90 mb-12 drop-shadow-[0_0_0.3rem_#ffffff70]
                           text-center">
              Token Distribution
              <div className="mt-2 text-base font-normal text-white/50">
                Total Supply: 54,652,600 LABS
              </div>
            </h2>
            
            {/* Chart Container with styling */}
            <div className="w-full h-[400px] mb-12 relative">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent 
                              opacity-50 rounded-xl"></div>
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
                  >
                    {tokenDistributionData.map((entry, index) => (
                      <Cell 
                        key={`cell-${index}`} 
                        fill={entry.color}
                        className="hover:opacity-80 transition-opacity duration-300"
                      />
                    ))}
                  </Pie>
                  <Tooltip 
                    content={<CustomTooltip />}
                    cursor={{ fill: 'transparent' }}
                  />
                  <Legend 
                    layout="vertical" 
                    align="right"
                    verticalAlign="middle"
                    formatter={(value, entry: any) => (
                      <span className="text-white/70 hover:text-white/90 transition-colors duration-300">
                        {value}
                      </span>
                    )}
                    wrapperStyle={{
                      paddingLeft: '20px',
                    }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>

            {/* Distribution Cards with enhanced styling */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {tokenDistributionData.map((item, index) => (
                <Card 
                  key={index} 
                  className="bg-black/50 border-white/10 hover:border-white/20 
                             transition-all duration-300 hover:transform hover:scale-[1.02]
                             hover:shadow-[0_0_15px_rgba(255,255,255,0.1)]"
                >
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div 
                        className="w-4 h-4 rounded-full shadow-[0_0_10px_rgba(255,255,255,0.2)]" 
                        style={{ 
                          backgroundColor: item.color,
                          boxShadow: `0 0 10px ${item.color}40`
                        }}
                      />
                      <CardTitle className="text-white/90 text-lg">{item.name}</CardTitle>
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
                      <div className="w-full bg-white/5 rounded-full h-2">
                        <div 
                          className="h-full rounded-full transition-all duration-500"
                          style={{ 
                            width: `${item.value}%`,
                            backgroundColor: item.color,
                            boxShadow: `0 0 10px ${item.color}40`
                          }}
                        ></div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Vesting Schedule with matching styling */}
          <div className="bg-black/30 backdrop-blur-md border border-white/10 rounded-xl p-8 md:p-12
                          hover:border-white/20 transition-all duration-500
                          shadow-[0_0_15px_rgba(0,0,0,0.2)]">
            <h2 className="text-3xl font-light text-white/90 mb-8 drop-shadow-[0_0_0.3rem_#ffffff70]">
              Vesting Schedule
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-black/40 border border-white/10 rounded-xl p-6
                              hover:border-white/20 transition-all duration-300">
                <h3 className="text-xl font-medium text-white/90 mb-4">DeFi Allocation</h3>
                <div className="space-y-2 text-white/70">
                  <p>• 14 Month Vesting via Streamflow</p>
                  <p>• Deposited to DeFi Rewards Vault</p>
                  <p>• Immutable Contract</p>
                </div>
              </div>

              <div className="bg-black/40 border border-white/10 rounded-xl p-6
                              hover:border-white/20 transition-all duration-300">
                <h3 className="text-xl font-medium text-white/90 mb-4">DAO Treasury</h3>
                <div className="space-y-2 text-white/70">
                  <p>• 13 Month Vesting via Streamflow</p>
                  <p>• Deposited to Main DAO Vault</p>
                  <p>• Immutable Contract</p>
                </div>
              </div>

              <div className="bg-black/40 border border-white/10 rounded-xl p-6
                              hover:border-white/20 transition-all duration-300">
                <h3 className="text-xl font-medium text-white/90 mb-4">Core Team & Investors</h3>
                <div className="space-y-2 text-white/70">
                  <p>• 17 Month Vesting via Streamflow</p>
                  <p>• Individual Wallet Distribution</p>
                  <p>• Immutable Contract</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
