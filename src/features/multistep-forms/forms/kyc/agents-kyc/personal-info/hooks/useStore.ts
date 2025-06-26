import {
  defaultValues,
  Schema,
} from "@/features/multistep-forms/forms/kyc/agents-kyc/personal-info/types/schema";
import { createStore } from "@/utils/createStore";

type State = {
  formData: Schema;
};

type Actions = {
  updateFormData: (data: State["formData"]) => void;
};

type Store = State & Actions;

const useStore = createStore<Store>(
  (set) => ({
    formData: defaultValues,
    updateFormData: (data) =>
      set((state) => {
        state.formData = data;
      }),
  }),
  {
    name: "agents-kyc-personal-info-store",
  }
);

export { useStore, useStore as useAgentsKYCPersonalInfoStore }; 