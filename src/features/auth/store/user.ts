import { create } from "zustand";

interface State {
  isLogin: boolean | null;
  changeUser(isLogin: boolean): void;
}

export const useUser = create<State>((set) => ({
  isLogin: null,
  changeUser: (isLogin: boolean) => set({ isLogin }),
}));
