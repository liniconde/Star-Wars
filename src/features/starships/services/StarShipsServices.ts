import axios from "axios";
import { Starships } from "../types/StarshipsTypes";
import { urls } from "../../../shared/api/urls";

export const getAllStarships = async (): Promise<Starships> => {
  const { data } = await axios.get<Starships>(urls.allStarshipsUrl);
  return data;
};
