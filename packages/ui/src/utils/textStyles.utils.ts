export type TextSize =
  | "0.875"
  | "1"
  | "1.125"
  | "1.25"
  | "1.5"
  | "1.75"
  | "2"
  | "2.5"
  | "3"
  | "4";
export type FontType = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p";
export type FontWeight =
  | "thin"
  | "extralight"
  | "light"
  | "normal"
  | "medium"
  | "semibold"
  | "bold"
  | "extrabold"
  | "black";
export const getTextStyles = (
  type: FontType,
  fontSize?: TextSize,
  fontWeight?: FontWeight
): string => {
  const size = fontSize ? `text-${fontSize}` : "";
  const weight = fontWeight ? `font-${fontWeight}` : "";

  switch (type) {
    case "h1":
      return `${size || "text-3"} ${weight || "font-bold"}`.trim();
    case "h2":
      return `${size || "text-2"} ${weight || "font-semibold"}`.trim();
    case "h3":
      return `${size || "text-1.5"} ${weight || "font-medium"}`.trim();
    case "h4":
      return `${size || "text-1.125"} ${weight || "font-medium"}`.trim();
    case "h5":
      return `${size || "text-1"} ${weight || "font-normal"}`.trim();
    case "h6":
      return `${size || "text-0.875"} ${weight || "font-normal"}`.trim();
    case "p":
      return `${size || "text-1"} ${weight || "font-normal"}`.trim();
    default:
      return "";
  }
};
