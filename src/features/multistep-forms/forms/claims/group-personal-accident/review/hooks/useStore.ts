import { defaultValues, Schema } from "../types/schema";
import { createStore } from "@/utils/createStore";

type Store = {
  formData: Schema;
  isSubmitted: boolean;
  updateFormData: (data: Schema) => void;
  updateIsSubmitted: (is: boolean) => void;
};

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
    name: "group-personal-accident-review-store",
  }
);

export { useStore }; 