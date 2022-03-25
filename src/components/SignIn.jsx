import { useState } from "react";
import styled from "styled-components";
import { auth, signInWithGoogle } from "../firebase/config";
import CustomButton from "./CustomButton";
import FormInput from "./FormInput";
import { signInWithEmailAndPassword } from "firebase/auth";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await signInWithEmailAndPassword(auth, email, password);
      setEmail("");
      setPassword("");
    } catch (error) {
      setError(error.message);
    }
  };

  const handleChange = (e) => {
    switch (e.target.name) {
      case "email":
        setEmail(e.target.value);
        break;
      case "password":
        setPassword(e.target.value);
        break;
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

        <div className="button-group">
          <CustomButton type="submit">Sign In</CustomButton>
          <CustomButton onClick={signInWithGoogle} google>
            Sign In With Google
          </CustomButton>
        </div>
        {error && <p>{error}</p>}
      </form>
    </SignInWrapper>
  );
};

export default SignIn;

const SignInWrapper = styled.div`
  width: 450px;
  display: flex;
  flex-direction: column;

  .title {
    font-size: 28px;
    margin-bottom: 10px;
  }

  .subtitle {
    font-size: 18px;
  }

  .button-group {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;
