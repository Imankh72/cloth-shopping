import { useState } from "react";
import styled from "styled-components";
import { signInWithGoogle } from "../utils/firebase";
import CustomButton from "./CustomButton";
import FormInput from "./FormInput";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, password);
    setEmail("");
    setPassword("");
  };

  const handleChange = (e) => {
    switch (e.target.name) {
      case "email":
        setEmail(e.target.value);
        break;
      case "password":
        setPassword(e.target.value);
      default:
        break;
    }
  };

  return (
    <SignInWrapper>
      <h2 className="title">I already have an account</h2>
      <span className="subtitle">Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          type="email"
          value={email}
          name="email"
          label="Email"
          handleChange={handleChange}
          required
        />

        <FormInput
          type="password"
          value={password}
          name="password"
          label="Password"
          handleChange={handleChange}
          required
        />

        <CustomButton type="submit">Sign In</CustomButton>
        <CustomButton onClick={signInWithGoogle}>
          Sign In With Google
        </CustomButton>
      </form>
    </SignInWrapper>
  );
};

export default SignIn;

const SignInWrapper = styled.div`
  width: 30vw;
  display: flex;
  flex-direction: column;

  .title {
    font-size: 28px;
    margin-bottom: 10px;
  }

  .subtitle {
    font-size: 18px;
  }
`;
