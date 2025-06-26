import { z } from "zod";

const propertyItemSchema = z.object({
  description: z.string().min(1, "Description is required"),
  purchaseDate: z.date({
    required_error: "Purchase date is required",
    invalid_type_error: "Invalid date format",
  }),
  costPrice: z.string().min(1, "Cost price is required"),
  deduction: z.string().min(1, "Deduction is required"),
  amountClaimed: z.string().min(1, "Amount claimed is required"),
  remarks: z.string().optional(),
});

export const schema = z.object({
  // Type of Claim
  typeOfClaim: z.string().min(1, "Type of claim is required"),
  locationOfClaim: z.string().min(1, "Location of claim is required"),
  dateOfOccurrence: z.date({
    required_error: "Date of occurrence is required",
    invalid_type_error: "Invalid date format",
  }),
  timeOfOccurrence: z.string().min(1, "Time of occurrence is required"),
  propertyInvolved: z.string().min(1, "Property details are required"),
  circumstancesOfLoss: z.string().min(1, "Circumstances of loss are required"),
  estimateOfLoss: z.string().min(1, "Estimate of loss is required"),

  // Property Description Table
  propertyItems: z.array(propertyItemSchema),

  // Additional Questions
  isSoleOwner: z.enum(["true", "false"], {
    required_error: "Please specify if you are the sole owner",
  }),
  hasHirePurchaseAgreement: z.enum(["true", "false"], {
    required_error: "Please specify if there are hire purchase agreements",
  }),
  hireCompanyName: z.string().optional(),
  hireCompanyAddress: z.string().optional(),
  hasRecoverySteps: z.enum(["true", "false"], {
    required_error: "Please specify if steps have been taken to recover property",
  }),
  recoveryStepsDetails: z.string().optional(),
  hasOtherInsurance: z.enum(["true", "false"], {
    required_error: "Please specify if there is other insurance",
  }),
  otherInsuranceDetails: z.string().optional(),
  hasPreviousLoss: z.enum(["true", "false"], {
    required_error: "Please specify if there was previous loss",
  }),
  propertyValueAtLoss: z.string().min(1, "Property value at loss is required"),
  hasOtherInsuranceCover: z.enum(["true", "false"], {
    required_error: "Please specify if there was other insurance cover",
  }),
  hasPreviousClaim: z.enum(["true", "false"], {
    required_error: "Please specify if there was a previous claim",
  }),
  previousClaimDetails: z.string().optional(),
  hasPreviousBurglaryLoss: z.enum(["true", "false"], {
    required_error: "Please specify if there was previous burglary loss",
  }),
  hasPreviousBurglaryAllRiskClaim: z.enum(["true", "false"], {
    required_error: "Please specify if there was previous burglary/all risk claim",
  }),
  previousBurglaryDetails: z.string().optional(),
  hasInformedPolice: z.enum(["true", "false"], {
    required_error: "Please specify if police were informed",
  }),
  policeStationName: z.string().optional(),
  policeStationAddress: z.string().optional(),
}).refine(
  (data) => {
    if (data.hasHirePurchaseAgreement === "true") {
      return !!data.hireCompanyName && !!data.hireCompanyAddress;
    }
    return true;
  },
  {
    message: "Hire company name and address are required",
    path: ["hireCompanyName"],
  }
).refine(
  (data) => {
    if (data.hasRecoverySteps === "true") {
      return !!data.recoveryStepsDetails;
    }
    return true;
  },
  {
    message: "Recovery steps details are required",
    path: ["recoveryStepsDetails"],
  }
).refine(
  (data) => {
    if (data.hasOtherInsurance === "true") {
      return !!data.otherInsuranceDetails;
    }
    return true;
  },
  {
    message: "Other insurance details are required",
    path: ["otherInsuranceDetails"],
  }
).refine(
  (data) => {
    if (data.hasPreviousClaim === "true") {
      return !!data.previousClaimDetails;
    }
    return true;
  },
  {
    message: "Previous claim details are required",
    path: ["previousClaimDetails"],
  }
).refine(
  (data) => {
    if (data.hasPreviousBurglaryAllRiskClaim === "true") {
      return !!data.previousBurglaryDetails;
    }
    return true;
  },
  {
    message: "Previous burglary details are required",
    path: ["previousBurglaryDetails"],
  }
).refine(
  (data) => {
    if (data.hasInformedPolice === "true") {
      return !!data.policeStationName && !!data.policeStationAddress;
    }
    return true;
  },
  {
    message: "Police station name and address are required",
    path: ["policeStationName"],
  }
);

export type Schema = z.infer<typeof schema>;

export const defaultValues: Schema = {
  typeOfClaim: "",
  locationOfClaim: "",
  dateOfOccurrence: new Date(),
  timeOfOccurrence: "",
  propertyInvolved: "",
  circumstancesOfLoss: "",
  estimateOfLoss: "",
  propertyItems: [],
  isSoleOwner: "false",
  hasHirePurchaseAgreement: "false",
  hireCompanyName: "",
  hireCompanyAddress: "",
  hasRecoverySteps: "false",
  recoveryStepsDetails: "",
  hasOtherInsurance: "false",
  otherInsuranceDetails: "",
  hasPreviousLoss: "false",
  propertyValueAtLoss: "",
  hasOtherInsuranceCover: "false",
  hasPreviousClaim: "false",
  previousClaimDetails: "",
  hasPreviousBurglaryLoss: "false",
  hasPreviousBurglaryAllRiskClaim: "false",
  previousBurglaryDetails: "",
  hasInformedPolice: "false",
  policeStationName: "",
  policeStationAddress: "",
}; 