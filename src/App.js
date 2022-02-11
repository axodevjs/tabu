import MainLayout from "components/Layouts/MainLayout";
import { useRoutes } from "react-router-dom";
import "./App.css";
import routes from "./routes/routes";

function App() {
  const routing = useRoutes(routes());

  return <MainLayout>{routing}</MainLayout>;
}

export default App;
