import { YayaText } from "@repo/ui/YayaText";
import type { Song } from "../../data/songs.data";
import { EmphasizedText } from "../EmphasizeText";

interface SongDetailsOtherSongsProps {
  numerals: string;
  otherSongs: Song[];
}

export const SongDetailsOtherSongs = ({
  numerals,
  otherSongs
}: SongDetailsOtherSongsProps) => {
  return (
    <section className="flex flex-col gap-2 mb-6">
      <YayaText type="h3">
        Other songs that use the <br className="lg:hidden" />{" "}
        <EmphasizedText text={numerals} /> chord progression
      </YayaText>

      {otherSongs.length > 0 ? (
        <ul>
          {otherSongs.map((otherSong) => (
            <li key={`${otherSong.name} ${Math.random()}`}>{otherSong.name}</li>
          ))}
        </ul>
      ) : (
        <YayaText type="p">No other songs using this progression!</YayaText>
      )}
    </section>
  );
};
