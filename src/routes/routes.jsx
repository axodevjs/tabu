import NewProducts from "pages/NewProducts/NewProducts";
import HomePage from "../pages/HomePage";

const routes = () => [
  { path: "/", element: <HomePage /> },
  { path: "/new-products", element: <NewProducts /> },
];

export default routes;
