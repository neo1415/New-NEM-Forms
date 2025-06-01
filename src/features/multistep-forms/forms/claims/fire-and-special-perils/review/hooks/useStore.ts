import { defaultValues, Schema } from "../types/schema";
import { create } from "zustand";

type Store = {
  formData: Schema;
  updateFormData: (data: Schema) => void;
};

export const useStore = create<Store>((set) => ({
  formData: defaultValues,
  updateFormData: (data) => set({ formData: data }),
})); 