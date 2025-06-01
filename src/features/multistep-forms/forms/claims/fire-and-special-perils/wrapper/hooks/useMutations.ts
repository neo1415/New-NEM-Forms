import { useMutation } from "@tanstack/react-query";
import { showSnack } from "@/utils/showSnack";
import { Schema } from "../types/schema";

export const useCreate = () => {
  return useMutation({
    mutationFn: async (data: Schema) => {
      // TODO: Implement actual API call
      await new Promise((resolve) => setTimeout(resolve, 2000));
      return data;
    },
    onSuccess: () => {
      showSnack("Form submitted successfully", { variant: "success" });
    },
  });
}; 