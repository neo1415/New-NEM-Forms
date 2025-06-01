import { z } from "zod";

export const schema = z.object({
  termsAndConditionsAccepted: z.boolean().refine((val) => val === true, {
    message: "You must accept the terms and conditions",
  }),
  signature: z.string().min(1, "Signature is required"),
  signatureDate: z.string().min(1, "Date is required"),
});

export type Schema = z.infer<typeof schema>;

export const defaultValues: Schema = {
  termsAndConditionsAccepted: false,
  signature: "",
  signatureDate: new Date().toISOString().split('T')[0],
}; 