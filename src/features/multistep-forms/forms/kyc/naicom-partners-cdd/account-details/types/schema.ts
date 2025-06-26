import { z } from "zod";
import { d } from "@/utils/corporateCDDDictionary/dictionary";

export const schema = z.object({
  // Local Account Details
  accountNumber: z.string().min(7, "Account number must be at least 7 digits").max(10, "Account number must be at most 10 digits"),
  bankName: z.string().min(3, "Bank name must be at least 3 characters").max(50, "Bank name must be at most 50 characters"),
  bankBranch: z.string().min(3, "Bank branch must be at least 3 characters").max(30, "Bank branch must be at most 30 characters"),
  accountOpeningDate: z.coerce.date({
    errorMap: () => ({ message: "Account opening date is required" }),
  }),

  // Foreign Account Details (Optional)
  accountNumber2: z.string().min(7, "Account number must be at least 7 digits").max(10, "Account number must be at most 10 digits").optional(),
  bankName2: z.string().min(3, "Bank name must be at least 3 characters").max(50, "Bank name must be at most 50 characters").optional(),
  bankBranch2: z.string().min(3, "Bank branch must be at least 3 characters").max(30, "Bank branch must be at most 30 characters").optional(),
  accountOpeningDate2: z.coerce.date().optional(),
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
  accountOpeningDate2: new Date(),
}; 