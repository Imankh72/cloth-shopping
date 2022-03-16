import { useState } from "react";
import styled from "styled-components";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setEmail("");
    setPassword("");
  };

  return (
    <SignInWrapper>
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          value={email}
          name="email"
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label>Email</label>
        <input
          type="password"
          value={password}
          name="password"
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <label>Password</label>
        <input type="submit" value="submit form" />
      </form>
    </SignInWrapper>
  );
};

export default SignIn;

const SignInWrapper = styled.div``;
