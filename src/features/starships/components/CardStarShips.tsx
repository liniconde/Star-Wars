import { Starship } from "../types/StarshipsTypes";
import { Link } from "react-router-dom";

interface Props {
  starship: Starship;
}

export default function CardStarShips(props: Props) {
  const { starship } = props;

  const getId = (url: string): string => {
    const split = url.split("/");
    const id = split[split.length - 2];
    return id;
  };

  return (
    <Link to={`/detail/${getId(starship.url)}`}>
      <div className="flex flex-col items-center justify-center cursor-pointer p-6 rounded-lg bg-gradient-to-r from-gray-800 to-gray-900 shadow-md border border-gray-700 w-[600px] h-[100px] transform transition-transform duration-300 hover:scale-105 hover:shadow-lg">
        <p className="text-lg font-semibold text-white mb-2">{starship.name}</p>
        <span className="text-sm text-gray-400"> {starship.model} </span>
      </div>
    </Link>
  );
}
