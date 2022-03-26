import styled from "styled-components";
import CustomButton from "./CustomButton";

const CartDropdown = () => {
  return (
    <CartDropdownWrapper>
      <div className="cart-items">
        <CustomButton>Go To Checkout</CustomButton>
      </div>
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
  }

  button {
    margin-top: auto;
  }
`;
