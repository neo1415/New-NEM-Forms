import { z } from "zod";
import { d } from "@/utils/professionalIndemnityDictionary/dictionary";

const allowedTypes = [
  "application/pdf",
  "image/jpeg",
  "image/png",
  "image/jpg",
];
const maxSize = 5 * 1024 * 1024; // 5MB

export const schema = z.object({
  contractPurpose: z.string({
    required_error: d.invalidFormData,
  }),
  isContractWritten: z.boolean({
    required_error: d.invalidFormData,
  }),
  contractEvidenceFile: z
    .any()
    .refine(
      (file) =>
        file == null ||
        file instanceof File === false ||
        (allowedTypes.includes(file.type) && file.size <= maxSize),
      {
        message: "Only PDF, JPG, JPEG, or PNG files up to 5MB are allowed.",
        path: ["contractEvidenceFile"],
      }
    )
    .optional(),
  contractTermsDetails: z.string().optional(),
  workPerformanceDate: z.date({
    required_error: d.invalidFormData,
  }),
  responsiblePerson: z.string({
    required_error: d.invalidFormData,
  }),
  responsiblePersonDetails: z.string({
    required_error: d.invalidFormData,
  }),
})
.superRefine((data, ctx) => {
  if (data.isContractWritten) {
    if (!data.contractEvidenceFile) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "File upload is required when contract is evidenced in writing.",
        path: ["contractEvidenceFile"],
      });
    }
  } else {
    if (!data.contractTermsDetails) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: d.contractTermsDetails,
        path: ["contractTermsDetails"],
      });
    }
  }
});

export type Schema = z.infer<typeof schema>;

export const defaultValues: Schema = {
  contractPurpose: "",
  isContractWritten: false,
  contractEvidenceFile: undefined,
  contractTermsDetails: "",
  workPerformanceDate: new Date(),
  responsiblePerson: "",
  responsiblePersonDetails: "",
}; 