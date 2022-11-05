import create from "zustand";

type AuthData = { accessToken: string, refreshToken: string };

interface AuthState {
  authState: AuthData
  setAuthState: (authState: AuthData) => void
};

export const useAuthStore = create<AuthState>((set) => ({
  authState: {accessToken: "", refreshToken: ""},
  setAuthState: (authState) => set(() => ({ authState })),
  clearAuth: () => set({}, true)
}))