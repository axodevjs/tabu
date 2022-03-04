import { SHOW_MODAL, HIDE_MODAL } from "redux/types/productTypes";

const defaultState = {
  showModal: false,
};

export default function productReducer(state = defaultState, action) {
  switch (action.type) {
    case SHOW_MODAL:
      return { ...state, showModal: true };

    case HIDE_MODAL:
      return { ...state, showModal: false };

    default:
      return state;
  }
}

export const showModal = () => ({ type: SHOW_MODAL });
export const hideModal = () => ({ type: HIDE_MODAL });
