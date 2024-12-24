import { Modal } from "@repo/ui/Modal";
import { memo } from "react";
import { YayaText } from "@repo/ui/YayaText";
import type { Song } from "@repo/common/song";
import { DataService } from "../../services/data.services";
import { SongDetailsParameters } from "./SongDetailsParameters";
import { SongDetailsProgressionInAllKeys } from "./SongDetailsProgressionInAllKeys";
import { SongDetailsIFrame } from "./SongDetailsIFrame";
import { SongDetailsOtherSongs } from "./SongDetailsOtherSongs";

interface SongDetailsModalProps {
  song: Song;
  onClose: () => void;
}

export const SongDetailsModal = memo(
  ({ song, onClose }: SongDetailsModalProps) => {
    const { chords, artists, key, name, progression, tempo, youtubeURL } = song;
    const { numerals } = progression;
    const frequency = DataService.singleChordProgressionFrequency(numerals);
    const otherSongs = DataService.songsWithProgression(numerals, name);
    const keyNoteName = song.key.split(" ")[0]; // I.E. C# rather than C# Minor

    const PARAMETERS = [
      `Tempo: ${tempo} bpm`,
      `Key: ${key}`,
      `Chords: ${chords.join("  ")}`,
      `Progression: ${numerals}`,
      `   - This chord progression is used in ${frequency?.frequency} of
            the songs from one of wun` // TODO: make dynamic with other albums
    ];

    return (
      <Modal backgroundColor="bg-dark" onClose={onClose}>
        <div className=" text-white py-4 h-full rounded ">
          <div className="mb-6">
            <YayaText type="h2">{name}</YayaText>
            <YayaText type="h3">{artists.join(", ")}</YayaText>
          </div>

          <SongDetailsIFrame source={youtubeURL} />

          <SongDetailsParameters parameters={PARAMETERS} />

          <SongDetailsOtherSongs numerals={numerals} otherSongs={otherSongs} />

          <SongDetailsProgressionInAllKeys
            progression={progression}
            songKey={keyNoteName}
          />
        </div>
      </Modal>
    );
  }
);

SongDetailsModal.displayName = "SongDetailsModal";
