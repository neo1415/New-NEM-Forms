import { z } from "zod";

export const schema = z.object({
  policyNumber: z.string().min(1, "Policy number is required"),
  periodOfCoverFrom: z.date({
    required_error: "Period of cover from is required",
    invalid_type_error: "Invalid date format",
  }),
  periodOfCoverTo: z.date({
    required_error: "Period of cover to is required",
    invalid_type_error: "Invalid date format",
  }),
  nameOfInsured: z.string().min(1, "Name of insured is required"),
  address: z.string().min(1, "Address is required"),
  phone: z.string().min(1, "Phone number is required"),
  email: z.string().email("Invalid email address"),
  alertPreference: z.enum(["Email", "SMS", "Both"]),
});

export type Schema = z.infer<typeof schema>;

export const defaultValues: Schema = {
  policyNumber: "",
  periodOfCoverFrom: new Date(),
  periodOfCoverTo: new Date(),
  nameOfInsured: "",
  address: "",
  phone: "",
  email: "",
  alertPreference: "Email",
}; 