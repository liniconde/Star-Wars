import { Starship } from "../../StarShips/types/StarshipsTypes";

interface Props {
  details: Starship;
  imageUrl: string;
}

export function StarShipDetailCard({ details, imageUrl }: Props) {
  const handleImageError = (event: React.SyntheticEvent<HTMLImageElement>) => {
    event.currentTarget.src =
      "https://starwars-visualguide.com/assets/img/starships/10.jpg";
  };

  return (
    <div className="flex flex-col items-center justify-center gap-6 p-4 bg-gray-800 rounded-lg">
      {details ? (
        <img
          src={imageUrl}
          alt={details.name}
          onError={handleImageError}
          className="w-[400px] h-[300px] bg-gray-700 flex items-center justify-center text-white rounded-lg"
        />
      ) : (
        <div className="w-[400px] h[300px] bg-gray-700 flex items-center justify-center text-white rounded-lg">
          No Image Available
        </div>
      )}
      <div className="text-white text center">
        <h2 className="text-2xl font-bold mb-2">{details.name}</h2>
        <p className="text-lg">{details.model}</p>
        <p className="text-gray-400">{details.manufacturer}</p>
        <p className="text-gray-400">{details.length}</p>
      </div>
    </div>
  );
}
