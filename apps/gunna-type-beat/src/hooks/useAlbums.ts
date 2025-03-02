import { AlbumSchema } from "@repo/common/album";
import { FirestoreService } from "@repo/firebase/firestoreService";
import { useQuery } from "@tanstack/react-query";
import { MINUTE } from "../constants/time.constants";

export const useGetAllAlbums = () => {
  return useQuery({
    queryKey: ["albums"],
    queryFn: async () => {
      const docs = await FirestoreService.readAllDocs("albums");
      return docs?.map((doc) => AlbumSchema.parse(doc));
    },
    gcTime: MINUTE * 5,
    staleTime: MINUTE * 5,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    refetchOnReconnect: false
  });
};

export const useGetAlbum = (albumId: string) => {
  return useQuery({
    queryKey: ["album", albumId],
    queryFn: async () => {
      const albumData = await FirestoreService.readDoc(albumId, "albums");
      return AlbumSchema.parse(albumData);
    },
    enabled: Boolean(albumId),
    staleTime: 1000 * 60 * 5,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    refetchOnReconnect: false
  });
};
