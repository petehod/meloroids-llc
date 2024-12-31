// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBJedkWb5Sm6n3qYb5Kd-xkIh_EOB60f2w",
  authDomain: "meloroids-llc.firebaseapp.com",
  projectId: "meloroids-llc",
  storageBucket: "meloroids-llc.firebasestorage.app",
  messagingSenderId: "842380059400",
  appId: "1:842380059400:web:da93a947231718d4ffc2bd",
  measurementId: "G-WZ6BT0GRQ3"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

// export const analytics =clg getAnalytics(app);
export const storage = getStorage(app);

export default app;
