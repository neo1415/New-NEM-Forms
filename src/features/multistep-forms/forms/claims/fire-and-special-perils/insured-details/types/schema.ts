import { z } from "zod";

export const schema = z.object({
  policyNumber: z.string().min(1, "Policy number is required"),
  periodOfCoverFrom: z.date(),
  periodOfCoverTo: z.date(),
  insuredName: z.string().min(1, "Name of insured is required"),
  companyName: z.string().optional(),
  title: z.string().min(1, "Title is required"),
  dateOfBirth: z.date(),
  gender: z.string().min(1, "Gender is required"),
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
  insuredName: "",
  companyName: "",
  title: "",
  dateOfBirth: new Date(),
  gender: "",
  address: "",
  phone: "",
  email: "",
  alertPreference: "Email",
}; 