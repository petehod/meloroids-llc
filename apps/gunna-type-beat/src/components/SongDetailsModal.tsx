import { Modal } from "@repo/ui/Modal";
import { memo } from "react";
import { YayaText } from "@repo/ui/YayaText";
import type { Song } from "../data/songs.data";
import { formatYouTubeUrlForIframe } from "../utils/youtube.utils";
import { DataService } from "../services/data.services";

interface SongDetailsModalProps {
  song: Song;
  onClose: () => void;
}

export const SongDetailsModal = memo(
  ({ song, onClose }: SongDetailsModalProps) => {
    const { chords, artists, key, name, progression, tempo, youtube } = song;
    const formattedUrl = formatYouTubeUrlForIframe(youtube);
    const frequency = DataService.singleChordProgressionFrequency(progression);

    return (
      <Modal onClose={onClose}>
        <div className="text-dark">
          <YayaText type="h2">{name}</YayaText>

          <YayaText type="h3">{artists.join(", ")}</YayaText>

          <iframe
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            height="400"
            referrerPolicy="strict-origin-when-cross-origin"
            src={formattedUrl}
            title="YouTube video player"
            width="100%"
          />
          <YayaText type="h3">{tempo} bpm</YayaText>
          <YayaText type="h3">{key}</YayaText>
          <YayaText type="h3">{progression}</YayaText>
          <YayaText type="h3">
            This chord progression is used in {frequency?.frequency} of
            Gunna&apos;s songs
          </YayaText>
          <YayaText type="h3">{chords.join("   ")}</YayaText>
        </div>
      </Modal>
    );
  }
);

SongDetailsModal.displayName = "SongDetailsModal";
