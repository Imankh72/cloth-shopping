import SignIn from "../components/SignIn";
import SignUp from "../components/SignUp";

import styled from "styled-components";

const SignInPage = () => {
  return (
    <SignInPageWrapper>
      <SignIn />
      <SignUp />
    </SignInPageWrapper>
  );
};

export default SignInPage;

const SignInPageWrapper = styled.div`
  max-width: var(--maxWidth);
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
`;
