import { schema as companyInfoSchema } from "../../company-info/types/schema";
import { schema as directorsInfoSchema } from "../../directors-info/types/schema";
import { schema as accountDetailsSchema } from "../../account-details/types/schema";
import { schema as fileUploadsSchema } from "../../file-uploads/types/schema";
import { schema as reviewSchema } from "../../review/types/schema";
import { z } from "zod";

export const schema = companyInfoSchema
  .and(directorsInfoSchema)
  .and(accountDetailsSchema)
  .and(fileUploadsSchema)
  .and(reviewSchema);

export type Schema = z.infer<typeof schema>; 