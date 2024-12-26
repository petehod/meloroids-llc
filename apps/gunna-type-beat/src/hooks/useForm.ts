import type { Album } from "@repo/common/album";
import type { Artist } from "@repo/common/artist";
import { ChordProgression } from "@repo/common/chordProgression";
import type { Song } from "@repo/common/song";
import type { Dispatch, SetStateAction } from "react";
import { useCallback } from "react";

interface UseHandleFormChangeProps {
  setNewData: Dispatch<
    SetStateAction<Partial<Song | Artist | Album | ChordProgression>>
  >;
  setImage?: Dispatch<SetStateAction<File | undefined>>;
}

export const useHandleFormChange = ({
  setNewData,
  setImage
}: UseHandleFormChangeProps) => {
  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
      const { name, type, checked, value, files } =
        e.target as HTMLInputElement;

      if (e.target instanceof HTMLInputElement && files && setImage) {
        setImage(files[0]);
        return;
      } else if (e.target instanceof HTMLSelectElement && e.target.multiple) {
        const selectedOptions = Array.from(e.target.selectedOptions).map(
          (option) => option.value
        );
        setNewData((prev) => ({
          ...prev,
          [name]: selectedOptions
        }));
        return;
      }
      // Handle checkbox
      if (type === "checkbox") {
        setNewData((prev) => ({
          ...prev,
          [name]: checked // Use `checked` for checkboxes
        }));
        return;
      }
      setNewData((prev) => ({
        ...prev,
        [name]: value
      }));
    },
    [setImage, setNewData]
  );

  return handleChange;
};

export const useHandleFormSubmit = (onSubmit: () => Promise<void>) => {
  const handleSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();
      await onSubmit();
    },
    [onSubmit]
  );

  return handleSubmit;
};
