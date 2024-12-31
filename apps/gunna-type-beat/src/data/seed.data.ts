import type { Album } from "@repo/common/album";
import type { Artist } from "@repo/common/artist";

type SeedArtist = Artist & {
  imagePath: string;
};

export const GUNNA_ID = "d52ab875-267c-4c00-9b47-85140037122e";
export const ONE_OF_WUN_ID = "a45554a0-88a1-427f-96f9-b866cc9ca157";

export const SEED_ARTISTS: SeedArtist[] = [
  {
    id: GUNNA_ID,
    albumIds: [ONE_OF_WUN_ID],
    name: "Gunna",
    imagePath: "./artwork/gunna.jpg",
    songIds: []
  }
];

type SeedAlbum = Album & {
  imagePath: string;
};

export const SEED_ALBUMS: SeedAlbum[] = [
  {
    id: ONE_OF_WUN_ID,
    title: "One of Wun",
    artistIds: [GUNNA_ID],
    artworkPath: "",
    imagePath: "./artwork/one-of-wun.jpg", // Local asset to send to storage
    songIds: []
  }
];
