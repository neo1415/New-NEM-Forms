import { createStore } from "@/utils/createStore";
import { Schema as InsuredDetailsSchema } from "../../insured-details/types/schema";
import { Schema as DetailsOfLossSchema } from "../../details-of-loss/types/schema";
import { Schema as ReviewSchema } from "../../review/types/schema";

type State = {
  insuredDetails: InsuredDetailsSchema;
  detailsOfLoss: DetailsOfLossSchema;
  review: ReviewSchema;
  summaryDialogOpen: boolean;
};

type Actions = {
  updateInsuredDetails: (data: InsuredDetailsSchema) => void;
  updateDetailsOfLoss: (data: DetailsOfLossSchema) => void;
  updateReview: (data: ReviewSchema) => void;
  updateSummaryDialogOpen: (open: boolean) => void;
};

type Store = State & Actions;

const useStore = createStore<Store>(
  (set) => ({
    insuredDetails: {} as InsuredDetailsSchema,
    detailsOfLoss: {} as DetailsOfLossSchema,
    review: {} as ReviewSchema,
    summaryDialogOpen: false,
    updateInsuredDetails: (data) =>
      set((state) => {
        state.insuredDetails = data;
      }),
    updateDetailsOfLoss: (data) =>
      set((state) => {
        state.detailsOfLoss = data;
      }),
    updateReview: (data) =>
      set((state) => {
        state.review = data;
      }),
    updateSummaryDialogOpen: (open) =>
      set((state) => {
        state.summaryDialogOpen = open;
      }),
  }),
  {
    name: "burglary-wrapper-store",
  }
);

export { useStore }; 