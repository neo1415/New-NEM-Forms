import { useQuery } from "@tanstack/react-query";

export const useTermsAndConditions = () => {
  return useQuery({
    queryKey: ["termsAndConditions"],
    queryFn: async () => {
      // TODO: Replace with actual API call
      return [
        {
          title: "Data Privacy Notice",
          content: "Your personal data will be processed in accordance with our privacy policy and applicable data protection laws.",
        },
        {
          title: "Declaration",
          content: "I hereby declare that all information provided in this form is true and accurate to the best of my knowledge.",
        },
      ];
    },
  });
}; 