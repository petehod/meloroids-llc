/**
 * Interface with the key string and all the notes in that key
 */
export interface KeyDefinition {
  key: string;
  notesInKey: string[];
}

export const majorKeys: KeyDefinition[] = [
  { key: "Ab", notesInKey: ["Ab", "Bb", "C", "Db", "Eb", "F", "G"] },
  { key: "A", notesInKey: ["A", "B", "C#", "D", "E", "F#", "G#", "A"] },
  { key: "Bb", notesInKey: ["Bb", "C", "D", "Eb", "F", "G", "A"] },
  { key: "B", notesInKey: ["B", "C#", "D#", "E", "F#", "G#", "A#"] },
  { key: "Cb", notesInKey: ["Cb", "Db", "Eb", "Fb", "Gb", "Ab", "Bb"] },
  { key: "C", notesInKey: ["C", "D", "E", "F", "G", "A", "B"] },
  { key: "C#", notesInKey: ["C#", "D#", "E#", "F#", "G#", "A#", "B#"] },
  { key: "Db", notesInKey: ["Db", "Eb", "F", "Gb", "Ab", "Bb", "C"] },
  { key: "D", notesInKey: ["D", "E", "F#", "G", "A", "B", "C#"] },
  { key: "Eb", notesInKey: ["Eb", "F", "G", "Ab", "Bb", "C", "D"] },
  { key: "E", notesInKey: ["E", "F#", "G#", "A", "B", "C#", "D#"] },
  { key: "F", notesInKey: ["F", "G", "A", "Bb", "C", "D", "E"] },
  { key: "F#", notesInKey: ["F#", "G#", "A#", "B", "C#", "D#", "E#"] },
  { key: "Gb", notesInKey: ["Gb", "Ab", "Bb", "Cb", "Db", "Eb", "F"] },
  { key: "G", notesInKey: ["G", "A", "B", "C", "D", "E", "F#"] }
];

export const minorKeys: KeyDefinition[] = [
  { key: "Ab", notesInKey: ["Ab", "Bb", "Cb", "Db", "Eb", "Fb", "Gb"] },
  { key: "A", notesInKey: ["A", "B", "C", "D", "E", "F", "G"] },
  { key: "A#", notesInKey: ["A#", "B#", "C#", "D#", "E#", "F#", "G#"] },
  { key: "Bb", notesInKey: ["Bb", "C", "Db", "Eb", "F", "Gb", "Ab"] },
  { key: "B", notesInKey: ["B", "C#", "D", "E", "F#", "G", "A"] },
  { key: "C", notesInKey: ["C", "D", "Eb", "F", "G", "Ab", "Bb"] },
  { key: "C#", notesInKey: ["C#", "D#", "E", "F#", "G#", "A", "B"] },
  { key: "D", notesInKey: ["D", "E", "F", "G", "A", "Bb", "C"] },
  { key: "D#", notesInKey: ["D#", "E#", "F#", "G#", "A#", "B", "C#"] },
  { key: "Eb", notesInKey: ["Eb", "F", "Gb", "Ab", "Bb", "Cb", "Db"] },
  { key: "E", notesInKey: ["E", "F#", "G", "A", "B", "C", "D"] },
  { key: "F", notesInKey: ["F", "G", "Ab", "Bb", "C", "Db", "Eb"] },
  { key: "F#", notesInKey: ["F#", "G#", "A", "B", "C#", "D", "E"] },
  { key: "G", notesInKey: ["G", "A", "Bb", "C", "D", "Eb", "F"] },
  { key: "G#", notesInKey: ["G#", "A#", "B", "C#", "D#", "E", "F#"] }
];

export const chromaticKeys: KeyDefinition[] = [
  {
    key: "Ab",
    notesInKey: [
      "Ab",
      "A",
      "Bb",
      "B",
      "C",
      "Db",
      "D",
      "Eb",
      "E",
      "F",
      "Gb",
      "G"
    ]
  },
  {
    key: "A",
    notesInKey: [
      "A",
      "A#",
      "B",
      "C",
      "C#",
      "D",
      "D#",
      "E",
      "F",
      "F#",
      "G",
      "G#"
    ]
  },
  {
    key: "A#",
    notesInKey: [
      "A#",
      "B",
      "C",
      "C#",
      "D",
      "D#",
      "E",
      "F",
      "F#",
      "G",
      "G#",
      "A"
    ]
  },
  {
    key: "Bb",
    notesInKey: [
      "Bb",
      "B",
      "C",
      "Db",
      "D",
      "Eb",
      "E",
      "F",
      "Gb",
      "G",
      "Ab",
      "A"
    ]
  },
  {
    key: "B",
    notesInKey: [
      "B",
      "C",
      "C#",
      "D",
      "D#",
      "E",
      "F",
      "F#",
      "G",
      "G#",
      "A",
      "A#"
    ]
  },
  {
    key: "Cb",
    notesInKey: [
      "Cb",
      "C",
      "Db",
      "D",
      "Eb",
      "E",
      "F",
      "Gb",
      "G",
      "Ab",
      "A",
      "Bb"
    ]
  },
  {
    key: "C",
    notesInKey: [
      "C",
      "C#",
      "D",
      "D#",
      "E",
      "F",
      "F#",
      "G",
      "G#",
      "A",
      "A#",
      "B"
    ]
  },
  {
    key: "C#",
    notesInKey: [
      "C#",
      "D",
      "D#",
      "E",
      "F",
      "F#",
      "G",
      "G#",
      "A",
      "A#",
      "B",
      "C"
    ]
  },
  {
    key: "Db",
    notesInKey: [
      "Db",
      "D",
      "Eb",
      "E",
      "F",
      "Gb",
      "G",
      "Ab",
      "A",
      "Bb",
      "B",
      "C"
    ]
  },
  {
    key: "D",
    notesInKey: [
      "D",
      "D#",
      "E",
      "F",
      "F#",
      "G",
      "G#",
      "A",
      "A#",
      "B",
      "C",
      "C#"
    ]
  },
  {
    key: "D#",
    notesInKey: [
      "D#",
      "E",
      "F",
      "F#",
      "G",
      "G#",
      "A",
      "A#",
      "B",
      "C",
      "C#",
      "D"
    ]
  },
  {
    key: "Eb",
    notesInKey: [
      "Eb",
      "E",
      "F",
      "Gb",
      "G",
      "Ab",
      "A",
      "Bb",
      "B",
      "C",
      "Db",
      "D"
    ]
  },
  {
    key: "E",
    notesInKey: [
      "E",
      "F",
      "F#",
      "G",
      "G#",
      "A",
      "A#",
      "B",
      "C",
      "C#",
      "D",
      "D#"
    ]
  },
  {
    key: "F",
    notesInKey: [
      "F",
      "F#",
      "G",
      "G#",
      "A",
      "A#",
      "B",
      "C",
      "C#",
      "D",
      "D#",
      "E"
    ]
  },
  {
    key: "F#",
    notesInKey: [
      "F#",
      "G",
      "G#",
      "A",
      "A#",
      "B",
      "C",
      "C#",
      "D",
      "D#",
      "E",
      "F"
    ]
  },
  {
    key: "Gb",
    notesInKey: [
      "Gb",
      "G",
      "Ab",
      "A",
      "Bb",
      "B",
      "C",
      "Db",
      "D",
      "Eb",
      "E",
      "F"
    ]
  },
  {
    key: "G",
    notesInKey: [
      "G",
      "G#",
      "A",
      "A#",
      "B",
      "C",
      "C#",
      "D",
      "D#",
      "E",
      "F",
      "F#"
    ]
  },
  {
    key: "G#",
    notesInKey: [
      "G#",
      "A",
      "A#",
      "B",
      "C",
      "C#",
      "D",
      "D#",
      "E",
      "F",
      "F#",
      "G"
    ]
  }
];
