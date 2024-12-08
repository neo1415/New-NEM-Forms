import { z } from "zod";
import validator from "validator";

const allowedFileTypes = z.enum(["application/pdf", "image/jpeg", "image/png"]);

const referencesSchema = z.object({
  name: z.string().min(1, { message: "Reference name is required." }),
  relationship: z.string().min(1, { message: "Relationship is required." }),
  company: z.string().min(1, { message: "Company name is required." }),
  contactInformation: z
    .string()
    .min(1, { message: "Contact information is required." })
    .refine((val) => validator.isEmail(val) || validator.isMobilePhone(val), {
      message: "Contact information must be a valid email or phone number.",
    }),
});

const schema = z
  .object({
    // Page 4: References and Additional Information
    references: z
      .array(z.lazy(() => referencesSchema))
      .length(3, { message: "Exactly three references are required." }),
    portfolioFiles: z
      .array(z.any())
      .refine(
        (files) =>
          files.every((file) => allowedFileTypes.safeParse(file.type).success),
        {
          message: "Files must be PDF or images (JPEG/PNG).",
        }
      )
      .refine((files) => files.length <= 3, {
        message: "Maximum 3 files allowed.",
      })
      .refine((files) => files.every((file) => file.size <= 5 * 1024 * 1024), {
        message: "Each file must be less than 5MB.",
      }),
    resumeFile: z
      .any()
      .refine((files) => files?.[0]?.type === "application/pdf", {
        message: "Resume must be a PDF.",
      })
      .refine((files) => files?.[0]?.size <= 5 * 1024 * 1024, {
        message: "Resume must be less than 5MB.",
      }),
    coverLetter: z
      .any()
      .optional()
      .refine((files) => !files || files?.[0]?.type === "application/pdf", {
        message: "Cover letter must be a PDF.",
      })
      .refine((files) => !files || files?.[0]?.size <= 5 * 1024 * 1024, {
        message: "Cover letter must be less than 5MB.",
      }),
    portfolioLink: z
      .string()
      .url({ message: "Portfolio link must be a valid URL." })
      .optional(),
    availabilityToStart: z
      .preprocess((arg) => {
        if (typeof arg === "string" || arg instanceof Date) {
          return new Date(arg);
        }
      }, z.date())
      .refine((date) => date >= new Date(), {
        message: "Availability to start cannot be in the past.",
      }),
    salaryExpectations: z
      .number({ invalid_type_error: "Salary expectations must be a number." })
      .min(30000, { message: "Salary expectations must be at least $30,000." })
      .max(1000000, {
        message: "Salary expectations must be less than $1,000,000.",
      }),

    // Page 5: Review and Submit
    termsAndConditionsAccepted: z.boolean().refine((val) => val === true, {
      message: "You must accept the terms and conditions.",
    }),
  })
  .superRefine((data, ctx) => {
    // Conditional Fields for Employment Status
    if (
      data.currentEmploymentStatus === "other" &&
      !data.otherEmploymentStatus
    ) {
      ctx.addIssue({
        path: ["otherEmploymentStatus"],
        message: "Please specify your employment status.",
        code: z.ZodIssueCode.custom,
      });
    }

    // Conditional Fields for Reasons for Leaving
    if (
      data.reasonsForLeavingPreviousJobs.includes("other") &&
      !data.otherReasonsForLeaving
    ) {
      ctx.addIssue({
        path: ["otherReasonsForLeaving"],
        message: "Please specify your reason for leaving.",
        code: z.ZodIssueCode.custom,
      });
    }

    // Conditional Fields for Certifications and Licenses
    if (
      data.certificationsAndLicenses.includes("other") &&
      !data.otherCertificationsAndLicenses
    ) {
      ctx.addIssue({
        path: ["otherCertificationsAndLicenses"],
        message: "Please specify your certifications or licenses.",
        code: z.ZodIssueCode.custom,
      });
    }

    // Conditional Fields for Core Competencies
    if (
      data.coreCompetencies.includes("other") &&
      !data.otherCoreCompetencies
    ) {
      ctx.addIssue({
        path: ["otherCoreCompetencies"],
        message: "Please specify your core competencies.",
        code: z.ZodIssueCode.custom,
      });
    }
  });

type Schema = z.infer<typeof schema>;

const defaultValues: Schema = {};

export { schema, type Schema, defaultValues };
