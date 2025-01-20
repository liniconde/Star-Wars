import { createBrowserRouter } from "react-router-dom";
import SatrShipsPage from "../features/starships/pages/SatrShipsPage";
import { StarShipDetail } from "../features/starshipsDetail/Pages/StarShipDetail";
import { Header } from "../features/starships/components/Header";
import Home from "../features/home/pages/Home";

export const routesGeneral = createBrowserRouter([
  {
    element: <Header />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
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
]);
