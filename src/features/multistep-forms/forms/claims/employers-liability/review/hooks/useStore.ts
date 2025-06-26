import { defaultValues, Schema } from "../types/schema";
import { createStore } from "@/utils/createStore";

type State = {
  formData: Schema;
  isSubmitted: boolean;
};

type Actions = {
  updateFormData: (data: State["formData"]) => void;
  updateIsSubmitted: (value: boolean) => void;
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
    updateIsSubmitted: (value) =>
      set((state) => {
        state.isSubmitted = value;
      }),
  }),
  {
    name: "employers-liability-review-store",
  }
);

export { useStore }; 