import { schema as insuredDetailsSchema } from "../../insured-details/types/schema";
import { schema as lossDetailsSchema } from "../../loss-details/types/schema";
import { schema as reviewSchema } from "../../review/types/schema";
import { z } from "zod";

const schema = insuredDetailsSchema
  .and(lossDetailsSchema)
  .and(reviewSchema);

type Schema = z.infer<typeof schema>;

export { schema, type Schema }; 