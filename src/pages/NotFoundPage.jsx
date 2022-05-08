import styled from "styled-components";

const NotFoundPage = () => {
  return (
    <Wrapper>
      <h1>404 - Not Found</h1>
    </Wrapper>
  );
};

export default NotFoundPage;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10rem;

  h1 {
    font-size: 4rem;
  }
`;
