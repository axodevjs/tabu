import { SET_CATEGORIES, SET_CATEGORY } from "redux/types/categoriesTypes";

const defaultState = {
  categories: [],
  category: [],
};

export default function categoriesReducer(state = defaultState, action) {
  switch (action.type) {
    case SET_CATEGORIES:
      return { ...state, categories: action.payload };
    case SET_CATEGORY:
      return { ...state, category: action.payload };
    default:
      return state;
  }
}

export const setCategories = (categories) => ({
  type: SET_CATEGORIES,
  payload: categories,
});

export const setCategory = (category) => ({
  type: SET_CATEGORY,
  payload: category,
});
