import { z } from "zod";

export const schema = z.object({
  incorporation: z.any(),
  identification: z.any(),
  identification2: z.any(),
  NAICOMForm: z.any(),
});

export type Schema = z.infer<typeof schema>;

export const defaultValues: Schema = {
  incorporation: null,
  identification: null,
  identification2: null,
  NAICOMForm: null,
}; 