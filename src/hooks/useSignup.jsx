import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { auth } from "../firebase/config";

export const useSignup = () => {
  const [error, setError] = useState(null);

  const signUp = async (email, password) => {
    try {
      setError(null);
      const response = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log(response.user);
    } catch (error) {
      setError(error.message);
    }
  };

  return { error, signUp };
};
