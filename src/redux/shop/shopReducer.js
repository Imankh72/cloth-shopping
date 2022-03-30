import { shopData } from "../../data/shopData";
import { shopActionTypes } from "./shopActionTypes";

const initialState = shopData;

export const shopReducer = (state = initialState, action) => {
  switch (action.type) {
    case shopActionTypes.UPDATE_COLLECTIONS:
      return {
        ...state,
        collections: action.payload,
      };
    default:
      return state;
  }
};
