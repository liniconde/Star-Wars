import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaTiktok,
  FaYoutube,
} from "react-icons/fa";
import StarWars01 from "../../../assets/imagenes/StarWars01.png";
import { Link } from "react-router-dom";
import { useStateForm } from "../../auth/store/handleForm";
import Auth from "../../auth/Auth";
import { useUser } from "../../auth/store/user";
import { ScaleLoader } from "react-spinners";
import { useRef, useState } from "react";
import Audio from "../../../assets/audio/https___voicebot.su_es_sound_star-wars-marcha-imperial-orquesta-escuchar_.wav";

export function Header() {
  const { openModal } = useStateForm((state) => state);
  const { changeUser, isLogin } = useUser((state) => state);
  const [isMusic, setIsMusic] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);
  const buttonRef = useRef<HTMLParagraphElement>(null);

  const logout = () => {
    localStorage.removeItem("auth");
    changeUser(false);
  };

  return (
    <div className="bg-black text-white py-8 px-14">
      {/* Barra superior con íconos y botón de login */}
      <div className="flex justify-between items-center">
        {/* Íconos de redes sociales */}
        <div className="flex items-center gap-4">
          <a href="#" aria-label="TikTok">
            <FaTiktok size={20} className="hover:text-gray-400 transition" />
          </a>
          <a href="#" aria-label="Instagram">
            <FaInstagram size={20} className="hover:text-gray-400 transition" />
          </a>
          <a href="#" aria-label="Twitter">
            <FaTwitter size={20} className="hover:text-gray-400 transition" />
          </a>
          <a href="#" aria-label="Facebook">
            <FaFacebookF size={20} className="hover:text-gray-400 transition" />
          </a>
          <a href="#" aria-label="YouTube">
            <FaYoutube size={20} className="hover:text-gray-400 transition" />
          </a>
        </div>
        <audio ref={audioRef} src={Audio} loop />

        {/* Botón de Login */}
        <div className="flex items-center gap-6">
          {isMusic ? (
            <ScaleLoader
              onClick={() => {
                if (audioRef.current) {
                  audioRef.current.pause();
                  setIsMusic(false);
                }
              }}
              color="#FFE81F"
            />
          ) : (
            <p
              ref={buttonRef}
              onClick={() => {
                if (audioRef.current) {
                  audioRef.current.play();
                  setIsMusic(true);
                }
              }}
            >
              Play
            </p>
          )}
          <Link
            to="/search"
            className="flex items-center gap-2 px-4 py-2 border border-[#FFE81F] text-[#FFE81F] rounded-lg text-sm font-semibold transition-transform transform hover:scale-110 hover:bg-[#FFE81F] hover:text-black"
          >
            🔍 Search
          </Link>
          {!isLogin ? (
            <button
              onClick={openModal}
              className="flex items-center gap-2 px-4 py-2 border border-[#FFE81F] text-[#FFE81F] rounded-lg text-sm font-semiboldtransition-transform transform hover:scale-110 hover:bg-[#FFE81F] hover:text-black"
            >
              👤 Log In
            </button>
          ) : (
            <button
              onClick={logout}
              className="flex items-center gap-2 px-4 py-2 border border-[#FFE81F] text-[#FFE81F] rounded-lg text-sm font-semiboldtransition-transform transform hover:scale-110 hover:bg-[#FFE81F] hover:text-black"
            >
              Logout
            </button>
          )}
          <Auth />
        </div>
      </div>

      {/* Imagen del logo */}
      <div className="flex justify-center mt-4">
        <img src={StarWars01} alt="LogoStarWars" />
      </div>

      {/* Divisor */}
      <div className="border-t border-gray-500 w-full my-4"></div>

      {/* Barra de navegación */}
      <div className="flex justify-center items-center gap-4 mb-4">
        <Link
          to="/"
          className="text-white px-4 py-2 rounded hover:bg-gray-700 transition"
        >
          Home
        </Link>
        <Link
          to="/starships"
          className="text-white px-4 py-2 rounded hover:bg-gray-700 transition"
        >
          Starships
        </Link>
      </div>

      <div className="border-t border-gray-500 w-full mb-4"></div>
    </div>
  );
}
