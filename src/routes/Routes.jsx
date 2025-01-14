import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import RQpage from "../pages/RQpage";
import Details from "../pages/Details";
import Login from "../pages/Login";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/rq",
        element: <RQpage />,
      },
      {
        path: "/details/:id",
        element: <Details />,
      },
    ],
  },
]);
