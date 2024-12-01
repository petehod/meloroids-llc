import { SONGS } from "../data/songs.data";
export const DataService = {
  calculateChordProgressionFrequencies: () => {
    const totalSongs = SONGS.length;

    const progressionFrequency = SONGS.reduce<Record<string, number>>(
      (acc, { progression }) => {
        acc[progression] = (acc[progression] || 0) + 1;
        return acc;
      },
      {}
    );

    return Object.entries(progressionFrequency).map(([progression, count]) => ({
      progression,
      count,
      frequency: `${((count / totalSongs) * 100).toFixed(2)}%`
    }));
  },
  singleChordProgressionFrequency: (chordProgression: string) => {
    const allProgressions = DataService.calculateChordProgressionFrequencies();
    return allProgressions.find(
      (progression) => progression.progression === chordProgression
    );
  }
};
