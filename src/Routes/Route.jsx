import { createBrowserRouter } from "react-router-dom";
import Root from "../Root";
import Home from "../Page/Home/Home";

const Route = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);

export default Route;
