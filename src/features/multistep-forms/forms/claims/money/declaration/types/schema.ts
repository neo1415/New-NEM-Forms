import { z } from "zod";

export const schema = z.object({
  declarationAccepted: z.boolean(),
  dataPrivacyAccepted: z.boolean(),
  signature: z.string().min(1, "Signature is required"),
  signatureDate: z.date(),
});

export type Schema = z.infer<typeof schema>;

export const defaultValues: Schema = {
  declarationAccepted: false,
  dataPrivacyAccepted: false,
  signature: "",
  signatureDate: new Date(),
}; 