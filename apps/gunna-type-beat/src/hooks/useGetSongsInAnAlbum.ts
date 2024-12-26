import type { Song } from "@repo/common/song";
import { SongSchema } from "@repo/common/song";
import { FirestoreService } from "@repo/firebase/firestoreService";
import { useEffect, useState } from "react";

export const useGetSongsByIds = (songIds?: string[]) => {
  const [songs, setSongs] = useState<Song[] | null>(null);

  useEffect(() => {
    const runEffect = async () => {
      if (!songIds) return;
      try {
        // Fetch songs in parallel
        const docs = await Promise.all(
          songIds.map((songId) => FirestoreService.readDoc(songId, "songs"))
        );

        // Validate each song against the schema
        const validatedSongs = docs.map((doc) => SongSchema.parse(doc));

        // Update the state with validated songs
        setSongs(validatedSongs);
      } catch (err) {
        console.error("Error fetching or validating songs:", err);
        setSongs([]); // Reset state on error
      }
    };

    runEffect();
  }, [songIds]);

  return songs;
};
