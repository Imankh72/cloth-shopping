import styled from "styled-components";

const HomePage = () => {
  return (
    <HomePageWrapper>
      <div className="directory-menu">
        <div className="menu-item">
          <div className="content">
            <h1 className="title">Hats</h1>
            <span className="subtitle">Shop Now</span>
          </div>
        </div>
        <div className="menu-item">
          <div className="content">
            <h1 className="title">Jackets</h1>
            <span className="subtitle">Shop Now</span>
          </div>
        </div>
        <div className="menu-item">
          <div className="content">
            <h1 className="title">Shoes</h1>
            <span className="subtitle">Shop Now</span>
          </div>
        </div>
        <div className="menu-item">
          <div className="content">
            <h1 className="title">Shoes</h1>
            <span className="subtitle">Shop Now</span>
          </div>
        </div>
        <div className="menu-item">
          <div className="content">
            <h1 className="title">Shoes</h1>
            <span className="subtitle">Shop Now</span>
          </div>
        </div>
      </div>
    </HomePageWrapper>
  );
};

export default HomePage;

const HomePageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 80px;

  .directory-menu {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  .menu-item {
    min-width: 30%;
    height: 240px;
    flex: 1 1 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid var(--color-black);
    margin: 8px 16px;

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
  }
`;
