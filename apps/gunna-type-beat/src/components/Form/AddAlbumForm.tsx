"use client";
import { Button } from "@repo/ui/Button";
import { Form } from "@repo/ui/Form";
import { Label } from "@repo/ui/Label";
import { Select } from "@repo/ui/Select";
import { Input } from "@repo/ui/Input";
import type { Album } from "@repo/common/album";
import { AlbumSchema } from "@repo/common/album";
import { FirestoreService } from "@repo/firebase/firestoreService";
import { StorageService } from "@repo/firebase/storageService";
import { useState, useCallback } from "react";
import { v4 } from "uuid";
import { useGetAllArtists } from "../../hooks/useArtists";
import { useHandleFormChange, useHandleFormSubmit } from "../../hooks/useForm";

export const AddAlbumForm = () => {
  const [image, setImage] = useState<File>();
  const [newAlbum, setNewAlbum] = useState<Partial<Album>>({
    title: "",
    songIds: [],
    artistIds: []
  });

  const artists = useGetAllArtists();

  const handleChange = useHandleFormChange({
    setNewData: setNewAlbum,
    setImage
  });

  const onSubmit = useCallback(async () => {
    if (!image) return;
    const newAlbumId = v4();
    const blobPath = `/albums/${newAlbumId}/${v4()}`;
    const album = AlbumSchema.parse({
      id: newAlbumId,
      artworkPath: blobPath,
      ...newAlbum
    });

    await StorageService.uploadFile(image, blobPath);

    if (!newAlbum.artistIds) return;

    newAlbum.artistIds.map(async (artistId) => {
      const prevArtistData = artists?.find((artist) => artist.id === artistId);
      if (!prevArtistData) return;

      await FirestoreService.updateDoc(
        artistId,
        {
          ...prevArtistData,
          albumIds: [...prevArtistData.albumIds, newAlbumId]
        },
        "artists"
      );
    });

    await FirestoreService.createDoc(album, "albums");
  }, [artists, image, newAlbum]);

  const handleSubmit = useHandleFormSubmit(onSubmit);

  return (
    <Form
      button={
        <Button backgroundColor="bg-dark" maxWidth="100%" type="Submit">
          Submit
        </Button>
      }
      onSubmit={handleSubmit}
      title="Add an album"
    >
      <>
        <Label htmlFor="title" text="Title" />
        <Input
          id="title"
          name="title"
          onChange={handleChange}
          placeholder="Dark Side of the Moon"
        />
      </>
      <>
        <Label htmlFor="imageURL" text="Image" />
        <Input
          id="imageURL"
          name="imageURL"
          onChange={handleChange}
          required
          type="file"
        />
      </>

      {artists && (
        <>
          <Label text="Artist(s)" />
          <Select
            multiple
            name="artistIds"
            onChange={handleChange}
            options={artists.map((artist) => ({
              value: artist.id,
              label: artist.name
            }))}
          />
        </>
      )}
    </Form>
  );
};
