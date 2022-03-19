import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCrYzJXmBbOGMSYCHDnensutqeaj6Jme64",
  authDomain: "e-commerce-db-c3454.firebaseapp.com",
  projectId: "e-commerce-db-c3454",
  storageBucket: "e-commerce-db-c3454.appspot.com",
  messagingSenderId: "799435009415",
  appId: "1:799435009415:web:3740b8f34c07b83aed3722",
  measurementId: "G-QB2E4WNZXN",
};

// Initialize Firebase
initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore();
const analytics = getAnalytics();

const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => signInWithPopup(auth, provider);
