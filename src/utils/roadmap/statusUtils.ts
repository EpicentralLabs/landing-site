import { StatusChoice } from "@/types/roadmap/RoadmapCardProps";

/**
 * Helper function to get the background color for a roadmap item's status.
 * @param status - The status of the item (completed, in-progress, todo, or cancelled).
 * @returns A string representing the background color class for the status.
 */
export const getItemStatusColor = (status?: StatusChoice) => {
  switch (status) {
    case "completed":
      return "bg-green-500"; // Green for completed items
    case "in-progress":
      return "bg-blue-500"; // Blue for in-progress items
    case "todo":
      return "bg-white/20"; // Light gray for todo items
    case "cancelled":
      return "bg-red-500"; // Red for cancelled items
    default:
      return "bg-white/20"; // Default fallback color for undefined status
  }
};

/**
 * Helper function to get the background color for the roadmap card based on its status.
 * @param status - The overall status of the roadmap card (completed, in-progress, todo, or cancelled).
 * @returns A string representing the background color class for the status.
 */
export const getStatusColor = (status: StatusChoice) => {
  switch (status) {
    case "completed":
      return "bg-green-500"; // Green for completed status
    case "in-progress":
      return "bg-blue-500"; // Blue for in-progress status
    case "cancelled":
      return "bg-red-500"; // Red for cancelled status
    default:
      return "bg-white/20"; // Default fallback color for unknown or todo status
  }
};

/**
 * Helper function to get the textual representation of the status for the roadmap card.
 * @param status - The overall status of the roadmap card (completed, in-progress, todo, or cancelled).
 * @returns A string representing the textual status of the roadmap card (e.g., "Completed", "In Progress", "Cancelled").
 */
export const getStatusText = (status: StatusChoice) => {
  switch (status) {
    case "completed":
      return "Completed"; // Text for completed status
    case "in-progress":
      return "In Progress"; // Text for in-progress status
    case "cancelled":
      return "Cancelled"; // Text for cancelled status
    case "todo":
      return "Todo"; // Text for todo status
    default:
      return "Unknown Status"; // Default text for undefined or unknown status
  }
};
