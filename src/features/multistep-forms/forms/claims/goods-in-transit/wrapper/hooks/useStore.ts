import { createStore } from "@/utils/createStore";

type State = {
  summaryDialogOpen: boolean;
};

type Actions = {
  updateSummaryDialogOpen: (is: boolean) => void;
};

type Store = State & Actions;

const useStore = createStore<Store>(
  (set) => ({
    summaryDialogOpen: false,
    updateSummaryDialogOpen: (is) =>
      set((state) => {
        state.summaryDialogOpen = is;
      }),
  }),
  {
    name: "goods-in-transit-wrapper-store",
  }
);

export { useStore }; 