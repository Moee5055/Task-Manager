import { create } from "zustand";

type State = {
  visibile: boolean;
};

type Action = {
  updateVisile: (visible: State["visibile"]) => void;
};

// Create your store, which includes both state and (optionally) actions
export const useToggleStore = create<State & Action>((set) => ({
  visibile: false,
  updateVisile: (visibile) => set(() => ({ visibile: visibile })),
}));
