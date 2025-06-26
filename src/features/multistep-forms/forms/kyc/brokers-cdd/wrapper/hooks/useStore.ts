import { create } from "zustand";

type State = {
  open: boolean;
  updateOpen: (open: boolean) => void;
};

export const useStore = create<State>((set) => ({
  open: false,
  updateOpen: (open) => set({ open }),
})); 