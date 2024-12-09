import { memo, useState } from "react";
import { useModal } from "@repo/ui/useModal";
import type { Song } from "../data/songs.data";
import { SongTableRow } from "./SongTableRow";
import { SongDetailsModal } from "./SongModal/SongDetailsModal";

interface TableProps {
  columnTitles: string[];
  songs: Song[];
  gridCols?: string;
}

export const Table = memo(
  ({ columnTitles, songs, gridCols = "grid-cols-5" }: TableProps) => {
    const [selectedSong, setSelectedSong] = useState<Song | null>(null);
    const { modalOpen, openModal, closeModal } = useModal();

    const handleClick = (song: Song) => () => {
      openModal();
      setSelectedSong(song);
    };
    return (
      <>
        {modalOpen && selectedSong && (
          <SongDetailsModal onClose={closeModal} song={selectedSong} />
        )}
        <div className="p-6 bg-light table overflow-scroll">
          <div
            className={`grid ${gridCols} gap-4 table overflow-scroll font-medium bg-dark p-4 rounded-md`}
          >
            {columnTitles.map((column) => (
              <div key={column}>{column}</div>
            ))}
          </div>
          {songs.map((song) => {
            return (
              <SongTableRow
                chords={song.chords}
                gridCols={gridCols}
                key={song.name}
                name={song.name}
                onClick={handleClick(song)}
                progression={song.progression.numerals}
                songKey={song.key}
                tempo={song.tempo}
              />
            );
          })}
        </div>
      </>
    );
  }
);
Table.displayName = "Table";
