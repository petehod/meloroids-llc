import type { Album } from "@repo/common/album";
import type { Artist } from "@repo/common/artist";

type SeedArtist = Artist & {
  imagePath: string;
};

export const GUNNA_ID = "ed06053c-bc23-4ad9-b623-a37a32884193";
export const ONE_OF_WUN_ID = "1e674df5-106e-491a-85c0-f825242ec1fa";
export const RODDY_RICCH_ID = "74953768-8d81-45fa-8a27-872398df8d87";
export const NORMANI_ID = "3d4809c4-f85a-4c4f-86e4-1e402a4a3045";
export const LEON_BRIDGES_ID = "0b5614ef-c469-41ab-8696-f701de05c29c";
export const OFFSET_ID = "53bed06d-8c6c-4f93-a3a1-ca88a3b12e14";

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
