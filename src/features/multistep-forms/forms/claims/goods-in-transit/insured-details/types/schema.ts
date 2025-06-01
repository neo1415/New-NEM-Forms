import { z } from "zod";
import validator from "validator";

export const schema = z.object({
  policyNumber: z.string().min(1, "Policy number is required."),
  periodOfCoverFrom: z.coerce.date({
    errorMap: () => ({ message: "Start date is required." }),
  }),
  periodOfCoverTo: z.coerce.date({
    errorMap: () => ({ message: "End date is required." }),
  }),
  companyName: z.string().min(1, "Company name is required."),
  address: z.string().min(1, "Address is required."),
  phone: z
    .string()
    .min(1, "Phone number is required.")
    .refine((val) => validator.isMobilePhone(val, "en-NG"), {
      message: "Enter a valid Nigerian phone number.",
    }),
  email: z.string().email("Invalid email address."),
  businessType: z.string().min(1, "Business type is required."),
  alertPreference: z.enum(["Email", "SMS", "Both"], {
    errorMap: () => ({ message: "Select an alert preference." }),
  }),
});

export type Schema = z.infer<typeof schema>;

export const defaultValues: Schema = {
  policyNumber: "",
  periodOfCoverFrom: new Date(),
  periodOfCoverTo: new Date(),
  companyName: "",
  address: "",
  phone: "",
  email: "",
  businessType: "",
  alertPreference: "Email",
}; 