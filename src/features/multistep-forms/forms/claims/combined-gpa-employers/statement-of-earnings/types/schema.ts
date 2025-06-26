import { z } from "zod";

const monthlyEarningSchema = z.object({
  monthEnding: z.date({
    required_error: "Month ending is required",
    invalid_type_error: "Invalid date format",
  }),
  wagesAndBonus: z.string().min(1, "Wages and bonus is required"),
  reasonForAbsence: z.string().optional(),
});

export const schema = z.object({
  monthlyEarnings: z.array(monthlyEarningSchema).min(12, "12 months of earnings are required"),
  monthlyAllowanceValue: z.string().min(1, "Monthly allowance value is required"),
});

export type Schema = z.infer<typeof schema>;

export const defaultValues: Schema = {
  monthlyEarnings: Array(12).fill({
    monthEnding: new Date(),
    wagesAndBonus: "",
    reasonForAbsence: "",
  }),
  monthlyAllowanceValue: "",
}; 