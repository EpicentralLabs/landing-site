import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";
import { Noto_Sans } from 'next/font/google'
import { Analytics } from "@vercel/analytics/react"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const notoSans = Noto_Sans({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '900'],
  variable: '--font-noto-sans',
})

export const defaultMetadata = {
  title: {
    default: "Epicentral Labs | Building the Future of Web3",
    template: "%s | Epicentral Labs"
  },
  description: "Shaping DeFi through governance, unlocking options trading on Solana, and pushing boundaries in decentralized derivatives. Join us as we redefine what's possible in DeFi.",
  keywords: [
    "Epicentral",
    "DeFi",
    "governance", 
    "options trading",
    "Solana",
    "DeFi derivatives",
    "web3",
    "blockchain",
    "crypto"
  ],
  openGraph: {
    title: "Epicentral Labs",
    description: "Shaping DeFi through governance, unlocking options trading on Solana, and pushing boundaries in decentralized derivatives.",
    url: "https://www.epicentrallabs.com/",
    siteName: "Epicentral Labs",
    images: [
      {
        url: "https://www.epicentrallabs.com/EpicentralLabs_Banner_v2.png",
        width: 1500,
        height: 500,
        alt: "Epicentral Open Graph Banner",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Epicentral Labs",
    description: "Shaping DeFi through governance, unlocking options trading on Solana, and pushing boundaries in decentralized derivatives.",
    images: ["https://www.epicentrallabs.com/EpicentralLabs_Banner_v2.png"],
    creator: "@EpicentralLabs",
  },
};

export const metadata: Metadata = defaultMetadata

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${geistSans.variable} ${geistMono.variable} ${notoSans.variable} antialiased`}>
      <body className="font-sans">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          forcedTheme="dark"
        >
          {children}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
