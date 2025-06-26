import { z } from "zod";
import validator from "validator";
import { calculatePastDate } from "@/utils/calculatePastDate";

const schema = z.object({
  firstName: z.string().min(1, "First name is required"),
  middleName: z.string().optional(),
  lastName: z.string().min(1, "Last name is required"),
  residentialAddress: z.string().min(1, "Residential address is required"),
  gender: z.enum(["male", "female"]),
  position: z.string().min(1, "Position is required"),
  dateOfBirth: z.coerce.date({
    errorMap: () => ({ message: "Date of birth is required" }),
  }),
  country: z.string().min(1, "Country is required."),
  state: z.string().min(1, "State is required."),
  city: z.string().min(1, "City is required."),
  placeOfBirth: z.string().min(1, "Place of birth is required"),
  sourceOfIncome: z.enum(["salaryOrBusinessIncome", "investmentsOrDividends", "Other"]),
  otherIncomeSource: z.string(),
  nationality: z.string().min(1, "Nationality is required"),
  phoneNumber: z.string().min(1, "Phone number is required"),
  bvnNumber: z.string().min(11, "BVN must be 11 digits").max(11, "BVN must be 11 digits"),
  taxIdNumber: z.string().optional(),
  occupation: z.string().min(1, "Occupation is required"),
  email: z.string().email("Invalid email address"),
  idType: z.enum(["international passport", "NIMC", "Drivers licence", "Voters Card"]),
  idNumber: z.string().min(1, "ID number is required"),
  issuedDate: z.coerce.date({
    errorMap: () => ({ message: "Issued date is required" }),
  }),
  expiryDate: z.coerce.date({
    errorMap: () => ({ message: "Expiry date is required" }),
  }),
  issuingBody: z.string().min(1, "Issuing body is required"),
}).refine(
  (data) => {
    if (data.sourceOfIncome === "Other") {
      return data.otherIncomeSource.length > 0;
    }
    return true;
  },
  {
    message: "Please specify other source of income",
    path: ["otherIncomeSource"],
  }
);

export type Schema = z.infer<typeof schema>;

const defaultValues: Schema = {
  firstName: "",
  middleName: "",
  lastName: "",
  residentialAddress: "",
  gender: "male",
  position: "",
  dateOfBirth: new Date(),
  country: "",
  state: "",
  city: "",
  placeOfBirth: "",
  sourceOfIncome: "salaryOrBusinessIncome",
  otherIncomeSource: "",
  nationality: "",
  phoneNumber: "",
  bvnNumber: "",
  taxIdNumber: "",
  occupation: "",
  email: "",
  idType: "international passport",
  idNumber: "",
  issuedDate: new Date(),
  expiryDate: new Date(),
  issuingBody: "",
};

export { schema, defaultValues }; 