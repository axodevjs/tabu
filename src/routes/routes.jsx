import CategoryPage from "pages/CategoryPage/CategoryPage";
import NewProducts from "pages/NewProducts/NewProducts";
import HomePage from "../pages/HomePage";

const routes = () => [
  { path: "/", element: <HomePage /> },
  { path: "/new-products", element: <NewProducts /> },
  { path: "/categories/:category_name", element: <CategoryPage /> },
];

export default routes;
