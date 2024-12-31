import type { Song } from "@repo/common/song";

export interface ChordProgressionFrequency {
  count: number;
  percentage: number;
}

export type CalculateChordProgressionFrequencyMap = Record<
  string,
  ChordProgressionFrequency
>;

export const DataService = {
  calculateChordProgressionFrequency: (
    songs?: Song[]
  ): CalculateChordProgressionFrequencyMap | undefined => {
    if (!songs) return;
    const frequencyMap = new Map<string, number>();
    let totalProgressions = 0;

    for (const song of songs) {
      for (const progressionId of song.progressionIds) {
        frequencyMap.set(
          progressionId,
          (frequencyMap.get(progressionId) || 0) + 1
        );
        totalProgressions++;
      }
    }

    const result: CalculateChordProgressionFrequencyMap = {};
    for (const [progressionId, count] of frequencyMap.entries() as unknown as [
      string,
      number
    ][]) {
      result[progressionId] = {
        count,
        percentage: parseFloat(((count / totalProgressions) * 100).toFixed(2))
      };
    }
    return result;
  }
};
