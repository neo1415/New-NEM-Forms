import { d } from "@/utils/dictionary";
import { z } from "zod";

const allowedFileTypes = z.enum(["application/pdf", "image/jpeg", "image/png"]);

const schema = z.object({
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
    .refine((file) => file.size <= 5 * 1024 * 1024)
    .nullable(),
  termsAndConditionsAccepted: z.boolean().refine((val) => val === true, {
    message: `${d.youMustAcceptTermsAndConditions}.`,
  }),
});

type Schema = z.infer<typeof schema>;

const defaultValues: Schema = {
  portfolioFiles: [],
  resumeFile: null,
  termsAndConditionsAccepted: false,
};

export { defaultValues, schema, schema as reviewSchema, type Schema };
