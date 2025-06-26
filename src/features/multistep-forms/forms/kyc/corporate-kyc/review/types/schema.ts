import { z } from "zod";

export const schema = z.object({
  termsAndConditionsAccepted: z.boolean(),
  signature: z.string(),
  signatureDate: z.date(),
});

export type Schema = z.infer<typeof schema>;

export const defaultValues: Schema = {
  termsAndConditionsAccepted: false,
  signature: "",
  signatureDate: new Date(),
}; 