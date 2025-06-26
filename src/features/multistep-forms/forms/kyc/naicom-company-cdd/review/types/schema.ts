import { z } from "zod";
import { d } from "@/utils/corporateCDDDictionary/dictionary";

export const schema = z.object({
  termsAndConditionsAccepted: z.boolean().refine((val) => val === true, {
    message: `${d.iAcceptTermsAndConditions}.`,
  }),
  signature: z.string().min(1, "Signature is required."),
  signatureDate: z.coerce.date({
    errorMap: () => ({ message: "Signature date is required." }),
  }),
});

export type Schema = z.infer<typeof schema>;

export const defaultValues: Schema = {
  termsAndConditionsAccepted: false,
  signature: "",
  signatureDate: new Date(),
}; 