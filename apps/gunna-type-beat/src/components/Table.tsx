import { memo, useState } from "react";
import { useModal } from "@repo/ui/useModal";
import type { Song } from "../data/songs.data";
import { DataService } from "../services/data.services";
import { SongTableRow } from "./SongTableRow";
import { SongDetailsModal } from "./SongDetailsModal";

interface TableProps {
  columnTitles: string[];
  songs: Song[];
  gridCols?: string;
}

export const Table = memo(
  ({ columnTitles, songs, gridCols = "grid-cols-5" }: TableProps) => {
    const [selectedSong, setSelectedSong] = useState<Song | null>(null);
    const { modalOpen, openModal, closeModal } = useModal();

    return (
      <>
        {modalOpen && selectedSong ? (
          <SongDetailsModal onClose={closeModal} song={selectedSong} />
        ) : null}
        <div className="p-6 bg-light w-full">
          <div
            className={`grid ${gridCols} gap-4 w-full overflow-scroll font-medium bg-dark p-4 rounded-md`}
          >
            {columnTitles.map((column) => (
              <div key={column}>{column}</div>
            ))}
          </div>
          {songs.map((song) => {
            const progressionFrequency =
              DataService.singleChordProgressionFrequency(song.progression);
            return (
              <SongTableRow
                gridCols={gridCols}
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
              />
            );
          })}
        </div>
      </>
    );
  }
);
Table.displayName = "Table";
