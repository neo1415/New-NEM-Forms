import { calculateMinAge } from "@/utils/calculateMinAge";
import validator from "validator";
import { z } from "zod";

const schema = z.object({
  firstName: z.string().min(1).max(50),
  lastName: z.string().min(1).max(50),
  email: z.string().email(),
  phoneNumber: z
    .string()
    .min(1)
    .refine((val) =>
      validator.isMobilePhone(val, undefined, { strictMode: true })
    ),
  dateOfBirth: z.coerce
    .date()
    .max(calculateMinAge())
    .min(new Date("1900-01-01")),
  state: z.string().min(1),
  city: z.string().min(1),
  streetAddress: z.string().min(1),
  socialSecurityNumber: z.string().regex(/^(\d{9})?$/),
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
