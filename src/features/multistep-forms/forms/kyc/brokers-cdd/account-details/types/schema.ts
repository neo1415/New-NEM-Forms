import { z } from "zod";

export const schema = z.object({
  // Local Account Details
  localBankName: z.string().min(3, "Bank name must be at least 3 characters").max(50, "Bank name must be at most 50 characters"),
  bankBranch: z.string().min(3, "Bank branch must be at least 3 characters").max(30, "Bank branch must be at most 30 characters"),
  currentAccountNumber: z.string().min(7, "Account number must be at least 7 digits").max(10, "Account number must be at most 10 digits"),
  accountOpeningDate: z.date(),

  // Domicilliary Account Details (Optional)
  domAccountNumber2: z.string().min(7, "Account number must be at least 7 digits").max(10, "Account number must be at most 10 digits").optional(),
  foreignBankName2: z.string().min(3, "Bank name must be at least 3 characters").max(50, "Bank name must be at most 50 characters").optional(),
  bankBranchName2: z.string().min(3, "Bank branch must be at least 3 characters").max(30, "Bank branch must be at most 30 characters").optional(),
  currency: z.string().optional(),
  accountOpeningDate2: z.date().optional(),
});

export type Schema = z.infer<typeof schema>;

export const defaultValues: Schema = {
  localBankName: "",
  bankBranch: "",
  currentAccountNumber: "",
  accountOpeningDate: new Date(),
  domAccountNumber2: "",
  foreignBankName2: "",
  bankBranchName2: "",
  currency: "",
  accountOpeningDate2: new Date(),
}; 