import { useStore as useInsuredDetailsStore } from "../../insured-details/hooks/useStore";
import { useStore as useDetailsOfLossStore } from "../../details-of-loss/hooks/useStore";
import { useStore as useStatementOfEarningsStore } from "../../statement-of-earnings/hooks/useStore";
import { useStore as useReviewStore } from "../../review/hooks/useStore";
import { create } from "../utils/api";
import { getErrorMessage } from "@/utils/getErrorMessage";
import { showSnack } from "@/utils/showSnack";
import { useMutation } from "@tanstack/react-query";

export const useCreate = () => {
  const { formData: insuredDetailsFormData } = useInsuredDetailsStore();
  const { formData: detailsOfLossFormData } = useDetailsOfLossStore();
  const { formData: statementOfEarningsFormData } = useStatementOfEarningsStore();
  const { formData: reviewFormData } = useReviewStore();

  return useMutation({
    mutationFn: () =>
      create({
        ...insuredDetailsFormData,
        ...detailsOfLossFormData,
        ...statementOfEarningsFormData,
        ...reviewFormData,
      }),
    onSuccess: () => {
      showSnack("Successful");
    },
    onError: (error) => {
      showSnack(getErrorMessage(error), { variant: "error" });
    },
  });
}; 