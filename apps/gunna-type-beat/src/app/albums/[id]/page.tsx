"use client";
import { YayaText } from "@repo/ui/YayaText";
import { useParams } from "next/navigation";
import { Button } from "@repo/ui/Button";
import { Table } from "../../../components/Table";
import { useGetAlbum } from "../../../hooks/useAlbums";
import FirebaseImage from "../../../components/Image/FirebaseImage";
import { TABLE_COLUMN_TITLES } from "../../../components/constants/table.constants";
import { useSongs } from "../../../hooks/useSongs";

export default function AlbumPage() {
  const { id: albumID } = useParams<{ id: string }>();

  const album = useGetAlbum(albumID);
  const { data: songs } = useSongs(album?.songIds);

  return (
    <div className="w-full overflow-x-scroll">
      {album && (
        <>
          <Button as="a" containerStyles="max-w-64" href="/albums">
            Albums
          </Button>
          <YayaText type="h2">{album.title}</YayaText>
          <FirebaseImage
            alt={`Artwork for the album ${album.title}`}
            filePath={album.artworkPath}
          />
        </>
      )}

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
