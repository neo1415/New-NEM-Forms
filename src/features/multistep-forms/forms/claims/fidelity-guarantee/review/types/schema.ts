import { z } from "zod";
import { d } from "@/utils/fidelityDictionary/dictionary";

const schema = z.object({
  termsAndConditionsAccepted: z.boolean().refine((val) => val === true, {
    message: `${d.youMustAcceptTermsAndConditions}.`,
  }),
});

type Schema = z.infer<typeof schema>;

const defaultValues: Schema = {
  termsAndConditionsAccepted: false,
};

export { schema, type Schema, defaultValues }; 