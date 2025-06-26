import { z } from "zod";

const schema = z.object({
  signature: z.string().min(1, "Signature is required"),
  signatureDate: z.date(),
  termsAndConditionsAccepted: z.boolean().refine((val) => val === true, {
    message: "You must accept the terms and conditions",
  }),
});

type Schema = z.infer<typeof schema>;

const defaultValues: Schema = {
  signature: "",
  signatureDate: new Date(),
  termsAndConditionsAccepted: false,
};

export { schema, type Schema, defaultValues }; 