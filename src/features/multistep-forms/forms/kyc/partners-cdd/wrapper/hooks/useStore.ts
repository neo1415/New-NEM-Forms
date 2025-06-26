import { create } from "zustand";
import { Schema } from "../types/schema";

type State = {
  formData: Partial<Schema>;
  open: boolean;
};

type Actions = {
  updateFormData: (data: Partial<Schema>) => void;
  updateOpen: (open: boolean) => void;
};

export const useStore = create<State & Actions>((set) => ({
  formData: {},
  open: false,
  updateFormData: (data) => set({ formData: data }),
  updateOpen: (open) => set({ open }),
})); 