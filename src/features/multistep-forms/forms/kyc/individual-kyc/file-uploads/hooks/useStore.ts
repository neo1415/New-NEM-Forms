import { create } from "zustand";
import { Schema, defaultValues } from "../types/schema";

interface State {
  formData: Schema;
  updateFormData: (data: Schema) => void;
}

export const useStore = create<State>((set) => ({
  formData: defaultValues,
  updateFormData: (data) => set({ formData: data }),
})); 