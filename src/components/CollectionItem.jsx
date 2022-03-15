import styled from "styled-components";

const CollectionItem = ({ id, name, price, imageUrl }) => {
  return (
    <CollectionItemWrapper>
      <div style={{ backgroundImage: `url(${imageUrl})` }} className="image" />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">${price}</span>
      </div>
    </CollectionItemWrapper>
  );
};

export default CollectionItem;

const CollectionItemWrapper = styled.div`
  width: 22%;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 350px;

  .image {
    width: 100%;
    height: 95%;
    background-size: cover;
    background-position: center;
    margin-bottom: 5px;
    border-radius: 4px;
  }

  .collection-footer {
    width: 100%;
    height: 5%;
    display: flex;
    justify-content: space-between;
    font-size: 18px;

    .name {
      width: 95%;
    }
  }
`;
