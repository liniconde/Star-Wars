const URL_BASE_VISUAL_GUIDE = "https://starwars-visualguide.com/assets/img";
const URL_BASE_SWAPI = "https://swapi.dev/api/starships";

export const urls = {
  allStarshipsUrl: URL_BASE_SWAPI,
  getStarShipUrl: (id: string) => `${URL_BASE_SWAPI}/${id}`,
  getStarshipImageUrl: (id: string) =>
    `${URL_BASE_VISUAL_GUIDE}/starships/${id}.jpg`,
  getStarshipPilostUrl: (id: string) =>
    `${URL_BASE_VISUAL_GUIDE}/characters/${id}.jpg`,
  getStarshipFilmsUrl: (id: string) =>
    `${URL_BASE_VISUAL_GUIDE}/films/${id}.jpg`,
};
