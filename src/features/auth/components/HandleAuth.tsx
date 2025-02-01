import { useState } from "react";
import { useStateForm } from "../store/handleForm";
import disney from "../../../assets/imagenes/disney.svg";
import { fetchSignInMethodsForEmail } from "firebase/auth";
import { auth } from "../../../config/firebase";
import { AuthRoutes } from "../Auth";

export default function HandleAuth() {
  const { changeForm, openModal } = useStateForm((state) => state);
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleFrom = async () => {
    setLoading(true);
    setError(null);

    try {
      const trimmedEmail = email.trim();

      const methods = await fetchSignInMethodsForEmail(auth, trimmedEmail);
      console.log("Métodos obtenidos:", methods);

      changeForm(methods.length > 0 ? AuthRoutes.INIT : AuthRoutes.REGISTER);
      openModal();
    } catch (err) {
      setError("Error verificando el email. Intenta de nuevo.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="text-center px-6 py-8 max-w-md mx-auto">
      <img src={disney} alt="disney" className="w-32 mx-auto mb-6" />
      <h1 className="text-2xl font-bold text-black mb-4">
        Enter your email to continue
      </h1>
      <p className="text-gray-600 mb-6">
        Login in to our platform with your account. If you don´t have one, you
        will be prompted to create one.
      </p>
      <input
        className="w-full text-black border border-gray-300 rounded-md p-3 mb-4 focus:outline-none focus:ring focus:ring-yellow-400"
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      {error && <p className="text-red-500 mt-2">{error}</p>}
      <button
        onClick={handleFrom}
        className="bg-yellow-300 text-black px-4 py-2 mt-4 rounded-lg"
        disabled={loading}
      >
        {loading ? "Loading..." : "Continue"}
      </button>
      <p className="text-gray-500 text-sm mt-8">
        Our platform is part of a trusted network of companies. Enjoy seamless
        access to our services and experiences.
      </p>
    </div>
  );
}
