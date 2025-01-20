import { Starship } from "../types/StarshipsTypes";
import { Link } from "react-router-dom";

interface Props {
  starship: Starship;
}

export default function CardStarShips(props: Props) {
  const { starship } = props;

  const getId = (url: String): string => {
    const split = url.split("/");
    const id = split[split.length - 2];
    return id;
  };

  return (
    <Link to={`/detail/${getId(starship.url)}`}>
      <div className=" flex flex-col items-center justify-center cursor-pointer p-4 rounded-lg bg-[#141514] border-2 border-e-white w-[350px] h-[200px]  ">
        <p>{starship.name}</p>
        <span> {starship.model} </span>
      </div>
    </Link>
  );
}
