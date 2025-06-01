import { d } from "@/utils/motorDictionary/dictionary";
import { z } from "zod";

const schema = z.object({
  termsAndConditionsAccepted: z.boolean().refine((val) => val === true, {
    message: `${d.youMustAcceptTermsAndConditions}.`,
  }),
});

type Schema = z.infer<typeof schema>;

const defaultValues: Schema = {
  termsAndConditionsAccepted: false,
};

export { defaultValues, schema as motorInsuranceReviewSchema, schema, type Schema };
