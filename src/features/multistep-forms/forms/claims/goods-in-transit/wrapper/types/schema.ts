import { schema as insuredDetailsSchema } from "../../insured-details/types/schema";
import { schema as detailsOfLossSchema } from "../../details-of-loss/types/schema";
import { schema as reviewSchema } from "../../review/types/schema";
import { z } from "zod";

const schema = insuredDetailsSchema
  .and(detailsOfLossSchema)
  .and(reviewSchema);

type Schema = z.infer<typeof schema>;

export { schema, type Schema }; 