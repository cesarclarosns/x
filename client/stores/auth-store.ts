import { IUser } from "@/shared/interfaces"
import { create } from "zustand"

interface Auth {
  user: IUser
  accessToken: string
}

interface AuthState {
  auth: Auth | undefined
  setAuth: (auth: Auth) => void
  clearAuth: () => void
}

export const useAuthStore = create<AuthState>()((set) => ({
  auth: undefined,
  setAuth: (auth) => set(() => ({ auth })),
  clearAuth: () =>
    set(() => ({
      auth: undefined
    }))
}))
