import { Modal, ModalProps } from "@repo/ui/Modal";
import { memo } from "react";
import { Song, SONGS } from "../data/songs.data";
import { YayaText } from "@repo/ui/YayaText";
import { formatYouTubeUrlForIframe } from "../utils/youtube.utils";
import { DataService } from "../services/data.services";

type SongDetailsModalProps = {
  song: Song;
  onClose: () => void;
};

export const SongDetailsModal = memo(
  ({ song, onClose }: SongDetailsModalProps) => {
    const { album, chords, artists, key, name, progression, tempo, youtube } =
      song;
    const formattedUrl = formatYouTubeUrlForIframe(youtube);
    const frequency = DataService.singleChordProgressionFrequency(progression);
    console.log("frequency", frequency);
    return (
      <Modal onClose={onClose}>
        <div className="text-dark">
          <YayaText type="h2">{name}</YayaText>

          <YayaText type="h3">{artists.join(", ")}</YayaText>

          <iframe
            width="100%"
            height="400"
            src={formattedUrl}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
          <YayaText type="h3">{tempo} bpm</YayaText>
          <YayaText type="h3">{key}</YayaText>
          <YayaText type="h3">{progression}</YayaText>
          <YayaText type="h3">
            This chord progression is used in {frequency?.frequency} of Gunna's
            songs
          </YayaText>
          <YayaText type="h3">{chords.join("   ")}</YayaText>
        </div>
      </Modal>
    );
  }
);
