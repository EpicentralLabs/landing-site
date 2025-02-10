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

export default function DAOPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <main className="flex-1 flex items-center justify-center min-h-[80vh] pt-48">
        <div className="container mx-auto px-4 flex flex-col items-center">
          <div className="max-w-3xl w-full text-center space-y-8">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
              <span className="font-extralight drop-shadow-[0_0_0.3rem_#ffffff70]">
                Epicentral DAO
              </span>
            </h1>
            <p className="text-xl text-white/70">
              A community-driven governance system for the future of DeFi on Solana
            </p>
            <div className="flex items-center justify-center gap-4">
              <Button 
                size="lg" 
                className="bg-[#FFFFFF] hover:bg-[#FFFFFF]/90 transition-all duration-300 
                           hover:scale-95"
              >
                Join DAO
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="transition-all duration-300"
              >
                View Proposals
              </Button>
            </div>
          </div>
        </div>
      </main>

      {/* DAO Information Section */}
      <div className="container mx-auto px-4 py-24">
        <div className="max-w-4xl mx-auto space-y-16">
          {/* Overview Container */}
          <div className="bg-black/30 backdrop-blur-md border border-white/10 rounded-xl p-8 md:p-12">
            <div className="space-y-12">
              <h2 className="text-3xl font-light text-white/90">
                Overview
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="space-y-2">
                  <h3 className="text-xl font-medium text-white/90">Treasury</h3>
                  <p className="text-3xl font-bold text-white">$1.2M</p>
                  <p className="text-sm text-white/70">Total Value Locked</p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-medium text-white/90">Members</h3>
                  <p className="text-3xl font-bold text-white">1,234</p>
                  <p className="text-sm text-white/70">Active Participants</p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-medium text-white/90">Proposals</h3>
                  <p className="text-3xl font-bold text-white">156</p>
                  <p className="text-sm text-white/70">Total Proposals</p>
                </div>
              </div>
            </div>
          </div>

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
    </div>
  );
} 