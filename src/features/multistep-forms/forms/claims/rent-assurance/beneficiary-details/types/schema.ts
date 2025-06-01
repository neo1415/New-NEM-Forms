import { z } from "zod";
import { d } from "@/utils/rentAssuranceDictionary/dictionary";

export const schema = z.object({
  beneficiaryName: z.string({
    required_error: d.invalidFormData,
  }),
  beneficiaryAge: z.string({
    required_error: d.invalidFormData,
  }),
  beneficiaryAddress: z.string({
    required_error: d.invalidFormData,
  }),
  beneficiaryEmail: z.string({
    required_error: d.invalidFormData,
  }).email("Invalid email address"),
  beneficiaryPhone: z.string({
    required_error: d.invalidFormData,
  }),
  beneficiaryOccupation: z.string({
    required_error: d.invalidFormData,
  }),
});

export type Schema = z.infer<typeof schema>;

export const defaultValues: Schema = {
  beneficiaryName: "",
  beneficiaryAge: "",
  beneficiaryAddress: "",
  beneficiaryEmail: "",
  beneficiaryPhone: "",
  beneficiaryOccupation: "",
}; 