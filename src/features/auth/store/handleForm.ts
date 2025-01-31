import { create } from "zustand";

interface State {
  form: string;
  isOpen: boolean;
  changeForm(from: string): void;
  closeModal(): void;
  openModal(): void;
}

export const useStateForm = create<State>((set) => ({
  form: "INIT",
  isOpen: false,
  changeForm: (form: string) => set({ form }),
  closeModal: () => set({ isOpen: false }),
  openModal: () => set({ isOpen: true }),
}));
