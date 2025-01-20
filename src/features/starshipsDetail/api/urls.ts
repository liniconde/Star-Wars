const URL_BASE = "https://starwars-visualguide.com/assets/img";

export const urls = {
  getStarShipUrl: (id: string) => `https://swapi.dev/api/starships/${id}`,
  getStarshipImageUrl: (id: string) => `${URL_BASE}/starships/${id}.jpg`,
};
