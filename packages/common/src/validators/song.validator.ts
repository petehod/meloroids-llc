import { z } from "zod";
import { ChordProgressionSchema } from "./chordProgression.validator";

export const SongSchema = z.object({
  id: z.string(),
  tempo: z.number(),
  key: z.string(),
  name: z.string(),
  youtubeURL: z.string().url(),
  artists: z.array(z.string()),
  chords: z.array(z.string()),
  progression: ChordProgressionSchema,
  albumId: z.string()
});

export type Song = z.infer<typeof SongSchema>;
