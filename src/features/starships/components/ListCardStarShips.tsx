import { Starship } from "../types/StarshipsTypes";
import CardStarShips from "./CardStarShips";

interface Props {
  starship: Starship[];
}

export function ListCardStarShips(props: Props) {
  const { starship } = props;

  return (
    <div>
      <div className=" grid grid-cols-2 gap-6 p-4  ">
        {starship.map((res) => (
          <div
            key={res.name}
            className="transform transition-transform duration-300 hover:scale-105"
          >
            <CardStarShips starship={res} />
          </div>
        ))}
      </div>
    </div>
  );
}
