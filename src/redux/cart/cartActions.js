import { cartActionTypes } from "./cartActionTypes";

export const cartActions = () => ({
  type: cartActionTypes.SET_SHOW_CART,
});

export const addItem = (item) => ({
  type: cartActionTypes.ADD_ITEM,
  payload: item,
});
