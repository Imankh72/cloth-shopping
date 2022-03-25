import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { auth } from "../firebase/config";

export const useSignup = () => {
  const [error, setError] = useState(null);

  const signUp = async (email, password) => {
    try {
      setError(null);
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (error) {
      setError(error.message);
    }
  };

  return { error, signUp };
};
