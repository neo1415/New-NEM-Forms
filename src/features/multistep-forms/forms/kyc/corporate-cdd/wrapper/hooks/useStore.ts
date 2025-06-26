import { create } from "zustand";
import { Schema } from "../types/schema";

interface State {
  formData: Partial<Schema>;
  updateFormData: (data: Partial<Schema>) => void;
  isSubmitted: boolean;
  setIsSubmitted: (value: boolean) => void;
}

const useStore = create<State>((set) => ({
  formData: {},
  updateFormData: (data) =>
    set((state) => ({
      formData: {
        ...state.formData,
        ...data,
      },
    })),
  isSubmitted: false,
  setIsSubmitted: (value) => set({ isSubmitted: value }),
}));

export { useStore }; 