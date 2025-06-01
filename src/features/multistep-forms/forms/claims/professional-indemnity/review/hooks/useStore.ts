import { create } from "zustand";
import { Schema } from "../types/schema";

type Store = {
  formData: Schema;
  isSubmitted: boolean;
  updateFormData: (data: Schema) => void;
  updateIsSubmitted: (value: boolean) => void;
};

const useStore = create<Store>((set) => ({
  formData: {} as Schema,
  isSubmitted: false,
  updateFormData: (data) => set({ formData: data }),
  updateIsSubmitted: (value) => set({ isSubmitted: value }),
}));

export { useStore }; 