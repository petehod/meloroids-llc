import { generateProgressionsInAllKeys } from "@repo/chord-progressions/generate-progressions";
import type { EnteredChordProgression } from "@repo/chord-progressions/generate-progressions";
import { YayaText } from "@repo/ui/YayaText";

interface SongDetailsProgressionInAllKeysProps {
  progression: EnteredChordProgression;
}

export const SongDetailsProgressionInAllKeys = ({
  progression
}: SongDetailsProgressionInAllKeysProps) => {
  const allKeys = generateProgressionsInAllKeys(progression);

  return (
    <ul className="flex flex-col gap-2 mb-6">
      {allKeys.map((allKey) => {
        const { key: yayaKey, numerals } = allKey;
        return (
          <li className="flex" key={yayaKey}>
            <YayaText type="p">{yayaKey}: </YayaText>
            <YayaText type="p">{numerals}</YayaText>
          </li>
        );
      })}
    </ul>
  );
};
