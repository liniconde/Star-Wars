import axios from "axios";
import { urls } from "../api/urls";
import { Starship } from "../../StarShips/types/StarshipsTypes";

export const getStarShipDetail = async (id: string): Promise<Starship> => {
  const { getStarShipUrl } = urls;
  const { data } = await axios.get<Starship>(getStarShipUrl(id));
  return data;
};
