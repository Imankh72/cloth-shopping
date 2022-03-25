import FormInput from "./FormInput";
import { useState } from "react";
import CustomButton from "./CustomButton";
import { auth, createUserProfile } from "../firebase/config";
import { createUserWithEmailAndPassword } from "firebase/auth";

import styled from "styled-components";

const SignUp = () => {
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const reset = () => {
    setDisplayName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { user } = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      await createUserProfile(user, { displayName });
      reset();
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleChange = (e) => {
    switch (e.target.name) {
      case "displayName":
        setDisplayName(e.target.value);
        break;
      case "email":
        setEmail(e.target.value);
        break;
      case "password":
        setPassword(e.target.value);
        break;
      case "confirmPassword":
        setConfirmPassword(e.target.value);
        break;
      default:
        break;
    }
  };
  return (
    <SignUpWrapper>
      <h2 className="title">I do not have an account</h2>
      <span className="subtitle">Sign up with your email and password</span>
      <form className="sign-up-form" onSubmit={handleSubmit}>
        <FormInput
          type="text"
          name="displayName"
          value={displayName}
          onChange={handleChange}
          label="Display Name"
          required
        />
        <FormInput
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          label="Email"
          required
        />
        <FormInput
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          label="Password"
          required
        />
        <FormInput
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          onChange={handleChange}
          label="Confirm Password"
          required
        />
        <CustomButton type="submit">Sign Up</CustomButton>
      </form>
    </SignUpWrapper>
  );
};

export default SignUp;

const SignUpWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 380px;

  .title {
    font-size: 28px;
    margin-bottom: 10px;
  }

  .subtitle {
    font-size: 18px;
  }
`;
