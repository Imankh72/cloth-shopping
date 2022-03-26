import styled from "styled-components";

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => {
  return (
    <CartItemWrapper>
      <img src={imageUrl} alt={`${name} image`} />
      <div className="item-details">
        <span className="name">{name}</span>
        <span className="price">
          {quantity} x ${price}
        </span>
      </div>
    </CartItemWrapper>
  );
};

export default CartItem;

const CartItemWrapper = styled.div`
  width: 100%;
  display: flex;
  height: 80px;
  margin-bottom: 15px;

  img {
    width: 30%;
  }

  .item-details {
    width: 70%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    padding: 10px 20px;

    .name {
      font-size: 16px;
    }
  }
`;
