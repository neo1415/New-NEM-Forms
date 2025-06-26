import { create } from "zustand";
import { Schema, defaultValues } from "../types/schema";

type State = {
  formData: Partial<Schema>;
  isSubmitted: boolean;
};

type Actions = {
  updateFormData: (data: Partial<Schema>) => void;
  updateIsSubmitted: (isSubmitted: boolean) => void;
};

export const useStore = create<State & Actions>((set) => ({
  formData: defaultValues,
  isSubmitted: false,
  updateFormData: (data) => set({ formData: data }),
  updateIsSubmitted: (isSubmitted) => set({ isSubmitted }),
})); 