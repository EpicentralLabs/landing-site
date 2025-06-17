import { Metadata } from "next";
import { defaultMetadata } from "../../lib/metadata";

export const metadata: Metadata = {
  ...defaultMetadata,
  title: "2025 Roadmap | Epicentral Labs",
  description: "Explore Epicentral Labs' 2025 roadmap - our strategic vision and planned developments for the future.",
  openGraph: {
    ...defaultMetadata.openGraph,
    title: "2025 Roadmap | Epicentral Labs",
    description: "Explore Epicentral Labs' 2025 roadmap - our strategic vision and planned developments for the future.",
  },
  twitter: {
    ...defaultMetadata.twitter,
    title: "2025 Roadmap | Epicentral Labs",
    description: "Explore Epicentral Labs' 2025 roadmap - our strategic vision and planned developments for the future.",
  },
};

export default function RoadmapLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 