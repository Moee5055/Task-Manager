import { create } from "zustand";

type State = {
  file: File[];
};

type Action = {
  updateFile: (file: File[]) => void;
};

const useFileState = create<State & Action>((set) => ({
  file: [],
  updateFile: (file) => set({ file }),
}));

export default useFileState;
