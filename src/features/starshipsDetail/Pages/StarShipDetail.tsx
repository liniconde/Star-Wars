import { useEffect, useState } from "react";
import { getStarShipDetail, StarshipDetail } from "../service/starShipDetails";
import { useParams } from "react-router-dom";
import { CardDetail } from "../Components/CardDetail";
import { urls } from "../../../shared/api/urls";
import { Starship } from "../../starships/types/StarshipsTypes";
import { getPersonDetail } from "../../starshipsDetail/service/getPersonDetail"; // Nueva función para obtener pilotos
import { getFilmDetail } from "../../starshipsDetail/service/getFilmDetail"; // Nueva función para obtener películas
import { StarShipDetailCard } from "../Components/StarShipDetail";

interface State {
  details?: Starship;
  pilots: any[]; // Array para guardar los pilotos
  films: any[]; // Array para guardar las películas
}

export function getIdFromUrl(url: string): string {
  const match = url.match(/\/(\d+)\/$/);
  return match ? match[1] : "1";
}

export function StarShipDetail() {
  const { id } = useParams<{ id: string }>();
  const [details, setDetails] = useState<StarshipDetail>();
  const [imageUrl, setImageUrl] = useState<string>("");
  const [pilots, setPilots] = useState<any[]>([]);
  const [films, setFilms] = useState<any[]>([]);

  useEffect(() => {
    if (!id) return;
    const { getStarshipImageUrl } = urls;

    const fetchData = async () => {
      try {
        const detail = await getStarShipDetail(id!);
        const imageUrl = getStarshipImageUrl(id!);
        setDetails(detail);
        setImageUrl(imageUrl);

        // Obtener datos de pilotos
        const pilotData = detail.pilots?.length
          ? await Promise.all(
              detail.pilots.map((url: string) => getPersonDetail(url))
            )
          : [];
        setPilots(pilotData);

        // Obtener datos de películas
        const filmData = detail.films?.length
          ? await Promise.all(
              detail.films.map((url: string) => getFilmDetail(url))
            )
          : [];
        setFilms(filmData);
      } catch (error) {
        console.error("Error fetching starship details:", error);
      }
    };

    fetchData();
  }, [id]);

  return (
    <div>
      <div className="w-3/4 mx-auto mt-10">
        {details ? (
          <StarShipDetailCard details={details} imageUrl={imageUrl} />
        ) : (
          <p className="text-white text-center">Loading...</p>
        )}
      </div>
      <div className="flex flex-col gap-2 border shadow-lg border-gray-400">
        {pilots.map((piloto) => (
          <div
            key={piloto.name}
            className="transform transition-transform duration-300 hover:scale-105"
          >
            <CardDetail
              image={urls.getStarshipPilostUrl(getIdFromUrl(piloto.url))}
              name={piloto.name}
            />
          </div>
        ))}
      </div>
      <div className="flex flex-col gap-2 border shadow-lg border-gray-400">
        {films.map((film) => (
          <div
            key={film.title}
            className="transform transition-transform duration-300 hover:scale-105"
          >
            <CardDetail
              image={urls.getStarshipPilostUrl(getIdFromUrl(film.url))}
              name={film.title}
              episode_id={film.episode_id}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
