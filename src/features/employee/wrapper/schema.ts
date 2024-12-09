import { z } from "zod";
import validator from "validator";

const allowedFileTypes = z.enum(["application/pdf", "image/jpeg", "image/png"]);

const referencesSchema = z.object({
  name: z.string().min(1),
  relationship: z.string().min(1),
  contactInformation: z
    .string()
    .min(1)
    .refine((val) => validator.isEmail(val) || validator.isMobilePhone(val)),
});

const schema = z
  .object({
    references: z.array(referencesSchema).length(3),
    portfolioFiles: z
      .array(z.custom<File>())
      .refine((files) =>
        files.every((file) => allowedFileTypes.safeParse(file.type).success)
      )
      .refine((files) => files.length <= 3)
      .refine((files) => files.every((file) => file.size <= 5 * 1024 * 1024)),
    resumeFile: z
      .custom<File>()
      .refine((file) => file.type === "application/pdf")
      .refine((file) => file.size <= 5 * 1024 * 1024),
    portfolioLink: z.string().url().optional(),
    availabilityToStart: z.coerce.date().refine((date) => date >= new Date()),
    salaryExpectations: z.number().min(30000).max(1000000),

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
