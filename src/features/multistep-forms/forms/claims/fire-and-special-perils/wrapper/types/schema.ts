import { schema as insuredDetailsSchema } from "../../insured-details/types/schema";
import { schema as lossDetailsSchema } from "../../loss-details/types/schema";
import { schema as reviewSchema } from "../../review/types/schema";
import { z } from "zod";
import { d } from "@/utils/fireDictionary/dictionary";

export const schema = z.object({
  // Insured Details
  policyNumber: z.string().min(1, "Policy number is required"),
  periodOfCoverFrom: z.date(),
  periodOfCoverTo: z.date(),
  insuredName: z.string().min(1, "Name of insured is required"),
  companyName: z.string().optional(),
  title: z.string().min(1, "Title is required"),
  dateOfBirth: z.date(),
  gender: z.string().min(1, "Gender is required"),
  address: z.string().min(1, "Address is required"),
  phone: z.string().min(1, "Phone number is required"),
  email: z.string().email("Invalid email address"),
  alertPreference: z.enum(["Email", "SMS", "Both"]),

  // Loss Details
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

  // Review
  termsAndConditionsAccepted: z.boolean().refine((val) => val === true, {
    message: `${d.youMustAcceptTermsAndConditions}.`,
  }),
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