/* eslint-disable react/no-unescaped-entities */
"use client"

import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowDown, Menu } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { useState } from "react";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToAbout = () => {
    document.getElementById('about-section')?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Top Navigation */}
      <nav className="w-full backdrop-blur-sm z-50 bg-black/20 relative">
        {/* Remove the border-b and adjust the fade-out effect */}
        <div className="absolute -bottom-16 left-0 right-0 h-16 bg-gradient-to-b from-black/20 via-black/10 to-transparent pointer-events-none"></div>
        
        <div className="container mx-auto px-4">
          <div className="flex items-center h-16">
            {/* Logo */}
            <div className="flex-1">
              <Link href="/" className="flex items-center gap-2 whitespace-nowrap">
                <Image 
                  src="/EpicentralLogo.png"
                  alt="Epicentral Logo"
                  width={27}
                  height={27}
                  className="object-contain"
                />
                <span className="text-base font-medium opacity-100 hover:opacity-100 transition-all hover:drop-shadow-[0_0_0.4rem_#ffffff70] duration-300">
                  Epicentral Labs
                </span>
              </Link>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <Link 
                href="/"
                className="text-sm font-medium opacity-60 hover:opacity-100 transition-all hover:drop-shadow-[0_0_0.3rem_#ffffff70] duration-300"
              >
                Home
              </Link>
              
              {/* Vertical Gradient Divider */}
              <div className="relative h-4 w-px">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/20 to-transparent blur-sm"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/40 to-transparent"></div>
                <div className="h-full w-px bg-gradient-to-b from-transparent via-white/20 to-transparent relative"></div>
              </div>

              <Link 
                href="/docs"
                className="text-sm font-medium opacity-60 hover:opacity-100 transition-all hover:drop-shadow-[0_0_0.3rem_#ffffff70] duration-300"
              >
                Docs
              </Link>

              {/* Vertical Gradient Divider */}
              <div className="relative h-4 w-px">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/20 to-transparent blur-sm"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/40 to-transparent"></div>
                <div className="h-full w-px bg-gradient-to-b from-transparent via-white/20 to-transparent relative"></div>
              </div>

              {/* Social Icons */}
              <div className="flex items-center space-x-6">
                <Link 
                  href="https://x.com/EpicentralLabs" 
                  target="_blank"
                  className="text-white/70 hover:text-white transition-all duration-300 
                             hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]"
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="h-4 w-4 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </Link>

                <Link 
                  href="https://t.me/EpicentralLabs"
                  target="_blank"
                  className="text-white/70 hover:text-white transition-all duration-300 
                             hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]"
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="h-4 w-4 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                  </svg>
                </Link>

                <Link 
                  href="https://github.com/EpicentralLabs" 
                  target="_blank"
                  className="text-white/70 hover:text-white transition-all duration-300 
                             hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]"
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="h-4 w-4 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
                  </svg>
                </Link>

                <Link 
                  href="https://discord.gg/5asAuY2sR8" 
                  target="_blank"
                  className="text-white/70 hover:text-white transition-all duration-300 
                             hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]"
                >
                  <svg
                    viewBox="0 -28.5 256 256"
                    className="h-4 w-4 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M216.856339,16.5966031 C200.285002,8.84328665 182.566144,3.2084988 164.041564,0 C161.766523,4.11318106 159.108624,9.64549908 157.276099,14.0464379 C137.583995,11.0849896 118.072967,11.0849896 98.7430163,14.0464379 C96.9108417,9.64549908 94.1925838,4.11318106 91.8971895,0 C73.3526068,3.2084988 55.6133949,8.86399117 39.0420583,16.6376612 C5.61752293,67.146514 -3.4433191,116.400813 1.08711069,164.955721 C23.2560196,181.510915 44.7403634,191.567697 65.8621325,198.148576 C71.0772151,190.971126 75.7283628,183.341335 79.7352139,175.300261 C72.104019,172.400575 64.7949724,168.822202 57.8887866,164.667963 C59.7209612,163.310589 61.5131304,161.891452 63.2445898,160.431257 C105.36741,180.133187 151.134928,180.133187 192.754523,160.431257 C194.506336,161.891452 196.298154,163.310589 198.110326,164.667963 C191.183787,168.842556 183.854737,172.420929 176.223542,175.320965 C180.230393,183.341335 184.861538,190.991831 190.096624,198.16893 C211.238746,191.588051 232.743023,181.531619 254.911949,164.955721 C260.227747,108.668201 245.831087,59.8662432 216.856339,16.5966031 Z M85.4738752,135.09489 C72.8290281,135.09489 62.4592217,123.290155 62.4592217,108.914901 C62.4592217,94.5396472 72.607595,82.7145587 85.4738752,82.7145587 C98.3405064,82.7145587 108.709962,94.5189427 108.488529,108.914901 C108.508531,123.290155 98.3405064,135.09489 85.4738752,135.09489 Z M170.525237,135.09489 C157.88039,135.09489 147.510584,123.290155 147.510584,108.914901 C147.510584,94.5396472 157.658606,82.7145587 170.525237,82.7145587 C183.391518,82.7145587 193.761324,94.5189427 193.539891,108.914901 C193.539891,123.290155 183.391518,135.09489 170.525237,135.09489 Z" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-white hover:bg-white/10 w-10 h-10"
              >
                <Menu className="h-6 w-6" />
              </Button>
            </div>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden fixed inset-x-0 top-16 bg-black/60 backdrop-blur-lg border-t border-white/10 animate-in fade-in slide-in-from-top duration-300">
              <div className="px-6 py-6 space-y-6">
                <Link 
                  href="/"
                  className="block text-base font-medium opacity-80 hover:opacity-100 transition-all 
                             hover:drop-shadow-[0_0_0.3rem_#ffffff70] duration-300"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Home
                </Link>
                
                {/* Gradient Divider */}
                <div className="relative w-full">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent blur-sm"></div>
                  <div className="h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent relative"></div>
                </div>
                
                <Link 
                  href="/docs"
                  className="block text-base font-medium opacity-80 hover:opacity-100 transition-all 
                             hover:drop-shadow-[0_0_0.3rem_#ffffff70] duration-300"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Docs
                </Link>

                {/* Gradient Divider */}
                <div className="relative w-full">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent blur-sm"></div>
                  <div className="h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent relative"></div>
                </div>

                {/* Social Icons in Mobile Menu */}
                <div className="flex items-center space-x-8 pt-2">
                  <Link 
                    href="https://x.com/EpicentralLabs" 
                    target="_blank"
                    className="text-white/70 hover:text-white transition-all duration-300 
                               hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      className="h-5 w-5 fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  </Link>

                  <Link 
                    href="https://t.me/EpicentralLabs"
                    target="_blank"
                    className="text-white/70 hover:text-white transition-all duration-300 
                               hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      className="h-5 w-5 fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                    </svg>
                  </Link>

                  <Link 
                    href="https://github.com/EpicentralLabs" 
                    target="_blank"
                    className="text-white/70 hover:text-white transition-all duration-300 
                               hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      className="h-5 w-5 fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
                    </svg>
                  </Link>

                  <Link 
                    href="https://discord.gg/5asAuY2sR8"
                    target="_blank"
                    className="text-white/70 hover:text-white transition-all duration-300 
                               hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]"
                  >
                    <svg
                      viewBox="0 -28.5 256 256"
                      className="h-5 w-5 fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M216.856339,16.5966031 C200.285002,8.84328665 182.566144,3.2084988 164.041564,0 C161.766523,4.11318106 159.108624,9.64549908 157.276099,14.0464379 C137.583995,11.0849896 118.072967,11.0849896 98.7430163,14.0464379 C96.9108417,9.64549908 94.1925838,4.11318106 91.8971895,0 C73.3526068,3.2084988 55.6133949,8.86399117 39.0420583,16.6376612 C5.61752293,67.146514 -3.4433191,116.400813 1.08711069,164.955721 C23.2560196,181.510915 44.7403634,191.567697 65.8621325,198.148576 C71.0772151,190.971126 75.7283628,183.341335 79.7352139,175.300261 C72.104019,172.400575 64.7949724,168.822202 57.8887866,164.667963 C59.7209612,163.310589 61.5131304,161.891452 63.2445898,160.431257 C105.36741,180.133187 151.134928,180.133187 192.754523,160.431257 C194.506336,161.891452 196.298154,163.310589 198.110326,164.667963 C191.183787,168.842556 183.854737,172.420929 176.223542,175.320965 C180.230393,183.341335 184.861538,190.991831 190.096624,198.16893 C211.238746,191.588051 232.743023,181.531619 254.911949,164.955721 C260.227747,108.668201 245.831087,59.8662432 216.856339,16.5966031 Z M85.4738752,135.09489 C72.8290281,135.09489 62.4592217,123.290155 62.4592217,108.914901 C62.4592217,94.5396472 72.607595,82.7145587 85.4738752,82.7145587 C98.3405064,82.7145587 108.709962,94.5189427 108.488529,108.914901 C108.508531,123.290155 98.3405064,135.09489 85.4738752,135.09489 Z M170.525237,135.09489 C157.88039,135.09489 147.510584,123.290155 147.510584,108.914901 C147.510584,94.5396472 157.658606,82.7145587 170.525237,82.7145587 C183.391518,82.7145587 193.761324,94.5189427 193.539891,108.914901 C193.539891,123.290155 183.391518,135.09489 170.525237,135.09489 Z" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

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
              >
                Solana OPX
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="transition-all duration-300"
                onClick={scrollToAbout}
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
                    <Image 
                      src="/1.png"
                      alt="Partner Logo 1"
                      width={140}
                      height={45}
                      className="w-[120px] sm:w-[160px] md:w-[180px] object-contain opacity-50 hover:opacity-100 transition-opacity duration-300"
                    />
                  </div>
                  <div className="w-full flex items-center justify-center text-white/50 hover:text-white/80 transition-colors duration-300">
                    <Image 
                      src="/2.png"
                      alt="Partner Logo 2"
                      width={140}
                      height={45}
                      className="w-[120px] sm:w-[160px] md:w-[180px] object-contain opacity-50 hover:opacity-100 transition-opacity duration-300"
                    />
                  </div>
                  <div className="w-full flex items-center justify-center text-white/50 hover:text-white/80 transition-colors duration-300">
                    <Image 
                      src="/3.png"
                      alt="Partner Logo 3"
                      width={140}
                      height={45}
                      className="w-[120px] sm:w-[160px] md:w-[180px] object-contain opacity-50 hover:opacity-100 transition-opacity duration-300"
                    />
                  </div>
                  <div className="w-full flex items-center justify-center text-white/50 hover:text-white/80 transition-colors duration-300">
                    <Image 
                      src="/4.png"
                      alt="Partner Logo 4"
                      width={140}
                      height={45}
                      className="w-[120px] sm:w-[160px] md:w-[180px] object-contain opacity-50 hover:opacity-100 transition-opacity duration-300"
                    />
                  </div>
                  <div className="w-full flex items-center justify-center text-white/50 hover:text-white/80 transition-colors duration-300">
                    <Image 
                      src="/5.png"
                      alt="Partner Logo 5"
                      width={140}
                      height={45}
                      className="w-[120px] sm:w-[160px] md:w-[180px] object-contain opacity-50 hover:opacity-100 transition-opacity duration-300"
                    />
                  </div>
                  <div className="w-full flex items-center justify-center text-white/50 hover:text-white/80 transition-colors duration-300">
                    <Image 
                      src="/6.png"
                      alt="Partner Logo 6"
                      width={140}
                      height={45}
                      className="w-[120px] sm:w-[160px] md:w-[180px] object-contain opacity-50 hover:opacity-100 transition-opacity duration-300"
                    />
                  </div>
                  <div className="w-full flex items-center justify-center text-white/50 hover:text-white/80 transition-colors duration-300">
                    <Image 
                      src="/7.png"
                      alt="Partner Logo 7"
                      width={140}
                      height={45}
                      className="w-[120px] sm:w-[160px] md:w-[180px] object-contain opacity-50 hover:opacity-100 transition-opacity duration-300"
                    />
                  </div>
                  <div className="w-full flex items-center justify-center text-white/50 hover:text-white/80 transition-colors duration-300">
                    <Image 
                      src="/8.png"
                      alt="Partner Logo 8"
                      width={140}
                      height={45}
                      className="w-[120px] sm:w-[160px] md:w-[180px] object-contain opacity-50 hover:opacity-100 transition-opacity duration-300"
                    />
                  </div>
                  <div className="w-full flex items-center justify-center text-white/50 hover:text-white/80 transition-colors duration-300">
                    <Image 
                      src="/9.png"
                      alt="Partner Logo 9"
                      width={140}
                      height={45}
                      className="w-[120px] sm:w-[160px] md:w-[180px] object-contain opacity-50 hover:opacity-100 transition-opacity duration-300"
                    />
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
          <div className="bg-black/30 backdrop-blur-md border border-white/10 rounded-xl p-8 md:p-12 mb-4">
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
                  >
                    Roadmap
                    <ArrowRight className="ml-0 h-4 w-4" />
                  </Button>
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
                        <Button 
                          size="sm"
                          className="bg-[#FFFFFF] hover:bg-[#FFFFFF]/90 text-black transition-all duration-300 
                                     hover:drop-shadow-[0_0_0.1rem_#FFFFFF] hover:scale-95 px-4"
                        >
                          Join DAO
                          <ArrowRight className="ml-0 h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="relative backdrop-blur-sm bg-black/20">
        {/* Top fade effect */}
        <div className="absolute -top-16 left-0 right-0 h-16 bg-gradient-to-t from-black/20 via-black/10 to-transparent pointer-events-none"></div>
        
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col items-center space-y-4">
            {/* Social Links */}
            <div className="flex items-center space-x-6">
              <Link 
                href="https://x.com/EpicentralLabs" 
                target="_blank"
                className="text-white/70 hover:text-white transition-all duration-300 
                           hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-5 w-5 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </Link>

              <Link 
                href="https://t.me/EpicentralLabs"
                target="_blank"
                className="text-white/70 hover:text-white transition-all duration-300 
                           hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-5 w-5 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                </svg>
              </Link>

              <Link 
                href="https://github.com/EpicentralLabs" 
                target="_blank"
                className="text-white/70 hover:text-white transition-all duration-300 
                           hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-5 w-5 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
                </svg>
              </Link>

              <Link 
                href="https://discord.gg/5asAuY2sR8"
                target="_blank"
                className="text-white/70 hover:text-white transition-all duration-300 
                           hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]"
              >
                <svg
                  viewBox="0 -28.5 256 256"
                  className="h-5 w-5 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M216.856339,16.5966031 C200.285002,8.84328665 182.566144,3.2084988 164.041564,0 C161.766523,4.11318106 159.108624,9.64549908 157.276099,14.0464379 C137.583995,11.0849896 118.072967,11.0849896 98.7430163,14.0464379 C96.9108417,9.64549908 94.1925838,4.11318106 91.8971895,0 C73.3526068,3.2084988 55.6133949,8.86399117 39.0420583,16.6376612 C5.61752293,67.146514 -3.4433191,116.400813 1.08711069,164.955721 C23.2560196,181.510915 44.7403634,191.567697 65.8621325,198.148576 C71.0772151,190.971126 75.7283628,183.341335 79.7352139,175.300261 C72.104019,172.400575 64.7949724,168.822202 57.8887866,164.667963 C59.7209612,163.310589 61.5131304,161.891452 63.2445898,160.431257 C105.36741,180.133187 151.134928,180.133187 192.754523,160.431257 C194.506336,161.891452 196.298154,163.310589 198.110326,164.667963 C191.183787,168.842556 183.854737,172.420929 176.223542,175.320965 C180.230393,183.341335 184.861538,190.991831 190.096624,198.16893 C211.238746,191.588051 232.743023,181.531619 254.911949,164.955721 C260.227747,108.668201 245.831087,59.8662432 216.856339,16.5966031 Z M85.4738752,135.09489 C72.8290281,135.09489 62.4592217,123.290155 62.4592217,108.914901 C62.4592217,94.5396472 72.607595,82.7145587 85.4738752,82.7145587 C98.3405064,82.7145587 108.709962,94.5189427 108.488529,108.914901 C108.508531,123.290155 98.3405064,135.09489 85.4738752,135.09489 Z M170.525237,135.09489 C157.88039,135.09489 147.510584,123.290155 147.510584,108.914901 C147.510584,94.5396472 157.658606,82.7145587 170.525237,82.7145587 C183.391518,82.7145587 193.761324,94.5189427 193.539891,108.914901 C193.539891,123.290155 183.391518,135.09489 170.525237,135.09489 Z" />
                </svg>
              </Link>
            </div>

            {/* Copyright Text */}
            <span className="text-sm text-white/60">
              © 2025 Epicentral Labs | Powered by <a href="https://solana.com" className="text-[#4a85ff] hover:drop-shadow-[0_0_8px_#4a85ff] transition-all duration-300">Solana</a>
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}
