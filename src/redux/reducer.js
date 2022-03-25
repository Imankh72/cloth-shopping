import { combineReducers } from "redux";
import { userReducer } from "./user/userReducer";

export const reducer = combineReducers({
  user: userReducer,
});
