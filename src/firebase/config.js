import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import {
  doc,
  getDoc,
  getFirestore,
  serverTimestamp,
  setDoc,
} from "firebase/firestore";

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

// Init Service
export const db = getFirestore();

// Authentication
export const auth = getAuth();

// Google Authentication
const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => {
  signInWithPopup(auth, provider);
};

export const createUserProfile = async (userAuth, extraData) => {
  const { displayName, email, uid } = userAuth;
  if (!userAuth) return;

  const userRef = doc(db, "users", uid);
  const result = await getDoc(userRef);
  if (!result.exists()) {
    try {
      await setDoc(userRef, {
        email,
        createdAt: serverTimestamp(),
        id: uid,
        ...extraData,
      });
    } catch (error) {
      console.log(error.message);
    }
  }
};
