import type { Album } from "@repo/common/album";
import type { Artist } from "@repo/common/artist";

type SeedArtist = Artist & {
  imagePath: string;
};

export const GUNNA_ID = "d52ab875-267c-4c00-9b47-85140037122e";
export const ONE_OF_WUN_ID = "a45554a0-88a1-427f-96f9-b866cc9ca157";
export const RODDY_RICCH_ID = "198ace0d-1459-412d-b6fe-15c4dfef47a7";
export const NORMANI_ID = "b3d24030-7dc1-4655-9838-7bf04048b780";
export const LEON_BRIDGES_ID = "ffa1c848-9fcc-4613-b86d-64b550c86413";
export const OFFSET_ID = "8968ad29-0149-4076-b0d6-c9bf873be5b8";

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
