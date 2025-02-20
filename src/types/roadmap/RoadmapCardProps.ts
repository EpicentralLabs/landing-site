/**
 * Enum representing the possible statuses of a roadmap item.
 * - Completed: The item has been finished.
 * - InProgress: The item is currently being worked on.
 * - Todo: The item has not been started yet.
 */
export enum StatusChoice {
    Completed = "completed",
    InProgress = "in-progress",
    Todo = "todo",
  }
  
  /**
   * Enum representing the type of a roadmap item.
   * - Community: Items related to the community, growth, and ecosystem.
   * - Technical: Items related to technical infrastructure, protocols, or systems.
   */
  export enum ItemType {
    Community = "community",
    Technical = "technical",
  }
  
  /**
   * Interface representing a single roadmap item.
   */
  export interface RoadmapItem {
    /**
     * The description or name of the item.
     */
    text: string;
  
    /**
     * The type of the item, indicating whether it is related to the community or technical aspects.
     */
    type: ItemType;
  
    /**
     * The status of the item, indicating its progress.
     */
    status: StatusChoice;
  }
  
  /**
   * Interface representing the properties of a roadmap card.
   */
  export interface RoadmapCardProps {
    /**
     * The quarter or time period for this roadmap card (e.g., Q1 2025).
     */
    quarter: string;
  
    /**
     * The title of the roadmap card (e.g., "DAO & Community Growth").
     */
    title: string;
  
    /**
     * The overall status of the roadmap card (e.g., Completed, In Progress, or Todo).
     */
    status: StatusChoice;
  
    /**
     * A brief description or overview of what this roadmap card represents.
     */
    description: string;
  
    /**
     * A list of items associated with this roadmap card, typically divided into community and technical categories.
     */
    items: RoadmapItem[];
  }
  