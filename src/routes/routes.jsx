import Cart from "pages/Cart/Cart";
import CategoryPage from "pages/CategoryPage/CategoryPage";
import NewProducts from "pages/NewProducts/NewProducts";
import ProductPage from "pages/ProductPage/ProductPage";
import HomePage from "../pages/HomePage";

const routes = () => [
  { path: "/", element: <HomePage /> },
  { path: "/new-products", element: <NewProducts /> },
  { path: "/categories/:category_name", element: <CategoryPage /> },
  { path: "/products/:product_id", element: <ProductPage /> },
  { path: "/cart", element: <Cart /> },
];

export default routes;
