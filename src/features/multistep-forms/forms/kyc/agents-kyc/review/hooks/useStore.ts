import { create } from "zustand";
import { Schema, defaultValues } from "../types/schema";

type State = {
  formData: Schema;
  isSubmitted: boolean;
  updateFormData: (data: Partial<Schema>) => void;
  updateIsSubmitted: (isSubmitted: boolean) => void;
};

export const useStore = create<State>((set) => ({
  formData: defaultValues,
  isSubmitted: false,
  updateFormData: (data) => set((state) => ({ formData: { ...state.formData, ...data } })),
  updateIsSubmitted: (isSubmitted) => set({ isSubmitted }),
})); 