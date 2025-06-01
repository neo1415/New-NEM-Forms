import { z } from "zod";
import { d } from "@/utils/moneyInsuranceDictionary/dictionary";

export const schema = z.object({
  policyNumber: z.string().min(1, "Policy number is required"),
  companyName: z.string().min(1, "Company name is required"),
  companyAddress: z.string().min(1, "Company address is required"),
  contactPerson: z.string().min(1, "Contact person is required"),
  contactEmail: z.string().email("Invalid email address"),
  contactPhone: z.string().min(1, "Contact phone is required"),
  preferredContactMethod: z.enum(d.preferredContactMethodOptions),
});

export type Schema = z.infer<typeof schema>;

export const defaultValues: Schema = {
  policyNumber: "",
  companyName: "",
  companyAddress: "",
  contactPerson: "",
  contactEmail: "",
  contactPhone: "",
  preferredContactMethod: "Email",
}; 