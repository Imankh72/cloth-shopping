import { useSelector } from "react-redux";
import CheckoutItem from "../components/CheckoutItem";

import styled from "styled-components";

const CheckoutPage = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const cartTotal = cartItems.reduce(
    (a, cartItem) => a + cartItem.quantity * cartItem.price,
    0
  );

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
      width: 23%;

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

  @media screen and (max-width: 992px) {
    width: 90%;
    margin: 0 auto;
    .checkout-header {
      justify-content: center;
      gap: 0.1rem;
    }

    .total {
      margin: 30px auto;
    }
  }

  @media screen and (max-width: 576px) {
    .checkout-header {
      .header-block {
        width: 20%;
        span {
          font-size: 10px;
        }
      }
    }

    .total {
      font-size: 24px;
    }
  }
`;
