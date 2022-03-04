import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import productReducer from "./productReducer";

const { combineReducers, applyMiddleware, createStore } = require("redux");

const rootReducer = combineReducers({
  product: productReducer,
});

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
