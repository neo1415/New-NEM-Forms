import { useMutation } from "@tanstack/react-query";
import { showSnack } from "@/utils/showSnack";

declare module "@tanstack/react-query" {
  interface Register {
    defaultError: Error;
  }
}

export const useCreate = () => {
  return useMutation({
    mutationFn: async () => {
      // Here you would typically make an API call to submit the form data
      await new Promise((resolve) => setTimeout(resolve, 2000));
      return true;
    },
    onSuccess: () => {
      showSnack("Form submitted successfully", { variant: "success" });
    },
    onError: () => {
      showSnack("Failed to submit form", { variant: "error" });
    },
  });
}; 