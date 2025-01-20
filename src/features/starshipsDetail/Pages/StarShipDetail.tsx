import { useEffect, useState } from "react";
import { getStarShipDetail } from "../service/starShipDetails";
import { useParams } from "react-router-dom";
import { StarShipDetailCard } from "../Components/StarShipDetail";
import { Starship } from "../../StarShips/types/StarshipsTypes";
import { urls } from "../api/urls";

interface State {
  details: Starship;
}

export function StarShipDetail() {
  const { id } = useParams<{ id: string }>();
  const [details, setdetails] = useState<State["details"]>();
  const [imageUrl, setImageUrl] = useState<string>("");

  useEffect(() => {
    const { getStarshipImageUrl } = urls;
    const fetch = async () => {
      const detail = await getStarShipDetail(id!);
      const imageUrl = getStarshipImageUrl(id!);
      setdetails(detail);
      setImageUrl(imageUrl);
    };
    fetch();
  }, [id]);

  return (
    <div className="w-3/4 mx-auto mt-10">
      {details ? (
        <StarShipDetailCard details={details} imageUrl={imageUrl} />
      ) : (
        <p className="text-white text-center">Loading...</p>
      )}
    </div>
  );
}
