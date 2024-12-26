import { AlbumSchema, type Album } from "@repo/common/album";
import { FirestoreService } from "@repo/firebase/firestoreService";
import { useEffect, useState } from "react";

export const useGetAllAlbums = () => {
  const [albums, setAlbums] = useState<Album[]>();

  useEffect(() => {
    async function runEffect() {
      const docs = await FirestoreService.readAllDocs("albums");

      const albumsData = docs?.map((doc) => AlbumSchema.parse(doc));

      setAlbums(albumsData);
    }

    runEffect();
  }, []);

  return albums;
};

export const useGetAlbum = (albumId: string) => {
  const [album, setAlbum] = useState<Album | null>(null);
  useEffect(() => {
    async function runEffect() {
      const albumData = await FirestoreService.readDoc(albumId, "albums");
      const validate = AlbumSchema.parse(albumData);
      setAlbum(validate);
    }

    runEffect();
  }, [albumId]);

  return album;
};
