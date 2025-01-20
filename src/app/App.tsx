import { RouterProvider } from "react-router-dom";
import { routesGeneral } from "../routes/routes";

export default function App() {
  return <RouterProvider router={routesGeneral} />;
}
