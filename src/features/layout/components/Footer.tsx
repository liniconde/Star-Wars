import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaTiktok,
  FaYoutube,
} from "react-icons/fa";

export function Footer() {
  return (
    <footer className="bg-black py-4">
      <div className="container mx-auto flex justify-center items-center space-x-6">
        {/* Íconos de redes sociales */}
        <a
          href="https://www.tiktok.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="TikTok"
        >
          <FaTiktok
            size={30}
            className="text-white hover:text-gray-400 transition-transform hover:scale-110"
          />
        </a>
        <a
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <FaInstagram
            size={30}
            className="text-white hover:text-gray-400 transition-transform hover:scale-110"
          />
        </a>
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Twitter"
        >
          <FaTwitter
            size={30}
            className="text-white hover:text-gray-400 transition-transform hover:scale-110"
          />
        </a>
        <a
          href="https://www.facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
        >
          <FaFacebookF
            size={30}
            className="text-white hover:text-gray-400 transition-transform hover:scale-110"
          />
        </a>
        <a
          href="https://www.youtube.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="YouTube"
        >
          <FaYoutube
            size={30}
            className="text-white hover:text-gray-400 transition-transform hover:scale-110"
          />
        </a>
      </div>
    </footer>
  );
}
