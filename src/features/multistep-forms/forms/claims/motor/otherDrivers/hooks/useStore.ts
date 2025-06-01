import {
  defaultValues,
  Schema,
} from "@/features/multistep-forms/forms/claims/motor/otherDrivers/types/schema";
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
    name: "other-drivers-store",
  }
);

export { useStore, useStore as useOtherDriverssStore };
