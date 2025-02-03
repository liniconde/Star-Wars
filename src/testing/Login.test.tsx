import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { vi } from "vitest";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import LoginForm from "../features/auth/components/LoginForm";

vi.mock("firebase/auth", () => ({
  getAuth: vi.fn(() => ({})),
  signInWithEmailAndPassword: vi.fn(),
}));

// 🔥 Mock de `useNavigate`
vi.mock("react-router-dom", async () => {
  const actual = await vi.importActual("react-router-dom");
  return {
    ...actual,
    useNavigate: vi.fn(() => vi.fn()),
  };
});

describe("LoginForm", () => {
  test("Muestra error si el usuario intenta loguearse sin email ni contraseña", async () => {
    render(
      <BrowserRouter>
        <LoginForm />
      </BrowserRouter>
    );

    const loginButton = screen.getByRole("button", { name: /iniciar sesión/i });

    fireEvent.click(loginButton);

    expect(
      await screen.findByText("Todos los campos son obligatorios.")
    ).toBeInTheDocument();
  });

  test("Permite escribir email y contraseña", () => {
    render(
      <BrowserRouter>
        <LoginForm />
      </BrowserRouter>
    );

    const emailInput = screen.getByPlaceholderText("Ingresa tu correo");
    const passwordInput = screen.getByPlaceholderText("Ingresa tu contraseña");

    fireEvent.change(emailInput, { target: { value: "test@example.com" } });
    fireEvent.change(passwordInput, { target: { value: "password123" } });

    expect(emailInput).toHaveValue("test@example.com");
    expect(passwordInput).toHaveValue("password123");
  });

  test("Simula autenticación exitosa con Firebase y redirige a /starships", async () => {
    (signInWithEmailAndPassword as vi.Mock).mockResolvedValue({
      user: { uid: "12345" },
    });

    render(
      <BrowserRouter>
        <LoginForm />
      </BrowserRouter>
    );

    const emailInput = screen.getByPlaceholderText("Ingresa tu correo");
    const passwordInput = screen.getByPlaceholderText("Ingresa tu contraseña");
    const loginButton = screen.getByRole("button", { name: /iniciar sesión/i });

    fireEvent.change(emailInput, { target: { value: "test@example.com" } });
    fireEvent.change(passwordInput, { target: { value: "password123" } });
    fireEvent.click(loginButton);

    await waitFor(() => expect(signInWithEmailAndPassword).toHaveBeenCalled());
  });

  test("Muestra error si las credenciales son incorrectas", async () => {
    (signInWithEmailAndPassword as vi.Mock).mockRejectedValue(
      new Error("Correo o contraseña incorrectos. Intenta de nuevo.")
    );

    render(
      <BrowserRouter>
        <LoginForm />
      </BrowserRouter>
    );

    const emailInput = screen.getByPlaceholderText("Ingresa tu correo");
    const passwordInput = screen.getByPlaceholderText("Ingresa tu contraseña");
    const loginButton = screen.getByRole("button", { name: /iniciar sesión/i });

    fireEvent.change(emailInput, { target: { value: "wrong@example.com" } });
    fireEvent.change(passwordInput, { target: { value: "wrongpassword" } });
    fireEvent.click(loginButton);

    expect(
      await screen.findByText(
        "Correo o contraseña incorrectos. Intenta de nuevo."
      )
    ).toBeInTheDocument();
  });
});
