import type { Metadata } from "next";

export const defaultMetadata: Metadata = {
  title: {
    default: "Epicentral Labs",
    template: "%s | Epicentral Labs",
  },
  description:
    "Shaping DeFi through governance, unlocking options trading on Solana, and pushing boundaries in decentralized derivatives. Join us as we redefine what's possible in DeFi.",
  keywords: [
    "Epicentral",
    "DeFi",
    "governance",
    "options trading",
    "Solana",
    "DeFi derivatives",
    "web3",
    "blockchain",
    "crypto",
  ],
  openGraph: {
    title: "Epicentral Labs",
    description:
      "Shaping DeFi through governance, unlocking options trading on Solana, and pushing boundaries in decentralized derivatives.",
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
    description:
      "Shaping DeFi through governance, unlocking options trading on Solana, and pushing boundaries in decentralized derivatives.",
    images: ["https://www.epicentrallabs.com/EpicentralLabs_Banner_v2.png"],
    creator: "@EpicentralLabs",
  },
};