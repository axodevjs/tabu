import axios from "axios";
import { API_URL } from "config.js";
import { setProducts } from "redux/reducers/productReducer";

export const getProducts = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`${API_URL}/products`);
      dispatch(setProducts(response.data));
    } catch (e) {
      console.log(e);
    }
  };
};
