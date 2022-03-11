import styled from "styled-components";
import DirectoryMenu from "../components/DirectoryMenu";

const HomePage = () => {
  return (
    <HomePageWrapper>
      <DirectoryMenu />
    </HomePageWrapper>
  );
};

export default HomePage;

const HomePageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 80px;
`;
