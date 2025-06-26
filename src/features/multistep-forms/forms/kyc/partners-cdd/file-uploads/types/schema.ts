import { z } from "zod";

export const schema = z.object({
  incorporation: z.any().refine(file => file, "Certificate of Incorporation is required"),
  identification: z.any().refine(file => file, "Means of Identification for Director 1 is required"),
  identification2: z.any().optional(), // Optional second identification
  formCO7: z.any().refine(file => file, "CAC Status Report is required"),
  VAT: z.any().refine(file => file, "VAT Registration License is required"),
  tax: z.any().refine(file => file, "Tax Clearance Certificate is required")
});

export type Schema = z.infer<typeof schema>;

export const defaultValues: Schema = {
  incorporation: null,
  identification: null,
  identification2: null,
  formCO7: null,
  VAT: null,
  tax: null
}; 