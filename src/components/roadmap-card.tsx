"use client";
import { RoadmapCardProps } from "@/types/roadmap/RoadmapCardProps";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { sortItems } from "@/utils/roadmap/sortRoadmapItems";
import { getItemStatusColor, getStatusColor, getStatusText } from "@/utils/roadmap/statusUtils";

export function RoadmapCard({
  quarter,
  title,
  status,
  description,
  items
}: RoadmapCardProps) {
  const communityItems = sortItems(items.filter(item => item.type === "community"));
  const technicalItems = sortItems(items.filter(item => item.type === "technical"));

  return (
    <TooltipProvider delayDuration={200}>
      <div className="relative bg-black/30 backdrop-blur-md border border-white/10 rounded-xl p-8 transform hover:-translate-y-1 transition-all duration-300">
        {/* Quarter Label */}
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-2xl font-light text-white/90 drop-shadow-[0_0_0.3rem_#ffffff70]">{quarter}</h3>
          <span
            className={`px-3 py-1 rounded-full text-sm ${getStatusColor(status)} bg-opacity-20 text-white`}
          >
            {getStatusText(status)}
          </span>
        </div>

        {/* Title and Description */}
        <div className="space-y-4 mb-8">
          <h4 className="text-xl font-medium text-white/90">{title}</h4>
          <p className="text-white/70">{description}</p>
        </div>

        {/* Two-Column Layout for Community and Technical */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* DAO & Community Growth */}
          <div>
            <Tooltip>
              <TooltipTrigger asChild>
                <h4 className="text-white/90 font-medium mb-4 border-b border-dotted border-white/20 w-fit cursor-help drop-shadow-[0_0_0.3rem_#ffffff70]">
                  DAO & Community Growth
                </h4>
              </TooltipTrigger>
              <TooltipContent>
                Initiatives focused on growing the EpicentralDAO community, improving governance, and expanding our ecosystem partnerships.
              </TooltipContent>
            </Tooltip>
            <ul className="space-y-3">
              {communityItems.map(item => (
                <li key={item.text} className="flex items-center gap-2">
                  <div className={`w-2 h-2 rounded-full ${getItemStatusColor(item.status)}`}></div>
                  <span className="text-white/70">{item.text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Technical Infrastructure */}
          <div>
            <Tooltip>
              <TooltipTrigger asChild>
                <h4 className="text-white/90 font-medium mb-4 border-b border-dotted border-white/20 w-fit cursor-help drop-shadow-[0_0_0.3rem_#ffffff70]">
                  Technical Infrastructure
                </h4>
              </TooltipTrigger>
              <TooltipContent>
                Development of core protocols, smart contracts, and user interfaces that power the Epicentral Labs ecosystem.
              </TooltipContent>
            </Tooltip>
            <ul className="space-y-3">
              {technicalItems.map(item => (
                <li key={item.text} className="flex items-center gap-2">
                  <div className={`w-2 h-2 rounded-full ${getItemStatusColor(item.status)}`}></div>
                  <span className="text-white/70">{item.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </TooltipProvider>
  );
}
