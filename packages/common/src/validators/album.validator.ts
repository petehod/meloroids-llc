import { z } from "zod";

export const AlbumSchema = z.object({
  id: z.string(),
  title: z.string(),
  artwork: z.string().url(),
  songIds: z.array(z.string())
});

export type Album = z.infer<typeof AlbumSchema>;
