import { additionalInfoSchema } from "@/features/employee/additional-info/types/schema";
import { historySchema } from "@/features/employee/history/types/schema";
import { personalInfoSchema } from "@/features/employee/personal-info/types/schema";
import { reviewSchema } from "@/features/employee/review/types/schema";
import { skillsSchema } from "@/features/employee/skills/types/schema";

const employeeWrapperSchema = personalInfoSchema
  .and(skillsSchema)
  .and(historySchema)
  .and(reviewSchema)
  .and(additionalInfoSchema);

export { employeeWrapperSchema };
