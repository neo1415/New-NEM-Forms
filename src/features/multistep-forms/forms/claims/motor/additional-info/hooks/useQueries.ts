import { getRelationships } from "@/features/multistep-forms/forms/claims//additional-info/utils/api";
import { useQuery } from "@tanstack/react-query";

const useRelationships = () => {
  return useQuery({
    queryKey: ["relationships"],
    queryFn: getRelationships,
  });
};

export { useRelationships };
