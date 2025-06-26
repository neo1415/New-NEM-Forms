import { useMutation } from "@tanstack/react-query";
import { useStore as useInsuredDetailsStore } from "../../insured-details/hooks/useStore";
import { useStore as useDetailsOfLossStore } from "../../details-of-loss/hooks/useStore";
import { useStore as useStatementOfEarningsStore } from "../../statement-of-earnings/hooks/useStore";
import { useStore as useReviewStore } from "../../review/hooks/useStore";
import { showSnack } from "@/utils/showSnack";

export const useCreate = () => {
  const { formData: insuredDetailsFormData } = useInsuredDetailsStore();
  const { formData: detailsOfLossFormData } = useDetailsOfLossStore();
  const { formData: statementOfEarningsFormData } = useStatementOfEarningsStore();
  const { formData: reviewFormData } = useReviewStore();

  return useMutation({
    mutationFn: async () => {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000));

      showSnack("Claim submitted successfully", { variant: "success" });
    },
  });
}; 