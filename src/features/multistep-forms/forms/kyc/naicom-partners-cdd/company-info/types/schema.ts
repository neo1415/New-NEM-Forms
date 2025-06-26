import { z } from "zod";
import { d } from "@/utils/corporateCDDDictionary/dictionary";

export const schema = z.object({
  companyName: z.string().min(3, "Company name must be at least 3 characters").max(50, "Company name must be at most 50 characters"),
  registeredCompanyAddress: z.string().min(3, "Address must be at least 3 characters").max(60, "Address must be at most 60 characters"),
  city: z.string().min(3, "City must be at least 3 characters").max(50, "City must be at most 50 characters"),
  state: z.string().min(3, "State must be at least 3 characters").max(50, "State must be at most 50 characters"),
  country: z.string().min(3, "Country must be at least 3 characters").max(50, "Country must be at most 50 characters"),
  emailAddress: z.string().email("Invalid email address").min(5, "Email must be at least 5 characters").max(50, "Email must be at most 50 characters"),
  website: z.string().min(1, "Website is required"),
  contactPerson: z.string().min(6, "Contact person must be at least 6 characters").max(15, "Contact person must be at most 15 characters"),
  contactPersonNo: z.string().min(6, "Contact person number must be at least 6 characters").max(15, "Contact person number must be at most 15 characters"),
  taxIdentificationNumber: z.string().min(6, "Tax ID must be at least 6 characters").max(15, "Tax ID must be at most 15 characters"),
  VATRegistrationNumber: z.string().min(6, "VAT number must be at least 6 characters").max(15, "VAT number must be at most 15 characters"),
  incorporationNumber: z.string().min(7, "Incorporation number must be at least 7 characters").max(15, "Incorporation number must be at most 15 characters"),
  dateOfIncorporationRegistration: z.coerce.date({
    errorMap: () => ({ message: "Date of incorporation is required" }),
  }),
  incorporationState: z.string().min(3, "Incorporation state must be at least 3 characters").max(50, "Incorporation state must be at most 50 characters"),
  natureOfBusiness: z.string().min(3, "Nature of business must be at least 3 characters").max(60, "Nature of business must be at most 60 characters"),
  BVNNo: z.string().min(11, "BVN must be 11 digits").max(11, "BVN must be 11 digits"),
  NAICOMLisenceIssuingDate: z.coerce.date({
    errorMap: () => ({ message: "NAICOM license issuing date is required" }),
  }),
  NAICOMLisenceExpiryDate: z.coerce.date({
    errorMap: () => ({ message: "NAICOM license expiry date is required" }),
  }),
});

export type Schema = z.infer<typeof schema>;

export const defaultValues: Schema = {
  companyName: "",
  registeredCompanyAddress: "",
  city: "",
  state: "",
  country: "",
  emailAddress: "",
  website: "",
  contactPerson: "",
  contactPersonNo: "",
  taxIdentificationNumber: "",
  VATRegistrationNumber: "",
  incorporationNumber: "",
  dateOfIncorporationRegistration: new Date(),
  incorporationState: "",
  natureOfBusiness: "",
  BVNNo: "",
  NAICOMLisenceIssuingDate: new Date(),
  NAICOMLisenceExpiryDate: new Date(),
}; 