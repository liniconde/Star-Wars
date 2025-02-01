import RegisterForm from "./components/RegisterForm";
import LoginForm from "./components/LoginForm";
import HandleAuth from "./components/HandleAuth";
import Modal from "./components/Modal";
import { useStateForm } from "./store/handleForm";
import { useEffect } from "react";

export enum AuthRoutes {
  INIT, // 0
  LOGIN, // 1
  REGISTER, // 2
}

interface AuthProps {
  routes?: AuthRoutes;
}

export default function Auth(props: AuthProps) {
  const { isOpen, openModal, form, changeForm, closeModal } = useStateForm(
    (state) => state
  );
  const { routes } = props;

  useEffect(() => {
    if (routes) {
      changeForm(routes);
      openModal();
    }
  }, [routes]);

  return (
    <div>
      <Modal closedModal={closeModal} isOpen={isOpen}>
        {form === AuthRoutes.INIT && <HandleAuth />}
        {form === AuthRoutes.LOGIN && <LoginForm />}
        {form === AuthRoutes.REGISTER && <RegisterForm />}
      </Modal>
    </div>
  );
}
