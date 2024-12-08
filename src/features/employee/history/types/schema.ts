import { z } from "zod";

enum EmploymentStatus {
  Apple,
  Banana,
}
find best way to create enums

const EmploymentStatusEnum = z.enum([
  "employedFullTime",
  "employedHalfTime",
  "unemployed",
  "student",
  "other",
]);

const ReasonsForLeavingEnum = z.enum([
  "careerAdvancement",
  "relocation",
  "personalReasons",
  "other",
]);

const HighestDegreeEnum = z.enum([
  "highSchoolDiploma",
  "associateDegree",
  "bachelorDegree",
  "masterDegree",
  "doctorate",
]);

const previousEmployerSchema = z.object({
  name: z.string().min(1, { message: "Employer name is required." }),
  jobTitle: z.string().min(1, { message: "Job title is required." }),
  responsibilities: z
    .string()
    .max(1000, { message: "Responsibilities cannot exceed 1000 characters." }),
});

const educationalInstitutionsSchema = z.object({
  institutionName: z
    .string()
    .min(1, { message: "Institution name is required." }),
  degree: z.string().min(1, { message: "Degree is required." }),
  fieldOfStudy: z.string().min(1, { message: "Field of study is required." }),
  graduationYear: z
    .date()
    .refine(
      (date) =>
        date.getFullYear() >= 1900 &&
        date.getFullYear() <= new Date().getFullYear(),
      { message: "Graduation year must be a valid year." }
    ),
});

const schema = z.object({
  // page-2
  currentEmploymentStatus: EmploymentStatusEnum,
  otherEmploymentStatus: z
    .string()
    .min(1, { message: "Please specify your employment status." })
    .optional(),
  previousEmployers: z
    .array(z.lazy(() => previousEmployerSchema))
    .min(1, { message: "At least one previous employer is required." }),
  reasonsForLeavingPreviousJobs: z.array(ReasonsForLeavingEnum).min(1, {
    message: "At least one reason for leaving previous jobs is required.",
  }),
  otherReasonsForLeaving: z
    .string()
    .min(1, { message: "Please specify your reason for leaving." })
    .optional(),
  highestDegreeObtained: HighestDegreeEnum,

  educationalInstitutions: z
    .array(educationalInstitutionsSchema)
    .min(1, { message: "At least one educational institution is required." }),
});

type Schema = z.infer<typeof schema>;

const defaultValues: Schema = {
  currentEmploymentStatus: "unemployed",
  educationalInstitutions: [],
  highestDegreeObtained: "associateDegree",
  previousEmployers: [],
  reasonsForLeavingPreviousJobs: [],
  otherEmploymentStatus: "",
  otherReasonsForLeaving: "",
};

export {
  schema,
  type Schema,
  defaultValues,
  EmploymentStatusEnum,
  ReasonsForLeavingEnum,
  HighestDegreeEnum,
};
