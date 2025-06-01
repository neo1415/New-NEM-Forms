import { z } from "zod";
import { d } from "@/utils/rentAssuranceDictionary/dictionary";

export const schema = z.object({
  policyNumber: z.string({
    required_error: d.invalidFormData,
  }),
  periodOfCoverFrom: z.date({
    required_error: d.invalidFormData,
  }),
  periodOfCoverTo: z.date({
    required_error: d.invalidFormData,
  }),
  nameOfInsured: z.string({
    required_error: d.invalidFormData,
  }),
  address: z.string({
    required_error: d.invalidFormData,
  }),
  age: z.string({
    required_error: d.invalidFormData,
  }),
  email: z.string({
    required_error: d.invalidFormData,
  }).email("Invalid email address"),
  phone: z.string({
    required_error: d.invalidFormData,
  }),
  nameOfLandlord: z.string({
    required_error: d.invalidFormData,
  }),
  addressOfLandlord: z.string({
    required_error: d.invalidFormData,
  }),
  residencyDuration: z.date({
    required_error: d.invalidFormData,
  }),
});

export type Schema = z.infer<typeof schema>;

export const defaultValues: Schema = {
  policyNumber: "",
  periodOfCoverFrom: new Date(),
  periodOfCoverTo: new Date(),
  nameOfInsured: "",
  address: "",
  age: "",
  email: "",
  phone: "",
  nameOfLandlord: "",
  addressOfLandlord: "",
  residencyDuration: new Date(),
}; 