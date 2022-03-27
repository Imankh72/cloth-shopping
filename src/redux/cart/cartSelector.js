import { createSelector } from "reselect";

const selectCart = (state) => state.cart.cartItems;

export const selectCartItems = createSelector(selectCart, (cartItems) =>
  cartItems.reduce((a, cartItem) => a + cartItem.quantity, 0)
);

export const selectCartTotal = createSelector(selectCart, (cartItems) =>
  cartItems.reduce((a, cartItem) => a + cartItem.quantity * cartItem.price, 0)
);
