import { z } from "zod";

const schema = z.object({
  // Local Account Details
  bankName: z.string().min(3, "Bank name must be at least 3 characters").max(50, "Bank name must be at most 50 characters"),
  accountNumber: z.string().min(7, "Account number must be at least 7 characters").max(10, "Account number must be at most 10 characters"),
  bankBranch: z.string().min(3, "Bank branch must be at least 3 characters").max(30, "Bank branch must be at most 30 characters"),
  accountOpeningDate: z.date(),

  // Foreign Account Details
  bankName2: z.string().optional(),
  accountNumber2: z.string().optional(),
  bankBranch2: z.string().optional(),
  accountOpeningDate2: z.date().optional(),
});

type Schema = z.infer<typeof schema>;

const defaultValues: Schema = {
  // Local Account Details
  bankName: "",
  accountNumber: "",
  bankBranch: "",
  accountOpeningDate: new Date(),

  // Foreign Account Details
  bankName2: "",
  accountNumber2: "",
  bankBranch2: "",
  accountOpeningDate2: undefined,
};

export { schema, type Schema, defaultValues }; 