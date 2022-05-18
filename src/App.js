import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRoutes } from "react-router-dom";
import { auth } from "redux/actions/user";
import "./App.css";
import routes from "./routes/routes";

function App() {
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.user.isAuth);
  const routing = useRoutes(routes(isAuth));

  useEffect(() => {
    dispatch(auth());
  }, []);

  return <>{routing}</>;
}

export default App;
