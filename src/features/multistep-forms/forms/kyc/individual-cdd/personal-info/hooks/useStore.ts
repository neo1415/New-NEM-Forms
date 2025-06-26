import { create } from "zustand";
import { Schema } from "../types/schema";

interface State {
  formData: Partial<Schema>;
  updateFormData: (data: Partial<Schema>) => void;
}

export const useStore = create<State>((set) => ({
  formData: {},
  updateFormData: (data) => set({ formData: data }),
})); 