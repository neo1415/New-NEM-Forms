import { z } from "zod";

const baseSchema = z.object({
  claimantName: z.string().min(1, "Name of claimant is required"),
  claimFromWhom: z.string().min(1, "From whom is required"),
  claimWhen: z.date({
    required_error: "Date is required",
    invalid_type_error: "Invalid date format",
  }),
  claimInWhatForm: z.string().min(1, "Form of claim is required"),
  isClaimInWriting: z.boolean(),
  claimWrittenForm: z.instanceof(File).optional(),
});

export const schema = baseSchema.refine(
  (data) => data.isClaimInWriting === false || data.claimWrittenForm,
  {
    path: ["claimWrittenForm"],
    message: "Please upload the written claim form",
  }
);

export type Schema = z.infer<typeof schema>;

export const defaultValues: Schema = {
  claimantName: "",
  claimFromWhom: "",
  claimWhen: new Date(),
  claimInWhatForm: "",
  isClaimInWriting: false,
  claimWrittenForm: undefined,
};

export { baseSchema }; 