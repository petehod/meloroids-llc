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

export const useGetProgressionById = (id: string | null) => {
  const [progression, setProgression] = useState<ChordProgression | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    if (!id) {
      setProgression(null);
      setError("ID is required");
      setLoading(false);
      return;
    }

    async function fetchProgression() {
      if (!id) return;
      try {
        setLoading(true);
        const doc = await FirestoreService.readDoc(id, "chordProgressions");
        const validated = doc ? ChordProgressionSchema.parse(doc) : null;
        setProgression(validated);
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Unknown error occurred");
        setProgression(null);
      } finally {
        setLoading(false);
      }
    }

    fetchProgression();
  }, [id]);

  return { progression, error, loading };
};
