import { z } from "zod";

const directorSchema = z.object({
  title: z.string().min(1, "Title is required"),
  gender: z.enum(["male", "female"]),
  firstName: z.string()
    .min(3, "First name must be at least 3 characters")
    .max(30, "First name must not exceed 30 characters"),
  middleName: z.string()
    .min(3, "Middle name must be at least 3 characters")
    .max(30, "Middle name must not exceed 30 characters")
    .optional(),
  lastName: z.string()
    .min(3, "Last name must be at least 3 characters")
    .max(30, "Last name must not exceed 30 characters"),
  residentialAddress: z.string().min(1, "Residential address is required"),
  position: z.string()
    .min(3, "Position must be at least 3 characters")
    .max(30, "Position must not exceed 30 characters"),
  dob: z.date(),
  placeOfBirth: z.string()
    .min(3, "Place of birth must be at least 3 characters")
    .max(30, "Place of birth must not exceed 30 characters"),
  occupation: z.string()
    .min(3, "Occupation must be at least 3 characters")
    .max(30, "Occupation must not exceed 30 characters"),
  BVNNumber: z.string().length(11, "BVN must be exactly 11 digits"),
  taxIDNumber: z.string().optional(),
  intPassNo: z.string()
    .min(3, "International passport number must be at least 3 characters")
    .max(30, "International passport number must not exceed 30 characters"),
  passIssuedCountry: z.string()
    .min(3, "Passport issued country must be at least 3 characters")
    .max(30, "Passport issued country must not exceed 30 characters"),
  sourceOfIncome: z.string().min(1, "Source of income is required"),
  otherSourceOfIncome: z.string().optional(),
  nationality: z.string()
    .min(3, "Nationality must be at least 3 characters")
    .max(30, "Nationality must not exceed 30 characters"),
  phoneNumber: z.string()
    .min(5, "Phone number must be at least 5 characters")
    .max(11, "Phone number must not exceed 11 characters"),
  email: z.string()
    .min(6, "Email must be at least 6 characters")
    .max(30, "Email must not exceed 30 characters")
    .email("Invalid email format"),
  idType: z.enum(["International passport", "NIMC", "Drivers licence", "Voters Card"]),
  idNumber: z.string()
    .min(1, "ID number must be at least 1 character")
    .max(20, "ID number must not exceed 20 characters"),
  issuedDate: z.date(),
  expiryDate: z.date(),
  issuingBody: z.string()
    .min(1, "Issuing body must be at least 1 character")
    .max(50, "Issuing body must not exceed 50 characters")
});

export const schema = z.object({
  directors: z.array(directorSchema).min(1, "At least one director is required")
});

export type Schema = z.infer<typeof schema>;

export const defaultValues: Schema = {
  directors: []
};

export { directorSchema }; 