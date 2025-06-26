import { create } from "zustand";
import { Schema, defaultValues } from "../types/schema";

interface State {
  formData: Partial<Schema>;
  updateFormData: (data: Partial<Schema>) => void;
}

const useStore = create<State>((set) => ({
  formData: defaultValues,
  updateFormData: (data) =>
    set((state) => ({
      formData: {
        ...state.formData,
        ...data,
      },
    })),
}));

export { useStore }; 