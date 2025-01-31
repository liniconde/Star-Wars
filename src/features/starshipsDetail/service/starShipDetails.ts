import axios from "axios";
import { urls } from "../../../shared/api/urls";
import { Starship } from "../../starships/types/StarshipsTypes";
import { getPersonDetail } from "./getPersonDetail"; // Importamos la nueva función
import { getFilmDetail } from "./getFilmDetail"; // Importamos la nueva función

export interface StarshipDetail extends Starship {
  pilotsData: any[];
  filmsData: any[];
}

export const getStarShipDetail = async (
  id: string
): Promise<StarshipDetail> => {
  const { getStarShipUrl } = urls;

  try {
    const { data } = await axios.get<Starship>(getStarShipUrl(id));

    const pilotsData = await Promise.all(
      data.pilots.map((pilotUrl: string) => getPersonDetail(pilotUrl))
    );

    const filmsData = await Promise.all(
      data.films.map((filmUrl: string) => getFilmDetail(filmUrl))
    );

    console.log("Starship details:", { ...data, pilotsData, filmsData });
    return { ...data, pilotsData, filmsData };
  } catch (error) {
    console.error("Error fetching starship details:", error);
    throw error;
  }
};
