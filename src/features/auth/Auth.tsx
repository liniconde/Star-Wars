import RegisterForm from "./components/RegisterForm";
import LoginForm from "./components/LoginForm";
import HandleAuth from "./components/HandleAuth";
import Modal from "./components/Modal";
import { useStateForm } from "./store/handleForm";

export default function Auth() {
  const { isOpen, form, closeModal } = useStateForm((state) => state);
  return (
    <div>
      <Modal closedModal={closeModal} isOpen={isOpen}>
        {form === "INIT" && <HandleAuth />}
        {form === "LOGIN" && <LoginForm />}
        {form === "REGISTER" && <RegisterForm />}
      </Modal>
    </div>
  );
}
