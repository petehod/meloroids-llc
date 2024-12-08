import { returnKey, EnteredChordProgression } from "./returnKey.js";
import { getNumeralInfo } from "./numeralMappings.js";

export async function generateProgressionsInAllKeys(
  enteredChordProgression: EnteredChordProgression
) {
  const splitNumerals = enteredChordProgression.numerals.split(" ");
  const chordInfos = splitNumerals
    .map((numeral) => getNumeralInfo(enteredChordProgression.is_major, numeral))
    .filter((info): info is NonNullable<typeof info> => info != null);

  const result = await returnKey(chordInfos, enteredChordProgression);
  return result;
}
