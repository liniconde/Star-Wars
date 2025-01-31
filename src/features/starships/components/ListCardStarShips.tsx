import { Starship } from "../types/StarshipsTypes";
import CardStarShips from "./CardStarShips";

interface Props {
  starshipsList: Starship[];
}

export function ListCardStarShips(props: Props) {
  const { starshipsList } = props;

  if (starshipsList.length === 0) {
    return (
      <div className="text-white text-center mt-10">
        <p>No starships available.</p>
      </div>
    );
  }

  return (
    <div className=" flex justify-center">
      <div className="grid grid-cols-1 gap-6 p-4">
        {starshipsList.map((res) => (
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
