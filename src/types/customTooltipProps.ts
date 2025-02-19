 /**
   * The data to display in the tooltip.
   * It is an array of objects, where each object contains a payload object
   * with a `name` (string), `amount` (string), and `value` (number).
   */

export interface CustomTooltipProps {
    active?: boolean;
    payload?: Array<{
      payload: {
        name: string;
        amount: string;
        value: number;
      };
    }>;
  }