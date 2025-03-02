"use client";
import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState
} from "react";
import type { User } from "firebase/auth";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@repo/firebase/initFirebase";
import { type User as FirebaseUser } from "@repo/common/user";
import { FirestoreService } from "@repo/firebase/firestoreService";

const AuthContext = createContext<{
  user: User | null;
  firestoreUser: FirebaseUser | null;
  loading: boolean;
}>({
  user: null,
  firestoreUser: null,
  loading: true
});

// TODO: handle auth on server side
export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [firestoreUser, setFirestoreUser] = useState<FirebaseUser | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      setUser(currentUser);

      if (currentUser) {
        try {
          const userDoc = await FirestoreService.readDoc(
            currentUser.uid,
            "users"
          );

          if (userDoc) setFirestoreUser(userDoc as FirebaseUser);
          else throw new Error("No Firestore user found for this UID.");
        } catch (error) {
          throw new Error("Error fetching Firestore user:");
        }
      } else setFirestoreUser(null);

      setLoading(false);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const value = useMemo(() => {
    return { user, firestoreUser, loading };
  }, [user, firestoreUser, loading]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  return useContext(AuthContext);
};
