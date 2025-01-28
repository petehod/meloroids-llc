"use client";
import { ContentContainer } from "@repo/ui/ContentContainer";
import { useParams } from "next/navigation";
import { YayaText } from "@repo/ui/YayaText";
import FirebaseImage from "../../../../components/Image/FirebaseImage";
import { useGetArtistsByIds } from "../../../../hooks/useArtists";
import { useGetAlbum } from "../../../../hooks/useAlbums";
import { CreateChordProgressionForm } from "../../../../components/Form/CreateChordProgressionForm";
import { CreateSongForm } from "../../../../components/Form/CreateSongForm";
import { Table } from "../../../../components/Table";
import { TABLE_COLUMN_TITLES } from "../../../../components/constants/table.constants";
import { useSongs } from "../../../../hooks/useSongs";

export default function AlbumIdAdmin() {
  const { id: albumId } = useParams<{ id: string }>();

  const album = useGetAlbum(albumId);

  const artists = useGetArtistsByIds(album?.artistIds);

  const { data: songs } = useSongs(album?.songIds);

  if (!album) return null;

  return (
    <ContentContainer containerStyles="flex-row">
      <div>
        <YayaText type="h1">{album.title}</YayaText>
        <FirebaseImage
          alt={`Album artwork for ${album.title}`}
          filePath={album.artworkPath}
        />
        {artists && (
          <YayaText type="h2">
            {artists.map((artist) => (
              <span key={artist.id}> {artist.name} </span>
            ))}
          </YayaText>
        )}
        <CreateSongForm album={album} artists={artists} />
        <CreateChordProgressionForm />
      </div>
      {songs && (
        <div>
          <Table columnTitles={TABLE_COLUMN_TITLES} songs={songs} />
        </div>
      )}
    </ContentContainer>
  );
}
