"use client";
import { YayaText } from "@repo/ui/YayaText";
import { useGetAllAlbums } from "../../hooks/useAlbums";
import { ImageCard } from "../../components/Card/ImageCard";
import FirebaseImage from "../../components/Image/FirebaseImage";

export default function Data() {
  const albums = useGetAllAlbums();

  if (!albums) return null;
  return (
    <div className="flex flex-col items-center justify-center w-full gap-2">
      <YayaText type="h2">Gunna Albums</YayaText>
      <div className="flex flex-row gap-8">
        {albums.map((album) => (
          <ImageCard
            href={`/albums/${album.id}`}
            image={
              <FirebaseImage
                alt={`Album artwork for ${album.title}`}
                filePath={album.artworkPath}
              />
            }
            key={album.id}
          >
            {album.title}
          </ImageCard>
        ))}
      </div>
      <YayaText type="p">Other albums coming soon....</YayaText>
    </div>
  );
}
