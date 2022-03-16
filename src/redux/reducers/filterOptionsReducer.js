import { API_URL } from "config";
import {
  SET_BRAND_OPTIONS,
  SET_COLOR_OPTIONS,
  SET_SIZE_OPTIONS,
  SET_QUERY,
} from "../types/filterOptionsTypes";

const defaultState = {
  categoryOptions: [],
  brandOptions: [],
  colorOptions: [],
  sizeOptions: [],
  query: `${API_URL}/products`,
};

export default function filterOptionsReducer(state = defaultState, action) {
  switch (action.type) {
    case SET_BRAND_OPTIONS:
      return { ...state, brandOptions: action.payload };

    case SET_COLOR_OPTIONS:
      return { ...state, colorOptions: action.payload };

    case SET_SIZE_OPTIONS:
      return { ...state, sizeOptions: action.payload };

    case SET_QUERY:
      return { ...state, query: action.payload };
    default:
      return state;
  }
}

export const setBrandOptions = (brand) => ({
  type: SET_BRAND_OPTIONS,
  payload: brand,
});

export const setColorOptions = (color) => ({
  type: SET_COLOR_OPTIONS,
  payload: color,
});

export const setSizeOptions = (sizes) => ({
  type: SET_SIZE_OPTIONS,
  payload: sizes,
});

export const setQuery = (newQuery) => ({
  type: SET_QUERY,
  payload: newQuery,
});
