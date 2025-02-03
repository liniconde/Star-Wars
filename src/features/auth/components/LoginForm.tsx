import { useState } from "react";
import { useNavigate } from "react-router-dom"; // ✅ Importamos useNavigate para redirección
import { getAuth, signInWithEmailAndPassword } from "firebase/auth"; // ✅ Firebase Authentication
import { useStateForm } from "../store/handleForm";
import disney from "../../../assets/imagenes/disney.svg";
import { useUser } from "../store/user";

export default function LoginForm() {
  const { closeModal } = useStateForm((state) => state); // ✅ Solo cerramos el modal si existe
  const navigate = useNavigate();
  const { changeUser } = useUser((state) => state);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null); // ✅ Agregado estado de error

  const auth = getAuth(); // Obtenemos la instancia de autenticación de Firebase

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    if (!email || !password) {
      setError("Todos los campos son obligatorios.");
      setLoading(false);
      return;
    }

    try {
      // Intentamos iniciar sesión con Firebase Auth
      const response = await signInWithEmailAndPassword(auth, email, password);
      console.log("Respuesta de Firebase:", response);
      if (response.user) {
        changeUser(true);
        closeModal();
        navigate("/starships", { replace: true }); // ✅ Redirigir a StarShipsPage
      }
    } catch (err) {
      setError("Correo o contraseña incorrectos. Intenta de nuevo.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="text-center px-6 py-8 max-w-md mx-auto bg-white rounded-lg shadow-md">
      <img src={disney} alt="Disney Logo" className="w-32 mx-auto mb-6" />
      <h1 className="text-2xl font-bold text-black mb-4">Iniciar Sesión</h1>
      <p className="text-gray-600 mb-6">
        Ingresa tus datos para acceder a tu cuenta.
      </p>

      {/* Formulario de Login */}
      <form onSubmit={handleLogin} className="flex flex-col">
        {/* Email */}
        <label htmlFor="email" className="mb-1 text-gray-600 font-medium">
          Correo Electrónico
        </label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full text-black border border-gray-300 rounded-md p-3 mb-4 focus:outline-none focus:ring focus:ring-yellow-400"
          placeholder="Ingresa tu correo"
        />

        {/* Contraseña */}
        <label htmlFor="password" className="mb-1 text-gray-600 font-medium">
          Contraseña
        </label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full text-black border border-gray-300 rounded-md p-3 mb-4 focus:outline-none focus:ring focus:ring-yellow-400"
          placeholder="Ingresa tu contraseña"
        />

        {/* Mensaje de error si existe */}
        {error && <p className="text-red-500 mb-2">{error}</p>}

        {/* Botón de Login */}
        <button
          type="submit"
          className="bg-yellow-300 text-black px-4 py-2 mt-4 rounded-lg hover:bg-yellow-400 transition-colors"
          disabled={loading}
        >
          {loading ? "Cargando..." : "Iniciar Sesión"}
        </button>
      </form>
    </div>
  );
}
