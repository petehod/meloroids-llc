import type { ChordProgression } from "@repo/common/chordProgression";
import { ChordProgressionSchema } from "@repo/common/chordProgression";
import { FirestoreService } from "@repo/firebase/firestoreService";
import { useEffect, useState } from "react";

export const useGetAllProgressions = () => {
  const [progressions, setProgressions] = useState<ChordProgression[] | null>(
    null
  );

  useEffect(() => {
    async function runEffect() {
      const docs = await FirestoreService.readAllDocs("chordProgressions");
      const validate = docs?.map((doc) => ChordProgressionSchema.parse(doc));
      setProgressions(validate ?? null);
    }

    runEffect();
  }, []);

  return progressions;
};
