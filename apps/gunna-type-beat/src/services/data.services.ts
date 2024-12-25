import { SONGS } from "../data/songs.data";

// TODO: Fix this
export const DataService = {
  calculateChordProgressionFrequencies: () => {
    const totalSongs = SONGS.length;

    const progressionFrequency = { "I IV V": 10 };

    // const progressionFrequency = SONGS.reduce<Record<string, number>>(
    //   (acc, { progression }) => {
    //     acc[progression.numerals] = (acc[progression.numerals] || 0) + 1;
    //     return acc;
    //   },
    //   {}
    // );

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
  },
  songsWithProgression: (chordProgression: string, originalSong: string) => {
    return SONGS.filter(
      (song) => chordProgression === "I IV V" && song.name !== originalSong
    );
  }
};
