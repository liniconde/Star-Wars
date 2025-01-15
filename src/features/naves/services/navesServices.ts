import axios from "axios";
import { listships } from "../api/endpoints";

export const allnaves = async () => {
  const { data } = await axios.get(listships.allStarships);
  return data;
};
