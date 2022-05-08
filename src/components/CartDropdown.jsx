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
      <CustomButton className="checkout-button" onClick={goToCheckoutPage}>
        Go To Checkout
      </CustomButton>
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
  justify-content: space-between;
  padding: 10px;
  background-color: var(--color-white);
  border: 1px solid var(--color-grey-1);
  border-radius: 4px;
  top: 60px;
  right: -15px;
  z-index: 5;

  .cart-items {
    width: 100%;
    height: 260px;
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

  @media screen and (max-width: 992px) {
    right: 5px;
    .checkout-button {
      width: 100%;
      margin: 0 auto;
      padding: 0 25px;
    }
  }

  @media screen and (max-width: 768px) {
    width: 230px;
    height: 300px;
  }
`;
