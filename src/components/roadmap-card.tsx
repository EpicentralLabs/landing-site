"use client"

type ColorChoice = "green" | "blue" | "purple" | "grey";

interface RoadmapCardProps {
  quarter: string;
  title: string;
  status: "completed" | "in-progress" | "upcoming";
  description: string;
  items: {
    text: string;
    type: "community" | "technical";
    color?: ColorChoice; // Now only accepts specific colors
  }[];
}

const getBulletColor = (color?: ColorChoice) => {
  switch (color) {
    case "green":
      return "bg-green-500";
    case "blue":
      return "bg-blue-500";
    case "purple":
      return "bg-purple-500";
    case "grey":
      return "bg-white/20";
    default:
      return "bg-white/20"; // Default color if none specified
  }
};

const getStatusColor = (status: RoadmapCardProps["status"]) => {
  switch (status) {
    case "completed":
      return "bg-green-500";
    case "in-progress":
      return "bg-blue-500";
    case "upcoming":
      return "bg-white/20";
  }
};

const getStatusText = (status: RoadmapCardProps["status"]) => {
  switch (status) {
    case "completed":
      return "Completed";
    case "in-progress":
      return "In Progress";
    case "upcoming":
      return "Upcoming";
  }
};

export function RoadmapCard({
  quarter,
  title,
  status,
  description,
  items
}: RoadmapCardProps) {
  const communityItems = items.filter(item => item.type === "community");
  const technicalItems = items.filter(item => item.type === "technical");

  return (
    <div className="relative bg-black/30 backdrop-blur-md border border-white/10 rounded-xl p-8 transform hover:-translate-y-1 transition-all duration-300">
      {/* Quarter Label */}
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-2xl font-light text-white/90">{quarter}</h3>
        <span
          className={`px-3 py-1 rounded-full text-sm ${getStatusColor(
            status
          )} bg-opacity-20 text-white`}
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
        {/* Community Development */}
        <div>
          <h4 className="text-white/90 font-medium mb-4 flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-purple-500"></div>
            Community Development
          </h4>
          <ul className="space-y-3">
            {items.filter(item => item.type === "community").map((item, index) => (
              <li key={index} className="flex items-center gap-2">
                <div className={`w-2 h-2 rounded-full ${item.color ? `bg-${item.color}-500` : 'bg-white/20'}`}></div>
                <span className="text-white/70">{item.text}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Technical Infrastructure */}
        <div>
          <h4 className="text-white/90 font-medium mb-4 flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-purple-500"></div>
            Technical Infrastructure
          </h4>
          <ul className="space-y-3">
            {items.filter(item => item.type === "technical").map((item, index) => (
              <li key={index} className="flex items-center gap-2">
                <div className={`w-2 h-2 rounded-full ${item.color ? `bg-${item.color}-500` : 'bg-white/20'}`}></div>
                <span className="text-white/70">{item.text}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
} 