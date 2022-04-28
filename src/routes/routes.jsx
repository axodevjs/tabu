import Cart from "pages/Cart/Cart";
import CategoryPage from "pages/CategoryPage/CategoryPage";
import ProductPage from "pages/ProductPage/ProductPage";
import ProfilePage from "pages/ProfilePages/ProfileBuyPage/ProfileBuyPage";
import ProfileSellPage from "pages/ProfilePages/ProfileSellPage/ProfileSellPage";
import ProfileWishListPage from "pages/ProfilePages/ProfileWishListPage/ProfileSalePage";
import { Navigate } from "react-router-dom";
import HomePage from "../pages/HomePage";

const routes = (isAuth) => [
  { path: "/", element: <HomePage /> },
  { path: "/categories/:category_name", element: <CategoryPage /> },
  { path: "/products/:product_id", element: <ProductPage /> },
  { path: "/cart", element: <Cart /> },

  {
    path: "/profile",
    element: isAuth ? <ProfilePage /> : <Navigate to="/" />,
  },
  {
    path: "/profile/sellitems",
    element: isAuth ? <ProfileSellPage /> : <Navigate to="/" />,
  },
  {
    path: "/profile/wishlist",
    element: isAuth ? <ProfileWishListPage /> : <Navigate to="/" />,
  },
];

export default routes;
