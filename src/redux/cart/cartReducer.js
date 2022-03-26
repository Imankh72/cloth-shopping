import { cartActionTypes } from "./cartActionTypes";

const initialState = {
  showCart: false,
};

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case cartActionTypes.SET_SHOW_CART:
      return {
        ...state,
        showCart: !state.showCart,
      };

    default:
      return state;
  }
};
