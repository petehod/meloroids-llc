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

    const parameters = [
      `Tempo: ${tempo} bpm`,
      `Key: ${key}`,
      `Chords: ${chords.join("   ")}`,
      `Progression: ${progression}`,
      `   - This chord progression is used in ${frequency?.frequency} of
            Gunna's songs`
    ];

    return (
      <Modal backgroundColor="bg-dark" onClose={onClose}>
        <div className=" text-white py-4 h-full rounded">
          <div className="mb-4">
            <YayaText type="h2">{name}</YayaText>
            <YayaText type="h3">{artists.join(", ")}</YayaText>
          </div>

          <iframe
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="rounded mb-6"
            height="400"
            referrerPolicy="strict-origin-when-cross-origin"
            src={formattedUrl}
            title="YouTube video player"
            width="100%"
          />
          <YayaText className="mb-2" type="h3">
            Parameters
          </YayaText>
          <ul className="flex flex-col gap-2 mb-6">
            {parameters.map((param, index) => (
              <li key={param}>
                <YayaText
                  className={index === parameters.length - 1 ? "ml-4" : ""}
                  type="p"
                >
                  {param}
                </YayaText>
              </li>
            ))}
          </ul>
          <section>
            <YayaText className="mb-2" type="h3">
              {progression} In Every Key
            </YayaText>
            <ul className="flex flex-col gap-2 mb-6">
              {parameters.map((param, index) => (
                <li key={param}>
                  <YayaText
                    className={index === parameters.length - 1 ? "ml-4" : ""}
                    type="p"
                  >
                    {param}
                  </YayaText>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </Modal>
    );
  }
);

SongDetailsModal.displayName = "SongDetailsModal";
