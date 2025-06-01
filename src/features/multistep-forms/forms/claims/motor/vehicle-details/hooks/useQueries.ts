// import { Schema } from "@/features/multistep-forms/forms/employee/personal-info/types/schema";
import {
  // getCities,
  getAnswers,
} from "@/features/multistep-forms/forms/claims/motor/personal-info/utils/api";
// import { useFormContext } from "@/features/form/hooks/useFormContext";
import { useQuery } from "@tanstack/react-query";
// import { useWatch } from "react-hook-form";

const useRegistered = () => {
  return useQuery({
    queryKey: ["vehicleRegisteredInName"],
    queryFn: getAnswers,
  });
};

const useOwned = () => {
  return useQuery({
    queryKey: ["vehicleOwnership"],
    queryFn: getAnswers,
  });
};

const useHire = () => {
  return useQuery({
    queryKey: ["hirePurchase"],
    queryFn: getAnswers,
  });
};


export { useHire, useRegistered, useOwned };
