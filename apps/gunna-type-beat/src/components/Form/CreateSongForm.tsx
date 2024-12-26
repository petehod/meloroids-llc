import type { ChordProgression } from "@repo/common/chordProgression";
import type { Song } from "@repo/common/song";
import { SongSchema } from "@repo/common/song";
import { FirestoreService } from "@repo/firebase/firestoreService";
import { Button } from "@repo/ui/Button";
import { Form } from "@repo/ui/Form";
import { Label } from "@repo/ui/Label";
import { Select } from "@repo/ui/Select";
import { Input } from "@repo/ui/Input";
import { useCallback, useState } from "react";
import { v4 } from "uuid";
import type { Album } from "@repo/common/album";
import type { Artist } from "@repo/common/artist";
import { arrayUnion } from "firebase/firestore";
import { useFirestoreCollection } from "../../hooks/useCollection";
import { useHandleFormChange, useHandleFormSubmit } from "../../hooks/useForm";

interface CreateSongFormProps {
  album: Album;
  artists?: Artist[];
}

export const CreateSongForm = ({ album, artists }: CreateSongFormProps) => {
  const [newSong, setNewSong] = useState<Partial<Song>>({
    name: "",
    youtubeURL: "",
    key: "",
    chords: "",
    tempo: "100",
    progressionIds: [],
    albumId: album.id,
    artistIds: []
  });

  const { docs: progressions } =
    useFirestoreCollection<ChordProgression>("chordProgressions");

  const handleChange = useHandleFormChange({ setNewData: setNewSong });

  const onSubmit = useCallback(async () => {
    const newSongId = v4();

    const song = SongSchema.parse({
      id: newSongId,
      artistIds: artists?.map((artist) => artist.id) ?? [],
      ...newSong
    });

    // Create song document
    await FirestoreService.createDoc(song, "songs");

    // update Album document
    await FirestoreService.updateDoc(
      album.id,
      {
        ...album,
        songIds: arrayUnion(newSongId) as unknown as string[]
      },
      "albums"
    );

    // Update artists document
    if (artists) {
      artists.map(async (artist) => {
        await FirestoreService.updateDoc(
          artist.id,
          {
            ...artist,
            songIds: arrayUnion(newSongId) as unknown as string[]
          },
          "artists"
        );
      });
    }
  }, [album, artists, newSong]);

  const handleFormSubmit = useHandleFormSubmit(onSubmit);
  return (
    <Form
      button={
        <Button backgroundColor="bg-dark" maxWidth="100%" type="submit">
          Add
        </Button>
      }
      onSubmit={handleFormSubmit}
      title={`Add a song to ${album.title}`}
    >
      <>
        <Label htmlFor="name" text="Song Name" />
        <Input id="name" name="name" onChange={handleChange} required />
      </>
      <>
        <Label htmlFor="tempo" text="Tempo" />
        <Input
          id="tempo"
          name="tempo"
          onChange={handleChange}
          required
          type="number"
        />
      </>

      <>
        <Label htmlFor="key" text="Key" />
        <Input
          id="key"
          name="key"
          onChange={handleChange}
          required
          type="text"
        />
      </>
      <>
        <Label htmlFor="chords" text="Chords e.g. A#-|C|B-" />
        <Input
          id="chords"
          name="chords"
          onChange={handleChange}
          required
          type="text"
        />
      </>
      <>
        <Label htmlFor="youtubeURL" text="YouTube URL" />
        <Input
          id="youtubeURL"
          name="youtubeURL"
          onChange={handleChange}
          required
          type="url"
        />
      </>
      {progressions.length && (
        <>
          <Label htmlFor="progressionIds" text="Chord Progression(s)" />
          <Select
            multiple
            name="progressionIds"
            onChange={handleChange}
            options={progressions.map((progression) => ({
              value: progression.id,
              label: progression.numerals
            }))}
          />
        </>
      )}
    </Form>
  );
};
