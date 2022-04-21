import Cart from "pages/Cart/Cart";
import CategoryPage from "pages/CategoryPage/CategoryPage";
import ProductPage from "pages/ProductPage/ProductPage";
import ProfilePage from "pages/ProfilePage/ProfilePage";
import HomePage from "../pages/HomePage";

const routes = () => [
  { path: "/", element: <HomePage /> },
  { path: "/categories/:category_name", element: <CategoryPage /> },
  { path: "/products/:product_id", element: <ProductPage /> },
  { path: "/cart", element: <Cart /> },
  { path: "/profile", element: <ProfilePage /> },
];

export default routes;
