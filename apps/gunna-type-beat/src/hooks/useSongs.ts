import { SongSchema } from "@repo/common/song";
import { FirestoreService } from "@repo/firebase/firestoreService";
import { useQuery } from "@tanstack/react-query";

export const useSongs = (songIds?: string[]) => {
  return useQuery({
    queryKey: ["songs", songIds],
    queryFn: async () => {
      if (!songIds || songIds.length === 0) return [];
      const docs = await Promise.all(
        songIds.map((songId) => FirestoreService.readDoc(songId, "songs"))
      );
      return docs.map((doc) => SongSchema.parse(doc));
    },
    enabled: Boolean(songIds?.length),
    staleTime: 1000 * 60 * 20
  });
};
