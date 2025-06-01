import { create } from "zustand";

type Store = {
  summaryDialogOpen: boolean;
  updateSummaryDialogOpen: (open: boolean) => void;
};

export const useStore = create<Store>((set) => ({
  summaryDialogOpen: false,
  updateSummaryDialogOpen: (open) => set({ summaryDialogOpen: open }),
})); 