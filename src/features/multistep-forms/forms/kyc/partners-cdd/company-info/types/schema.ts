import { z } from "zod";

export const schema = z.object({
  companyName: z.string()
    .min(3, "Company name must be at least 3 characters")
    .max(50, "Company name must not exceed 50 characters"),
  
  registeredCompanyAddress: z.string()
    .min(3, "Address must be at least 3 characters")
    .max(60, "Address must not exceed 60 characters"),
  
  city: z.string()
    .min(3, "City must be at least 3 characters")
    .max(50, "City must not exceed 50 characters"),
  
  state: z.string()
    .min(3, "State must be at least 3 characters")
    .max(50, "State must not exceed 50 characters"),
  
  country: z.string()
    .min(3, "Country must be at least 3 characters")
    .max(50, "Country must not exceed 50 characters"),
  
  emailAddress: z.string()
    .min(5, "Email must be at least 5 characters")
    .max(50, "Email must not exceed 50 characters")
    .email("Invalid email format"),
  
  website: z.string()
    .min(1, "Website is required"),
  
  contactPerson: z.string()
    .min(6, "Contact person must be at least 6 characters")
    .max(15, "Contact person must not exceed 15 characters"),
  
  contactPersonNo: z.string()
    .min(6, "Contact person number must be at least 6 characters")
    .max(15, "Contact person number must not exceed 15 characters"),
  
  taxIdentificationNumber: z.string()
    .min(6, "TIN must be at least 6 characters")
    .max(15, "TIN must not exceed 15 characters")
    .optional(),
  
  VATRegistrationNumber: z.string()
    .min(6, "VAT registration number must be at least 6 characters")
    .max(15, "VAT registration number must not exceed 15 characters"),
  
  incorporationNumber: z.string()
    .min(7, "Incorporation number must be at least 7 characters")
    .max(15, "Incorporation number must not exceed 15 characters"),
  
  dateOfIncorporationRegistration: z.date(),
  
  incorporationState: z.string()
    .min(3, "Incorporation state must be at least 3 characters")
    .max(50, "Incorporation state must not exceed 50 characters"),
  
  natureOfBusiness: z.string()
    .min(3, "Nature of business must be at least 3 characters")
    .max(60, "Nature of business must not exceed 60 characters"),
  
  BVNNo: z.string()
    .length(11, "BVN must be exactly 11 digits")
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
  BVNNo: ""
}; 