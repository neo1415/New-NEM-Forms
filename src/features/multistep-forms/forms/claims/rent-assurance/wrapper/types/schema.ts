import { schema as insuredDetailsSchema } from "../../insured-details/types/schema";
import { schema as claimInformationSchema } from "../../claim-information/types/schema";
import { schema as beneficiaryDetailsSchema } from "../../beneficiary-details/types/schema";
import { schema as declarationSchema } from "../../declaration/types/schema";
import { schema as reviewSchema } from "../../review/types/schema";
import { z } from "zod";

export const schema = insuredDetailsSchema
  .and(claimInformationSchema)
  .and(beneficiaryDetailsSchema)
  .and(declarationSchema)
  .and(reviewSchema);

export type Schema = z.infer<typeof schema>; 