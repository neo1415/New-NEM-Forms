import { defaultValues, Schema } from "@/features/multistep-forms/forms/claims/motor/review/types/schema";
import { createStore } from "@/utils/createStore";

type State = {
  formData: Schema;
  isSubmitted: boolean;
};

type Actions = {
  updateFormData: (data: State["formData"]) => void;
  updateIsSubmitted: (is: State["isSubmitted"]) => void;
};

type Store = State & Actions;

const useStore = createStore<Store>(
  (set) => ({
    formData: defaultValues,
    updateFormData: (data) =>
      set((state) => {
        state.formData = data;
      }),
    isSubmitted: false,
    updateIsSubmitted: (is) =>
      set((state) => {
        state.isSubmitted = is;
      }),
  }),

  {
    name: "motor-insurance-review-store",
  }
);

export { useStore, useStore as useMotorInsuranceReviewStore };
