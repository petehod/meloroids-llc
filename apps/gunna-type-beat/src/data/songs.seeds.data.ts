import type { Song } from "@repo/common/song";
import { v4 } from "uuid";
import { GUNNA_ID, ONE_OF_WUN_ID } from "./seed.data";
import { MINOR_SEED_PROGRESSION_IDS } from "./progressions.seeds";

const ONE_OF_WUN_BOILERPLATE = {
  albumId: ONE_OF_WUN_ID,
  artistIds: [GUNNA_ID]
};

export const SEED_SONGS: Song[] = [
  {
    ...ONE_OF_WUN_BOILERPLATE,
    id: v4(), // Unique ID for this song
    name: "collage",
    tempo: "128",
    progressionIds: [MINOR_SEED_PROGRESSION_IDS.oneFlatSeven],
    youtubeURL:
      "https://www.youtubeURL.com/watch?v=oAdMgexZm1A&list=PLnikWbtnBaM6Ey81cj1GGf4W_PDmZ-lH0",
    chords: "C#-,B",
    key: "C# Minor"
  },
  {
    ...ONE_OF_WUN_BOILERPLATE,
    id: v4(),
    name: "one of wun",
    tempo: "140",
    progressionIds: [MINOR_SEED_PROGRESSION_IDS.oneFour], // i iv
    youtubeURL: "https://www.youtubeURL.com/watch?v=w_JtBYqMgk8",
    chords: "Bb-7,Eb-7",
    key: "Bb Minor"
  },
  {
    ...ONE_OF_WUN_BOILERPLATE,
    id: v4(),
    name: "neck on a yacht",
    tempo: "130",
    progressionIds: [MINOR_SEED_PROGRESSION_IDS.oneFour], // i iv
    youtubeURL:
      "https://www.youtubeURL.com/watch?v=hAidkjH1WiU&list=PLnikWbtnBaM6Ey81cj1GGf4W_PDmZ-lH0&index=3",
    chords: "E-,A-",
    key: "E Minor"
  },
  {
    ...ONE_OF_WUN_BOILERPLATE,
    id: v4(),
    name: "whatsapp (wassam)",
    tempo: "134",
    progressionIds: [MINOR_SEED_PROGRESSION_IDS.oneFlatSeven], // i bVII
    youtubeURL:
      "https://www.youtubeURL.com/watch?v=bY1kLt4iz94&list=PLnikWbtnBaM6Ey81cj1GGf4W_PDmZ-lH0&index=4",
    chords: "D#-,C#",
    key: "D# Minor"
  },
  {
    ...ONE_OF_WUN_BOILERPLATE,
    id: v4(),
    name: "hakuna matata",
    tempo: "138",
    progressionIds: [MINOR_SEED_PROGRESSION_IDS.oneFlatSeven], // i bVII
    youtubeURL:
      "https://www.youtubeURL.com/watch?v=bY1kLt4iz94&list=PLnikWbtnBaM6Ey81cj1GGf4W_PDmZ-lH0&index=5",
    chords: "D#-,C#",
    key: "D# Minor"
  },
  {
    ...ONE_OF_WUN_BOILERPLATE,
    id: v4(),
    name: "prada dem",
    tempo: "120",
    progressionIds: [MINOR_SEED_PROGRESSION_IDS.oneFlatSevenFive], // i bVII v
    youtubeURL: "https://www.youtubeURL.com/watch?v=Tqjw-H4QyG0",
    chords: "F#-,E,C#-",
    key: "F# Minor"
  },
  {
    ...ONE_OF_WUN_BOILERPLATE,
    id: v4(),
    name: "treesh",
    tempo: "130",
    progressionIds: [MINOR_SEED_PROGRESSION_IDS.oneFlatSevenOneFlatSix],
    youtubeURL: "https://www.youtubeURL.com/watch?v=qaWJMBTnHwg",
    chords: "C#-,B,C#-,A",
    key: "C# Minor"
  },
  {
    ...ONE_OF_WUN_BOILERPLATE,
    id: v4(),
    name: "on one tonight",
    tempo: "128",
    progressionIds: [MINOR_SEED_PROGRESSION_IDS.oneFlatSixFlatThreeFlatSeven],
    youtubeURL: "https://www.youtubeURL.com/watch?v=5i0GKTp8c1Q",
    chords: "E-,C,G,D",
    key: "E Minor"
  },
  {
    ...ONE_OF_WUN_BOILERPLATE,
    id: v4(),
    name: "back in the a",
    tempo: "134",
    progressionIds: [MINOR_SEED_PROGRESSION_IDS.oneFlatSix], // i bVI
    youtubeURL: "https://www.youtubeURL.com/watch?v=jC8_6QxGRjc",
    chords: "D-,BbMaj7",
    key: "D Minor"
  },
  {
    ...ONE_OF_WUN_BOILERPLATE,
    id: v4(),
    name: "trio",
    tempo: "132",
    progressionIds: [MINOR_SEED_PROGRESSION_IDS.oneFlatThreeOneFour],
    youtubeURL: "https://www.youtubeURL.com/watch?v=aL4GcLvFFx8",
    chords: "C-,Eb,C-,F-",
    key: "C Minor"
  },
  {
    ...ONE_OF_WUN_BOILERPLATE,
    id: v4(),
    name: "still prevail",
    tempo: "132",
    progressionIds: [MINOR_SEED_PROGRESSION_IDS.oneFlatSevenFlatSix],
    youtubeURL: "https://www.youtubeURL.com/watch?v=x6jX7eiNz58",
    chords: "E-,D,C",
    key: "E Minor"
  },
  {
    ...ONE_OF_WUN_BOILERPLATE,
    id: v4(),
    name: "blackjack",
    tempo: "154",
    progressionIds: [MINOR_SEED_PROGRESSION_IDS.flatSixFlatSevenOne],
    youtubeURL: "https://www.youtubeURL.com/watch?v=INpDMPTYryg",
    chords: "C,D,E-,A-",
    key: "E Minor"
  },
  {
    ...ONE_OF_WUN_BOILERPLATE,
    id: v4(),
    name: "$$$",
    tempo: "160",
    progressionIds: [MINOR_SEED_PROGRESSION_IDS.oneFlatThreeFlatSixFlatSeven],
    youtubeURL: "https://www.youtubeURL.com/watch?v=nUXscMOYRL8",
    chords: "C-,Eb,Ab,Bb",
    key: "C Minor"
  },
  {
    ...ONE_OF_WUN_BOILERPLATE,
    id: v4(),
    name: "clear my rain",
    tempo: "98",
    progressionIds: [MINOR_SEED_PROGRESSION_IDS.oneFour],
    youtubeURL: "https://www.youtubeURL.com/watch?v=IT4KbbIK-wU",
    chords: "F#-7,B-9",
    key: "F# Minor"
  },
  {
    ...ONE_OF_WUN_BOILERPLATE,
    id: v4(),
    name: "conscience",
    tempo: "160",
    progressionIds: [MINOR_SEED_PROGRESSION_IDS.oneFlatSix], // i bVI
    youtubeURL: "https://www.youtubeURL.com/watch?v=GDPnI4CbyBw",
    chords: "E-,Cmaj7",
    key: "E Minor"
  },
  {
    ...ONE_OF_WUN_BOILERPLATE,
    id: v4(),
    name: "the time",
    tempo: "154",
    progressionIds: [MINOR_SEED_PROGRESSION_IDS.oneFlatSevenFlatSix],
    youtubeURL: "https://www.youtubeURL.com/watch?v=rE0lN0snNb8",
    chords: "E-,D,Cmaj7",
    key: "E Minor"
  },
  {
    ...ONE_OF_WUN_BOILERPLATE,
    id: v4(),
    name: "let it breathe",
    tempo: "154",
    progressionIds: [MINOR_SEED_PROGRESSION_IDS.oneFlatSevenFour],
    youtubeURL: "https://www.youtubeURL.com/watch?v=a0iE4c3nPNM",
    chords: "C#-,B,F#-",
    key: "C# Minor"
  },
  {
    ...ONE_OF_WUN_BOILERPLATE,
    id: v4(),
    name: "life's changing",
    tempo: "162",
    progressionIds: [MINOR_SEED_PROGRESSION_IDS.flatSixFourOne],
    youtubeURL: "https://www.youtubeURL.com/watch?v=4bugH64ivoM",
    chords: "Dmaj7,B-,F#-",
    key: "F# Minor"
  },
  {
    ...ONE_OF_WUN_BOILERPLATE,
    id: v4(),
    name: "today i did good",
    tempo: "152",
    progressionIds: [MINOR_SEED_PROGRESSION_IDS.oneFlatSixFive],
    youtubeURL: "https://www.youtubeURL.com/watch?v=zhFBTlHzMWQ",
    chords: "C#-,Amaj7,G#-7",
    key: "C# Minor"
  },
  {
    ...ONE_OF_WUN_BOILERPLATE,
    id: v4(),
    name: "time reveals, be careful what you wish for",
    tempo: "174",
    progressionIds: [MINOR_SEED_PROGRESSION_IDS.oneFlatSevenFlatSix],
    youtubeURL: "https://www.youtubeURL.com/watch?v=2zju7-ycNsY",
    chords: "G-,F,Ebmaj7",
    key: "G Minor"
  }
];
