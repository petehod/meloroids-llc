import { YayaText } from "@repo/ui/YayaText";

interface SongDetailsParametersProps {
  parameters: string[];
}

export const SongDetailsParameters = ({
  parameters
}: SongDetailsParametersProps) => {
  return (
    <section>
      <YayaText className="mb-2" type="h3">
        Parameters
      </YayaText>
      <ul className="flex flex-col gap-2 mb-6">
        {parameters.map((param) => (
          <li key={`${param} ${Math.random()}`}>
            <YayaText type="p">{param}</YayaText>
          </li>
        ))}
      </ul>
    </section>
  );
};
