import { memo, useState } from "react";
import { useModal } from "@repo/ui/useModal";
import type { Song } from "../data/songs.data";
import { DataService } from "../services/data.services";
import { SongTableRow } from "./SongTableRow";
import { SongDetailsModal } from "./SongDetailsModal";

interface TableProps {
  columnTitles: string[];
  songs: Song[];
}

export const Table = memo(({ columnTitles, songs }: TableProps) => {
  const [selectedSong, setSelectedSong] = useState<Song | null>(null);
  const { modalOpen, openModal, closeModal } = useModal();

  return (
    <>
      {modalOpen && selectedSong ? (
        <SongDetailsModal onClose={closeModal} song={selectedSong} />
      ) : null}
      <div className="p-6 bg-light">
        <div className="grid grid-cols-6 gap-4  font-medium bg-dark p-4 rounded-md">
          {columnTitles.map((column) => (
            <div key={column}>{column}</div>
          ))}
        </div>
        {songs.map((song) => {
          const progressionFrequency =
            DataService.singleChordProgressionFrequency(song.progression);
          return (
            <SongTableRow
              chords={song.chords}
              key={song.name}
              name={song.name}
              onClick={() => {
                openModal();
                setSelectedSong(song);
              }}
              progression={song.progression}
              progressionFrequency={
                progressionFrequency?.frequency ?? "Unknown"
              }
              songKey={song.key}
              tempo={song.tempo}
              youtube={song.youtube}
            />
          );
        })}
      </div>
    </>
  );
});
Table.displayName = "Table";
