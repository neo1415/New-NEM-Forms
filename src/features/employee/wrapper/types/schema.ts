import { additionalInfoSchema } from "@/features/employee/additional-info/types/schema";
import { historySchema } from "@/features/employee/history/types/schema";
import { personalInfoSchema } from "@/features/employee/personal-info/types/schema";
import { reviewSchema } from "@/features/employee/review/types/schema";
import { skillsSchema } from "@/features/employee/skills/types/schema";
import { z } from "zod";

const schema = personalInfoSchema
  .and(skillsSchema)
  .and(historySchema)
  .and(reviewSchema)
  .and(additionalInfoSchema);

type Schema = z.infer<typeof schema>;

export { schema, type Schema };
