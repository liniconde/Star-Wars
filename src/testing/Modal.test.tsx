import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { describe, test, expect, vi } from "vitest";
import Modal from "../features/auth/components/Modal"; // Ajusta la ruta si es necesario

describe("Modal Component", () => {
  test("Renderiza el modal cuando isOpen es true", () => {
    render(
      <Modal isOpen={true} closedModal={() => {}}>
        <p>Contenido del Modal</p>
      </Modal>
    );

    expect(screen.getByText("Contenido del Modal")).toBeInTheDocument();
  });

  test("No renderiza el modal cuando isOpen es false", () => {
    render(
      <Modal isOpen={false} closedModal={() => {}}>
        <p>Contenido del Modal</p>
      </Modal>
    );

    expect(screen.queryByText("Contenido del Modal")).not.toBeInTheDocument();
  });

  test("Cierra el modal al hacer clic fuera del contenido", () => {
    const closeMock = vi.fn();

    render(
      <Modal isOpen={true} closedModal={closeMock}>
        <p>Contenido del Modal</p>
      </Modal>
    );

    fireEvent.mouseDown(screen.getByTestId("modal-background"));

    expect(closeMock).toHaveBeenCalledTimes(1);
  });

  test("Cierra el modal al presionar la tecla Escape", () => {
    const closeMock = vi.fn();

    render(
      <Modal isOpen={true} closedModal={closeMock}>
        <p>Contenido del Modal</p>
      </Modal>
    );

    fireEvent.keyDown(document, { key: "Escape" });

    expect(closeMock).toHaveBeenCalledTimes(1);
  });

  test("Renderiza correctamente los children dentro del modal", () => {
    render(
      <Modal isOpen={true} closedModal={() => {}}>
        <p>Texto dentro del modal</p>
      </Modal>
    );

    expect(screen.getByText("Texto dentro del modal")).toBeInTheDocument();
  });
});
