import { Profile } from "./../generated/types";
import create from "zustand";

interface ProfilesState {
  profiles: Profile[] | [];
  currentProfile: Profile | null;
  currentProfileId: string | null;
  currentProfileHandle: string | null;
  notificationCount: number;
  userSigNonce: number;
  setProfiles: (profiles: Profile[]) => void;
  setCurrentProfile: (currentProfile: Profile | null) => void;
  setUserSigNonce: (userSigNonce: number) => void;
  setCurrentProfileId: (currentProfileId: string | null) => void
};

export const useProfileStore = create<ProfilesState>((set) => ({
  profiles: [],
  currentProfile: null,
  currentProfileId: null,
  currentProfileHandle: null,
  notificationCount: 0,
  userSigNonce: 0,
  setProfiles: (profiles) => set(() => ({ profiles })),
  setCurrentProfile: (currentProfile) => set(() => ({ currentProfile })),
  setUserSigNonce: (userSigNonce) => set(() => ({ userSigNonce })),
  setCurrentProfileId: (currentProfileId) => set(() => ({ currentProfileId })),
  clearAuth: () => set({}, true)
}));