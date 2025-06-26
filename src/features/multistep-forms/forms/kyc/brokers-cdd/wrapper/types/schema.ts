import { z } from "zod";

export const schema = z.object({
  termsAndConditionsAccepted: z.boolean().refine((val) => val === true, {
    message: "You must accept the terms and conditions to proceed.",
  }),
});

export type Schema = z.infer<typeof schema>;

export const defaultValues: Schema = {
  termsAndConditionsAccepted: false,
}; 