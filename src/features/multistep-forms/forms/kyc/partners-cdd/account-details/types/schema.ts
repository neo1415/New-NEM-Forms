import { z } from "zod";

export const schema = z.object({
  // Local Account Details
  accountNumber: z.string()
    .min(7, "Account number must be at least 7 characters")
    .max(10, "Account number must not exceed 10 characters"),
  
  bankName: z.string()
    .min(3, "Bank name must be at least 3 characters")
    .max(50, "Bank name must not exceed 50 characters"),
  
  bankBranch: z.string()
    .min(3, "Bank branch must be at least 3 characters")
    .max(30, "Bank branch must not exceed 30 characters"),
  
  accountOpeningDate: z.date(),

  // Foreign Account Details (Optional)
  accountNumber2: z.string()
    .min(7, "Account number must be at least 7 characters")
    .max(10, "Account number must not exceed 10 characters")
    .optional(),
  
  bankName2: z.string()
    .min(3, "Bank name must be at least 3 characters")
    .max(50, "Bank name must not exceed 50 characters")
    .optional(),
  
  bankBranch2: z.string()
    .min(3, "Bank branch must be at least 3 characters")
    .max(30, "Bank branch must not exceed 30 characters")
    .optional(),
  
  accountOpeningDate2: z.date().optional()
});

export type Schema = z.infer<typeof schema>;

export const defaultValues: Schema = {
  accountNumber: "",
  bankName: "",
  bankBranch: "",
  accountOpeningDate: new Date(),
  accountNumber2: "",
  bankName2: "",
  bankBranch2: "",
  accountOpeningDate2: undefined
}; 