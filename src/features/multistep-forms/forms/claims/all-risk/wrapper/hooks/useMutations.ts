import { useMutation } from "@tanstack/react-query";
import { useStore } from "./useStore";
import { showSnack } from "@/utils/showSnack";

export const useCreate = () => {
  const { insuredDetails, detailsOfLoss, review } = useStore();

  return useMutation({
    mutationFn: async () => {
      // TODO: Implement API call with form data
      const formData = { insuredDetails, detailsOfLoss, review };
      await new Promise((resolve) => setTimeout(resolve, 2000));
      console.log("Submitting form data:", formData);
      showSnack("Form submitted successfully", { variant: "success" });
    },
  });
}; 