import { ds4everId, oneOfOneId } from "./gunna.data";

export type Song = {
  name: string;
  tempo: number;
  key: string;
  youtube: string;
  artists: string[];
  chords: string[];
  progression: string;
  album: string;
};

export const ONE_OF_WUN_SONGS: Song[] = [
  {
    name: "collage",
    tempo: 128,
    key: "C# Minor",
    youtube:
      "https://www.youtube.com/watch?v=oAdMgexZm1A&list=PLnikWbtnBaM6Ey81cj1GGf4W_PDmZ-lH0",
    artists: ["Gunna"],
    chords: ["C#-", "B"],
    progression: "i | bVII",
    album: oneOfOneId
  },
  {
    name: "one of wun",
    tempo: 140,
    key: "Bb Minor",
    youtube: "https://www.youtube.com/watch?v=w_JtBYqMgk8",
    artists: ["Gunna"],
    chords: ["Bb-7", "Eb-7"],
    progression: "i | iv",
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
    progression: "i | iv",
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
    progression: "i | bVII",
    album: oneOfOneId
  },
  //   {
  //     name: "hakuna matata",
  //     tempo: 138,
  //     key: "",
  //     youtube:
  //       "",
  //     artists: ["Gunna"],
  //     chords: [],
  //     progression: "",
  //     album: oneOfOneId
  //   },
  {
    name: "prada dem",
    tempo: 120,
    key: "F# Minor",
    youtube: "https://www.youtube.com/watch?v=Tqjw-H4QyG0",
    artists: ["Gunna", "Offset"],
    chords: ["F#-", "E", "C#-"],
    progression: "[i | bVII x3] | v",
    album: oneOfOneId
  },
  //   {
  //     name: "treesh",
  //     tempo: 130,
  //     key: "",
  //     youtube:
  //       "https://www.youtube.com/watch?v=qaWJMBTnHwg",
  //     artists: ["Gunna"],
  //     chords: [],
  //     progression: "",
  //     album: oneOfOneId
  //   },
  {
    name: "on one tonight",
    tempo: 128,
    key: "E Minor",
    youtube: "https://www.youtube.com/watch?v=5i0GKTp8c1Q",
    artists: ["Gunna"],
    chords: ["E-", "C", "G", "D"],
    progression: "i | bVI | bIII | bVII",
    album: oneOfOneId
  },
  //   {
  //     name: "back in the a",
  //     tempo: 134,
  //     key: "",
  //     youtube:
  //       "https://www.youtube.com/watch?v=jC8_6QxGRjc",
  //     artists: ["Gunna"],
  //     chords: [],
  //     progression: "",
  //     album: oneOfOneId
  //   },
  //   {
  //     name: "trio",
  //     tempo: 132,
  //     key: "",
  //     youtube:
  //       "https://www.youtube.com/watch?v=aL4GcLvFFx8",
  //     artists: ["Gunna"],
  //     chords: [],
  //     progression: "",
  //     album: oneOfOneId
  //   },
  //   {
  //     name: "still prevail",
  //     tempo: 132,
  //     key: "",
  //     youtube:
  //       "https://www.youtube.com/watch?v=x6jX7eiNz58",
  //     artists: ["Gunna"],
  //     chords: [],
  //     progression: "",
  //     album: oneOfOneId
  //   },
  //   {
  //     name: "blackjack",
  //     tempo: 154,
  //     key: "",
  //     youtube:
  //       "https://www.youtube.com/watch?v=INpDMPTYryg",
  //     artists: ["Gunna"],
  //     chords: [],
  //     progression: "",
  //     album: oneOfOneId
  //   },
  //   {
  //     name: "$$$",
  //     tempo: 160,
  //     key: "",
  //     youtube:
  //       "https://www.youtube.com/watch?v=nUXscMOYRL8",
  //     artists: ["Gunna", "Normani"],
  //     chords: [],
  //     progression: "",
  //     album: oneOfOneId
  //   },
  //   {
  //     name: "clear my rain",
  //     tempo: 98,
  //     key: "",
  //     youtube:
  //       "https://www.youtube.com/watch?v=IT4KbbIK-wU",
  //     artists: ["Gunna", "Leon Bridges"],
  //     chords: [],
  //     progression: "",
  //     album: oneOfOneId
  //   },
  //   {
  //     name: "conscience",
  //     tempo: 160,
  //     key: "",
  //     youtube:
  //       "https://www.youtube.com/watch?v=GDPnI4CbyBw",
  //     artists: ["Gunna"],
  //     chords: [],
  //     progression: "",
  //     album: oneOfOneId
  //   },
  //   {
  //     name: "the time",
  //     tempo: 154,
  //     key: "",
  //     youtube:
  //       "https://www.youtube.com/watch?v=rE0lN0snNb8",
  //     artists: ["Gunna"],
  //     chords: [],
  //     progression: "",
  //     album: oneOfOneId
  //   },
  {
    name: "let it breathe",
    tempo: 154,
    key: "C# Minor",
    youtube: "https://www.youtube.com/watch?v=a0iE4c3nPNM",
    artists: ["Gunna", "Roddy Ricch"],
    chords: ["C#-", "B", "F#-"],
    progression: "i | bVII | iv",
    album: oneOfOneId
  }
  //   ,{
  //     name: "life's changing",
  //     tempo: 162 ,
  //     key: "",
  //     youtube:
  //       "https://www.youtube.com/watch?v=4bugH64ivoM",
  //     artists: ["Gunna"],
  //     chords: [],
  //     progression: "",
  //     album: oneOfOneId
  //   },
  //   ,{
  //     name: "today i did good",
  //     tempo: 152,
  //     key: "",
  //     youtube:
  //       "https://www.youtube.com/watch?v=zhFBTlHzMWQ",
  //     artists: ["Gunna"],
  //     chords: [],
  //     progression: "",
  //     album: oneOfOneId
  //   },
  //   {
  //     name: "time reveals, be careful what you wish for",
  //     tempo: 174,
  //     key: "",
  //     youtube:
  //       "https://www.youtube.com/watch?v=2zju7-ycNsY",
  //     artists: ["Gunna"],
  //     chords: [],
  //     progression: "",
  //     album: oneOfOneId
  //   },
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

export const SONGS = [...ONE_OF_WUN_SONGS, ...DS4EVER_SONGS];
