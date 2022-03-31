import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import productReducer from "./productReducer";
import appReducer from "./appReducer";
import categoriesReducer from "./categoriesReducer";
import filterOptionsReducer from "./filterOptionsReducer";
import cartReducer from "./cartReducer";

const { combineReducers, applyMiddleware, createStore } = require("redux");

const rootReducer = combineReducers({
  app: appReducer,
  product: productReducer,
  cart: cartReducer,
  categories: categoriesReducer,
  filterOptions: filterOptionsReducer,
});

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
