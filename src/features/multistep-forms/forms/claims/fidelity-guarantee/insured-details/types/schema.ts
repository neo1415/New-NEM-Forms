import { z } from "zod";

const schema = z.object({
  policyNumber: z.string().min(1, "Policy number is required"),
  periodOfCoverFrom: z.date(),
  periodOfCoverTo: z.date(),
  companyName: z.string().min(1, "Company name is required"),
  address: z.string().min(1, "Address is required"),
  phone: z.string().min(1, "Phone number is required"),
  email: z.string().email("Invalid email address"),
  alertPreference: z.enum(["Email", "SMS", "Both"]),
});

type Schema = z.infer<typeof schema>;

const defaultValues: Schema = {
  policyNumber: "",
  periodOfCoverFrom: new Date(),
  periodOfCoverTo: new Date(),
  companyName: "",
  address: "",
  phone: "",
  email: "",
  alertPreference: "Email",
};

export { schema, type Schema, defaultValues }; 