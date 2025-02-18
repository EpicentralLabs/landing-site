/* eslint-disable react/no-unescaped-entities */
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

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <main className="flex-1 flex items-center justify-center min-h-[80vh] pt-48">
        <div className="container mx-auto px-4 flex flex-col items-center">
          <div className="max-w-3xl w-full text-center space-y-8">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
              <span className="font-extralight drop-shadow-[0_0_0.3rem_#ffffff70]">
                Shaping DeFi Through Governance
              </span>
            </h1>
            <div className="flex items-center justify-center gap-4">
              <Button 
                size="lg" 
                className="bg-[#FFFFFF] hover:bg-[#FFFFFF]/90 transition-all duration-300 
                           hover:scale-95"
                onClick={() => window.location.href = '/coming-soon'}
              >
                Solana OPX
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="transition-all duration-300"
                onClick={() => document.getElementById('epicentral-labs')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Learn More
              </Button>
            </div>
            {/* Gradient Divider */}
            <div className="relative mt-16 w-full">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent blur-sm"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"></div>
              <div className="h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent relative"></div>
            </div>
            
            {/* Partners Section */}
            <div className="mt-16 w-full">
              <div className="max-w-4xl mx-auto px-4">
                <div className="grid grid-cols-3 gap-4 md:gap-6 place-items-center">
                  <div className="w-full flex items-center justify-center text-white/50 hover:text-white/80 transition-colors duration-300">
                    <a href="https://jup.ag/swap/SOL-LABSh5DTebUcUbEoLzXKCiXFJLecDFiDWiBGUU1GpxR" target="_blank" rel="noopener noreferrer">
                      <Image 
                        src="/1.png"
                        alt="Partner Logo 1"
                        width={140}
                        height={45}
                        className="w-[120px] sm:w-[160px] md:w-[180px] object-contain opacity-50 hover:opacity-100 transition-opacity duration-300"
                      />
                    </a>
                  </div>
                  <div className="w-full flex items-center justify-center text-white/50 hover:text-white/80 transition-colors duration-300">
                    <a href="https://www.governance.so/dao/5PP7vKjJyLw1MR55LoexRsCj3CpZj9MdD6aNXRrvxG42" target="_blank" rel="noopener noreferrer">
                      <Image 
                        src="/2.png"
                        alt="Partner Logo 2"
                        width={140}
                        height={45}
                        className="w-[120px] sm:w-[160px] md:w-[180px] object-contain opacity-50 hover:opacity-100 transition-opacity duration-300"
                      />
                    </a>
                  </div>
                  <div className="w-full flex items-center justify-center text-white/50 hover:text-white/80 transition-colors duration-300">
                    <a href="https://app.realms.today/dao/LABS" target="_blank" rel="noopener noreferrer">
                      <Image 
                        src="/3.png"
                        alt="Partner Logo 3"
                        width={140}
                        height={45}
                        className="w-[120px] sm:w-[160px] md:w-[180px] object-contain opacity-50 hover:opacity-100 transition-opacity duration-300"
                      />
                    </a>
                  </div>
                  <div className="w-full flex items-center justify-center text-white/50 hover:text-white/80 transition-colors duration-300">
                    <a href="https://raydium.io/swap/?inputMint=EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v&outputMint=LABSh5DTebUcUbEoLzXKCiXFJLecDFiDWiBGUU1GpxR" target="_blank" rel="noopener noreferrer">
                      <Image 
                        src="/4.png"
                        alt="Partner Logo 4"
                        width={140}
                        height={45}
                        className="w-[120px] sm:w-[160px] md:w-[180px] object-contain opacity-50 hover:opacity-100 transition-opacity duration-300"
                      />
                    </a>
                  </div>
                  <div className="w-full flex items-center justify-center text-white/50 hover:text-white/80 transition-colors duration-300">
                    <a href="https://streamflow.finance/" target="_blank" rel="noopener noreferrer">
                      <Image 
                        src="/5.png"
                        alt="Partner Logo 5"
                        width={140}
                        height={45}
                        className="w-[120px] sm:w-[160px] md:w-[180px] object-contain opacity-50 hover:opacity-100 transition-opacity duration-300"
                      />
                    </a>
                  </div>
                  <div className="w-full flex items-center justify-center text-white/50 hover:text-white/80 transition-colors duration-300">
                    <a href="https://switchboard.xyz/" target="_blank" rel="noopener noreferrer">
                      <Image 
                        src="/6.png"
                        alt="Partner Logo 6"
                        width={140}
                        height={45}
                        className="w-[120px] sm:w-[160px] md:w-[180px] object-contain opacity-50 hover:opacity-100 transition-opacity duration-300"
                      />
                    </a>
                  </div>
                  <div className="w-full flex items-center justify-center text-white/50 hover:text-white/80 transition-colors duration-300">
                    <a href="https://app.realms.today/dao/RED" target="_blank" rel="noopener noreferrer">
                      <Image 
                        src="/7.png"
                        alt="Partner Logo 7"
                        width={140}
                        height={45}
                        className="w-[120px] sm:w-[160px] md:w-[180px] object-contain opacity-50 hover:opacity-100 transition-opacity duration-300"
                      />
                    </a>
                  </div>
                  <div className="w-full flex items-center justify-center text-white/50 hover:text-white/80 transition-colors duration-300">
                    <a href="https://app.realms.today/dao/LABS" target="_blank" rel="noopener noreferrer">
                      <Image 
                        src="/8.png"
                        alt="Partner Logo 8"
                        width={140}
                        height={45}
                        className="w-[120px] sm:w-[160px] md:w-[180px] object-contain opacity-50 hover:opacity-100 transition-opacity duration-300"
                      />
                    </a>
                  </div>
                  <div className="w-full flex items-center justify-center text-white/50 hover:text-white/80 transition-colors duration-300">
                    <a href="https://www.meteora.ag/" target="_blank" rel="noopener noreferrer">
                      <Image 
                        src="/9.png"
                        alt="Partner Logo 9"
                        width={140}
                        height={45}
                        className="w-[120px] sm:w-[160px] md:w-[180px] object-contain opacity-50 hover:opacity-100 transition-opacity duration-300"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* About Section */}
      <div id="about-section" className="container mx-auto px-4 py-48">
        <div className="max-w-4xl mx-auto space-y-16">
          {/* Combined Info Container */}
          <div id="epicentral-labs" className="bg-black/30 backdrop-blur-md border border-white/10 rounded-xl p-8 md:p-12 mb-4 scroll-mt-32">
            <div className="space-y-12 text-left">
              {/* What is Epicentral Labs? */}
              <div className="space-y-6">
                <h3 className="text-2xl font-light text-white/90">
                  What is Epicentral Labs?
                </h3>
                <p className="text-base leading-relaxed text-white/70">
                  Epicentral Labs is a community-governed protocol focused on improving decentralized
                  finance (DeFi) infrastructure on <a href="https://solana.com/" className="text-[#4a85ff] hover:drop-shadow-[0_0_8px_#4a85ff] transition-all duration-300">Solana</a> through program governance and powered by the <span className="text-[#4a85ff]">$LABS</span> token. The name &ldquo;Epicentral&rdquo; is
                  inspired by seismology, symbolizing the aim to be a focal point for innovation in finance and
                  blockchain development.
                </p>
                <div className="flex items-center">
                  <Button 
                    size="sm"
                    variant="secondary"
                    className="bg-white/10 hover:bg-white/20 text-white transition-all duration-300 
                              hover:drop-shadow-[0_0_0.1rem_rgba(255,255,255,0.3)] hover:scale-95 px-4"
                    onClick={() => window.open('https://jumpshare.com/v/UzREI8c6saSe4wyxiDHs', '_blank')}
                  >
                    Read Whitepaper
                  </Button>
                </div>
              </div>

              {/* Gradient Divider */}
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent blur-sm"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"></div>
                <div className="h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent relative"></div>
              </div>

              {/* Our Mission */}
              <div className="space-y-6">
                <h3 className="text-2xl font-light text-white/90">
                  Our Mission
                </h3>
                <p className="text-base leading-relaxed text-white/70">
                  Our goal is to expand decentralized finance capabilities by developing innovative financial derivatives through governance mechanisms.
                  Through collaboration with existing protocols and the development of new solutions, we create integrable tools for the Solana DeFi ecosystem.
                </p>
                <div className="flex items-center">
                  <Button 
                    size="sm"
                    variant="secondary"
                    className="bg-white/10 hover:bg-white/20 text-white transition-all duration-300 
                              hover:drop-shadow-[0_0_0.1rem_rgba(255,255,255,0.3)] hover:scale-95 px-4"
                    onClick={() => window.location.href = '/roadmap'}
                  >
                    Roadmap
                    <ArrowRight className="ml-0 h-4 w-4" />
                  </Button>
                </div>
              </div>

              {/* Gradient Divider before $LABS section */}
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent blur-sm"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"></div>
                <div className="h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent relative"></div>
              </div>

              {/* Powered by $LABS section */}
              <div className="space-y-6">
                <h3 className="text-2xl font-light text-white/90">
                  Powered by $LABS
                </h3>
                <p className="text-base leading-relaxed text-white/70">
                <a className="text-[#4a85ff] hover:drop-shadow-[0_0_8px_#4a85ff] transition-all duration-300">LABS</a> is a governance token for EpicentralDAO. Consider each token as a voice in the decision-making process for Epicentral Labs and its future. 
                Token holders can expect to:
                </p>
                
                <ul className="text-base leading-relaxed text-white/70 space-y-2">
                  <li className="flex items-center gap-2">
                    <span className="text-[#4a85ff]">•</span> Vote on protocol upgrades and parameter changes
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#4a85ff]">•</span> Propose new features and improvements
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#4a85ff]">•</span> Reduce Protocol Fees/Revenues
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#4a85ff]">•</span> Receive DAO Participation Rewards
                  </li>
                </ul>

                <div className="space-y-6">
                  <Button 
                    size="sm"
                    variant="secondary"
                    className="bg-white/10 hover:bg-white/20 text-white transition-all duration-300 
                              hover:drop-shadow-[0_0_0.1rem_rgba(255,255,255,0.3)] hover:scale-95 px-4"
                    onClick={() => window.open('/labs-token', '_blank')}
                  >
                    Tokenomics
                    <ArrowRight className="ml-0 h-4 w-4" />
                  </Button>
                </div>

                {/* Network Graph iframe */}
                <div className="w-full">
                  <iframe
                    src="https://widget.vybenetwork.com/network-graph?address=LABSh5DTebUcUbEoLzXKCiXFJLecDFiDWiBGUU1GpxR&entity=token&connectionNode=program"
                    title="vybe-network-graph"
                    allow="clipboard-write"
                    className="w-full h-[500px] rounded-lg border border-white/10"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Focuses Container */}
          <div className="bg-black/30 backdrop-blur-md border border-white/10 rounded-xl p-8 md:p-12">
            <div className="space-y-6">
              <h3 className="text-2xl font-light text-white/90">
                Our Focuses
              </h3>
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
                        Solana OPX
                      </h4>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-white/70">
                    <div className="pt-4 leading-relaxed space-y-4">
                      <p>
                        Solana's First Decentralized Options Exchange. Allowing for traders to hedge, speculate, and diversify their portfolios. 
                      </p>
                      <div className="flex items-center">
                        <Button 
                          size="sm"
                          className="bg-[#FFFFFF] hover:bg-[#FFFFFF]/90 text-black transition-all duration-300 
                                     hover:drop-shadow-[0_0_0.1rem_#FFFFFF] hover:scale-95 px-4"
                          onClick={() => window.location.href = '/coming-soon'}
                        >
                          Trade Now
                          <ArrowRight className="ml-0 h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="security" className="border-white/10">
                  <AccordionTrigger className="hover:no-underline group">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center transition-all duration-300">
                        <ArrowDown className="h-5 w-5 text-white/70 transition-transform duration-300 
                                           group-hover:text-white" />
                      </div>
                      <h4 className="text-xl font-medium text-white/90 transition-all duration-300 
                                    group-hover:text-white group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]">
                        Option Programs
                      </h4>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-white/70">
                    <div className="pt-4 leading-relaxed">
                      For option contracts to exist on Solana, on-chain programs validate the creation of new option contracts and the settlement of existing ones. 
                      Ensuring that all options are accurately priced and settled fairly.
                      <div className="flex items-center mt-4">
                        <Button 
                          size="sm"
                          className="bg-[#FFFFFF] hover:bg-[#FFFFFF]/90 text-black transition-all duration-300 
                                     hover:drop-shadow-[0_0_0.1rem_#FFFFFF] hover:scale-95 px-4"
                          onClick={() => window.location.href = '/coming-soon'}
                        >
                          Read Docs
                          <ArrowRight className="ml-0 h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="integration" className="border-white/10">
                  <AccordionTrigger className="hover:no-underline group">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center transition-all duration-300">
                        <ArrowDown className="h-5 w-5 text-white/70 transition-transform duration-300 
                                           group-hover:text-white" />
                      </div>
                      <h4 className="text-xl font-medium text-white/90 transition-all duration-300 
                                    group-hover:text-white group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]">
                        Solana Options Standard SDK
                      </h4>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-white/70">
                    <div className="pt-4 leading-relaxed">
                      An open source program development kit (SDK) consisting of different libraries, modules, and pre-made mathematical derivative functions that allow developers to build or implement custom or standardized option contracts on Solana.
                      <div className="flex items-center mt-4">
                        <Button 
                          size="sm"
                          className="bg-[#FFFFFF] hover:bg-[#FFFFFF]/90 text-black transition-all duration-300 
                                     hover:drop-shadow-[0_0_0.1rem_#FFFFFF] hover:scale-95 px-4"
                          onClick={() => window.open('https://github.com/EpicentralLabs', '_blank')}
                        >
                          GitHub
                          <ArrowRight className="ml-0 h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="community" className="border-white/10">
                  <AccordionTrigger className="hover:no-underline group">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center transition-all duration-300">
                        <ArrowDown className="h-5 w-5 text-white/70 transition-transform duration-300 
                                           group-hover:text-white" />
                      </div>
                      <h4 className="text-xl font-medium text-white/90 transition-all duration-300 
                                    group-hover:text-white group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]">
                        Epicentral DAO
                      </h4>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-white/70">
                    <div className="pt-4 leading-relaxed">
                      Short for &ldquo;Decentralized Autonomous Organization&rdquo;, is considered a shared treasury or bank account and is stored on the blockchain. This is the governing body of the Epicentral Labs Protocol. 
                      The Epicentral DAO is strictly community-driven, where members can propose and vote on changes to the protocol using the <span className="text-[#4a85ff]">$LABS</span> token.
                      <div className="flex items-center mt-4">
                        <Link href="/dao">
                          <Button 
                            size="sm"
                            className="bg-[#FFFFFF] hover:bg-[#FFFFFF]/90 text-black transition-all duration-300 
                                       hover:drop-shadow-[0_0_0.1rem_#FFFFFF] hover:scale-95 px-4"
                          >
                            Join DAO
                            <ArrowRight className="ml-0 h-4 w-4" />
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
