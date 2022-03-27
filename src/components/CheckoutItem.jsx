import styled from "styled-components";

const CheckoutItem = ({ cartItem: { name, price, imageUrl, quantity } }) => {
  return (
    <CheckoutItemWrapper>
      <div className="image-container">
        <img src={imageUrl} alt={`${name} image`} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">{quantity}</span>
      <span className="price">{price}</span>
      <div className="remove-button">&#10005;</div>
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
    width: 25%;
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
