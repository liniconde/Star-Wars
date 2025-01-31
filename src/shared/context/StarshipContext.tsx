import React, {
  createContext,
  useState,
  useEffect,
  useRef,
  useCallback,
} from "react";
import { Starship } from "../../features/starships/types/StarshipsTypes";
import { getAllStarships } from "../../features/starships/services/StarShipsServices";

interface StarshipContextProps {
  starships: Starship[];
  fetchMoreStarships: () => void;
  hasMore: boolean;
}

export const StarshipContext = createContext<StarshipContextProps | null>(null);

export const StarshipProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [starships, setStarships] = useState<Starship[]>([]);
  const [loading, setLoading] = useState(false);

  const nextPageUrlRef = useRef<string | null>(null);
  const hasMoreRef = useRef(false);

  useEffect(() => {
    const fetchStarships = async () => {
      try {
        setLoading(true);
        const data = await getAllStarships();
        console.log("Datos iniciales cargados:", data);

        setStarships(data.results);
        nextPageUrlRef.current = data.next;
        hasMoreRef.current = !!data.next;
      } catch (error) {
        console.error("Error fetching initial starships:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchStarships();
  }, []);

  const fetchMoreStarships = useCallback(async () => {
    console.log("Intentando traer más datos...");

    if (loading || !nextPageUrlRef.current || !hasMoreRef.current) {
      console.log(
        "No se puede cargar más datos: loading, URL o hasMore inválidos."
      );
      return;
    }

    try {
      setLoading(true);
      const response = await fetch(nextPageUrlRef.current);
      const data = await response.json();

      console.log("Nuevos datos cargados:", data);

      setStarships((prev) => [...prev, ...data.results]);
      nextPageUrlRef.current = data.next;
      hasMoreRef.current = !!data.next;
    } catch (error) {
      console.error("Error fetching more starships:", error);
    } finally {
      setLoading(false);
    }
  }, [loading]);

  return (
    <StarshipContext.Provider
      value={{
        starships,
        fetchMoreStarships, // Expone la función para que pueda ser llamada desde otros componentes
        hasMore: hasMoreRef.current, // Expone el estado actual de hasMore
      }}
    >
      {children}
    </StarshipContext.Provider>
  );
};
