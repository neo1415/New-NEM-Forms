import validator from "validator";
import { z } from "zod";

const schema = z.object({
  // page-1
  firstName: z
    .string()
    .min(1, { message: "First name is required." })
    .max(50, { message: "First name cannot exceed 50 characters." }),
  lastName: z
    .string()
    .min(1, { message: "Last name is required." })
    .max(50, { message: "Last name cannot exceed 50 characters." }),
  email: z
    .string()
    .email()
    .refine(
      async (email) => {
        const response = await fetch(`/api/check-email?email=${email}`);
        return response.ok;
      },
      { message: "Email is already registered" }
    ),
  phoneNumber: z
    .string()
    .min(1, { message: "Phone number is required." })
    .refine(
      (val) => validator.isMobilePhone(val, undefined, { strictMode: true }),
      {
        message: "Invalid mobile phone number.",
      }
    ),
  dateOfBirth: z.coerce.date().refine((date) => date <= new Date(), {
    message: "Date of birth cannot be in the future.",
  }),
  state: z.string().min(1, { message: "State is required." }),
  city: z.string().min(1, { message: "City is required." }),
  streetAddress: z.string().min(1, { message: "Street address is required." }),
  socialSecurityNumber: z
    .string()
    .regex(/^\d{3}-\d{2}-\d{4}$/, "Invalid SSN format (XXX-XX-XXXX)")
    .optional(),
});

type Schema = z.infer<typeof schema>;

const defaultValues: Schema = {
  city: "",
  dateOfBirth: new Date("2000-01-01"),
  email: "",
  firstName: "",
  lastName: "",
  phoneNumber: "",
  state: "",
  streetAddress: "",
  socialSecurityNumber: "",
};

export { schema, schema as personalInfoSchema, type Schema, defaultValues };
