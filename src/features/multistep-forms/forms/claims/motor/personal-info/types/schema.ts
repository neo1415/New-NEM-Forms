import { z } from "zod";
import validator from "validator";
import { calculatePastDate } from "@/utils/calculatePastDate";

const schema = z.object({
  policyNumber: z.string().min(1, "Policy number is required."),

  periodOfCoverFrom: z.coerce.date({
    errorMap: () => ({ message: "Start date is required." }),
  }),
  periodOfCoverTo: z.coerce.date({
    errorMap: () => ({ message: "End date is required." }),
  }),

  insuredNameOrCompanyName: z.string().min(1, "Name or Company Name is required."),
  title: z.string().min(1, "Title is required."),
  dateOfBirth: z.coerce
    .date()
    .max(calculatePastDate(18), "You must be at least 18 years old.")
    .min(calculatePastDate(100), "Date of birth too old."),
gender: z.enum(["Male", "Female", "Other"], {
  errorMap: () => ({ message: "Please select your gender" }),
}),
  address: z.string().min(1, "Address is required."),
  phone: z
    .string()
    .min(1, "Phone number is required.")
    .refine((val) => validator.isMobilePhone(val, "en-NG"), {
      message: "Enter a valid Nigerian phone number.",
    }),
  email: z.string().email("Invalid email address."),
  alertPreference: z.enum(["Email", "SMS", "Both"], {
    errorMap: () => ({ message: "Select an alert preference." }),
  }),
});

type Schema = z.infer<typeof schema>;

const defaultValues: Schema = {
  policyNumber: "",
  periodOfCoverFrom: new Date(),
  periodOfCoverTo: new Date(),
insuredNameOrCompanyName: "",
  title: "",
  dateOfBirth: calculatePastDate(18),
gender: "Male", 
  address: "",
  phone: "",
  email: "",
  alertPreference: "Email", // default to one option
};

export {
  schema,
  schema as motorPersonalInfoSchema,
  type Schema,
  defaultValues,
};
