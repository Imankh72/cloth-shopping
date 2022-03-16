import DirectoryMenu from "../components/DirectoryMenu";
import styled from "styled-components";

const HomePage = () => {
  return (
    <HomePageWrapper>
      <DirectoryMenu />
    </HomePageWrapper>
  );
};

export default HomePage;

const HomePageWrapper = styled.div`
  max-width: var(--maxWidth);
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
