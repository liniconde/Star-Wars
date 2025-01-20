import StarWars01 from "../../../assets/imagenes/StarWars01.jpg";
import { Link, Outlet } from "react-router-dom";

export function Header() {
  return (
    <div>
      <div className="flex justify-center mb--6">
        <img src={StarWars01} alt="LogoStarWars" />
      </div>
      <div className="border-t border-gray-500 w-full mb-4"></div>
      <div className="flex justify-center items-center gap-4 mb-6">
        <Link
          to="/"
          className="text-white px-4 py-2 rounded hover:bg-gray-700 transition"
        >
          Home
        </Link>
        <Link
          to="/starships"
          className="text-white px-4 py-2 rounded hover:bg-gray-700 transition"
        >
          Starships
        </Link>
      </div>
      <div className="border-t border-gray-500 w-full mb-4"></div>
      <div>
        <Outlet />
      </div>
    </div>
  );
}
