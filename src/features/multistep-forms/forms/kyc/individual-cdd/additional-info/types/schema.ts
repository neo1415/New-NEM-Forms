import { z } from "zod";

const schema = z.object({
  businessType: z.string().min(1, "Business Type is required"),
  otherBusinessType: z.string().optional(),
  employersEmail: z.string().email("Invalid employer email"),
  employersName: z.string().optional(),
  employersTelephoneNumber: z.string().optional(),
  employersAddress: z.string().optional(),
  taxidentificationNumber: z.string().optional(),
  BVNNumber: z
    .string()
    .min(6, "BVN must be at least 6 characters")
    .max(15, "BVN must be at most 15 characters"),
  identificationType: z.enum([
    "International passport",
    "NIMC",
    "Drivers Licence",
    "Voters Card",
    "NIN",
  ]),
  identificationNumber: z
    .string()
    .min(1, "Identification Number is required")
    .max(20, "ID number must be at most 20 characters"),
  issuingCountry: z.string().min(1, "Issuing Country is required"),
  issuedDate: z.date({ required_error: "Issued Date is required" }),
  expiryDate: z.date().optional(),
  annualIncomeRange: z.string().min(1, "Annual Income Range is required"),
  premiumPaymentSource: z.string().min(1, "Premium Payment Source is required"),
  otherPremiumPaymentSource: z.string().min(1, "Other Premium Payment Source is required"),
});

type Schema = z.infer<typeof schema>;

const defaultValues: Schema = {
  businessType: "",
  otherBusinessType: "",
  employersEmail: "",
  employersName: "",
  employersTelephoneNumber: "",
  employersAddress: "",
  taxidentificationNumber: "",
  BVNNumber: "",
  identificationType: "International passport",
  identificationNumber: "",
  issuingCountry: "",
  issuedDate: new Date(),
  expiryDate: undefined,
  annualIncomeRange:"",
  premiumPaymentSource:"",
  otherPremiumPaymentSource: ""
};

export { schema, defaultValues, type Schema };
