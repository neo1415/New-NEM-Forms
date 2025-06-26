import { schema as personalInfoSchema } from "@/features/multistep-forms/forms/kyc/agents-kyc/personal-info/types/schema";
import { schema as additionalInfoSchema } from "@/features/multistep-forms/forms/kyc/agents-kyc/additional-info/types/schema";
import { schema as financialInfoSchema } from "@/features/multistep-forms/forms/kyc/agents-kyc/financial-info/types/schema";
import { z } from "zod";

const schema = personalInfoSchema
  .and(additionalInfoSchema)
  .and(financialInfoSchema);

type Schema = z.infer<typeof schema>;

export { schema, type Schema }; 