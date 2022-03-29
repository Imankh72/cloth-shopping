import { useDispatch } from "react-redux";
import CustomButton from "./CustomButton";
import { cartActionTypes } from "../redux/cart/cartActionTypes";

import styled from "styled-components";

const CollectionItem = ({ item }) => {
  const { name, price, imageUrl } = item;
  const dispatch = useDispatch();

  return (
    <CollectionItemWrapper>
      <div style={{ backgroundImage: `url(${imageUrl})` }} className="image" />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">${price}</span>
      </div>
      <CustomButton
        className="add-to-cart-button"
        onClick={() =>
          dispatch({ type: cartActionTypes.ADD_ITEM, payload: item })
        }
      >
        Add to cart
      </CustomButton>
    </CollectionItemWrapper>
  );
};

export default CollectionItem;

const CollectionItemWrapper = styled.div`
  width: 100%;
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
