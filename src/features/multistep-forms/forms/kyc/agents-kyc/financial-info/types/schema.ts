import { z } from "zod";

const schema = z.object({
  localAccountNumber: z.string().min(1, "Account number is required."),
  localBankName: z.string().min(1, "Bank name is required."),
  localBankBranch: z.string().min(1, "Bank branch is required."),
  localAccountOpeningDate: z.coerce.date({
    errorMap: () => ({ message: "Account opening date is required." }),
  }),

  foreignAccountNumber: z.string().optional(),
  foreignBankName: z.string().optional(),
  foreignBankBranch: z.string().optional(),
  foreignAccountOpeningDate: z.coerce.date().optional(),
});

type Schema = z.infer<typeof schema>;

const defaultValues: Schema = {
  localAccountNumber: "",
  localBankName: "",
  localBankBranch: "",
  localAccountOpeningDate: new Date(),
  foreignAccountNumber: "",
  foreignBankName: "",
  foreignBankBranch: "",
  foreignAccountOpeningDate: new Date(),
};

export { schema, type Schema, defaultValues }; 