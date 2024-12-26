"use client";
import type { ChordProgression } from "@repo/common/chordProgression";
import { ChordProgressionSchema } from "@repo/common/chordProgression";
import { Form } from "@repo/ui/Form";
import { Input } from "@repo/ui/Input";
import { Label } from "@repo/ui/Label";
import { useCallback, useState } from "react";
import { Button } from "@repo/ui/Button";
import { v4 } from "uuid";
import { FirestoreService } from "@repo/firebase/firestoreService";
import { useHandleFormChange, useHandleFormSubmit } from "../../hooks/useForm";

export const CreateChordProgressionForm = () => {
  const [newChordProgression, setNewChordProgression] = useState<
    Partial<ChordProgression>
  >({ is_major: false, numerals: "" });

  const handleChange = useHandleFormChange({
    setNewData: setNewChordProgression
  });

  const onSubmit = useCallback(async () => {
    const progression = ChordProgressionSchema.parse({
      id: v4(),
      ...newChordProgression
    });

    await FirestoreService.createDoc(progression, "chordProgressions");
  }, [newChordProgression]);

  const handleSubmit = useHandleFormSubmit(onSubmit);

  return (
    <Form
      button={<Button type="submit">Add new progression</Button>}
      onSubmit={handleSubmit}
      title="Add A Chord Progression"
    >
      <>
        <Label htmlFor="numerals" text="Numerals" />
        <Input
          id="numerals"
          name="numerals"
          onChange={handleChange}
          placeholder="I-IV-vi"
          required
        />
      </>
      <>
        <Label htmlFor="is_major" text="Is Major" />
        <Input
          id="is_major"
          name="is_major"
          onChange={handleChange}
          type="checkbox"
        />
      </>
    </Form>
  );
};
