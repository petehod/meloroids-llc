import type { Artist } from "@repo/common/artist";
import { ArtistSchema } from "@repo/common/artist";
import { FirestoreService } from "@repo/firebase/firestoreService";
import { useEffect, useState } from "react";

export const useGetAllArtists = () => {
  const [artists, setArtists] = useState<Artist[]>();

  useEffect(() => {
    async function runEffect() {
      const docs = await FirestoreService.readAllDocs("artists");

      const artistsData = docs?.map((doc) => ArtistSchema.parse(doc));

      setArtists(artistsData);
    }

    runEffect();
  }, []);

  return artists;
};

export const useGetArtistsByIds = (
  artistIds?: string[]
): Artist[] | undefined => {
  const [artists, setArtists] = useState<Artist[] | undefined>();

  useEffect(() => {
    async function runEffect() {
      if (!artistIds?.length) {
        return;
      }

      try {
        const docs = await Promise.all(
          artistIds.map((artistId) =>
            FirestoreService.readDoc(artistId, "artists")
          )
        );

        const artistsData = docs.map((doc) => ArtistSchema.parse(doc));
        setArtists(artistsData);
      } catch (err) {
        console.error("Error fetching artists:", err);
      }
    }

    runEffect();
  }, [artistIds]);

  return artists;
};
