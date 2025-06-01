import { useStore as useInsuredDetailsStore } from "../../insured-details/hooks/useStore";
import { useStore as useClaimantDetailsStore } from "../../claimant-details/hooks/useStore";
import { useStore as useContractDetailsStore } from "../../contract-details/hooks/useStore";
import { useStore as useClaimDetailsStore } from "../../claim-details/hooks/useStore";
import { useStore as useResponseDetailsStore } from "../../response-details/hooks/useStore";
import { useStore as useReviewStore } from "../../review/hooks/useStore";

import { create } from "../utils/api";
import { getErrorMessage } from "@/utils/getErrorMessage";
import { showSnack } from "@/utils/showSnack";
import { useMutation } from "@tanstack/react-query";

const useCreate = () => {
  const { formData: insuredDetailsFormData } = useInsuredDetailsStore();
  const { formData: claimantDetailsFormData } = useClaimantDetailsStore();
  const { formData: contractDetailsFormData } = useContractDetailsStore();
  const { formData: claimDetailsFormData } = useClaimDetailsStore();
  const { formData: responseDetailsFormData } = useResponseDetailsStore();
  const { formData: reviewFormData } = useReviewStore();

  return useMutation({
    mutationFn: () =>
      create({
        ...insuredDetailsFormData,
        ...claimantDetailsFormData,
        ...contractDetailsFormData,
        ...claimDetailsFormData,
        ...responseDetailsFormData,
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

export { useCreate }; 