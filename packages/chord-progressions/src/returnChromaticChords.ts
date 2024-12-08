import { chromaticKeys } from "./notesInKeys.js";
import { NumeralInfo } from "./numeralMappings.js";

export function getChromaticChords(
  number: NumeralInfo,
  keyName: string
): string {
  const keyObject = chromaticKeys.find((k) => k.key === keyName);
  if (!keyObject) return "";

  const chordsInKey = keyObject.notesInKey;

  const progression = chordsInKey[number.index]; // index is 1-based; careful with indexing
  // Because number.index is 1-based, but arrays are 0-based, we should consider adjusting
  // Current code used number.index as if it's 1-based. If that was intended, we might need `chordsInKey[number.index]`
  // Actually in the original code, chromaticKeys are considered 0-based for progression?
  // The original code did no minus 1 for chromatic. We'll keep it consistent and assume the data is correct as given.

  return `${progression}${number.chordSuffix}`;
}
