import { RoadmapItem, StatusChoice } from "@/types/roadmap/RoadmapCardProps";

// Sorting order for status
const statusOrder: Record<StatusChoice, number> = {
  "completed": 0, // Completed status has the highest priority
  "in-progress": 1, // In-progress comes next
  "todo": 2, // Todo comes last
};

/**
 * Sorts a list of roadmap items by their status and text.
 * @param items - The array of `RoadmapItem` objects to be sorted.
 * @returns A sorted array of `RoadmapItem` objects, first by status (completed, in-progress, todo), 
 *          and then alphabetically by text when statuses are the same.
 */
export const sortItems = (items: RoadmapItem[]) => {
  return items.sort((a, b) => {
    // First, compare by status using the predefined sorting order
    const statusComparison = statusOrder[a.status ?? "todo"] - statusOrder[b.status ?? "todo"];
    if (statusComparison !== 0) return statusComparison; // If statuses are different, return the comparison result

    // If statuses are equal, sort alphabetically by text
    return a.text.localeCompare(b.text);
  });
};
