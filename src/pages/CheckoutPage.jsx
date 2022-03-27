import { useSelector } from "react-redux";
import styled from "styled-components";
import CheckoutItem from "../components/CheckoutItem";
import { selectCartTotal } from "../redux/cart/cartSelector";

const CheckoutPage = () => {
  const cartTotal = useSelector(selectCartTotal);
  const cartItems = useSelector((state) => state.cart.cartItems);

  return (
    <CheckoutPageWrapper>
      <div className="checkout-header">
        <div className="header-block">
          <span>Products</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <div className="total">
        <span>TOTAL : ${cartTotal}</span>
      </div>
    </CheckoutPageWrapper>
  );
};

export default CheckoutPage;

const CheckoutPageWrapper = styled.div`
  max-width: 750px;
  width: 60%;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px auto;

  .checkout-header {
    width: 100%;
    padding: 10px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid var(--color-grey-3);

    .header-block {
      text-transform: capitalize;
      width: 25%;

      &:last-child {
        width: 8%;
      }
    }
  }

  .total {
    margin-top: 30px;
    margin-left: auto;
    font-size: 36px;
  }
`;
