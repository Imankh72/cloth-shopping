import { combineReducers } from "redux";
import { userReducer } from "./user/userReducer";
import { cartReducer } from "./cart/cartReducer";
import { directoryReducer } from "./directory/directoryReducer";

export const reducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  directory: directoryReducer,
});
