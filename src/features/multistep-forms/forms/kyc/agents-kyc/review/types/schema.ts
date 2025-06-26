import { z } from "zod";
import { d } from "@/utils/agentsKYCDictionary/dictionary";

const schema = z.object({
  termsAndConditionsAccepted: z.boolean().refine((val) => val === true, {
    message: `${d.iAcceptTermsAndConditions}.`,
  }),
  signature: z.string().min(1, "Signature is required."),
  signatureDate: z.coerce.date({
    errorMap: () => ({ message: "Signature date is required." }),
  }),
});

type Schema = z.infer<typeof schema>;

const defaultValues: Schema = {
  termsAndConditionsAccepted: false,
  signature: "",
  signatureDate: new Date(),
}; 

export { schema, type Schema, defaultValues }; 