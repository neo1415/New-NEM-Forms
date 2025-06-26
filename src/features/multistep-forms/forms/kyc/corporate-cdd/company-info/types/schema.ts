import { z } from "zod";

export const schema = z.object({
  companyName: z.string()
    .min(3, "Company name must be at least 3 characters")
    .max(50, "Company name must not exceed 50 characters"),
  
  registeredCompanyAddress: z.string()
    .min(3, "Address must be at least 3 characters")
    .max(60, "Address must not exceed 60 characters"),
  
  incorporationNumber: z.string()
    .min(7, "Incorporation number must be at least 7 characters")
    .max(15, "Incorporation number must not exceed 15 characters"),
  
  incorporationState: z.string()
    .min(1, "Incorporation state is required")
    .min(3, "Incorporation state must be at least 3 characters")
    .max(50, "Incorporation state must not exceed 50 characters"),
  
  dateOfIncorporationRegistration: z.date(),
  
  natureOfBusiness: z.string()
    .min(3, "Nature of business must be at least 3 characters")
    .max(60, "Nature of business must not exceed 60 characters"),
  
  companyLegalForm: z.string(),
  otherCompanyType: z.string().optional(),
  
  emailAddress: z.string()
    .min(5, "Email must be at least 5 characters")
    .max(50, "Email must not exceed 50 characters")
    .email("Invalid email format"),
  
  website: z.string(),
  
  taxIdentificationNumber: z.string()
    .min(6, "TIN must be at least 6 characters")
    .max(15, "TIN must not exceed 15 characters")
    .optional(),
  
  telephoneNumber: z.string()
    .min(5, "Phone number must be at least 5 characters")
    .max(11, "Phone number must not exceed 11 characters")
});

export type Schema = z.infer<typeof schema>;

export const defaultValues: Schema = {
  companyName: "",
  registeredCompanyAddress: "",
  incorporationNumber: "",
  incorporationState: "",
  dateOfIncorporationRegistration: new Date(),
  natureOfBusiness: "",
  companyLegalForm: "",
  emailAddress: "",
  website: "",
  taxIdentificationNumber: "",
  telephoneNumber: "",
}; 