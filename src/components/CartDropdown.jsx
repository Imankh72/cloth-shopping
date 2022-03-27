import CartItem from "./CartItem";
import CustomButton from "./CustomButton";

import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { cartActionTypes } from "../redux/cart/cartActionTypes";
import styled from "styled-components";

const CartDropdown = ({ cartItems }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const goToCheckoutPage = () => {
    navigate("/checkout");
    dispatch({ type: cartActionTypes.SET_SHOW_CART });
  };

  return (
    <CartDropdownWrapper>
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map((cartItem, index) => (
            <CartItem key={index} item={cartItem} />
          ))
        ) : (
          <span className="empty-message">Your cart is empty</span>
        )}
      </div>
      <CustomButton onClick={goToCheckoutPage}>Go To Checkout</CustomButton>
    </CartDropdownWrapper>
  );
};

export default CartDropdown;

const CartDropdownWrapper = styled.div`
  position: absolute;
  width: 280px;
  height: 340px;
  display: flex;
  flex-direction: column;
  padding: 10px;
  background-color: var(--color-white);
  border: 1px solid var(--color-grey-1);
  border-radius: 4px;
  top: 60px;
  right: -15px;
  z-index: 5;
  margin-bottom: 10px;

  .cart-items {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    overflow-y: scroll;
  }

  .empty-message {
    font-size: 18px;
    font-weight: bold;
    letter-spacing: 0.75px;
    margin: 120px auto;
  }

  button {
    margin-top: auto;
  }
`;
