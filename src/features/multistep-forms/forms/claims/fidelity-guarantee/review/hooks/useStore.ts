import { create } from "zustand";
import { Schema, defaultValues } from "../types/schema";

type Store = {
  formData: Schema;
  isSubmitted: boolean;
  updateFormData: (data: Schema) => void;
  updateIsSubmitted: (is: boolean) => void;
};

export const useStore = create<Store>((set) => ({
  formData: defaultValues,
  isSubmitted: false,
  updateFormData: (data) => set({ formData: data }),
  updateIsSubmitted: (is) => set({ isSubmitted: is }),
})); 