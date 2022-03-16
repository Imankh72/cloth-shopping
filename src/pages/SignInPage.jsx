import styled from "styled-components";
import SignIn from "../components/SignIn";

const SignInPage = () => {
  return (
    <SignInPageWrapper>
      <SignIn />
    </SignInPageWrapper>
  );
};

export default SignInPage;

const SignInPageWrapper = styled.div`
  max-width: var(--maxWidth);
  margin: 0 auto;
`;
