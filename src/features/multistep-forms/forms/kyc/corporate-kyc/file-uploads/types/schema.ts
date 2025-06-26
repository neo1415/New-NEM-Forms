import { z } from "zod";

export const schema = z.object({
  verificationDocument: z.string().min(1, "Verification Document is required"),

});

export type Schema = z.infer<typeof schema>;

export const defaultValues: Schema = {
  verificationDocument: "",
}; 