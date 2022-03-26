import styled from "styled-components";
import CustomButton from "./CustomButton";

const CollectionItem = ({ id, name, price, imageUrl }) => {
  return (
    <CollectionItemWrapper>
      <div style={{ backgroundImage: `url(${imageUrl})` }} className="image" />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">${price}</span>
      </div>
      <CustomButton className="add-to-cart-button">Add to cart</CustomButton>
    </CollectionItemWrapper>
  );
};

export default CollectionItem;

const CollectionItemWrapper = styled.div`
  width: 25%;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 350px;
  position: relative;

  .image {
    width: 100%;
    height: 95%;
    background-size: cover;
    background-position: center;
    margin-bottom: 5px;
    border-radius: 4px;
  }

  .add-to-cart-button {
    width: 80%;
    opacity: 0.7;
    position: absolute;
    top: 75%;
    display: none;
  }

  &:hover {
    cursor: pointer;
    .image {
      opacity: 0.8;
    }

    .add-to-cart-button {
      display: flex;
      opacity: 0.85;
    }
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
