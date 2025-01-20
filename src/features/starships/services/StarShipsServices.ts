import axios from "axios";
import { listships } from "../api/endpoints";
import { Starships } from "../types/StarshipsTypes";

export const allStarships = async (): Promise<Starships> => {
  const { data } = await axios.get<Starships>(listships.allStarships);
  return data;
};
