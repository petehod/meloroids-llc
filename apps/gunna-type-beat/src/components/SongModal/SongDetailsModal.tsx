import { Modal } from "@repo/ui/Modal";
import { memo } from "react";
import { YayaText } from "@repo/ui/YayaText";
import type { Song } from "../../data/songs.data";
import { DataService } from "../../services/data.services";
import { SongDetailsParameters } from "./SongDetailsParameters";
import { SongDetailsProgressionInAllKeys } from "./SongDetailsProgressionInAllKeys";
import { SongDetailsIFrame } from "./SongDetailsIFrame";

interface SongDetailsModalProps {
  song: Song;
  onClose: () => void;
}

export const SongDetailsModal = memo(
  ({ song, onClose }: SongDetailsModalProps) => {
    const { chords, artists, key, name, progression, tempo, youtube } = song;
    const { numerals } = progression;
    const frequency = DataService.singleChordProgressionFrequency(numerals);

    const PARAMETERS = [
      `Tempo: ${tempo} bpm`,
      `Key: ${key}`,
      `Chords: ${chords.join("   ")}`,
      `Progression: ${numerals}`,
      `   - This chord progression is used in ${frequency?.frequency} of
            the songs from one of wun` // TODO: make dynamic with other albums
    ];

    return (
      <Modal backgroundColor="bg-dark" onClose={onClose}>
        <div className=" text-white py-4 h-full rounded">
          <div className="mb-4">
            <YayaText type="h2">{name}</YayaText>
            <YayaText type="h3">{artists.join(", ")}</YayaText>
          </div>

          <SongDetailsIFrame source={youtube} />

          <section>
            <YayaText className="mb-2" type="h3">
              Parameters
            </YayaText>
            <SongDetailsParameters parameters={PARAMETERS} />
          </section>

          <section>
            <YayaText className="mb-2" type="h3">
              {numerals} In Every Key
            </YayaText>
            <SongDetailsProgressionInAllKeys progression={progression} />
          </section>
        </div>
      </Modal>
    );
  }
);

SongDetailsModal.displayName = "SongDetailsModal";
