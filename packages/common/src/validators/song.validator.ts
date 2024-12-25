import { z } from "zod";
import { ChordProgressionSchema } from "./chordProgression.validator";

export const SongSchema = z.object({
  id: z.string(),
  tempo: z.number(),
  key: z.string(),
  name: z.string(),
  youtubeURL: z.string().url(),
  artistIds: z.array(z.string()),
  chords: z.array(z.string()), // Individual chords as string e.g. "C#-", "Bb"
  progressionIds: z.array(z.string()),
  albumId: z.string()
});

export type Song = z.infer<typeof SongSchema>;
