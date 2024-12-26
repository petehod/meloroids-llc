"use client";
import { Button } from "@repo/ui/Button";
import { ContentContainer } from "@repo/ui/ContentContainer";
import { Form } from "@repo/ui/Form";
import { Input } from "@repo/ui/Input";
import { Label } from "@repo/ui/Label";
import { useCallback, useState } from "react";
import { ArtistSchema, type Artist } from "@repo/common/artist";
import { v4 } from "uuid";
import { StorageService } from "@repo/firebase/storageService";
import { FirestoreService } from "@repo/firebase/firestoreService";
import {
  useHandleFormChange,
  useHandleFormSubmit
} from "../../../hooks/useForm";

/**
 * This page is purely for creating a new artist with an image.
 * Do NOT add albums here. Do that on the /admin/albums screen
 */
export default function ArtistsAdmin() {
  const [image, setImage] = useState<File>();

  const [newArtist, setNewArtist] = useState<Partial<Artist>>({
    albumIds: [], // Comes from other collections
    name: "",
    songsIds: []
  });

  const handleChange = useHandleFormChange({
    setNewData: setNewArtist,
    setImage
  });

  const onSubmit = useCallback(async () => {
    if (!image) return;

    const newArtistId = v4();
    const blobPath = `/artists/${newArtistId}/${v4()}`;

    const artist = ArtistSchema.parse({
      id: newArtistId,
      imagePath: blobPath,
      ...newArtist
    });

    await StorageService.uploadFile(image, blobPath);

    await FirestoreService.createDoc(artist, "artists");
  }, [image, newArtist]);

  const handleSubmit = useHandleFormSubmit(onSubmit);

  return (
    <ContentContainer>
      <Form
        button={
          <Button
            backgroundColor="bg-white"
            maxWidth="100%"
            textColor="text-dark"
          >
            Submit
          </Button>
        }
        onSubmit={handleSubmit}
        title="Create New Artist"
      >
        <>
          <Label htmlFor="name" text="Name" />
          <Input
            id="name"
            name="name"
            onChange={handleChange}
            placeholder="Morgan Wallen"
            required
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
      </Form>
    </ContentContainer>
  );
}
