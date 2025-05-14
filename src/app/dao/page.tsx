"use client"

import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronDown } from "lucide-react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Image from "next/image";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function DAOPage() {
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
              Transparent | Decentralized | Community-driven.
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
                {/* Add Cabana Exchange Button */}
                <Button 
                  size="lg" 
                  variant="outline"
                  className="transition-all duration-300 hover:scale-95 flex items-center"
                  onClick={() => window.open('https://cabana.exchange/swap/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v-LABSh5DTebUcUbEoLzXKCiXFJLecDFiDWiBGUU1GpxR?daoRef=Epicentral', '_blank')}
                >
                  <Image 
                    src="/cabana_logo.png" 
                    alt="Cabana Exchange" 
                    width={20}
                    height={20}
                    className="mr-2"
                  />
                  Trade on Cabana
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="transition-all duration-300"
                  onClick={() => {
                    document.getElementById('dao-intro')?.scrollIntoView({ 
                      behavior: 'smooth',
                      block: 'center'
                    });
                  }}
                >
                  What&apos;s a DAO?
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

      {/* Add id to the divider for scrolling */}
      <div id="dao-intro" className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mb-16"></div> 

      {/* New DAO Introduction Section */}
      <section className="container mx-auto px-4 py-24">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-light text-white/90 mb-8">
            What is a DAO?
          </h2>
          <p className="text-lg text-white/70">
            "Decentralized Autonomous Organization" <br />
            Lives on the blockchain.
          </p>
        </div>
      </section>

      {/* New DAO Introduction Section */}
      <section className="container mx-auto px-4 py-24">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-light text-white/90 mb-8">
            What is a DAO used for?
          </h2>
          <p className="text-lg text-white/70">
            <strong>DAOs are used to make financial and operational decisions</strong> -- much like a corporation. 
            <br />
            <br />
            However, EpicentralDAO is unique in that <strong>anyone can propose what to do with the treasury</strong>.
            <br />
            <br />
            For as long as you're a $LABS Token holder, you can vote to make decisions on proposals, transfer funds, update protocol parameters, and more.
          </p>
        </div>
      </section>

      {/* New DAO Introduction Section */}
      <section className="container mx-auto px-4 py-24">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-light text-white/90 mb-8">
            Why is EpicentralDAO needed?
          </h2>
          <p className="text-lg text-white/70">
            Transparency is key to building trust.
            <br />
            <br />
            <strong>EpicentralDAO is a way to make sure that the Epicentral protocol is always transparent, operated in the best interest of $LABS token holders as well as the rest of the Solana Ecosystem.</strong>
            <br />
            <br />
            The <span className="text-[#4a85ff]">Core Team</span> is responsible for the day-to-day operations of the protocol, but the $LABS token holders are those who can make decisions on how to use funds, propose programmatic protocol changes, etc. 
          </p>
        </div>
      </section>

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
                Any member with <u>100,000 $LABS</u> can create a proposal either in <a href="https://app.realms.today/dao/LABS" className="text-[#4a85ff] hover:text-[#4a85ff] hover:drop-shadow-[0_0_0.3rem_#4a85ff] transition-all duration-300">Realms</a> or in the Epicentral Labs <a href="https://discord.gg/5asAuY2sR8" className="text-[#4a85ff] hover:text-[#4a85ff] hover:drop-shadow-[0_0_0.3rem_#4a85ff] transition-all duration-300">Discord</a>.
              </p>
            </div>

            {/* Card 2 */}
            <div className="relative z-20 max-w-lg bg-black/30 backdrop-blur-md border border-white/10 rounded-xl p-8 -mt-4 ml-20 transform hover:-translate-y-2 transition-transform duration-300">
              <h3 className="text-xl font-medium text-white/90 mb-2">2. Community Feedback</h3>
              <p className="text-base text-white/70">
                Whether created in Realms or Discord, the community will then discuss the proposal and provide feedback in designated channels.
              </p>
            </div>

            {/* Card 3 */}
            <div className="relative z-10 max-w-lg bg-black/30 backdrop-blur-md border border-white/10 rounded-xl p-8 -mt-4 ml-40 transform hover:-translate-y-2 transition-transform duration-300">
              <h3 className="text-xl font-medium text-white/90 mb-2">3. Voting Period</h3>
              <p className="text-base text-white/70">
                Holders that staked into the EpicentralDAO, use their $LABS to vote on live proposals -- with voting power proportional to their holdings.
              </p>
            </div>

            {/* Card 4 */}
            <div className="relative max-w-lg bg-black/30 backdrop-blur-md border border-white/10 rounded-xl p-8 -mt-4 ml-60 transform hover:-translate-y-2 transition-transform duration-300">
              <h3 className="text-xl font-medium text-white/90 mb-2">4. Implementation</h3>
              <p className="text-base text-white/70">
                After the voting period (1-3 days), if a proposal is approved by the public, it is then implemented by the Core Team or automatically via an executable on-chain instruction.
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
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button 
                      size="lg"
                      className="bg-[#FFFFFF] hover:bg-[#FFFFFF]/90 text-black transition-all duration-300 
                                 hover:drop-shadow-[0_0_0.1rem_#FFFFFF] hover:scale-95"
                    >
                      Get $LABS
                      <ChevronDown className="ml-2 h-5 w-5" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="bg-black/80 backdrop-blur-md border border-white/10 text-white">
                    <DropdownMenuItem 
                      className="text-white hover:bg-white/10 focus:bg-white/10 cursor-pointer flex items-center"
                      onClick={() => window.open('https://jup.ag/swap/SOL-LABSh5DTebUcUbEoLzXKCiXFJLecDFiDWiBGUU1GpxR', '_blank')}
                    >
                      <Image 
                        src="/jupiter_logo.png" 
                        alt="Jupiter" 
                        width={20}
                        height={20}
                        className="mr-2 rounded-full"
                      />
                      Jupiter
                    </DropdownMenuItem>
                    <DropdownMenuItem 
                      className="text-white hover:bg-white/10 focus:bg-white/10 cursor-pointer flex items-center"
                      onClick={() => window.open('https://cabana.exchange/swap/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v-LABSh5DTebUcUbEoLzXKCiXFJLecDFiDWiBGUU1GpxR?daoRef=Epicentral', '_blank')}
                    >
                      <Image 
                        src="/cabana_logo.png" 
                        alt="Cabana Exchange" 
                        width={16}
                        height={16}
                        className="mr-2 rounded-full"
                      />
                      Cabana Exchange
                    </DropdownMenuItem>
                    <DropdownMenuItem 
                      className="text-white hover:bg-white/10 focus:bg-white/10 cursor-pointer flex items-center"
                      onClick={() => window.open('https://raydium.io/swap/?inputCurrency=sol&outputCurrency=LABSh5DTebUcUbEoLzXKCiXFJLecDFiDWiBGUU1GpxR', '_blank')}
                    >
                      <Image 
                        src="/raydium_logo.jpg" 
                        alt="Raydium" 
                        width={20}
                        height={20}
                        className="mr-2 rounded-full"
                      />
                      Raydium
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
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