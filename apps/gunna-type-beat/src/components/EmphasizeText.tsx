import type { BackgroundColors } from "@repo/ui/Colors";

interface EmphasizedTextProps {
  text: string;
  backgroundColor?: BackgroundColors;
}

export const EmphasizedText = ({
  text,
  backgroundColor = "bg-primary"
}: EmphasizedTextProps) => {
  return (
    <span className={`bg-primary rounded ${backgroundColor} px-4`}>{text}</span>
  );
};
