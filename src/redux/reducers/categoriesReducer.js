import {
  SET_CATEGORIES,
  SET_CATEGORY,
  SET_MAIN_CATEGORY,
} from "redux/types/categoriesTypes";

const defaultState = {
  categories: [],
  category: [],
  main_category: [null],
};

export default function categoriesReducer(state = defaultState, action) {
  switch (action.type) {
    case SET_CATEGORIES:
      return { ...state, categories: action.payload };
    case SET_CATEGORY:
      return { ...state, category: action.payload };
    case SET_MAIN_CATEGORY:
      return { ...state, main_category: action.payload };
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

export const setMainCategory = (main_category) => ({
  type: SET_MAIN_CATEGORY,
  payload: main_category,
});
