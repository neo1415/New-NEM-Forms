import { z } from "zod";
import { d } from "@/utils/rentAssuranceDictionary/dictionary";

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB
const ACCEPTED_FILE_TYPES = ["application/pdf", "image/jpeg", "image/png", "image/jpg"];

export const schema = z.object({
  policyNumber: z.string().min(1, "Required"),
  defaultPeriodFrom: z.date(),
  defaultPeriodTo: z.date(),
  amountDefaulted: z.string().min(1, "Required"),
  rentDueDate: z.date(),
  rentPaymentFrequency: z.string().min(1, "Required"),
  inabilityReason: z.string().min(1, "Required"),
  rentAgreement: z
    .any()
    .refine(
      (file) => !file || (file instanceof File && ACCEPTED_FILE_TYPES.includes(file.type)),
      "Only PDF, JPG, JPEG, or PNG files are allowed."
    )
    .refine(
      (file) => !file || (file instanceof File && file.size <= MAX_FILE_SIZE),
      "Maximum file size is 5MB."
    ),
  demandNote: z
    .any()
    .refine(
      (file) => !file || (file instanceof File && ACCEPTED_FILE_TYPES.includes(file.type)),
      "Only PDF, JPG, JPEG, or PNG files are allowed."
    )
    .refine(
      (file) => !file || (file instanceof File && file.size <= MAX_FILE_SIZE),
      "Maximum file size is 5MB."
    ),
  quitNotice: z
    .any()
    .refine(
      (file) => !file || (file instanceof File && ACCEPTED_FILE_TYPES.includes(file.type)),
      "Only PDF, JPG, JPEG, or PNG files are allowed."
    )
    .refine(
      (file) => !file || (file instanceof File && file.size <= MAX_FILE_SIZE),
      "Maximum file size is 5MB."
    ),
});

export const defaultValues = {
  policyNumber: "",
  defaultPeriodFrom: undefined,
  defaultPeriodTo: undefined,
  amountDefaulted: "",
  rentDueDate: undefined,
  rentPaymentFrequency: "",
  inabilityReason: "",
  rentAgreement: undefined,
  demandNote: undefined,
  quitNotice: undefined,
};

export type Schema = z.infer<typeof schema>; 