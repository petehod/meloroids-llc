import type { BackgroundColors } from "@repo/ui/Colors";

export const getColorByFrequency = (frequency: number): BackgroundColors => {
  return frequency > 20 ? "bg-green" : frequency > 10 ? "bg-primary" : "bg-red";
};
