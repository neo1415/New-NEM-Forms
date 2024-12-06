import { Schema } from "@/features/employee/personal-info/types/schema";
import {
  getCities,
  getStates,
} from "@/features/employee/personal-info/utils/api";
import { useQuery } from "@tanstack/react-query";
import { useFormContext, useWatch } from "react-hook-form";

const useStates = () => {
  return useQuery({
    queryKey: ["states"],
    queryFn: getStates,
  });
};

const useCities = () => {
  const { control } = useFormContext<Schema>();
  const state = useWatch({ control, name: "state" });

  return useQuery({
    queryKey: ["cities", { state }],
    queryFn: () => getCities(state),
  });
};

export { useStates, useCities };
