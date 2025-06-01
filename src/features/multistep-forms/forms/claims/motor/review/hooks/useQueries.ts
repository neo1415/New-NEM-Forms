import { getTermsAndConditions } from "@/features/multistep-forms/forms/claims/motor/review/utils/api";
import { useQuery } from "@tanstack/react-query";

const useTermsAndConditions = () => {
  return useQuery({
    queryKey: ["termsAndConditions"],
    queryFn: getTermsAndConditions,
  });
};

export { useTermsAndConditions };
