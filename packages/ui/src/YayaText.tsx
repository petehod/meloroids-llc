import { TextSize, FontWeight, getTextStyles } from "./utils/textStyles.utils";
interface YayaTextProps {
  type: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p";
  className?: string;
  children: React.ReactNode;
  textSize?: TextSize;
  fontWeight?: FontWeight;
}

export const YayaText: React.FC<YayaTextProps> = ({
  type,
  className = "",
  children,
  textSize,
  fontWeight
}) => {
  const baseStyles = getTextStyles(type, textSize, fontWeight);

  const combinedStyles = `${baseStyles} ${className}`.trim();

  const Component = type;

  return <Component className={combinedStyles}>{children}</Component>;
};
