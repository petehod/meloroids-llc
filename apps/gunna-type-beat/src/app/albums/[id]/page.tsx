"use client";
import { YayaText } from "@repo/ui/YayaText";
import { useParams } from "next/navigation";
import { Button } from "@repo/ui/Button";
import { Table } from "../../../components/Table";
import { useGetAlbum } from "../../../hooks/useAlbums";
import FirebaseImage from "../../../components/Image/FirebaseImage";
import { TABLE_COLUMN_TITLES } from "../../../components/constants/table.constants";
import { useSongs } from "../../../hooks/useSongs";
import { Skeleton } from "../../../components/Skeleton";

export default function AlbumPage() {
  const { id: albumID } = useParams<{ id: string }>();

  const { data: album, isLoading: albumIsLoading } = useGetAlbum(albumID);
  const { data: songs } = useSongs(album?.songIds);

  return (
    <div className="w-full overflow-x-scroll flex flex-col justify-start">
      <Button as="a" containerStyles="max-w-64" href="/albums">
        Albums
      </Button>
      {albumIsLoading ? (
        <>
          <Skeleton className="my-2" height={50} width={400} />
          <Skeleton className="mb-2" height={200} width={200} />
        </>
      ) : (
        <>
          <YayaText type="h2">{album?.title}</YayaText>
          <FirebaseImage
            alt={`Artwork for the album ${album?.title}`}
            // eslint-disable-next-line @typescript-eslint/no-non-null-asserted-optional-chain
            filePath={album?.artworkPath!}
          />
        </>
      )}

      {songs ? (
        <Table
          columnTitles={TABLE_COLUMN_TITLES}
          gridCols="grid-cols-5"
          songs={songs}
        />
      ) : (
        <Skeleton height={600} />
      )}
    </div>
  );
}
