import type { BackgroundColors, TextColors } from "@repo/ui/Colors";

interface EmphasizedTextProps {
  text: string;
  backgroundColor?: BackgroundColors;
  textColor?: TextColors;
}

export const EmphasizedText = ({
  text,
  backgroundColor = "bg-primary",
  textColor = "text-white"
}: EmphasizedTextProps) => {
  return (
    <span className={`bg-primary rounded ${backgroundColor} ${textColor} px-4`}>
      {text}
    </span>
  );
};
