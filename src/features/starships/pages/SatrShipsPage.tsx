import { useEffect, useState } from "react";
import { ListCardStarShips } from "../components/ListCardStarShips";
import { allStarships } from "../services/StarShipsServices";
import { Starship } from "../types/StarshipsTypes";

interface StateStarShips {
  starShips: Starship[];
}

export default function SatrShipsPage() {
  const [starShips, setStarShips] = useState<StateStarShips["starShips"]>([]);

  useEffect(() => {
    const fecthStarships = async () => {
      const starhips = await allStarships();
      setStarShips(starhips.results);
    };

    fecthStarships();
  }, []);

  return (
    <div className="w-1/2 mx-auto">
      <ListCardStarShips starship={starShips} />
    </div>
  );
}
