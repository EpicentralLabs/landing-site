"use client"

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { RoadmapCard } from "@/components/roadmap-card";

export default function RoadmapPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Roadmap Section */}
      <section className="container mx-auto px-4 py-12 mt-8">
        <div className="max-w-6xl mx-auto">
          {/* Roadmap Heading */}
          <div className="mb-12 text-center">
            <h1 className="text-4xl md:text-5xl font-light tracking-tight text-white/90 drop-shadow-[0_0_0.3rem_#ffffff70] mb-6">
              2025 Roadmap
            </h1>

            <p className="text-white/70 max-w-2xl mx-auto mt-4">
              This is an overview of the roadmap items for 2025 set by the Epicentral Core Team (in no particular order). 
              Specifics of each quarter will be updated as dates get closer.
            </p>
            <p className="text-white/70 max-w-2xl mx-auto mt-4">
            <u>Some items are subject to change.</u>
            </p>
          </div>

          {/* Color Legend */}
          <div className="mb-8 flex flex-wrap gap-4 justify-center">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500"></div>
              <span className="text-white/70 text-sm">Completed</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-blue-500"></div>
              <span className="text-white/70 text-sm">In Progress</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-white/20"></div>
              <span className="text-white/70 text-sm">TODO</span>
            </div>
          </div>

          <div className="space-y-6">
            <RoadmapCard
              quarter="Q1 2024"
              title="Foundation & Reputation Growth"
              status="in-progress"
              description="Establishing the core infrastructure and community foundation for the EpicentralDAO"
              items={[
                { type: "community", text: "Host first X/Twitter AMA Call of 2025", status: "completed" },
                { type: "community", text: "$LABS Verified on Jupiter Exchange", status: "completed" },
                { type: "community", text: "$LABS Verified on Birdeye", status: "completed" },
                { type: "community", text: "Epicentral Discord Server reaches 500 members", status: "in-progress" },
                { type: "community", text: "Epicentral Twitter Account reaches 1000 followers", status: "in-progress" },
                { type: "community", text: "Realms Ecosystem DAO grants $10,000 to EpicentralDAO for Meteora Integration", status: "completed" },
                { type: "community", text: "Epicentral Labs Whitepaper Debuted", status: "completed" },
                { type: "community", text: "Collaborated with another Solana project for community growth", status: "in-progress" },
                { type: "community", text: "DAO Participation Rewards Program", status: "todo" },

                { type: "technical", text: "Option Pricing Model - OPM(Rust + Typescript)", status: "completed" },
                { type: "technical", text: "Meteora Integration with Realms DAOs", status: "in-progress" },
                { type: "technical", text: "Website Revamp - Landing Page", status: "completed" },
                { type: "technical", text: "Website Revamp - Roadmap Page", status: "completed" },
                { type: "technical", text: "Website Revamp - $LABS Tokenomics Page", status: "in-progress" },
                { type: "technical", text: "Website Revamp - EpicentralDAO Page", status: "in-progress" },
                { type: "technical", text: "Website Revamp - Deploy Finalized Website", status: "todo" },
                { type: "technical", text: "Documentation Site Revamp", status: "todo" },
                { type: "technical", text: "Solana OPX - UI Design", status: "in-progress" },
                { type: "technical", text: "Solana OPX - API/RPC Integration", status: "in-progress" },
                { type: "technical", text: "Solana OPX - Option Program Integration", status: "todo" },
                { type: "technical", text: "Solana OPX - Trade Page", status: "in-progress" },
                { type: "technical", text: "Solana OPX - Option Margin Lending Pool (OMLP)", status: "todo" },
                { type: "technical", text: "Option Programs - Create Option", status: "todo" },
                { type: "technical", text: "Option Programs - Exercise Option", status: "todo" },
                { type: "technical", text: "Option Programs - Validate Option Value via OPM", status: "todo" },
              ]}
            />

            <RoadmapCard
              quarter="Q2 2024"
              title="Solana OPX - Solana's First Decentralized Options Exchange"
              status="in-progress"
              description="Continue building and testing the core protocol: Solana OPX."
              items={[
                { type: "community", text: "Epicentral Discord Server reaches 1000 members", status: "in-progress" },
                { type: "community", text: "Epicentral Twitter Account reaches 1500 followers", status: "in-progress" },
                { type: "community", text: "Contributor Participation Rewards Program", status: "todo" },
                { type: "community", text: "Initialize a Bug Bounty Program for Solana OPX", status: "todo" },
                { type: "community", text: "Recieve a second round of grants greater than $10k", status: "todo" },
                { type: "community", text: "Host 3 AMA Calls on X/Twitter", status: "todo" },
                { type: "community", text: "Determine Solana OPX Protocol Fees", status: "completed" },

                { type: "technical", text: "Solana OPX - $SOL Devnet Trading", status: "todo"},
                { type: "technical", text: "Solana OPX - Devnet Deployment", status: "todo"},
                { type: "technical", text: "Solana OPX - $SOL Mainnet Trading", status: "todo"},
                { type: "technical", text: "Solana OPX - $LABS Devnet Trading", status: "todo"},
                { type: "technical", text: "Solana OPX - Mainnet Deployment", status: "todo"},
                { type: "technical", text: "Solana Option Standard SDK - Utilizing Option Pricing Model (OPM)", status: "todo"},
                { type: "technical", text: "Solana Option Standard SDK - Option Program CPI", status: "todo"},
                { type: "technical", text: "Solana Option Standard SDK - Option Margin Lending Pool (OMLP)", status: "todo"},
                { type: "technical", text: "Documentation Site Revamp - Option Pricing Model (OPM)", status: "todo"},
                { type: "technical", text: "Documentation Site Revamp - Option Margin Lending Pool (OMLP)", status: "todo"},
                { type: "technical", text: "Documentation Site Revamp - Option Programs", status: "todo" },
              ]}
            />

            <RoadmapCard
              quarter="Q3 2024"
              title="Education & Implementation"
              status="in-progress"
              description="Teach the Solana Ecosystem about Options, Implement Options into other DeFi Protocols, and more."
              items={[
                { type: "community", text: "DAO Proposal: $LABS Token Buyback using Protocol Fees", status: "todo" },
                { type: "community", text: "Create educational content for Solana OPX/Options Trading", status: "todo" },

                { type: "technical", text: "Implement Programmable Fee Model via DAO proposals", status: "todo"},
                { type: "technical", text: "Integrate Options into other DeFi Protocols (DeFiTuna, Adrena, etc.)", status: "todo"},
                { type: "technical", text: "Create Video Content for SOS SDK, Options Trading, and more", status: "todo"},
              ]}
            />

            <RoadmapCard
              quarter="Q4 2024"
              title="Awareness & Adoption"
              status="in-progress"
              description="Create a community-driven initiative to raise awareness about Solana OPX and Options Trading."
              items={[
                { type: "community", text: "Create educational content for Solana OPX/Options Trading", status: "todo" },
                { type: "community", text: "Speak or mention of Solana OPX/Options at Solana Breakpoint 2025", status: "todo" },

                { type: "technical", text: "Integrate Options into more DeFi Protocols", status: "todo"},
              ]}
            />
            {/* Add more RoadmapCard components as needed */}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <div className="container mx-auto px-4 py-24">
        <div className="max-w-4xl mx-auto">
          <div className="bg-black/30 backdrop-blur-md border border-white/10 rounded-xl p-8 md:p-12 text-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-light text-white/90">
                Join Our Journey
              </h2>
              <p className="text-white/70 max-w-2xl mx-auto">
                Be part of shaping the future of DeFi on Solana. Join our community and contribute to the development of innovative financial solutions.
              </p>
              <div className="flex items-center justify-center gap-4">
                <Button 
                  size="lg"
                  className="bg-[#FFFFFF] hover:bg-[#FFFFFF]/90 text-black transition-all duration-300 
                             hover:drop-shadow-[0_0_0.1rem_#FFFFFF] hover:scale-95"
                  onClick={() => window.open('https://discord.gg/5asAuY2sR8', '_blank')}
                >
                  Join Discord
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