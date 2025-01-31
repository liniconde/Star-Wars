import { useEffect, useContext, useRef } from "react";
import { ListCardStarShips } from "../components/ListCardStarShips";
import { StarshipContext } from "../../../shared/context/StarshipContext";

export default function StarShipsPage() {
  const context = useContext(StarshipContext);
  const scrollRef = useRef<HTMLDivElement | null>(null);

  if (!context) return <p>Loading...</p>;
  const { starships, fetchMoreStarships, hasMore } = context;

  const handleScroll = () => {
    const element = scrollRef.current;
    if (element) {
      const isAtBottom =
        element.scrollHeight - element.scrollTop - element.clientHeight < 0;

      if (isAtBottom) {
        console.log("Llegaste al final del componente.");
        fetchMoreStarships();
      }
    }
  };

  useEffect(() => {
    const element = scrollRef.current;
    if (element) {
      element.addEventListener("scroll", handleScroll);
      return () => element.removeEventListener("scroll", handleScroll);
    }
  }, []);

  return (
    <div className="flex flex-col items-center py-8 min-h-screen">
      <div
        className="w-11/12 h-[80vh] overflow-y-auto border border-gray-500"
        ref={scrollRef}
      >
        <ListCardStarShips starshipsList={starships} />
        {!hasMore && (
          <p className="text-white mt-4"> No more starships to load.</p>
        )}
      </div>
    </div>
  );
}
