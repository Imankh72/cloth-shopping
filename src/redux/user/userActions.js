import { userActionTypes } from "./userActionTypes";

export const userActions = (user) => ({
  type: userActionTypes.SET_CURRENT_USER,
  payload: user,
});
