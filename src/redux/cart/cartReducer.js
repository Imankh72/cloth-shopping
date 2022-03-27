import { addItemToCart } from "../../utils/addItemToCart";
import { reduceItemQuantity } from "../../utils/reduceItemQuantity";
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
    case cartActionTypes.REMOVE_ITEM_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (cartItem) => cartItem.id !== action.payload.id
        ),
      };
    case cartActionTypes.REDUCE_ITEM_QUANTITY:
      return {
        ...state,
        cartItems: reduceItemQuantity(state.cartItems, action.payload),
      };
    default:
      return state;
  }
};
