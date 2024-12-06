import { z } from "zod";

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

const CertificationsEnum = z.enum(["cpa", "pmp", "it", "other"]);

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
    .preprocess((arg) => {
      if (typeof arg === "string" || arg instanceof Date) {
        return new Date(arg);
      }
    }, z.date())
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
  {add from hereeeeeee to history page}
  educationalInstitutions: z
    .array(z.lazy(() => educationalInstitutionsSchema))
    .min(1, { message: "At least one educational institution is required." }),
  certificationsAndLicenses: z.array(CertificationsEnum).min(1, {
    message: "At least one certification or license is required.",
  }),
  otherCertificationsAndLicenses: z
    .string()
    .min(1, { message: "Please specify your certifications or licenses." })
    .optional(),
});

type Schema = z.infer<typeof schema>;

const defaultValues: Schema = {
  currentEmploymentStatus: "unemployed",
  certificationsAndLicenses: [],
  educationalInstitutions: [],
  highestDegreeObtained: "associateDegree",
  previousEmployers: [],
  reasonsForLeavingPreviousJobs: [],
  otherCertificationsAndLicenses: "",
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
