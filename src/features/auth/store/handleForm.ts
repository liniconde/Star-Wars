import { create } from "zustand";
import { AuthRoutes } from "../Auth";

interface State {
  form: AuthRoutes;
  isOpen: boolean;
  changeForm(from: AuthRoutes): void;
  closeModal(): void;
  openModal(): void;
}

export const useStateForm = create<State>((set) => ({
  form: AuthRoutes.INIT,
  isOpen: false,
  changeForm: (form: AuthRoutes) => set({ form }),
  closeModal: () => set({ isOpen: false }),
  openModal: () => set({ isOpen: true }),
}));
