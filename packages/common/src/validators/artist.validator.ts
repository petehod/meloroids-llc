import { z } from "zod";

export const ArtistSchema = z.object({
  id: z.string(),
  name: z.string(),
  imageURL: z.string(),
  albumIds: z.array(z.string())
});

export type Artist = z.infer<typeof ArtistSchema>;
