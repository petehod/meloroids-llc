import { getChromaticChords } from "./returnChromaticChords.js";
import { majorKeys, minorKeys } from "./notesInKeys.js";
import { getNumeralInfo } from "./numeralMappings.js";

export interface ProgressionInAllKeys {
  key: string;
  numerals: string[];
}

/**
 * The info needed to calculate the progression in every key
 */
export interface EnteredChordProgression {
  numerals: string;
  is_major: boolean;
}

/**
 *  Returns the chord progression in all keys based upon `numerals` and `is_major`
 */
export const generateProgressionsInAllKeys = (
  enteredChordProgression: EnteredChordProgression
): ProgressionInAllKeys[] => {
  const splitNumerals = enteredChordProgression.numerals.split(" ");

  const chordInfos = splitNumerals
    .map((numeral) => getNumeralInfo(enteredChordProgression.is_major, numeral))
    .filter((info): info is NonNullable<typeof info> => info != null);

  const keysToUse = enteredChordProgression.is_major ? majorKeys : minorKeys;

  return keysToUse.map((keyObject) => {
    const { key, notesInKey } = keyObject;
    const numerals = chordInfos.map((info) => {
      if (!info.is_diatonic) return getChromaticChords(info, key);

      const note = notesInKey[info.index - 1];
      return `${note}${info.chordSuffix}`;
    });
    return { key, numerals };
  });
};
