import { schema as insuredDetailsSchema } from "../../insured-details/types/schema";
import { schema as claimantDetailsSchema } from "../../claimant-details/types/schema";
import { schema as contractDetailsSchema } from "../../contract-details/types/schema";
import { schema as claimDetailsSchema } from "../../claim-details/types/schema";
import { schema as responseDetailsSchema } from "../../response-details/types/schema";
import { schema as reviewSchema } from "../../review/types/schema";
import { z } from "zod";

const schema = insuredDetailsSchema
  .and(claimantDetailsSchema)
  .and(contractDetailsSchema)
  .and(claimDetailsSchema)
  .and(responseDetailsSchema)
  .and(reviewSchema);

type Schema = z.infer<typeof schema>;

export { schema, type Schema }; 