import { z } from "zod";
import { d } from "@/utils/rentAssuranceDictionary/dictionary";

export const schema = z.object({
  termsAndConditionsAccepted: z.boolean().refine((val) => val === true, {
    message: `${d.invalidTermsAndConditions}.`,
  }),
});

export const defaultValues = {
  termsAndConditionsAccepted: false,
};

export type Schema = z.infer<typeof schema>; 