import { useEffect, useRef } from "react";
import bg from "../../../assets/imagenes/bg.jpg";
import StarWars from "../../../assets/imagenes/pngwing.com.png";

interface Props {
  isOpen: boolean;
  closedModal(): void;
  children: React.ReactNode;
}

export default function Modal(props: Props) {
  const { children, isOpen, closedModal } = props;

  const bgModal = useRef<HTMLDivElement>(null);
  const contentModal = useRef<HTMLDivElement>(null);

  const handleClick = (e: KeyboardEvent) => {
    if (e.key === "Escape") {
      closedModal();
    }
  };

  const handleMouse = (e: MouseEvent) => {
    if (
      bgModal.current &&
      bgModal.current.contains(e.target as Node) &&
      contentModal.current &&
      !contentModal.current.contains(e.target as Node)
    ) {
      closedModal();
    }
  };

  useEffect(() => {
    addEventListener("keydown", handleClick);
    addEventListener("mousedown", handleMouse);

    return () => {
      removeEventListener("keydown", handleClick);
      removeEventListener("mousedown", handleMouse);
    };
  }, []);

  return (
    <>
      {isOpen ? (
        <div
          ref={bgModal}
          data-testid="modal-background"
          style={{ backgroundImage: `url(${bg})` }}
          className=" z-50 bg-cover bg-center fixed inset-0 h-screen w-screen flex justify-center items-center"
        >
          <div ref={contentModal} className="flex flex-col items-center">
            <img src={StarWars} alt="StarWars" className="w-48 mb-8" />
            <div className="bg-white rounded-lg p-8">{children}</div>
          </div>
        </div>
      ) : null}
    </>
  );
}
