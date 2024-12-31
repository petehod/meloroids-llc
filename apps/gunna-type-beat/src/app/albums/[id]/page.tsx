"use client";
import { YayaText } from "@repo/ui/YayaText";
import { useParams } from "next/navigation";
import { Button } from "@repo/ui/Button";
import { Table } from "../../../components/Table";
import { useGetAlbum } from "../../../hooks/useAlbums";
import FirebaseImage from "../../../components/Image/FirebaseImage";
import { useGetSongsByIds } from "../../../hooks/useGetSongsInAnAlbum";
import { TABLE_COLUMN_TITLES } from "../../../components/constants/table.constants";

export default function AlbumPage() {
  const { id: albumID } = useParams<{ id: string }>();

  const album = useGetAlbum(albumID);
  const songs = useGetSongsByIds(album?.songIds);

  if (!album) return null;
  return (
    <div className="w-full overflow-x-scroll">
      <Button as="a" containerStyles="max-w-64" href="/albums">
        Albums
      </Button>
      <YayaText type="h2">{album.title}</YayaText>
      <FirebaseImage
        alt={`Artwork for the album ${album.title}`}
        filePath={album.artworkPath}
      />

      {songs && (
        <Table
          columnTitles={TABLE_COLUMN_TITLES}
          gridCols="grid-cols-5"
          songs={songs}
        />
      )}
    </div>
  );
}
