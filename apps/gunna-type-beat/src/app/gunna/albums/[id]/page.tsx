"use client";
import { YayaText } from "@repo/ui/YayaText";
import Image from "next/image";
import { useParams } from "next/navigation";
import { Button } from "@repo/ui/Button";
import { ALBUM_DATA } from "../../../../data/gunna.data";
import { SONGS } from "../../../../data/songs.data";
import { Table } from "../../../../components/Table";

const column = [
  "Song Name",
  "Tempo",
  "Key",
  "Chords",
  "Chord Progression",
  "YouTube URL"
];

export default function AlbumPage() {
  const { id: albumID } = useParams();

  const album = ALBUM_DATA.find((a) => a.id === albumID)!;
  const songs = SONGS.filter((song) => song.album === albumID);
  return (
    <div className="w-full">
      <Button as="a" containerStyles="max-w-64" href="/gunna">
        Albums
      </Button>
      <YayaText type="h2">{album.title}</YayaText>
      <Image alt={album.alt} height={200} src={album.source} width={200} />

      <Table columnTitles={column} songs={songs} />
    </div>
  );
}
