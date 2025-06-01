import { create } from "zustand";
import { Schema, defaultValues } from "../types/schema";

type Store = {
  formData: Schema;
  updateFormData: (data: Schema) => void;
};

const useStore = create<Store>((set) => ({
  formData: defaultValues,
  updateFormData: (data) => set({ formData: data }),
}));

export { useStore }; 