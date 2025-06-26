import { schema as personalInfoSchema } from "@/features/multistep-forms/forms/kyc/individual-kyc/personal-info/types/schema";
import { schema as financialInfoSchema } from "@/features/multistep-forms/forms/kyc/individual-kyc/financial-info/types/schema";
import { schema as fileUploadsSchema } from "@/features/multistep-forms/forms/kyc/individual-kyc/file-uploads/types/schema";
import { schema as reviewSchema } from "@/features/multistep-forms/forms/kyc/individual-kyc/review/types/schema";
import { z } from "zod";

const schema = personalInfoSchema
  .and(financialInfoSchema)
  .and(fileUploadsSchema)
  .and(reviewSchema);

type Schema = z.infer<typeof schema>;

export { schema, type Schema }; 