"use client"

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { RoadmapCard } from "@/components/roadmap-card";

// Updated data structure
type RoadmapItem = {
  quarter: string;
  title: string;
  status: "completed" | "in-progress" | "upcoming";
  description: string;
  community: {
    title: string;
    items: string[];
  };
  technical: {
    title: string;
    items: string[];
  };
}

const roadmapData: RoadmapItem[] = [
  {
    quarter: "Q1 2024",
    title: "Foundation & Community",
    status: "completed",
    description: "Establishing the core infrastructure and community foundation",
    community: {
      title: "Community Development",
      items: [
        "Launch of $LABS token",
        "Establishment of EpicentralDAO",
        "Community governance framework",
        "Initial partnerships and integrations"
      ]
    },
    technical: {
      title: "Technical Infrastructure",
      items: [
        "Smart contract architecture design",
        "Core protocol development initiation",
        "Security framework establishment",
        "Development environment setup"
      ]
    }
  },
  {
    quarter: "Q2 2024",
    title: "Protocol Development",
    status: "in-progress",
    description: "Building and testing core protocol features",
    community: {
      title: "Community Growth",
      items: [
        "DAO governance implementation",
        "Community ambassador program",
        "Educational content creation",
        "Partnership expansion"
      ]
    },
    technical: {
      title: "Protocol Development",
      items: [
        "Solana OPX development",
        "Smart contract audits",
        "Governance parameter optimization",
        "Enhanced community tools"
      ]
    }
  },
  {
    quarter: "Q3 2024",
    title: "Product Launch",
    status: "upcoming",
    description: "Launching core products and expanding ecosystem",
    community: {
      title: "Product Launch",
      items: [
        "Solana OPX mainnet launch",
        "Advanced trading features",
        "Cross-protocol integrations",
        "Expanded partnership network"
      ]
    },
    technical: {
      title: "Product Launch",
      items: [
        "Product launch preparation",
        "Marketing and outreach",
        "User acquisition strategies",
        "Community engagement"
      ]
    }
  },
  {
    quarter: "Q4 2024",
    title: "Ecosystem Growth",
    status: "upcoming",
    description: "Scaling the ecosystem and enhancing functionality",
    community: {
      title: "Ecosystem Growth",
      items: [
        "Additional financial products",
        "Enhanced governance features",
        "Protocol revenue optimization",
        "Global expansion initiatives"
      ]
    },
    technical: {
      title: "Ecosystem Growth",
      items: [
        "Ecosystem expansion strategies",
        "New product development",
        "Global market penetration",
        "Community feedback integration"
      ]
    }
  }
];

const getStatusColor = (status: RoadmapItem["status"]) => {
  switch (status) {
    case "completed":
      return "bg-green-500";
    case "in-progress":
      return "bg-blue-500";
    case "upcoming":
      return "bg-white/20";
  }
};

const getStatusText = (status: RoadmapItem["status"]) => {
  switch (status) {
    case "completed":
      return "Completed";
    case "in-progress":
      return "In Progress";
    case "upcoming":
      return "Upcoming";
  }
};

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
              This is an overview of the roadmap for 2025 set by the EpicentralDAO.
            </p>
          </div>

          <div className="space-y-12">
            <RoadmapCard
              quarter="Q1 2024"
              title="Foundation & Community"
              status="completed"
              description="Establishing the core infrastructure and community foundation"
              items={[
                { type: "community", text: "Launch of $LABS token", color: "green" },
                { type: "community", text: "Establishment of EpicentralDAO", color: "blue" },
                { type: "community", text: "Community governance framework", color: "purple" },
                { type: "community", text: "Initial partnerships and integrations", color: "grey" },
                { type: "technical", text: "Smart contract architecture design", color: "green" },
                { type: "technical", text: "Core protocol development initiation", color: "blue" },
                { type: "technical", text: "Security framework establishment", color: "purple" },
                { type: "technical", text: "Development environment setup", color: "grey" }
              ]}
            />

            <RoadmapCard
              quarter="Q2 2024"
              title="Protocol Development"
              status="in-progress"
              description="Building and testing core protocol features"
              items={[
                { type: "community", text: "DAO governance implementation" },
                { type: "community", text: "Community ambassador program" },
                { type: "community", text: "Educational content creation" },
                { type: "community", text: "Partnership expansion" },
                { type: "technical", text: "Solana OPX development" },
                { type: "technical", text: "Smart contract audits" },
                { type: "technical", text: "Governance parameter optimization" },
                { type: "technical", text: "Enhanced community tools" }
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