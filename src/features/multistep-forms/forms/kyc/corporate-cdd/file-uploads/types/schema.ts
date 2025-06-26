import { z } from "zod";

export const schema = z.object({
  cacCertificate: z.any().refine(file => file, "CAC Certificate is required"),
  meansOfIdentification: z.any().refine(file => file, "Means of Identification is required"),
});

export type Schema = z.infer<typeof schema>;

export const defaultValues: Schema = {
  cacCertificate: null,
  meansOfIdentification: null,
}; 