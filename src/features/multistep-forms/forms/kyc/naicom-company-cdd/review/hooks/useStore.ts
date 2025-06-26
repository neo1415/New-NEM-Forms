import { create } from "zustand";
import { Schema } from "../types/schema";

type State = {
  formData: Partial<Schema>;
  isSubmitted: boolean;
};

type Actions = {
  updateFormData: (data: Partial<Schema>) => void;
  updateIsSubmitted: (isSubmitted: boolean) => void;
};

export const useStore = create<State & Actions>((set) => ({
  formData: {},
  isSubmitted: false,
  updateFormData: (data) => set({ formData: data }),
  updateIsSubmitted: (isSubmitted) => set({ isSubmitted }),
}));