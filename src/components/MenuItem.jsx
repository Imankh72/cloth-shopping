import { useNavigate } from "react-router";
import styled from "styled-components";

const MenuItem = ({ title, imageUrl, size, linkUrl }) => {
  const navigate = useNavigate();

  return (
    <MenuItemWrapper className={`${size}`} onClick={() => navigate(linkUrl)}>
      <div
        className="background-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className="content">
        <h1 className="title">{title.toUpperCase()}</h1>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </MenuItemWrapper>
  );
};

export default MenuItem;

const MenuItemWrapper = styled.div`
  min-width: 30%;
  height: ${({ size }) => (size ? "380px" : "240px")};
  flex: 1 1 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid var(--color-black);
  overflow: hidden;
  border-radius: 4px;
  border: 0;

  &.large {
    height: 380px;
  }

  &:hover {
    cursor: pointer;

    & .background-image {
      transform: scale(1.1);
      transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
    }

    & .content {
      opacity: 0.9;
    }
  }

  .background-image {
    width: 100%;
    height: 100%;
    background-position: center;
    background-size: cover;
  }

  .content {
    height: 90px;
    padding: 0 25px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 1px solid var(--color-black);
    background: var(--color-white);
    opacity: 0.7;
    position: absolute;
    border-radius: 4px;
    border: 0;
    transition: all 0.2s;

    .title {
      font-weight: 22px;
      font-weight: bold;
      margin-bottom: 6px;
    }

    .subtitle {
      font-size: 20px;
      font-weight: bold;
    }
  }

  @media screen and (max-width: 992px) {
    height: 300px !important;
    width: 250px;
  }

  @media screen and (max-width: 576px) {
    height: 200px !important;
    width: 200px;
  }
`;
