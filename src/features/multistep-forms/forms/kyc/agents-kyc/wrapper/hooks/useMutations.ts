import { useMutation } from "@tanstack/react-query";
import { Schema } from "../types/schema";
import { create } from "../utils/api";
import { getErrorMessage } from "@/utils/getErrorMessage";
import { showSnack } from "@/utils/showSnack";

export const useMutations = () => {
  const mutation = useMutation({
    mutationFn: (data: Schema) => create(data),
    onSuccess: () => {
      showSnack("Successful");
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