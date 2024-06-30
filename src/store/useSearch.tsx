import { create } from "zustand";

type State = {
  search: string;
};

type Action = {
  setSearch: (search: State["search"]) => void;
};

// Create your store, which includes both state and (optionally) actions
export const useSearchStore = create<State & Action>((set) => ({
  search: "",
  setSearch: (search) => set(() => ({ search: search })),
}));
