import { applyMiddleware, createStore } from "redux";
import logger from "redux-logger";
import { reducer } from "./reducer";

const middleWares = [logger];

export const store = createStore(reducer, applyMiddleware(...middleWares));
