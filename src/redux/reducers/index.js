import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import productReducer from "./productReducer";
import appReducer from "./appReducer";
import categoriesReducer from "./categoriesReducer";

const { combineReducers, applyMiddleware, createStore } = require("redux");

const rootReducer = combineReducers({
  app: appReducer,
  product: productReducer,
  categories: categoriesReducer,
});

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
