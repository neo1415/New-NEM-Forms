import { z } from "zod";
import { d } from "@/utils/professionalIndemnityDictionary/dictionary";

export const schema = z.object({
  responseComments: z.string({
    required_error: d.invalidFormData,
  }),
  liabilityEstimate: z.string({
    required_error: d.invalidFormData,
  }),
  hasAdditionalDetails: z.boolean({
    required_error: d.invalidFormData,
  }),
  additionalDetails: z.string().optional(),
  lawyerDetails: z.string({
    required_error: d.invalidFormData,
  }),
});

export type Schema = z.infer<typeof schema>;

export const defaultValues: Schema = {
  responseComments: "",
  liabilityEstimate: "",
  hasAdditionalDetails: false,
  additionalDetails: "",
  lawyerDetails: "",
}; 