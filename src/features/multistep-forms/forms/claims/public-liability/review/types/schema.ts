import { z } from "zod";

export const schema = z.object({
  // dataPrivacyAccepted: z.boolean().refine((val) => val === true, {
  //   message: "You must accept the data privacy notice",
  // }),
  // declarationAccepted: z.boolean().refine((val) => val === true, {
  //   message: "You must accept the declaration",
  // }),
  // signature: z.string().min(1, "Signature is required"),
  // signatureDate: z.date({
  //   required_error: "Date is required",
  //   invalid_type_error: "Invalid date format",
  // }),
  termsAndConditionsAccepted: z.boolean().refine((val) => val === true, {
    message: "You must accept the terms and conditions",
  }),
});

export type Schema = z.infer<typeof schema>;

export const defaultValues: Schema = {
  // dataPrivacyAccepted: false,
  // declarationAccepted: false,
  // signature: "",
  // signatureDate: new Date(),
  termsAndConditionsAccepted: false,
}; 