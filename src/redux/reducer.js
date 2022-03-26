import { combineReducers } from "redux";
import { userReducer } from "./user/userReducer";
import { cartReducer } from "./cart/cartReducer";

export const reducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
});
