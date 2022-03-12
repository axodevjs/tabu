import axios from "axios";
import { API_URL } from "config";
import { setCategories } from "redux/reducers/categoriesReducer";

export const getCategories = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`${API_URL}/products/category`);
      dispatch(setCategories(response.data));
    } catch (e) {
      console.log(e);
    }
  };
};
