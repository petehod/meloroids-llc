import { FirestoreService } from "@repo/firebase/firestoreService";
import { ChordProgressionSchema } from "@repo/common/chordProgression";
import { SongSchema } from "@repo/common/song";
import { arrayUnion } from "firebase/firestore";
import { ArtistSchema } from "@repo/common/artist";
import { AlbumSchema } from "@repo/common/album";
import { SEED_SONGS } from "../data/songs.seeds";
import { SEED_PROGRESSIONS } from "../data/progressions.seeds";
import { GUNNA_ID, ONE_OF_WUN_ID } from "../data/seed.data";

export const SeedService = {
  seedProgressions: () => {
    SEED_PROGRESSIONS.map(async (progression) => {
      const validate = ChordProgressionSchema.parse(progression);
      await FirestoreService.createDoc(validate, "chordProgressions");
    });
  },
  seedSongs: () => {
    SEED_SONGS.map(async (song) => {
      const validate = SongSchema.parse(song);
      await FirestoreService.createDoc(validate, "songs");

      //   Update Artist Document
      song.artistIds.map(async (artist) => {
        const artistDoc = await FirestoreService.readDoc(artist, "artists");
        const validateArtist = ArtistSchema.parse(artistDoc);
        await FirestoreService.updateDoc(
          validateArtist.id,
          {
            ...validateArtist,
            songIds: arrayUnion(song.id) as unknown as string[]
          },
          "artists"
        );
      });
      //   Update Album Document

      const albumDoc = await FirestoreService.readDoc(song.albumId, "albums");
      const validateAlbum = AlbumSchema.parse(albumDoc);
      await FirestoreService.updateDoc(
        validateAlbum.id,
        {
          ...validateAlbum,
          songIds: arrayUnion(song.id) as unknown as string[]
        },
        "albums"
      );
    });
  },
  resetDB: async () => {
    SEED_SONGS.map((song) => FirestoreService.deleteDoc(song.id, "songs"));
    const album = await FirestoreService.readDoc(ONE_OF_WUN_ID, "albums");
    const validateAlbum = AlbumSchema.parse(album);

    await FirestoreService.updateDoc(
      validateAlbum.id,
      { songIds: [] },
      "albums"
    );

    const artist = await FirestoreService.readDoc(GUNNA_ID, "artists");
    const validateArtist = ArtistSchema.parse(artist);

    await FirestoreService.updateDoc(
      validateArtist.id,
      { songIds: [] },
      "artists"
    );
  }
};
