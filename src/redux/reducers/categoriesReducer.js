import { SET_CATEGORIES } from "redux/types/categoriesTypes";

const defaultState = {
  categories: [],
};

export default function categoriesReducer(state = defaultState, action) {
  switch (action.type) {
    case SET_CATEGORIES:
      return { ...state, categories: action.payload };
    default:
      return state;
  }
}

export const setCategories = (categories) => ({
  type: SET_CATEGORIES,
  payload: categories,
});
