import { z } from "zod";

export const schema = z.object({
  premisesAddress: z.string().min(1, "Premises address is required"),
  premisesTelephone: z.string().min(1, "Premises telephone is required"),
  occurrenceDate: z.date(),
  occurrenceTime: z.string().min(1, "Time of occurrence is required"),
  damageDescription: z.string().min(1, "Description of damage is required"),
  premisesPurposePolicy: z.boolean(),
  premisesPurposeAtTime: z.string().min(1, "Purpose of premises at time of occurrence is required"),
  riskElementIntroduced: z.boolean(),
  riskElementDetails: z.string().optional(),
  fireDiscoveryMeasures: z.string().min(1, "Fire discovery measures are required"),
  soleOwner: z.boolean(),
  otherOwnersDetails: z.string().optional(),
  otherInsuranceCover: z.boolean(),
  otherInsurersDetails: z.string().optional(),
  premisesContentValue: z.string().min(1, "Premises content value is required"),
  previousClaims: z.boolean(),
  previousClaimsDetails: z.string().optional(),
}).refine(
  (data) => data.riskElementIntroduced === false || data.riskElementDetails?.length,
  {
    path: ["riskElementDetails"],
    message: "Please provide details if risk element was introduced.",
  }
).refine(
  (data) => data.soleOwner === true || data.otherOwnersDetails?.length,
  {
    path: ["otherOwnersDetails"],
    message: "Please provide details if not sole owner.",
  }
).refine(
  (data) => data.otherInsuranceCover === false || data.otherInsurersDetails?.length,
  {
    path: ["otherInsurersDetails"],
    message: "Please provide details if other insurance covers exist.",
  }
).refine(
  (data) => data.previousClaims === false || data.previousClaimsDetails?.length,
  {
    path: ["previousClaimsDetails"],
    message: "Please provide details of previous claims.",
  }
);

export type Schema = z.infer<typeof schema>;

export const defaultValues: Schema = {
  premisesAddress: "",
  premisesTelephone: "",
  occurrenceDate: new Date(),
  occurrenceTime: "",
  damageDescription: "",
  premisesPurposePolicy: false,
  premisesPurposeAtTime: "",
  riskElementIntroduced: false,
  riskElementDetails: "",
  fireDiscoveryMeasures: "",
  soleOwner: false,
  otherOwnersDetails: "",
  otherInsuranceCover: false,
  otherInsurersDetails: "",
  premisesContentValue: "",
  previousClaims: false,
  previousClaimsDetails: "",
}; 