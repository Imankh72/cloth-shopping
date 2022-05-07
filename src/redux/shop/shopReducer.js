import { shopActionTypes } from "./shopActionTypes";

const initialState = {
  collections: [],
  isLoading: false,
  error: null,
};

export const shopReducer = (state = initialState, action) => {
  switch (action.type) {
    case shopActionTypes.FETCH_COLLECTIONS_START:
      return {
        ...state,
        isLoading: true,
      };
    case shopActionTypes.FETCH_COLLECTIONS_SUCCESS:
      return {
        ...state,
        collections: action.payload,
        isLoading: false,
      };
    case shopActionTypes.FETCH_COLLECTIONS_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
