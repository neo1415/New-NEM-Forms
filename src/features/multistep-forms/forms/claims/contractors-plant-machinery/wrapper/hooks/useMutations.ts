import { useStore as useInsuredDetailsStore } from "../../insured-details/hooks/useStore";
import { useStore as useDetailsOfLossStore } from "../../details-of-loss/hooks/useStore";
import { useStore as useReviewStore } from "../../review/hooks/useStore";
import { create } from "../utils/api";
import { getErrorMessage } from "@/utils/getErrorMessage";
import { showSnack } from "@/utils/showSnack";
import { useMutation } from "@tanstack/react-query";

const useCreate = () => {
  const { formData: insuredDetailsData } = useInsuredDetailsStore();
  const { formData: detailsOfLossData } = useDetailsOfLossStore();
  const { formData: reviewData } = useReviewStore();

  return useMutation({
    mutationFn: () =>
      create({
        ...insuredDetailsData,
        ...detailsOfLossData,
        ...reviewData,
      }),

    onSuccess: async () => {
      showSnack("Successful");
    },
    onError: (error) => {
      showSnack(getErrorMessage(error), { variant: "error" });
    },
  });
};

export { useCreate }; 