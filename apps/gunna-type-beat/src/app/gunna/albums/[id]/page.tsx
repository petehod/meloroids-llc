"use client";
import { YayaText } from "@repo/ui/YayaText";
import Image from "next/image";
import { Album, ALBUM_DATA } from "../../../../data/gunna.data";
import { useParams } from "next/navigation";
import { SONGS } from "../../../../data/songs.data";
import { Button } from "@repo/ui/Button";
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

  const album = ALBUM_DATA.find((album) => album.id === albumID) as Album;
  const songs = SONGS.filter((song) => song.album === albumID);
  return (
    <div className="w-full">
      <Button href="/gunna" as="a" containerStyles="max-w-64">
        Albums
      </Button>
      <YayaText type="h2">{album.title}</YayaText>
      <Image alt={album.alt} src={album.source} height={200} width={200} />

      <Table album={album} columnTitles={column} songs={songs}></Table>
    </div>
  );
}
