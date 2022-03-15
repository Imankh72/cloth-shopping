import styled from "styled-components";

const MenuItem = ({ title, imageUrl, size }) => {
  return (
    <MenuItemWrapper className={`${size}`}>
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
  height: 240px;
  flex: 1 1 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid var(--color-black);
  overflow: hidden;

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

    .title {
      font-weight: 22px;
      font-weight: bold;
      margin-bottom: 6px;
      color: var(--color-grey-1);
    }

    .subtitle {
      font-size: 16px;
    }
  }
`;
