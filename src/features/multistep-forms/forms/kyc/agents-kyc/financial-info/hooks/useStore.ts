import {
  defaultValues,
  Schema,
} from "@/features/multistep-forms/forms/kyc/agents-kyc/financial-info/types/schema";
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
    isSubmitted: false,
    updateFormData: (data) =>
      set((state) => {
        state.formData = data;
      }),
    updateIsSubmitted: (is) =>
      set((state) => {
        state.isSubmitted = is;
      }),
  }),
  {
    name: "agents-kyc-financial-info-store",
  }
);

export { useStore, useStore as useAgentsKYCFinancialInfoStore }; 