import { z } from "zod";

const directorSchema = z.object({
  title: z.string().min(1, "Title is required"),
  gender: z.string().min(1, "Gender is required"),
  firstName: z.string().min(3, "First name must be at least 3 characters").max(30, "First name must be at most 30 characters"),
  middleName: z.string().min(3, "Middle name must be at least 3 characters").max(30, "Middle name must be at most 30 characters").optional(),
  lastName: z.string().min(3, "Last name must be at least 3 characters").max(30, "Last name must be at most 30 characters"),
  dob: z.date(),
  placeOfBirth: z.string().min(3, "Place of birth must be at least 3 characters").max(30, "Place of birth must be at most 30 characters"),
  nationality: z.string().min(3, "Nationality must be at least 3 characters").max(30, "Nationality must be at most 30 characters"),
  residenceCountry: z.string().min(1, "Residence country is required"),
  occupation: z.string().min(3, "Occupation must be at least 3 characters").max(30, "Occupation must be at most 30 characters"),
  BVNNumber: z.string().min(11, "BVN must be 11 digits").max(11, "BVN must be 11 digits"),
  employersName: z.string().min(2, "Employer's name must be at least 2 characters").max(50, "Employer's name must be at most 50 characters"),
  phoneNumber: z.string().min(5, "Phone number must be at least 5 digits").max(11, "Phone number must be at most 11 digits"),
  address: z.string().min(1, "Address is required"),
  email: z.string().email("Invalid email address").min(6, "Email must be at least 6 characters").max(30, "Email must be at most 30 characters"),
  taxIDNumber: z.string().optional(),
  intPassNo: z.string().min(3, "Passport number must be at least 3 characters").max(30, "Passport number must be at most 30 characters").optional(),
  passIssuedCountry: z.string().min(3, "Passport issued country must be at least 3 characters").max(30, "Passport issued country must be at most 30 characters").optional(),
  idType: z.string().min(1, "ID type is required"),
  idNumber: z.string().min(1, "ID number must be at least 1 character").max(20, "ID number must be at most 20 characters"),
  issuedBy: z.string().min(3, "Issuing country must be at least 3 characters").max(30, "Issuing country must be at most 30 characters"),
  issuedDate: z.date(),
  expiryDate: z.date().optional(),
  sourceOfIncome: z.string().min(1, "Source of income is required"),
  otherIncomeSource: z.string().optional(),
});

export const schema = z.object({
  directors: z.array(directorSchema).min(1, "At least one director is required"),
});

export type Schema = z.infer<typeof schema>;

export const defaultValues: Schema = {
  directors: [
    {
      title: "",
      gender: "male",
      firstName: "",
      middleName: "",
      lastName: "",
      dob: new Date(),
      placeOfBirth: "",
      nationality: "",
      residenceCountry: "",
      occupation: "",
      BVNNumber: "",
      employersName: "",
      phoneNumber: "",
      address: "",
      email: "",
      taxIDNumber: "",
      intPassNo: "",
      passIssuedCountry: "",
      idType: "International passport",
      idNumber: "",
      issuedBy: "",
      issuedDate: new Date(),
      expiryDate: new Date(),
      sourceOfIncome: "Salary Or Business Income",
      otherIncomeSource: "",
    },
  ],
}; 