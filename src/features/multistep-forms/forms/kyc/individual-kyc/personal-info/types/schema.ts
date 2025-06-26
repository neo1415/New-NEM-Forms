import { z } from "zod";

const schema = z.object({
  officeLocation: z.string().min(1, "Office location is required"),
  title: z.string().min(1, "Title is required"),
  firstName: z.string().min(1, "First name is required"),
  middleName: z.string().min(1, "Middle name is required"),
  lastName: z.string().min(1, "Last name is required"),
  contactAddress: z.string().min(1, "Contact address is required"),
  occupation: z.string().min(1, "Occupation is required"),
  gender: z.enum(["male", "female"]),
  dateOfBirth: z.date(),
  mothersMaidenName: z.string().min(1, "Mother's maiden name is required"),
  employersName: z.string().optional(),
  employersTelephoneNumber: z.string().optional(),
  employersAddress: z.string().optional(),
  city: z.string().min(3, "City must be at least 3 characters").max(50, "City must be at most 50 characters"),
  state: z.string().min(3, "State must be at least 3 characters").max(50, "State must be at most 50 characters"),
  country: z.string().min(3, "Country must be at least 3 characters").max(50, "Country must be at most 50 characters"),
  nationality: z.string().min(1, "Nationality is required"),
  residentialAddress: z.string().min(1, "Residential address is required"),
  GSMno: z.string().min(1, "Mobile number is required"),
  emailAddress: z.string().email("Invalid email address"),
  taxIDNo: z.string().min(6, "Tax ID must be at least 6 characters").max(15, "Tax ID must be at most 15 characters").optional(),
  BVN: z.string().min(6, "BVN must be at least 6 characters").max(15, "BVN must be at most 15 characters"),
  identificationType: z.enum(["International passport", "NIMC", "Drivers Licence", "Voters Card", "NIN"]),
  idNumber: z.string().min(1, "ID number is required").max(20, "ID number must be at most 20 characters"),
  issuedDate: z.date(),
  expiryDate: z.date().optional(),
  sourceOfIncome: z.string().min(1, "Source of income is required"),
  otherSourceOfIncome: z.string().optional(),
  annualIncomeRange: z.enum([
    "Less Than 1 Million",
    "1 Million - 4 Million", 
    "4.1 Million - 10 Million",
    "More than 10 Million"
  ]),
  premiumPaymentSource: z.string().min(1, "Premium payment source is required"),
  otherPremiumPaymentSource: z.string().optional()
});

type Schema = z.infer<typeof schema>;

const defaultValues: Schema = {
  officeLocation: "",
  title: "",
  firstName: "",
  middleName: "",
  lastName: "",
  contactAddress: "",
  occupation: "",
  gender: "male",
  dateOfBirth: new Date(),
  mothersMaidenName: "",
  employersName: "",
  employersTelephoneNumber: "",
  employersAddress: "",
  city: "",
  state: "",
  country: "",
  nationality: "",
  residentialAddress: "",
  GSMno: "",
  emailAddress: "",
  taxIDNo: "",
  BVN: "",
  identificationType: "International passport",
  idNumber: "",
  issuedDate: new Date(),
  expiryDate: undefined,
  sourceOfIncome: "",
  otherSourceOfIncome: "",
  annualIncomeRange: "Less Than 1 Million",
  premiumPaymentSource: "",
  otherPremiumPaymentSource: ""
};

export { schema, type Schema, defaultValues }; 