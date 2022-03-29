import {
  SHOW_HOVER_MENU,
  HIDE_HOVER_MENU,
  SHOW_PROFILE,
  HIDE_PROFILE,
  SHOW_MOBILE_SIDEBAR,
  HIDE_MOBILE_SIDEBAR,
  SET_MENU_CATEGORY,
  SET_SHOW_SIZES_MODAL,
} from "../types/appTypes";

const defaultState = {
  showHoverMenu: false,
  showProfile: false,
  isMobile: false,
  showMobileSidebar: false,
  menuCategory: {
    active: false,
  },
  showSizesModal: false,
};

export default function productReducer(state = defaultState, action) {
  switch (action.type) {
    case SHOW_HOVER_MENU:
      return { ...state, showHoverMenu: true };
    case HIDE_HOVER_MENU:
      return { ...state, showHoverMenu: false };

    case SHOW_PROFILE:
      return { ...state, showProfile: true };
    case HIDE_PROFILE:
      return { ...state, showProfile: false };

    case SHOW_MOBILE_SIDEBAR:
      return { ...state, showMobileSidebar: true };
    case HIDE_MOBILE_SIDEBAR:
      return { ...state, showMobileSidebar: false };

    case SET_MENU_CATEGORY:
      return { ...state, menuCategory: action.payload };

    case SET_SHOW_SIZES_MODAL:
      return { ...state, showSizesModal: action.payload };

    default:
      return state;
  }
}

export const showHoverMenu = () => ({
  type: SHOW_HOVER_MENU,
});
export const hideHoverMenu = () => ({ type: HIDE_HOVER_MENU });

export const showProfile = () => ({ type: SHOW_PROFILE });
export const hideProfile = () => ({ type: HIDE_PROFILE });

export const showMobileSidebar = () => ({ type: SHOW_MOBILE_SIDEBAR });
export const hideMobileSidebar = () => ({ type: HIDE_MOBILE_SIDEBAR });

export const setMenuCategory = (menuCategory) => ({
  type: SET_MENU_CATEGORY,
  payload: menuCategory,
});

export const setShowSizesModal = (active) => ({
  type: SET_SHOW_SIZES_MODAL,
  payload: active,
});
