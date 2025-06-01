import { create } from "zustand";
import { Schema as InsuredDetailsSchema } from "../../insured-details/types/schema";
import { Schema as ClaimantDetailsSchema } from "../../claimant-details/types/schema";
import { Schema as ContractDetailsSchema } from "../../contract-details/types/schema";
import { Schema as ClaimDetailsSchema } from "../../claim-details/types/schema";
import { Schema as ResponseDetailsSchema } from "../../response-details/types/schema";
import { Schema as ReviewSchema } from "../../review/types/schema";

type Store = {
  insuredDetails: InsuredDetailsSchema;
  claimantDetails: ClaimantDetailsSchema;
  contractDetails: ContractDetailsSchema;
  claimDetails: ClaimDetailsSchema;
  responseDetails: ResponseDetailsSchema;
  review: ReviewSchema;
  summaryDialogOpen: boolean;
  updateInsuredDetails: (data: InsuredDetailsSchema) => void;
  updateClaimantDetails: (data: ClaimantDetailsSchema) => void;
  updateContractDetails: (data: ContractDetailsSchema) => void;
  updateClaimDetails: (data: ClaimDetailsSchema) => void;
  updateResponseDetails: (data: ResponseDetailsSchema) => void;
  updateReview: (data: ReviewSchema) => void;
  updateSummaryDialogOpen: (open: boolean) => void;
};

export const useStore = create<Store>((set) => ({
  insuredDetails: {} as InsuredDetailsSchema,
  claimantDetails: {} as ClaimantDetailsSchema,
  contractDetails: {} as ContractDetailsSchema,
  claimDetails: {} as ClaimDetailsSchema,
  responseDetails: {} as ResponseDetailsSchema,
  review: {} as ReviewSchema,
  summaryDialogOpen: false,
  updateInsuredDetails: (data) => set({ insuredDetails: data }),
  updateClaimantDetails: (data) => set({ claimantDetails: data }),
  updateContractDetails: (data) => set({ contractDetails: data }),
  updateClaimDetails: (data) => set({ claimDetails: data }),
  updateResponseDetails: (data) => set({ responseDetails: data }),
  updateReview: (data) => set({ review: data }),
  updateSummaryDialogOpen: (open) => set({ summaryDialogOpen: open }),
})); 