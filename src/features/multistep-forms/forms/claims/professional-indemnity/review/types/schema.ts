import { z } from "zod";
import { d } from "@/utils/professionalIndemnityDictionary/dictionary";

export const schema = z.object({
  termsAndConditionsAccepted: z.boolean({
    required_error: d.invalidTermsAndConditions,
  }),
  signature: z.string({
    required_error: d.invalidSignature,
  }),
  signatureDate: z.date({
    required_error: d.invalidDate,
  }),
});

export type Schema = z.infer<typeof schema>;

export const defaultValues: Schema = {
  termsAndConditionsAccepted: false,
  signature: "",
  signatureDate: new Date(),
}; 