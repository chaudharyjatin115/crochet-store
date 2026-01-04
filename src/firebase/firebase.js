import { initializeApp } from "firebase/app";
import {
  getAuth,
  setPersistence,
  browserLocalPersistence,
} from "firebase/auth";
import { getFirestore } from "firebase/firestore";

console.log(
  "🔥 FIREBASE PROJECT ID:",
  import.meta.env.VITE_FIREBASE_PROJECT_ID
);

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

// 🔴 THIS IS THE FIX
setPersistence(auth, browserLocalPersistence)
  .then(() => {
    console.log("✅ Auth persistence set");
  })
  .catch(err => {
    console.error("❌ Auth persistence error", err);
  });

export const db = getFirestore(app);
