import { useStore as useInsuredDetailsStore } from "../../insured-details/hooks/useStore";
import { useStore as useLossDetailsStore } from "../../loss-details/hooks/useStore";
import { useStore as useReviewStore } from "../../review/hooks/useStore";
import { create } from "../utils/api";
import { getErrorMessage } from "@/utils/getErrorMessage";
import { showSnack } from "@/utils/showSnack";
import { useMutation } from "@tanstack/react-query";

export const useCreate = () => {
  const { formData: insuredDetailsFormData } = useInsuredDetailsStore();
  const { formData: lossDetailsFormData } = useLossDetailsStore();
  const { formData: reviewFormData } = useReviewStore();

  return useMutation({
    mutationFn: () =>
      create({
        ...insuredDetailsFormData,
        ...lossDetailsFormData,
        ...reviewFormData,
      }),

    onSuccess: async () => {
      showSnack("Successful");
    },
    onError: (error) => {
      showSnack(getErrorMessage(error), { variant: "error" });
    },
  });
}; 