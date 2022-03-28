import { shopData } from "../../data/shopData";

const initialState = shopData;

export const shopReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
