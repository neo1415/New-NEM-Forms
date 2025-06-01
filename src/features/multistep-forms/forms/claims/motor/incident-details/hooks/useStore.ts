import {
  defaultValues,
  Schema,
} from "@/features/multistep-forms/forms/claims/motor/incident-details/types/schema";
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
    name: "incident-details-store",
  }
);

export { useStore, useStore as useMotorIncidentDetailsStore };
