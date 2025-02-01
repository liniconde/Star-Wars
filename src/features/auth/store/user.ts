import { create } from "zustand";

interface State {
  isLogin: boolean;
  changeUser(isLogin: boolean): void;
}

export const useUser = create<State>((set) => ({
  isLogin: localStorage.getItem("isLogin") === "true",
  changeUser: (isLogin: boolean) => {
    if (isLogin) {
      localStorage.setItem("isLogin", "true");
    } else { 
      localStorage.removeItem("isLogin");
    } 
    set({ isLogin });
  },
}));
