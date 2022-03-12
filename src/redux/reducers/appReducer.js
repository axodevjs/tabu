import {
  SHOW_HOVER_MENU,
  HIDE_HOVER_MENU,
  SHOW_PROFILE,
  HIDE_PROFILE,
} from "../types/appTypes";

const defaultState = {
  showHoverMenu: false,
  showProfile: false,
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
    default:
      return state;
  }
}

export const showHoverMenu = () => ({ type: SHOW_HOVER_MENU });
export const hideHoverMenu = () => ({ type: HIDE_HOVER_MENU });

export const showProfile = () => ({ type: SHOW_PROFILE });
export const hideProfile = () => ({ type: HIDE_PROFILE });
