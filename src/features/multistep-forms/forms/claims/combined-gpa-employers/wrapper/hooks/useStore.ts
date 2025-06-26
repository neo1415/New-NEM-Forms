import { createStore } from "@/utils/createStore";

type State = {
  summaryDialogOpen: boolean;
};

type Actions = {
  updateSummaryDialogOpen: (open: boolean) => void;
};

type Store = State & Actions;

const useStore = createStore<Store>(
  (set) => ({
    summaryDialogOpen: false,
    updateSummaryDialogOpen: (open) =>
      set((state) => {
        state.summaryDialogOpen = open;
      }),
  }),
  {
    name: "combined-gpa-employers-wrapper-store",
  }
);

export { useStore }; 