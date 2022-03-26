import { addItemToCart } from "../../utils/addItemToCart";
import { cartActionTypes } from "./cartActionTypes";

const initialState = {
  showCart: false,
  cartItems: [],
};

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case cartActionTypes.SET_SHOW_CART:
      return {
        ...state,
        showCart: !state.showCart,
      };
    case cartActionTypes.ADD_ITEM:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload),
      };
    default:
      return state;
  }
};
