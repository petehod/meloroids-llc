import { getChromaticChords } from "./returnChromaticChords.js";
import { majorKeys, minorKeys, KeyDefinition } from "./notesInKeys.js";
import { NumeralInfo } from "./numeralMappings.js";

export interface EnteredChordProgression {
  numerals: string;
  is_major: boolean;
}

// Returns the chord progression in all keys, either major or minor
export async function returnKey(
  chordInfos: NumeralInfo[],
  enteredChordProgression: EnteredChordProgression
) {
  const keysToUse = enteredChordProgression.is_major ? majorKeys : minorKeys;
  const keyNumeralsData = keysToUse.map((keyObject) => {
    const { key, notesInKey } = keyObject;
    const numerals = chordInfos.map((info) => {
      if (!info.is_diatonic) {
        return getChromaticChords(info, key);
      } else {
        // Diatonic chord: just index into notesInKey using info.index - 1 (1-based)
        const note = notesInKey[info.index - 1];
        return `${note}${info.chordSuffix}`;
      }
    });
    return { key: key, numerals };
  });

  return keyNumeralsData;
}
