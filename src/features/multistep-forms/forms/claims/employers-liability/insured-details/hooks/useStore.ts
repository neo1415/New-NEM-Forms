import { create } from "zustand";
import { Schema, defaultValues } from "../types/schema";

type Store = {
  formData: Schema;
  updateFormData: (data: Schema) => void;
  isSubmitted: boolean;
  updateIsSubmitted: (value: boolean) => void;
};

export const useStore = create<Store>((set) => ({
  formData: defaultValues,
  updateFormData: (data) => set({ formData: data }),
  isSubmitted: false,
  updateIsSubmitted: (value) => set({ isSubmitted: value }),
})); 