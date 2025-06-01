import { z } from "zod";
import { d } from "@/utils/professionalIndemnityDictionary/dictionary";

const schema = z.object({
  policyNumber: z.string().min(1, d.invalidFormData),
  periodOfCoverFrom: z.date(),
  periodOfCoverTo: z.date(),
  nameOfInsured: z.string().min(1, d.invalidFormData),
  companyName: z.string().optional(),
  title: z.enum(d.titleOptions as [string, ...string[]]),
  dateOfBirth: z.date(),
  gender: z.enum(d.genderOptions as [string, ...string[]]),
  address: z.string().min(1, d.invalidFormData),
  phone: z.string().min(1, d.invalidFormData),
  email: z.string().email(d.invalidFormData),
  alertPreference: z.enum(d.alertPreferenceOptions as [string, ...string[]]),
});

type Schema = z.infer<typeof schema>;

const defaultValues: Schema = {
  policyNumber: "",
  periodOfCoverFrom: new Date(),
  periodOfCoverTo: new Date(),
  nameOfInsured: "",
  companyName: "",
  title: "Mr",
  dateOfBirth: new Date(),
  gender: "Male",
  address: "",
  phone: "",
  email: "",
  alertPreference: "Email",
};

export { schema, type Schema, defaultValues }; 