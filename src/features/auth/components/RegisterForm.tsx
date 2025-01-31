import { useState } from "react";
import DisnetLogo from "../../../assets/imagenes/disney.svg";
import { appFirebase } from "../../../config/firebase";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useStateForm } from "../store/handleForm";

interface State {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  error: null | string;
}

export default function RegisterForm() {
  const [name, setName] = useState<State["name"]>("");
  const [email, setEmail] = useState<State["email"]>("");
  const [password, setPassword] = useState<State["password"]>("");
  const [confirmPassword, setConfirmPassword] =
    useState<State["confirmPassword"]>("");

  const [error, setError] = useState<State["error"]>();
  const auth = getAuth(appFirebase);
  const { closeModal } = useStateForm((state) => state);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);

    if (!name || !email || !password || !confirmPassword) {
      setError("Todos los campos son obligatorios");
      return;
    }
    if (password !== confirmPassword) {
      setError("Las contraseñas no coinciden.");
      return;
    }
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));

      const response = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      if (response) {
        setName("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
        localStorage.setItem("auth", "true");
        closeModal();
      }
    } catch (err) {
      setError("Ocurrió un error en el registro. Inténtao de nuevo.");
    }
  };

  return (
    <div className="max-w-md rounded-md w-[600px] pb-10 px-10">
      <img src={DisnetLogo} alt="DisneyLogo" className="mx-auto w-32" />

      <h1 className="text-xl font-bold mb-4 text-gray-700">Registro</h1>
      <form onSubmit={handleSubmit} className="flex flex-col">
        {/* Nombre */}
        <label htmlFor="name" className="mb-1 text-gray-600 font-medium">
          Nombre
        </label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="mb-4 p-2 border text-black border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-yellow-300"
          placeholder="Ingresa tu nombre completo"
        />

        {/* Email */}
        <label htmlFor="email" className="mb-1 text-gray-600 font-medium">
          Correo electrónico
        </label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mb-4 p-2 border text-black border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-yellow-300"
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
          className="mb-4 p-2 border text-black  rounded focus:outline-none focus:ring-2 focus:ring-yellow-300"
          placeholder="Ingresa tu contraseña"
        />

        {/* Confirmar Contraseña */}
        <label
          htmlFor="confirmPassword"
          className="mb-1 text-gray-600 font-medium"
        >
          Confirmar contraseña
        </label>
        <input
          id="confirmPassword"
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          className="mb-4 p-2 border text-black rounded focus:outline-none focus:ring-2 focus:ring-yellow-300"
          placeholder="Confirma tu contraseña"
        />

        {/* Mensaje de error si existe */}
        {error && <p className="text-red-500 mb-2">{error}</p>}

        <button
          type="submit"
          className="bg-yellow-300 text-white p-2 rounded hover:bg-yellow-400 transition-colors mt-5"
        >
          Registrarse
        </button>
      </form>
    </div>
  );
}
