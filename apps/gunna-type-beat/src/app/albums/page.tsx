"use client";
import { YayaText } from "@repo/ui/YayaText";
import { useGetAllAlbums } from "../../hooks/useAlbums";
import { ImageCard } from "../../components/Card/ImageCard";
import FirebaseImage from "../../components/Image/FirebaseImage";
import { CardGrid } from "../../components/constants/CardGrid";
import { Skeleton } from "../../components/Skeleton";

export default function Data() {
  const { data: albums } = useGetAllAlbums();

  return albums ? (
    <div className="flex flex-col items-center justify-center w-full gap-2">
      <YayaText type="h2">Albums</YayaText>
      <CardGrid>
        {albums
          .filter((album) => album.songIds.length > 0)
          .map((album) => (
            <ImageCard
              href={`/albums/${album.id}`}
              image={
                <FirebaseImage
                  alt={`Album artwork for ${album.title}`}
                  filePath={album.artworkPath}
                  style={{ objectFit: "contain" }}
                />
              }
              key={album.id}
            >
              {album.title}
            </ImageCard>
          ))}
      </CardGrid>
    </div>
  ) : (
    <Skeleton height="100vh" />
  );
}
