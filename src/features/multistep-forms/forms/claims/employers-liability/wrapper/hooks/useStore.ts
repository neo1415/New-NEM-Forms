import { create } from "zustand";

type Store = {
  summaryDialogOpen: boolean;
  updateSummaryDialogOpen: (value: boolean) => void;
};

export const useStore = create<Store>((set) => ({
  summaryDialogOpen: false,
  updateSummaryDialogOpen: (value) => set({ summaryDialogOpen: value }),
})); 