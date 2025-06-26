import { defaultValues, Schema } from "../types/schema";
import { createStore } from "@/utils/createStore";

type State = {
  formData: Schema;
  isSubmitted: boolean;
};

type Actions = {
  updateFormData: (data: State["formData"]) => void;
  updateIsSubmitted: (isSubmitted: boolean) => void;
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
    updateIsSubmitted: (isSubmitted) =>
      set((state) => {
        state.isSubmitted = isSubmitted;
      }),
  }),
  {
    name: "combined-gpa-employers-review-store",
  }
);

export { useStore }; 