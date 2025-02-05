export interface Starships {
  count: number;
  next: string;
  previous: null;
  results: Starship[];
}

export interface Starship {
  name: string;
  model: string;
  manufacturer: string;
  cost_in_credits: string;
  length: string;
  max_atmosphering_speed: string;
  crew: string;
  passengers: string;
  cargo_capacity: string;
  consumables: string;
  hyperdrive_rating: string;
  MGLT: string;
  starship_class: string;
  pilots: string[]; // Array de urls con la informacion de los pilotos
  films: string[]; // Array de urls con la informaion de las peliculas
  created: Date;
  edited: Date;
  url: string;
}
