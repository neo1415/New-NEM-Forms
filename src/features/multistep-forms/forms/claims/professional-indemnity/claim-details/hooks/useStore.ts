import { create } from "zustand";
import { Schema } from "../types/schema";

type Store = {
  formData: Schema;
  updateFormData: (data: Schema) => void;
};

const useStore = create<Store>((set) => ({
  formData: {} as Schema,
  updateFormData: (data) => set({ formData: data }),
}));

export { useStore }; 