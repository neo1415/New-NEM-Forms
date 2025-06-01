import { useMutation } from "@tanstack/react-query";
import { showSnack } from "@/utils/showSnack";

const useCreate = () => {
  return useMutation({
    mutationFn: async () => {
      // TODO: Implement API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
    },
    onSuccess: () => {
      showSnack("Form submitted successfully", { variant: "success" });
    },
    onError: (error) => {
      showSnack(error.message, { variant: "error" });
    },
  });
};

export { useCreate }; 