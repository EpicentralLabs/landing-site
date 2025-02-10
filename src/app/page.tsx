import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, ArrowDown } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Top Navigation */}
      <nav className="w-full backdrop-blur-sm z-50 bg-black/20">
        <div className="container mx-auto px-4">
          <div className="flex items-center h-16">
            {/* Logo */}
            <div className="flex-1">
              <Link href="/" className="flex items-center gap-2 whitespace-nowrap">
                <Image 
                  src="/EpicentralLogo.png"
                  alt="Epicentral Logo"
                  width={32}
                  height={32}
                  className="object-contain"
                />
                <span className="text-sm font-extralight opacity-100 hover:opacity-100 transition-all hover:drop-shadow-[0_0_0.4rem_#ffffff70] duration-300">
                  Epicentral Labs
                </span>
              </Link>
            </div>
            
            {/* Centered navigation links */}
            <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center space-x-8">
              <Link 
                href="/"
                className="text-sm font-medium opacity-60 hover:opacity-100 transition-all hover:drop-shadow-[0_0_0.3rem_#ffffff70] duration-300"
              >
                Home
              </Link>
              <Link 
                href="/docs"
                className="text-sm font-medium opacity-60 hover:opacity-100 transition-all hover:drop-shadow-[0_0_0.3rem_#ffffff70] duration-300"
              >
                Docs
              </Link>
            </div>
            
            {/* Launch App button */}
            <div className="flex-1 flex justify-end">
              <Button 
                size="sm" 
                className="bg-[#FFFFFF] hover:bg-[#FFFFFF]/90 transition-all duration-300 
                           hover:drop-shadow-[0_0_0.1rem_#FFFFFF] hover:scale-105"
              >
                Launch App
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="flex-1 flex items-center justify-center min-h-[80vh] pt-32">
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
                className="bg-[#FFFFFF] hover:bg-[#FFFFFF]/90 transition-all duration-300"
              >
                Solana OPX
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="transition-all duration-300"
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
              <div className="max-w-4xl mx-auto">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 place-items-center">
                  <div className="text-white/50 hover:text-white/80 transition-colors duration-300">
                    <Image 
                      src="/1.png"
                      alt="Partner Logo 1"
                      width={180}
                      height={60}
                      className="object-contain opacity-50 hover:opacity-100 transition-opacity duration-300"
                    />
                  </div>
                  <div className="text-white/50 hover:text-white/80 transition-colors duration-300">
                    <Image 
                      src="/2.png"
                      alt="Partner Logo 2"
                      width={180}
                      height={60}
                      className="object-contain opacity-50 hover:opacity-100 transition-opacity duration-300"
                    />
                  </div>
                  <div className="text-white/50 hover:text-white/80 transition-colors duration-300">
                    <Image 
                      src="/3.png"
                      alt="Partner Logo 3"
                      width={180}
                      height={60}
                      className="object-contain opacity-50 hover:opacity-100 transition-opacity duration-300"
                    />
                  </div>
                  <div className="text-white/50 hover:text-white/80 transition-colors duration-300">
                    <Image 
                      src="/4.png"
                      alt="Partner Logo 4"
                      width={180}
                      height={60}
                      className="object-contain opacity-50 hover:opacity-100 transition-opacity duration-300"
                    />
                  </div>
                  <div className="text-white/50 hover:text-white/80 transition-colors duration-300">
                    <Image 
                      src="/5.png"
                      alt="Partner Logo 5"
                      width={180}
                      height={60}
                      className="object-contain opacity-50 hover:opacity-100 transition-opacity duration-300"
                    />
                  </div>
                  <div className="text-white/50 hover:text-white/80 transition-colors duration-300">
                    <Image 
                      src="/6.png"
                      alt="Partner Logo 6"
                      width={180}
                      height={60}
                      className="object-contain opacity-50 hover:opacity-100 transition-opacity duration-300"
                    />
                  </div>
                  <div className="text-white/50 hover:text-white/80 transition-colors duration-300">
                    <Image 
                      src="/7.png"
                      alt="Partner Logo 7"
                      width={180}
                      height={60}
                      className="object-contain opacity-50 hover:opacity-100 transition-opacity duration-300"
                    />
                  </div>
                  <div className="text-white/50 hover:text-white/80 transition-colors duration-300">
                    <Image 
                      src="/8.png"
                      alt="Partner Logo 8"
                      width={180}
                      height={60}
                      className="object-contain opacity-50 hover:opacity-100 transition-opacity duration-300"
                    />
                  </div>
                  <div className="text-white/50 hover:text-white/80 transition-colors duration-300">
                    <Image 
                      src="/9.png"
                      alt="Partner Logo 9"
                      width={180}
                      height={60}
                      className="object-contain opacity-50 hover:opacity-100 transition-opacity duration-300"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* About Section */}
      <div className="container mx-auto px-4 py-48">
        <div className="max-w-4xl mx-auto space-y-16">
          {/* Gradient Divider */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent blur-sm"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"></div>
            <div className="h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent relative"></div>
          </div>

          {/* What is Epicentral Labs? Container */}
          <div className="bg-black/30 backdrop-blur-md border border-white/10 rounded-xl p-8 md:p-12">
            <div className="space-y-6 text-left">
              <h3 className="text-2xl font-light text-white/90">
                What is Epicentral Labs?
              </h3>
              <p className="text-lg leading-relaxed text-white/70">
              Epicentral Labs is a community-governed protocol focused on improving decentralized
              finance (DeFi) infrastructure on Solana through program governance. The name "Epicentral" is
              inspired by seismology, symbolizing the aim to be a focal point for innovation in finance and
              blockchain development.
              </p>
            </div>
          </div>

          {/* Vision and Offerings Container */}
          <div className="bg-black/30 backdrop-blur-md border border-white/10 rounded-xl p-8 md:p-12">
            {/* Content */}
            <div className="space-y-12 text-center md:text-left">
              <div className="space-y-6">
                <h3 className="text-2xl font-light text-white/90">
                  Our Vision
                </h3>
                <p className="text-lg leading-relaxed text-white/70">
                  We envision a future where decentralized governance is accessible, efficient, and secure. Through innovative 
                  technology and community collaboration, we're building the infrastructure needed to empower the next generation 
                  of DeFi protocols.
                </p>
              </div>

              {/* Gradient Divider */}
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent blur-sm"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"></div>
                <div className="h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent relative"></div>
              </div>

              <div className="space-y-6">
                <h3 className="text-2xl font-light text-white/90">
                  What We Offer
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Governance Framework Card */}
                  <div 
                    className="group bg-black/30 hover:bg-black/40 backdrop-blur-md border border-white/10 
                             hover:border-white/20 rounded-xl transition-all duration-300 cursor-pointer"
                    tabIndex={0}
                  >
                    <div className="flex justify-between items-center p-6">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center">
                          <ArrowDown className="h-5 w-5 text-white/70 transition-transform duration-300 
                                               group-focus:-rotate-180 group-hover:text-white/90" />
                        </div>
                        <h4 className="text-xl font-medium text-white/90 group-hover:text-white">Governance Framework</h4>
                      </div>
                    </div>
                    <div className="overflow-hidden transition-all duration-500 ease-in-out max-h-0 group-focus:max-h-[300px]">
                      <div className="p-6 pt-0 text-white/70 group-hover:text-white/80 space-y-4">
                        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
                        <p className="leading-relaxed">
                          Advanced voting mechanisms and proposal systems designed to streamline decision-making processes in DAOs and DeFi protocols.
                          Our framework includes customizable voting parameters, delegation systems, and transparent execution of passed proposals.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Security Card */}
                  <div 
                    className="group bg-black/30 hover:bg-black/40 backdrop-blur-md border border-white/10 
                             hover:border-white/20 rounded-xl transition-all duration-300 cursor-pointer"
                    tabIndex={0}
                  >
                    <div className="flex justify-between items-center p-6">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center">
                          <ArrowDown className="h-5 w-5 text-white/70 transition-transform duration-300 
                                               group-focus:-rotate-180 group-hover:text-white/90" />
                        </div>
                        <h4 className="text-xl font-medium text-white/90 group-hover:text-white">Security</h4>
                      </div>
                    </div>
                    <div className="overflow-hidden transition-all duration-500 ease-in-out max-h-0 group-focus:max-h-[300px]">
                      <div className="p-6 pt-0 text-white/70 group-hover:text-white/80 space-y-4">
                        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
                        <p className="leading-relaxed">
                          Battle-tested smart contracts and multi-layer security measures ensuring the safety of governance processes and assets.
                          Including audit-ready code, time-locks, and multi-signature capabilities for critical operations.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Integration Card */}
                  <div 
                    className="group bg-black/30 hover:bg-black/40 backdrop-blur-md border border-white/10 
                             hover:border-white/20 rounded-xl transition-all duration-300 cursor-pointer"
                    tabIndex={0}
                  >
                    <div className="flex justify-between items-center p-6">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center">
                          <ArrowDown className="h-5 w-5 text-white/70 transition-transform duration-300 
                                               group-focus:-rotate-180 group-hover:text-white/90" />
                        </div>
                        <h4 className="text-xl font-medium text-white/90 group-hover:text-white">Integration</h4>
                      </div>
                    </div>
                    <div className="overflow-hidden transition-all duration-500 ease-in-out max-h-0 group-focus:max-h-[300px]">
                      <div className="p-6 pt-0 text-white/70 group-hover:text-white/80 space-y-4">
                        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
                        <p className="leading-relaxed">
                          Seamless integration capabilities with existing DeFi protocols, making it easy to implement governance solutions.
                          Featuring standardized interfaces, comprehensive documentation, and developer support for quick implementation.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Community Tools Card */}
                  <div 
                    className="group bg-black/30 hover:bg-black/40 backdrop-blur-md border border-white/10 
                             hover:border-white/20 rounded-xl transition-all duration-300 cursor-pointer"
                    tabIndex={0}
                  >
                    <div className="flex justify-between items-center p-6">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center">
                          <ArrowDown className="h-5 w-5 text-white/70 transition-transform duration-300 
                                               group-focus:-rotate-180 group-hover:text-white/90" />
                        </div>
                        <h4 className="text-xl font-medium text-white/90 group-hover:text-white">Community Tools</h4>
                      </div>
                    </div>
                    <div className="overflow-hidden transition-all duration-500 ease-in-out max-h-0 group-focus:max-h-[300px]">
                      <div className="p-6 pt-0 text-white/70 group-hover:text-white/80 space-y-4">
                        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
                        <p className="leading-relaxed">
                          Comprehensive suite of community management tools empowering DAOs to effectively coordinate and grow their ecosystems.
                          Including analytics dashboards, communication channels, and reputation systems.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Network Graph Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-light mb-4 drop-shadow-[0_0_0.3rem_#ffffff70]">
              Explore our Network
            </h2>
          </div>
          
          <div className="w-full aspect-[16/9] rounded-xl overflow-hidden border border-white/10">
            <iframe
              src="https://widget.vybenetwork.com/network-graph?address=LABSh5DTebUcUbEoLzXKCiXFJLecDFiDWiBGUU1GpxR&entity=token&connectionNode=program"
              title="vybe-network-graph"
              allow="clipboard-write"
              className="w-full h-full"
            ></iframe>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-neutral-800 py-8">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <span className="text-sm text-muted-foreground">
              © 2024 Asset Defense. All rights reserved.
            </span>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm">
                Terms
              </Button>
              <Button variant="ghost" size="sm">
                Privacy
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
