import { Metadata } from "next";

export const metadata: Metadata = {
  title: "2025 Roadmap | Epicentral Labs",
  description: "Explore Epicentral Labs' 2025 roadmap - our strategic vision and planned developments for the future.",
  openGraph: {
    title: "2025 Roadmap | Epicentral Labs",
    description: "Explore Epicentral Labs' 2025 roadmap - our strategic vision and planned developments for the future.",
    type: "website",
  },
  twitter: {
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