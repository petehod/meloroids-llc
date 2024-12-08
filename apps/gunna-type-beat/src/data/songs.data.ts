import type { EnteredChordProgression } from "@repo/chord-progressions/generate-progressions";
import { ds4everId, oneOfOneId } from "./albums.data";

export interface Song {
  name: string;
  tempo: number;
  key: string;
  youtube: string;
  artists: string[];
  chords: string[];
  progression: EnteredChordProgression;
  album: string;
}

export const ONE_OF_WUN_SONGS: Song[] = [
  {
    name: "collage",
    tempo: 128,
    key: "C# Minor",
    youtube:
      "https://www.youtube.com/watch?v=oAdMgexZm1A&list=PLnikWbtnBaM6Ey81cj1GGf4W_PDmZ-lH0",
    artists: ["Gunna"],
    chords: ["C#-", "B"],
    progression: { numerals: "i bVII", is_major: false },
    album: oneOfOneId
  },
  {
    name: "one of wun",
    tempo: 140,
    key: "Bb Minor",
    youtube: "https://www.youtube.com/watch?v=w_JtBYqMgk8",
    artists: ["Gunna"],
    chords: ["Bb-7", "Eb-7"],
    progression: { numerals: "i iv", is_major: false },
    album: oneOfOneId
  },
  {
    name: "neck on a yacht",
    tempo: 130,
    key: "E Minor",
    youtube:
      "https://www.youtube.com/watch?v=hAidkjH1WiU&list=PLnikWbtnBaM6Ey81cj1GGf4W_PDmZ-lH0&index=3",
    artists: ["Gunna"],
    chords: ["E-", "A-"],
    progression: { numerals: "i iv", is_major: false },
    album: oneOfOneId
  },
  {
    name: "whatsapp (wassam)",
    tempo: 134,
    key: "D# Minor",
    youtube:
      "https://www.youtube.com/watch?v=bY1kLt4iz94&list=PLnikWbtnBaM6Ey81cj1GGf4W_PDmZ-lH0&index=4",
    artists: ["Gunna"],
    chords: ["D#-", "C#"],
    progression: { numerals: "i bVII", is_major: false },
    album: oneOfOneId
  },
  {
    name: "hakuna matata",
    tempo: 138,
    key: "D# Minor",
    youtube:
      "https://www.youtube.com/watch?v=bY1kLt4iz94&list=PLnikWbtnBaM6Ey81cj1GGf4W_PDmZ-lH0&index=5",
    artists: ["Gunna"],
    chords: ["D#-", "C#"],
    progression: { numerals: "i bVII", is_major: false },
    album: oneOfOneId
  },
  {
    name: "prada dem",
    tempo: 120,
    key: "F# Minor",
    youtube: "https://www.youtube.com/watch?v=Tqjw-H4QyG0",
    artists: ["Gunna", "Offset"],
    chords: ["F#-", "E", "C#-"],
    progression: { numerals: "i bVII v", is_major: false },
    album: oneOfOneId
  },
  {
    name: "treesh",
    tempo: 130,
    key: "C# Minor",
    youtube: "https://www.youtube.com/watch?v=qaWJMBTnHwg",
    artists: ["Gunna"],
    chords: ["C#-", "B", "C#-", "A"],
    progression: { numerals: "i bVII i bVI", is_major: false },
    album: oneOfOneId
  },
  {
    name: "on one tonight",
    tempo: 128,
    key: "E Minor",
    youtube: "https://www.youtube.com/watch?v=5i0GKTp8c1Q",
    artists: ["Gunna"],
    chords: ["E-", "C", "G", "D"],
    progression: { numerals: "i bVI bIII bVII", is_major: false },
    album: oneOfOneId
  },
  {
    name: "back in the a",
    tempo: 134,
    key: "D Minor",
    youtube: "https://www.youtube.com/watch?v=jC8_6QxGRjc",
    artists: ["Gunna"],
    chords: ["D-", "BbMaj7"],
    progression: { numerals: "i bVI", is_major: false },
    album: oneOfOneId
  },
  {
    name: "trio",
    tempo: 132,
    key: "C Minor",
    youtube: "https://www.youtube.com/watch?v=aL4GcLvFFx8",
    artists: ["Gunna"],
    chords: ["C-", "Eb", "C-", "F-"],
    progression: { numerals: "i bIII i iv", is_major: false },
    album: oneOfOneId
  },
  {
    name: "still prevail",
    tempo: 132,
    key: "E Minor",
    youtube: "https://www.youtube.com/watch?v=x6jX7eiNz58",
    artists: ["Gunna"],
    chords: ["E-", "D", "C"],
    progression: { numerals: "i bVII bVI", is_major: false },
    album: oneOfOneId
  },
  {
    name: "blackjack",
    tempo: 154,
    key: "E Minor",
    youtube: "https://www.youtube.com/watch?v=INpDMPTYryg",
    artists: ["Gunna"],
    chords: ["C", "D", "E-", "A-"],
    progression: { numerals: "bVI bVII i", is_major: false },
    album: oneOfOneId
  },
  {
    name: "$$$",
    tempo: 160,
    key: "C Minor",
    youtube: "https://www.youtube.com/watch?v=nUXscMOYRL8",
    artists: ["Gunna", "Normani"],
    chords: ["C-", "Eb", "Ab ", "Bb"],
    progression: { numerals: "i bIII bVI bVII", is_major: false },
    album: oneOfOneId
  },
  {
    name: "clear my rain",
    tempo: 98,
    key: "F# Minor",
    youtube: "https://www.youtube.com/watch?v=IT4KbbIK-wU",
    artists: ["Gunna", "Leon Bridges"],
    chords: ["F#-7", "B-9"],
    progression: { numerals: "i iv", is_major: false },
    album: oneOfOneId
  },
  {
    name: "conscience",
    tempo: 160,
    key: "E Minor",
    youtube: "https://www.youtube.com/watch?v=GDPnI4CbyBw",
    artists: ["Gunna"],
    chords: ["E-", "Cmaj7"],
    progression: { numerals: "i bVI", is_major: false },
    album: oneOfOneId
  },
  {
    name: "the time",
    tempo: 154,
    key: "E Minor",
    youtube: "https://www.youtube.com/watch?v=rE0lN0snNb8",
    artists: ["Gunna"],
    chords: ["E-", "D", "Cmaj7"],
    // progression: "[i | bVII | bVI x3] bVI | bVII | i",
    progression: { numerals: "i | bVII | bVI", is_major: false },

    album: oneOfOneId
  },
  {
    name: "let it breathe",
    tempo: 154,
    key: "C# Minor",
    youtube: "https://www.youtube.com/watch?v=a0iE4c3nPNM",
    artists: ["Gunna", "Roddy Ricch"],
    chords: ["C#-", "B", "F#-"],
    progression: { numerals: "i bVII iv", is_major: false },
    album: oneOfOneId
  },
  {
    name: "life's changing",
    tempo: 162,
    key: "F# Minor",
    youtube: "https://www.youtube.com/watch?v=4bugH64ivoM",
    artists: ["Gunna"],
    chords: ["Dmaj7", "B-", "F#-"],
    progression: { numerals: "bVI iv i", is_major: false },
    album: oneOfOneId
  },
  {
    name: "today i did good",
    tempo: 152,
    key: "C# Minor",
    youtube: "https://www.youtube.com/watch?v=zhFBTlHzMWQ",
    artists: ["Gunna"],
    chords: ["C#-", "Amaj7", "G#-7"],
    progression: { numerals: "i bVI v", is_major: false },
    album: oneOfOneId
  },
  {
    name: "time reveals, be careful what you wish for",
    tempo: 174,
    key: "G Minor",
    youtube: "https://www.youtube.com/watch?v=2zju7-ycNsY",
    artists: ["Gunna"],
    chords: ["G-", "F", "Ebmaj7"],
    progression: { numerals: "i bVII bVI", is_major: false },
    album: oneOfOneId
  }
];

export const DS4EVER_SONGS = [
  {
    name: "one of wun yaya hello world",
    tempo: 123,
    key: "A Minor",
    youtube: "https://youtube.com/watch?v=YqMgk8",
    artists: ["Gunna"],
    chords: ["Gb-7", "Eb-7"],
    progression: "i | iv",
    album: ds4everId
  },
  {
    name: "on one tonight",
    tempo: 123,
    key: "A Minor",
    youtube: "https://youtube.com/watch?v=Tp8c1Q",
    artists: ["Gunna"],
    chords: ["E-", "C", "G", "D"],
    progression: "i | iv",
    album: ds4everId
  },
  {
    name: "prada dem",
    tempo: 120,
    key: "C Major",
    youtube: "https://youtube.com/watch?v=H4QyG0",
    artists: ["Gunna", "Offset"],
    chords: ["F#-", "E", "C#-"],
    progression: "[i | bVII x3] | v",
    album: ds4everId
  }
];

export const SONGS = [...ONE_OF_WUN_SONGS];
