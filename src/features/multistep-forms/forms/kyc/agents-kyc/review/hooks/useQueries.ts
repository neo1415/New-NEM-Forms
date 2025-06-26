import { useQuery } from "@tanstack/react-query";

export const useTermsAndConditions = () => {
  return useQuery({
    queryKey: ["termsAndConditions"],
    queryFn: async () => {
      // TODO: Replace with actual API call
      return [
        {
          title: "Data Privacy Notice",
          content: "Your personal data will be processed in accordance with our privacy policy...",
        },
        {
          title: "Declaration",
          content: "I hereby declare that all information provided is true and accurate...",
        },
      ];
    },
  });
}; 