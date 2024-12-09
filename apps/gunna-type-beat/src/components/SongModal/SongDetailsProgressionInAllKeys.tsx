import { generateProgressionsInAllKeys } from "@repo/chord-progressions/generate-progressions";
import type { EnteredChordProgression } from "@repo/chord-progressions/generate-progressions";
import type { BackgroundColors, TextColors } from "@repo/ui/Colors";
import { YayaText } from "@repo/ui/YayaText";
import { isOddIndex } from "../../utils/index.utils";
import { formatKey } from "../../utils/textFormat.utils";
import { EmphasizedText } from "../EmphasizeText";

interface SongDetailsProgressionInAllKeysProps {
  progression: EnteredChordProgression;
}

export const SongDetailsProgressionInAllKeys = ({
  progression
}: SongDetailsProgressionInAllKeysProps) => {
  const allKeys = generateProgressionsInAllKeys(progression);

  return (
    <section>
      <YayaText className="mb-2" type="h3">
        <EmphasizedText text={progression.numerals} /> In Every Key
      </YayaText>
      <ul className="flex flex-col mb-6  rounded border-2 pb-4">
        {allKeys.map((allKey, index) => {
          const { key: yayaKey, numerals } = allKey;
          const oddIndex = isOddIndex(index);
          const bgColor: BackgroundColors = oddIndex ? "bg-white" : "bg-dark";
          const textColor: TextColors = oddIndex ? "text-dark" : "text-white";
          return (
            <li
              className={`flex justify-between items-center border-b-2 p-4 ${bgColor} ${textColor}`}
              key={yayaKey}
            >
              <YayaText className="flex-1" textSize="1.25" type="h3">
                {formatKey(yayaKey, progression.is_major)}
              </YayaText>
              <div className="flex flex-1 gap-8 justify-start">
                {numerals.map((num, i) => (
                  <YayaText className="w-full" key={i} type="p">
                    {num}
                  </YayaText>
                ))}
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
