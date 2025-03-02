"use client";
import { ContentContainer } from "@repo/ui/ContentContainer";
import { YayaText } from "@repo/ui/YayaText";
import { AddAlbumForm } from "../../../components/Form/AddAlbumForm";
import { useGetAllAlbums } from "../../../hooks/useAlbums";
import FirebaseImage from "../../../components/Image/FirebaseImage";
import { ImageCard } from "../../../components/Card/ImageCard";
import { CardGrid } from "../../../components/constants/CardGrid";

export default function AlbumsAdmin() {
  const { data: albums } = useGetAllAlbums();
  return (
    <ContentContainer containerStyles="flex flex-col items-center justify-between">
      <AddAlbumForm />

      {albums && (
        <div>
          <YayaText type="h2">Albums</YayaText>
          <CardGrid>
            {albums.map((album) => (
              <ImageCard
                href={`/admin/albums/${album.id}`}
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
          </CardGrid>
        </div>
      )}
    </ContentContainer>
  );
}
