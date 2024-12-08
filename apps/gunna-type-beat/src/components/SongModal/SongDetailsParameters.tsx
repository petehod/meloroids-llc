import { YayaText } from "@repo/ui/YayaText";

interface SongDetailsParametersProps {
  parameters: string[];
}

export const SongDetailsParameters = ({
  parameters
}: SongDetailsParametersProps) => {
  return (
    <ul className="flex flex-col gap-2 mb-6">
      {parameters.map((param, index) => (
        <li key={param}>
          <YayaText
            className={index === parameters.length - 1 ? "ml-4" : ""}
            type="p"
          >
            {param}
          </YayaText>
        </li>
      ))}
    </ul>
  );
};
