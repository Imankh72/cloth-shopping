import CartItem from "./CartItem";
import CustomButton from "./CustomButton";

import styled from "styled-components";

const CartDropdown = ({ cartItems }) => {
  return (
    <CartDropdownWrapper>
      <div className="cart-items">
        {cartItems.map((cartItem, index) => (
          <CartItem key={index} item={cartItem} />
        ))}
      </div>
      <CustomButton>Go To Checkout</CustomButton>
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

  .cart-items {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    overflow-y: scroll;
  }

  button {
    margin-top: auto;
  }
`;
