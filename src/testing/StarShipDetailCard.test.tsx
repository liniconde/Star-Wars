import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { describe, test, expect } from "vitest";
import { StarShipDetailCard } from "../features/starshipsDetail/Components/StarShipDetail"; // Ajusta la ruta según sea necesario
import { Starship } from "../features/starships/types/StarshipsTypes";

const mockDetails: Starship = {
  name: "Millennium Falcon",
  model: "YT-1300 light freighter",
  manufacturer: "Corellian Engineering Corporation",
  cost_in_credits: "100000",
  length: "34.37",
  max_atmosphering_speed: "1050", // Valor agregado según Star Wars data
  crew: "4",
  passengers: "6",
  cargo_capacity: "100000",
  consumables: "2 months",
  hyperdrive_rating: "0.5",
  MGLT: "75",
  starship_class: "Light freighter",
  pilots: [
    "https://swapi.dev/api/people/13/", // Han Solo
    "https://swapi.dev/api/people/14/", // Chewbacca
  ],
  films: [
    "https://swapi.dev/api/films/1/", // A New Hope
    "https://swapi.dev/api/films/2/", // The Empire Strikes Back
    "https://swapi.dev/api/films/3/", // Return of the Jedi
  ],
  created: new Date("2014-12-10T16:59:45.094000Z"),
  edited: new Date("2014-12-20T21:23:49.880000Z"),
  url: "https://swapi.dev/api/starships/10/",
};

describe("StarShipDetailCard", () => {
  test("Muestra correctamente la información de la nave", async () => {
    render(<StarShipDetailCard details={mockDetails} imageUrl="image.jpg" />);

    expect(screen.getByText(/Millennium Falcon/i)).toBeInTheDocument();
    expect(screen.getByText(/YT-1300 light freighter/i)).toBeInTheDocument();
    expect(
      screen.getByText(/Corellian Engineering Corporation/i)
    ).toBeInTheDocument();
    expect(screen.getByText(/Cost: 100000/i)).toBeInTheDocument();
  });

  test("Renderiza la imagen correctamente", () => {
    render(<StarShipDetailCard details={mockDetails} imageUrl="image.jpg" />);

    const image = screen.getByRole("img", { name: /millennium falcon/i });
    expect(image).toHaveAttribute("src", "image.jpg");
  });
});
