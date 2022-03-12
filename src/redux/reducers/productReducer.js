import {
  SHOW_MODAL,
  HIDE_MODAL,
  SET_PRODUCTS,
  SET_OPENED_PRODUCT,
} from "redux/types/productTypes";

const defaultState = {
  showModal: false,
  openedProduct: {},
  products: [],
};

export default function productReducer(state = defaultState, action) {
  switch (action.type) {
    case SHOW_MODAL:
      return { ...state, showModal: true };

    case HIDE_MODAL:
      return { ...state, showModal: false };

    case SET_PRODUCTS:
      return { ...state, products: action.payload };

    case SET_OPENED_PRODUCT:
      return { ...state, openedProduct: action.payload };

    default:
      return state;
  }
}

export const showModal = () => ({ type: SHOW_MODAL });
export const hideModal = () => ({ type: HIDE_MODAL });

export const setProducts = (products) => ({
  type: SET_PRODUCTS,
  payload: products,
});

export const setOpenedProduct = (product) => ({
  type: SET_OPENED_PRODUCT,
  payload: product,
});
