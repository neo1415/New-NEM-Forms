import { createStore } from "@/utils/createStore";
import { Schema, defaultValues } from "../types/schema";

type Store = {
  formData: Schema;
  updateFormData: (data: Schema) => void;
};

const useStore = createStore<Store>(
  (set) => ({
    formData: defaultValues,
    updateFormData: (data) =>
      set((state) => {
        state.formData = data;
      }),
  }),
  {
    name: "professional-indemnity-claimant-details-store",
  }
);

export { useStore, useStore as useClaimantDetailsStore }; 