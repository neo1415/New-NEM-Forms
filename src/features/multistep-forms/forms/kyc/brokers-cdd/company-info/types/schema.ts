import { z } from "zod";

export const schema = z.object({
  companyName: z.string().min(3, "Company name must be at least 3 characters").max(50, "Company name must be at most 50 characters"),
  companyAddress: z.string().min(3, "Company address must be at least 3 characters").max(60, "Company address must be at most 60 characters"),
  city: z.string().min(3, "City must be at least 3 characters").max(50, "City must be at most 50 characters"),
  state: z.string().min(3, "State must be at least 3 characters").max(50, "State must be at most 50 characters"),
  country: z.string().min(3, "Country must be at least 3 characters").max(50, "Country must be at most 50 characters"),
  incorporationNumber: z.string().min(7, "Incorporation number must be at least 7 characters").max(15, "Incorporation number must be at most 15 characters"),
  registrationNumber: z.string().min(6, "Registration number must be at least 6 characters").max(15, "Registration number must be at most 15 characters"),
  incorporationState: z.string().min(3, "Incorporation state must be at least 3 characters").max(50, "Incorporation state must be at most 50 characters"),
  companyLegalForm: z.string().min(1, "Please select a company type"),
  otherCompanyType: z.string().optional(),
  dateOfIncorporationRegistration: z.date(),
  emailAddress: z.string().email("Invalid email address").min(5, "Email must be at least 5 characters").max(50, "Email must be at most 50 characters"),
  website: z.string().min(1, "Website is required"),
  natureOfBusiness: z.string().min(3, "Business type must be at least 3 characters").max(60, "Business type must be at most 60 characters"),
  taxIdentificationNumber: z.string().min(6, "Tax number must be at least 6 characters").max(15, "Tax number must be at most 15 characters"),
  telephoneNumber: z.string().min(5, "Telephone number must be at least 5 characters").max(11, "Telephone number must be at most 11 characters"),
});

export type Schema = z.infer<typeof schema>;

export const defaultValues: Schema = {
  companyName: "",
  companyAddress: "",
  city: "",
  state: "",
  country: "",
  incorporationNumber: "",
  registrationNumber: "",
  incorporationState: "",
  companyLegalForm: "",
  otherCompanyType: "",
  dateOfIncorporationRegistration: new Date(),
  emailAddress: "",
  website: "",
  natureOfBusiness: "",
  taxIdentificationNumber: "",
  telephoneNumber: "",
}; 