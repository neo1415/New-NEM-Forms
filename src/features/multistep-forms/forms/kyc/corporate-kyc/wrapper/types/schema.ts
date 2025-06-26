import { schema as companyDetailsSchema } from "@/features/multistep-forms/forms/kyc/corporate-kyc/company-details/types/schema";
import { schema as directorsInfoSchema } from "@/features/multistep-forms/forms/kyc/corporate-kyc/directors-info/types/schema";
import { schema as financialInfoSchema } from "@/features/multistep-forms/forms/kyc/corporate-kyc/financial-info/types/schema";
import { schema as fileUploadsSchema } from "@/features/multistep-forms/forms/kyc/corporate-kyc/file-uploads/types/schema";
import { schema as reviewSchema } from "@/features/multistep-forms/forms/kyc/corporate-kyc/review/types/schema";
import { z } from "zod";

const schema = companyDetailsSchema
  .and(directorsInfoSchema)
  .and(financialInfoSchema)
  .and(fileUploadsSchema)
  .and(reviewSchema);

type Schema = z.infer<typeof schema>;

export { schema, type Schema }; 