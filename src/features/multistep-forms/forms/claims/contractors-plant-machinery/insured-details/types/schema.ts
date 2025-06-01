import { z } from "zod";

export const schema = z.object({
  policyNumber: z.string().min(1, "Policy number is required"),
  periodOfCoverFrom: z.date({
    required_error: "Start date is required",
    invalid_type_error: "Invalid date format",
  }),
  periodOfCoverTo: z.date({
    required_error: "End date is required",
    invalid_type_error: "Invalid date format",
  }),
  insuredName: z.string().min(1, "Name is required"),
  companyName: z.string().optional(),
  title: z.string().min(1, "Title is required"),
  dateOfBirth: z.date({
    required_error: "Date of birth is required",
    invalid_type_error: "Invalid date format",
  }),
  gender: z.enum(["male", "female", "other"]),
  address: z.string().min(1, "Address is required"),
  phone: z.string().min(1, "Phone number is required"),
  email: z.string().email("Invalid email address"),
  alertPreference: z.enum(["email", "sms", "both"]),
});

export type Schema = z.infer<typeof schema>;

export const defaultValues: Schema = {
  policyNumber: "",
  periodOfCoverFrom: new Date(),
  periodOfCoverTo: new Date(),
  insuredName: "",
  companyName: "",
  title: "",
  dateOfBirth: new Date(),
  gender: "male",
  address: "",
  phone: "",
  email: "",
  alertPreference: "both",
}; 