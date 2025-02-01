import { createBrowserRouter } from "react-router-dom";
import SatrShipsPage from "../features/starships/pages/StarShipsPage";
import { StarShipDetail } from "../features/starshipsDetail/Pages/StarShipDetail";
import Home from "../features/home/pages/Home";
import Layout from "../features/layout/Layout";
import { Protectecroutes } from "./protectecroutes";
import Auth, { AuthRoutes } from "../features/auth/Auth";

export const routesGeneral = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "register",
        element: <Auth routes={AuthRoutes.REGISTER} />,
      },
      {
        path: "login",
        element: <Auth routes={AuthRoutes.LOGIN} />,
      },
      {
        element: <Protectecroutes />,
        children: [
          {
            path: "starships",
            element: <SatrShipsPage />,
          },
          {
            path: "detail/:id",
            element: <StarShipDetail />,
          },
        ],
      },
    ],
  },
]);
