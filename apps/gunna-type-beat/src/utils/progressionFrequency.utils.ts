import type { BackgroundColors } from "@repo/ui/Colors";

export const getColorByFrequency = (frequency: number): BackgroundColors => {
  return frequency >= 15
    ? "bg-primary"
    : frequency >= 10
      ? "bg-green"
      : "bg-red";
};
