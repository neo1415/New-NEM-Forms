import { z } from "zod";
import { d } from "@/utils/corporateCDDDictionary/dictionary";

export const schema = z.object({
  incorporation: z.any(),
  identification: z.any(),
  identification2: z.any(),
  formCO7: z.any(),
  VAT: z.any(),
  tax: z.any(),
  NAICOMForm: z.any(),
});

export type Schema = z.infer<typeof schema>;

export const defaultValues: Schema = {
  incorporation: null,
  identification: null,
  identification2: null,
  formCO7: null,
  VAT: null,
  tax: null,
  NAICOMForm: null,
}; 