import video from "../../../assets/imagenes/33050-395456555_medium.mp4";
import h1 from "../../../assets/imagenes/H1.jpeg";
import h2 from "../../../assets/imagenes/H2.jpeg";
import h3 from "../../../assets/imagenes/h3.jpeg";
import h4 from "../../../assets/imagenes/h4.jpeg";
import { useEffect, useRef, useState } from "react";
import CardsWithCarousel from "../../auth/components/CardsWithCarrusel";

export default function Home() {
  const slides = [h1, h2, h3, h4]; // Imágenes para el carrusel
  const [currentIndex, setCurrentIndex] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    // Intentar reproducir el audio al cargar la página
    if (audioRef.current) {
      audioRef.current
        .play()
        .catch((err) =>
          console.log("Autoplay bloqueado por el navegador:", err)
        );
    }
  }, []);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="bg-black text-white">
      {/* Hero Section */}
      <section className="relative min-h-screen">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          src={video}
          muted
          playsInline
          autoPlay
          loop
        ></video>

        <div className="absolure inset-0 bg-black bg-opacity-60"></div>

        <div className="absolute top-5 left-1/2 transform -translate-x-1/2 text-center z-10">
          <h1 className="text-5xl font-bold text-[#FFE81F]">
            Welcome to the Galaxy
          </h1>
        </div>
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 text-center z-10">
          <p className="mb-6 text-lg">
            Explore the vast universe, uncover hidden secrets, and connect with
            the Force.
          </p>
          <button className="btn btn-accent hover:scale-110 transition-transform">
            Explore Now
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <h2 className="text-4xl font-bold text-center mb-10">Our Features</h2>
        <CardsWithCarousel />
      </section>

      {/* Additional Section (Optional) */}
      <section className="relative py-20 bg-gradient-to-r from-gray-800 via-black to-gray-800">
        {/* Título encima del carrusel */}
        <h2 className="absolute top-5 left-1/2 transform -translate-x-1/2 text-4xl font-bold text-white z-10">
          Join the Resistance
        </h2>

        <div className="relative w-full max-w-4xl mx-auto mt-20 overflow-hidden">
          {/* Slides */}
          <div
            className="flex transition-transform duration-500"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {slides.map((slide, index) => (
              <img
                key={index}
                src={slide}
                alt={`Slide ${index + 1}`}
                className="w-full flex-shrink-0 object-cover"
              />
            ))}
          </div>

          {/* Botones de navegación */}
          <button
            onClick={handlePrev}
            className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white rounded-full w-10 h-10 flex items-center justify-center"
          >
            ❮
          </button>
          <button
            onClick={handleNext}
            className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white rounded-full w-10 h-10 flex items-center justify-center"
          >
            ❯
          </button>

          {/* Indicadores */}
          <div className="flex justify-center mt-4 space-x-2">
            {slides.map((_, index) => (
              <div
                key={index}
                className={`w-3 h-3 rounded-full ${
                  index === currentIndex ? "bg-white" : "bg-gray-500"
                }`}
              ></div>
            ))}
          </div>
        </div>
      </section>
      
    </div>
  );
}
