import { Starship } from "../../starships/types/StarshipsTypes";

interface Props {
  details: Starship;
  imageUrl: string;
}

export function StarShipDetailCard({ details, imageUrl }: Props) {
  const handleImageError = (event: React.SyntheticEvent<HTMLImageElement>) => {
    event.currentTarget.src =
      "https://starwars-visualguide.com/assets/img/starships/10.jpg";
  };

  if (!details) {
    return (
      <div className="w-full max-w-[800px] h-[400px] bg-gray-700 flex items-center justify-center text-white rounded-lg">
        No Image Available
      </div>
    );
  }

  return (
    <div className="relative flex justify-normal items-center p-8 shadow-lg mt-10">
      <div className="flex-shrink-0">
        <img
          src={imageUrl}
          alt={details.name}
          onError={handleImageError}
          className="w-[700px] h-auto rounded-lg shadow-lg"
        />
      </div>
      <div className="absolute top-1/6 left-[80%] transform -translate-x-1/2 bg-gray-800 rounded-lg border-4 border-dashed border-[#FFE81F] p-6 shadow-lg w-[600px] max-w-[600px]">
        <h2 className="text-3xl font-bold mb-4 text-white">{details.name}</h2>
        <p className="text-lg mb-2 text-gray-300">{details.model}</p>
        <p className="text-gray-400 mb-2">
          Manufacturer: {details.manufacturer}
        </p>
        <p className="text-gray-400 mb-2">Cost: {details.cost_in_credits}</p>
        <p className="text-gray-400 mb-2">
          Atmospheric Speed: {details.max_atmosphering_speed}
        </p>
        <p className="text-gray-400">Length: {details.length} meters</p>
        <p className="text-gray-400">Crew: {details.crew}</p>
      </div>
      <div>{}</div>
      <div></div>
    </div>
  );
}
