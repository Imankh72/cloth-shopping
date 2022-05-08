import { applyMiddleware, compose, createStore } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import { reducer } from "./reducer";

const middleWares = [logger, thunk];

const composeEnhancer = compose(applyMiddleware(...middleWares));

export const store = createStore(reducer, composeEnhancer);
