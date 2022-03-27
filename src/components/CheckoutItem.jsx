import { useDispatch } from "react-redux";
import { cartActionTypes } from "../redux/cart/cartActionTypes";

import styled from "styled-components";

const CheckoutItem = ({ cartItem }) => {
  const { name, price, imageUrl, quantity } = cartItem;

  const dispatch = useDispatch();
  return (
    <CheckoutItemWrapper>
      <div className="image-container">
        <img src={imageUrl} alt={`${name} image`} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">{quantity}</span>
      <span className="price">{price}</span>
      <div
        className="remove-button"
        onClick={() =>
          dispatch({
            type: cartActionTypes.REMOVE_ITEM_FROM_CART,
            payload: cartItem,
          })
        }
      >
        &#10005;
      </div>
    </CheckoutItemWrapper>
  );
};

export default CheckoutItem;

const CheckoutItemWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  min-height: 100px;
  border-bottom: 1px solid var(--color-grey-1);
  padding: 15px 0;
  font-size: 20px;

  .image-container {
    width: 23%;
    padding-right: 15px;

    img {
      width: 100%;
      height: 100%;
    }
  }
  .name,
  .quantity,
  .price {
    width: 23%;
  }

  .quantity {
    padding-left: 20px;
  }

  .remove-button {
    padding-left: 12px;
    cursor: pointer;
  }
`;
