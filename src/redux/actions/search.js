import axios from "axios";
import { API_URL } from "config";
import { setSearchProducts } from "redux/reducers/searchReducer";

export const getSearchProducts = (title) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`${API_URL}/products?`);
      dispatch(setSearchProducts(response.data));
    } catch (e) {
      console.log(e);
    }
  };
};
