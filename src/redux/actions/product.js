import axios from "axios";
import { API_URL } from "config.js";
import { useSelector } from "react-redux";
import { store } from "redux/reducers";
import { setQuery } from "redux/reducers/filterOptionsReducer";
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

export const getProductsByCategory = (category, options, type) => {
  return async (dispatch) => {
    try {
      const state = store.getState();
      let newQuery = "";

      if (state.filterOptions.query.includes("?category__title")) {
        newQuery = state.filterOptions.query;
      }
      if (!state.filterOptions.query.includes("?category__title")) {
        newQuery = `${state.filterOptions.query}?category__title=${category}`;
        dispatch(setQuery(newQuery));
      }

      if (options) {
        const selected = options.filter((x) => x.selected === true);

        for (let i = 0; i < selected.length; i++) {
          if (newQuery.includes(selected[i].title)) {
            newQuery = newQuery.replace(selected[i].title, "");
            console.log("already");
          } else {
            newQuery += `&${type}__title=${selected[i].title}`;
          }
        }
        dispatch(setQuery(newQuery));
        console.log(newQuery);
      }

      const response = await axios.get(newQuery);

      dispatch(setProducts(response.data));
      console.log(newQuery);
    } catch (e) {
      console.log(e);
    }
  };
};
