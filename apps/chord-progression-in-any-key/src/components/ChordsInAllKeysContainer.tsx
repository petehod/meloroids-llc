import { BackgroundColors } from "@repo/ui/Colors";
import { YayaText } from "@repo/ui/YayaText";
import { formatMajorMinor } from "../utils/textFormat.utils";
import { ProgressionInAllKeys } from "@repo/chord-progressions/generate-progressions";
import { EmphasizedText } from "@repo/ui/EmphasizeText";
interface ChordsInAllKeysContainerProps {
  chordsInAllKeys: ProgressionInAllKeys[];
  rootNumerals: string;
  rootIsMajor: boolean;
}

export const ChordsInAllKeysContainer = ({
  chordsInAllKeys,
  rootNumerals,
  rootIsMajor
}: ChordsInAllKeysContainerProps) => {
  return (
    <div className="w-full bg-white rounded py-8 px-4">
      <YayaText type="h2" className="mb-2">
        <EmphasizedText text={rootNumerals} /> in all keys
      </YayaText>
      {chordsInAllKeys.map((eachKey, index) => {
        const isOddIndex = index % 2 !== 0;
        const title = formatMajorMinor(eachKey.key, rootIsMajor);
        return (
          <div
            key={eachKey.key}
            className="flex items-center w-full border-b-1"
          >
            <YayaText type="h3" className="w-full">
              {title}
            </YayaText>
            <div className="flex gap-2 w-full py-1">
              {eachKey.numerals.map((numeral: string) => {
                const backgroundColor: BackgroundColors = isOddIndex
                  ? "bg-black"
                  : "bg-primary";
                return (
                  <div
                    key={Math.random()}
                    className={`h-10 w-10 flex items-center justify-center rounded-full ${backgroundColor} text-white`}
                  >
                    {numeral}
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};
