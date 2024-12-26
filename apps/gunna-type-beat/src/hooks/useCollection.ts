import { useEffect, useState } from "react";
import { FirestoreService } from "@repo/firebase/firestoreService";
import type { FirebaseCollections } from "@repo/common/firebaseCollections";

export const useFirestoreCollection = <T>(
  collectionName: FirebaseCollections
) => {
  const [docs, setDocs] = useState<T[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const unsubscribe = FirestoreService.subscribeToAllDocs(
      collectionName,
      (updatedDocs) => {
        setDocs(updatedDocs as T[]); // Type assertion for incoming data
        setError(null);
      }
    );

    return () => {
      unsubscribe?.();
    };
  }, [collectionName]);

  return { docs, error };
};
