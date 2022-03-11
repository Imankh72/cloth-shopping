import styled from "styled-components";

const MenuItem = ({ title, imageUrl }) => {
  return (
    <MenuItemWrapper style={{ backgroundImage: `url(${imageUrl})` }}>
      <div className="content">
        <h1 className="title">{title}</h1>
        <span className="subtitle">Shop Now</span>
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
  margin: 8px 16px;
  background-position: center;
  background-size: cover;

  &:first-child {
    margin-right: 8px;
  }

  &:last-child {
    margin-left: 8px;
  }

  .content {
    height: 90px;
    padding: 0 25px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 1px solid var(--color-black);

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
