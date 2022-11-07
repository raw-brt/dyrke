import create from "zustand";

type WhatToShow = "ownProfile" | "otherProfile" | "publication";

interface RightSidebarState {
  whatToShow: WhatToShow,
  setWhatToShow: (whatToShow: WhatToShow) => void
  content: any,
  setContent: (content: any) => void,
};

export const useRightSidebarState = create<RightSidebarState>((set) => ({
  whatToShow: "ownProfile",
  setWhatToShow: (whatToShow) => set(() => ({ whatToShow })),
  content: null,
  setContent: (content) => set(() => ({ content })),
  clearAuth: () => set({}, true)
}));