import {
  getDegrees,
  getEmploymentStatuses,
  getReasonsForLeaving,
} from "@/features/multistep-forms/forms/claims/motor/history/utils/api";
import { useQuery } from "@tanstack/react-query";

const useEmploymentStatuses = () => {
  return useQuery({
    queryKey: ["employmentStatuses"],
    queryFn: getEmploymentStatuses,
  });
};

const useReasonsForLeaving = () => {
  return useQuery({
    queryKey: ["reasonsForLeaving"],
    queryFn: getReasonsForLeaving,
  });
};

const useDegrees = () => {
  return useQuery({
    queryKey: ["degrees"],
    queryFn: getDegrees,
  });
};

export { useEmploymentStatuses, useReasonsForLeaving, useDegrees };
