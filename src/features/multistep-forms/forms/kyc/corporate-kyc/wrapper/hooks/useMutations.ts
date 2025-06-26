import { useMutation } from "@tanstack/react-query";
import { Schema } from "../types/schema";
import { submitForm } from "../utils/api";
import { getErrorMessage } from "@/utils/getErrorMessage";
import { showSnack } from "@/utils/showSnack";

export const useMutations = () => {
  const mutation = useMutation({
    mutationFn: (data: Schema) => submitForm(data),
    onSuccess: () => {
      showSnack("Form submitted successfully", { variant: "success" });
    },
    onError: (error) => {
      showSnack(getErrorMessage(error), { variant: "error" });
    },
  });

  return {
    ...mutation,
    mutate: mutation.mutate,
    isLoading: mutation.status === "pending",
  };
}; 