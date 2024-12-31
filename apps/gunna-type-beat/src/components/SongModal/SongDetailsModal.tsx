import { Modal } from "@repo/ui/Modal";
import { memo } from "react";
import { YayaText } from "@repo/ui/YayaText";
import type { Song } from "@repo/common/song";
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
    const { chords, artistIds, key, name, tempo, youtubeURL } = song;

    const numerals = "I IV V";
    const tempProgression = { id: "1", numerals, is_major: true };
    // const frequency = DataService.singleChordProgressionFrequency(numerals);
    // const otherSongs = DataService.songsWithProgression(numerals, name);
    const keyNoteName = song.key.split(" ")[0]; // I.E. C# rather than C# Minor

    const frequency = { frequency: 10 };
    const otherSongs: Song[] = [];

    const PARAMETERS = [
      `Tempo: ${tempo} bpm`,
      `Key: ${key}`,
      `Chords: ${chords}`,
      `Progression: ${numerals}`,
      `   - This chord progression is used in ${frequency.frequency} of
            the songs from one of wun` // TODO: make dynamic with other albums
    ];

    return (
      <Modal backgroundColor="bg-dark" onClose={onClose}>
        <div className=" text-white py-4 h-full rounded ">
          <div className="mb-6">
            <YayaText type="h2">{name}</YayaText>
            <YayaText type="h3">{artistIds.join(", ")}</YayaText>
          </div>

          <SongDetailsIFrame source={youtubeURL} />

          <SongDetailsParameters parameters={PARAMETERS} />

          <SongDetailsOtherSongs numerals={numerals} otherSongs={otherSongs} />

          <SongDetailsProgressionInAllKeys
            progression={tempProgression}
            songKey={keyNoteName}
          />
        </div>
      </Modal>
    );
  }
);

SongDetailsModal.displayName = "SongDetailsModal";
