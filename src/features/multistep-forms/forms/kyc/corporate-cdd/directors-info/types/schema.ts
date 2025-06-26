import { z } from "zod";

const directorSchema = z.object({
  firstName: z.string().min(3, "First name must be at least 3 characters").max(30, "First name must not exceed 30 characters"),
  middleName: z.string().min(3, "Middle name must be at least 3 characters").max(30, "Middle name must not exceed 30 characters").optional(),
  lastName: z.string().min(3, "Last name must be at least 3 characters").max(30, "Last name must not exceed 30 characters"),
  dob: z.date({ required_error: "Date of birth is required" }),
  placeOfBirth: z.string().min(3, "Place of birth must be at least 3 characters").max(30, "Place of birth must not exceed 30 characters"),
  nationality: z.string().min(3, "Nationality must be at least 3 characters").max(30, "Nationality must not exceed 30 characters"),
  country: z.string().min(3, "Country must be at least 3 characters").max(30, "Country must not exceed 30 characters"),
  occupation: z.string().min(3, "Occupation must be at least 3 characters").max(30, "Occupation must not exceed 30 characters"),
  email: z.string().email("Invalid email format").min(6, "Email must be at least 6 characters").max(30, "Email must not exceed 30 characters"),
  phoneNumber: z.string().min(5, "Phone number must be at least 5 digits").max(11, "Phone number must not exceed 11 digits"),
  BVNNumber: z.string().length(11, "BVN must be exactly 11 digits"),
  employersName: z.string().min(2, "Employer's name must be at least 2 characters").max(50, "Employer's name must not exceed 50 characters").optional(),
  employersPhoneNumber: z.string().min(5, "Employer's phone must be at least 5 digits").max(11, "Employer's phone must not exceed 11 digits").optional(),
  residentialAddress: z.string().min(1, "Residential address is required"),
  taxIDNumber: z.string().optional(),
  idType: z.string().min(1, "ID type is required"),
  idNumber: z.string().min(1, "ID number must be at least 1 character").max(20, "ID number must not exceed 20 characters"),
  issuingBody: z.string().min(1, "Issuing body must be at least 1 character").max(50, "Issuing body must not exceed 50 characters"),
  issuedDate: z.date({ required_error: "Issue date is required" }),
  expiryDate: z.date().nullable(),
  sourceOfIncome: z.string().min(1, "Source of income is required"),
  otherSourceOfIncome: z.string().optional(),
});

export const schema = z.object({
  directors: z.array(directorSchema).min(1, "At least one director is required"),
});

export type Schema = z.infer<typeof schema>;

export const defaultValues: Schema = {
  directors: [],
};

export { directorSchema }; 