import { cartActionTypes } from "./cartActionTypes";

export const cartActions = () => ({
  type: cartActionTypes.SET_SHOW_CART,
});

export const addItem = (item) => ({
  type: cartActionTypes.ADD_ITEM,
  payload: item,
});

export const removeItem = (item) => ({
  type: cartActionTypes.REMOVE_ITEM_FROM_CART,
  payload: item,
});
