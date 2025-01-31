import React, { useState, useEffect } from "react";
import Yoda from "../../../assets/imagenes/star-wars-baby-yoda.gif";
import Naves from "../../../assets/imagenes/Naves.gif";
import Planetas from "../../../assets/imagenes/planetas.gif";
import Milenium from "../../../assets/imagenes/millenium-falcon-1627322_1280.jpg";
import Planetas2 from "../../../assets/imagenes/star-wars-9262324_1280.jpg";
import Personajes2 from "../../../assets/imagenes/personajes2.jpeg";
import Personajes3 from "../../../assets/imagenes/Personajes3.gif";

// Datos de las cards con imágenes para el carrusel
interface cardData {
  title: string;
  images: string[];
  description: string;
}
const cardData: CardData[] = [
  {
    title: "Starships",
    images: [
      Naves,
      Milenium,
      "https://starwars-visualguide.com/assets/img/starships/10.jpg",
    ],
    description: "Discover the fastest and most powerful ships in the galaxy.",
  },
  {
    title: "Characters",
    images: [Yoda, Personajes2, Personajes3],
    description: "Meet legendary heroes and villains from across the galaxy.",
  },
  {
    title: "Planets",
    images: [
      Planetas,
      Planetas2,
      "https://starwars-visualguide.com/assets/img/planets/7.jpg",
    ],
    description: "Explore breathtaking worlds and uncharted territories.",
  },
];

// Componente principal que renderiza las cards con carrusel
const CardsWithCarousel: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-10">
      {cardData.map((card, index) => (
        <CarouselCard
          key={index}
          title={card.title}
          images={card.images}
          description={card.description}
        />
      ))}
    </div>
  );
};

interface CarouselCardProps {
  title: string;
  images: string[];
  description: string;
}

// Componente individual de cada card con carrusel
const CarouselCard: React.FC<CarouselCardProps> = ({
  title,
  images,
  description,
}) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [currentIndex, images.length]);

  return (
    <div className="card bg-neutral shadow-xl relative">
      {/* Imagen del carrusel */}
      <figure className="relative">
        <img
          src={images[currentIndex]}
          alt={title}
          className="h-48 w-full object-cover"
        />
        {/* Botones de navegación */}
        <button
          onClick={handlePrev}
          className="absolute top-1/2 left-3 transform -translate-y-1/2 bg-black bg-opacity-50 text-white rounded-full w-8 h-8 flex items-center justify-center"
        >
          ❮
        </button>
        <button
          onClick={handleNext}
          className="absolute top-1/2 right-3 transform -translate-y-1/2 bg-black bg-opacity-50 text-white rounded-full w-8 h-8 flex items-center justify-center"
        >
          ❯
        </button>
      </figure>

      {/* Contenido de la card */}
      <div className="card-body text-center">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-secondary">Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default CardsWithCarousel;
