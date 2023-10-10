import { IUser } from "@/shared/interfaces/models/user.interface";
import { create } from "zustand";

interface Auth {
  user: IUser | undefined;
  accessToken: string;
}

interface AuthState {
  auth: Auth | undefined;
  setAuth: (auth: Auth) => void;
  clearAuth: () => void;
}

export const useAuthStore = create<AuthState>()((set) => ({
  auth: undefined,
  setAuth: (auth) => set(() => ({ auth })),
  clearAuth: () =>
    set(() => ({
      auth: undefined,
    })),
}));
