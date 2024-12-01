import { memo, useState } from "react";
import { Song, SONGS } from "../data/songs.data";
import { Album } from "../data/gunna.data";
import { useModal } from "@repo/ui/useModal";
import { SongTableRow } from "./SongTableRow";
import { Modal } from "@repo/ui/Modal";

import { SongDetailsModal } from "./SongDetailsModal";
import { DataService } from "../services/data.services";
type TableProps = {
  columnTitles: string[];
  songs: Song[];
  album: Album;
};

export const Table = memo(({ columnTitles, songs, album }: TableProps) => {
  const [selectedSong, setSelectedSong] = useState<Song | null>(null);
  const { modalOpen, openModal, closeModal } = useModal();

  return (
    <>
      {modalOpen && selectedSong && (
        <SongDetailsModal song={selectedSong} onClose={closeModal} />
      )}
      <div className="p-6 bg-light">
        <div
          className={`grid grid-cols-6 gap-4  font-medium bg-dark p-4 rounded-md`}
        >
          {columnTitles.map((column) => (
            <div key={column}>{column}</div>
          ))}
        </div>
        {songs.map((song, index) => {
          const progressionFrequency =
            DataService.singleChordProgressionFrequency(song.progression);
          return (
            <SongTableRow
              onClick={() => {
                openModal();
                setSelectedSong(song);
              }}
              key={index}
              chords={song.chords}
              songKey={song.key}
              name={song.name}
              progression={song.progression}
              progressionFrequency={progressionFrequency?.frequency as string}
              tempo={song.tempo}
              youtube={song.youtube}
            />
          );
        })}
      </div>
    </>
  );
});
