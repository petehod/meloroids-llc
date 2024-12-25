import {
  doc,
  getDoc,
  setDoc,
  updateDoc,
  deleteDoc,
  DocumentData
} from "firebase/firestore";
import { db } from "../initFirebase";
import {
  FirebaseCollections,
  ValidFirebaseDoc
} from "@repo/common/firebaseCollections";

export const FirestoreService = {
  // CREATE
  createDoc: async (
    data: ValidFirebaseDoc,
    collection: FirebaseCollections
  ) => {
    if (!data) return;
    const docRef = doc(db, collection, data.id);

    try {
      await setDoc(docRef, data);
      console.log(`${collection} document created`);
    } catch (error) {
      console.error(`Error creating ${collection} document:`, error);
    }
  },

  // READ
  readDoc: async (docId: string, collection: FirebaseCollections) => {
    const docRef = doc(db, collection, docId);

    try {
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        return docSnap.data();
      } else {
        console.log(`No document found in ${collection} with ID: ${docId}`);
        return undefined;
      }
    } catch (error) {
      console.error(`Error reading ${collection} document:`, error);
      return undefined;
    }
  },

  // UPDATE
  updateDoc: async (
    docId: string,
    updatedData: Partial<ValidFirebaseDoc>,
    collection: FirebaseCollections
  ) => {
    const docRef = doc(db, collection, docId);

    try {
      await updateDoc(docRef, updatedData as DocumentData);
      console.log(`${collection} document with ID: ${docId} updated`);
    } catch (error) {
      console.error(`Error updating ${collection} document:`, error);
    }
  },

  // DELETE
  deleteDoc: async (docId: string, collection: FirebaseCollections) => {
    const docRef = doc(db, collection, docId);

    try {
      await deleteDoc(docRef);
      console.log(`${collection} document with ID: ${docId} deleted`);
    } catch (error) {
      console.error(`Error deleting ${collection} document:`, error);
    }
  }
};
