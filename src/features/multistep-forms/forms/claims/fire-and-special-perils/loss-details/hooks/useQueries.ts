const yesNoOptions = [
  { value: "yes", label: "Yes" },
  { value: "no", label: "No" },
];

export const useRiskElement = () => ({
  data: yesNoOptions,
  isLoading: false,
});

export const useSoleOwner = () => ({
  data: yesNoOptions,
  isLoading: false,
});

export const useOtherInsurance = () => ({
  data: yesNoOptions,
  isLoading: false,
});

export const usePreviousClaims = () => ({
  data: yesNoOptions,
  isLoading: false,
});

export const usePremisesPurpose = () => ({
  data: yesNoOptions,
  isLoading: false,
}); 