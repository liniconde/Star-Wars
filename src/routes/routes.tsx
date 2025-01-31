import { createBrowserRouter } from "react-router-dom";
import SatrShipsPage from "../features/starships/pages/StarShipsPage";
import { StarShipDetail } from "../features/starshipsDetail/Pages/StarShipDetail";
import Home from "../features/home/pages/Home";
import Layout from "../features/layout/Layout";
import { Protectecroutes } from "./protectecroutes";

export const routesGeneral = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
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
