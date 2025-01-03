import { Modal } from "@repo/ui/Modal";
import { memo } from "react";
import { YayaText } from "@repo/ui/YayaText";
import type { Song } from "@repo/common/song";
import { useGetProgressionById } from "../../hooks/useProgressions";
import { useGetArtistsByIds } from "../../hooks/useArtists";
import { SongDetailsParameters } from "./SongDetailsParameters";
import { SongDetailsProgressionInAllKeys } from "./SongDetailsProgressionInAllKeys";
import { SongDetailsIFrame } from "./SongDetailsIFrame";

interface SongDetailsModalProps {
  song: Song;
  onClose: () => void;
}

export const SongDetailsModal = memo(
  ({ song, onClose }: SongDetailsModalProps) => {
    const { chords, key, name, tempo, youtubeURL } = song;
    const progression = useGetProgressionById(song.progressionIds[0]);
    const artists = useGetArtistsByIds(song.artistIds);
    const numerals = progression.progression?.numerals ?? "I";
    const tempProgression = { id: "1", numerals, is_major: true };
    // const frequency = DataService.singleChordProgressionFrequency(numerals);
    // const otherSongs = DataService.songsWithProgression(numerals, name);
    const keyNoteName = song.key.split(" ")[0]; // I.E. C# rather than C# Minor

    const PARAMETERS = [
      `Tempo: ${tempo} bpm`,
      `Key: ${key}`,
      `Chords: ${chords}`,
      `Progression: ${numerals}`
    ];

    return (
      <Modal backgroundColor="bg-dark" onClose={onClose}>
        <div className=" text-white py-4 h-full rounded ">
          <div className="mb-6">
            <YayaText type="h2">{name}</YayaText>
            <YayaText type="h3">
              {artists?.map((artist, index) => {
                const isLastIndex = index === artists.length - 1;
                return (
                  <span key={artist.id}>
                    {artist.name}
                    {!isLastIndex && ","}
                  </span>
                );
              })}
            </YayaText>
          </div>

          <SongDetailsIFrame source={youtubeURL} />

          <SongDetailsParameters parameters={PARAMETERS} />

          <SongDetailsProgressionInAllKeys
            progression={progression.progression ?? tempProgression}
            songKey={keyNoteName}
          />
        </div>
      </Modal>
    );
  }
);

SongDetailsModal.displayName = "SongDetailsModal";
