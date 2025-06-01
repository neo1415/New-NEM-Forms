import { z } from "zod";
import { schema as insuredDetailsSchema } from "../../insured-details/types/schema";
import { schema as detailsOfLossSchema } from "../../details-of-loss/types/schema";
import { baseSchema as particularsOfClaimantSchema } from "../../particulars-of-claimant/types/schema";
import { schema as reviewSchema } from "../../review/types/schema";

export const schema = z.object({
  ...insuredDetailsSchema.shape,
  ...detailsOfLossSchema.shape,
  ...particularsOfClaimantSchema.shape,
  ...reviewSchema.shape,
}); 