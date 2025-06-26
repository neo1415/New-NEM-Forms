import { z } from "zod";

const schema = z.object({
  branchOffice: z.string().min(1, "NEM Branch Office is required"),
  insured: z.string().min(1, "Insured is required"),
  officeAddress: z.string().min(1, "Office Address is required"),
  ownershipOfCompany: z.enum(["Nigerian", "Foreign", "Both"]),
  contactPerson: z.string().min(1, "Contact Person is required"),
  website: z.string().min(1, "Website is required"),
  incorporationNumber: z
    .string()
    .min(7, "Incorporation Number must be at least 7 characters")
    .max(15, "Incorporation Number must be at most 15 characters"),
  incorporationState: z
    .string()
    .min(3, "Incorporation State must be at least 3 characters")
    .max(50, "Incorporation State must be at most 50 characters"),
  dateOfIncorporationRegistration: z.date({
    required_error: "Date of Incorporation/Registration is required",
  }),
  BVNNumber: z
    .string()
    .min(11, "BVN must be 11 digits")
    .max(11, "BVN must be 11 digits"),
  contactPersonNo: z.string().min(1, "Contact Person Mobile Number is required"),
  taxIDNo: z
    .string()
    .min(6, "Tax ID must be at least 6 characters")
    .max(15, "Tax ID must be at most 15 characters")
    .optional(),
  emailAddress: z.string().email("Invalid email address"),
  natureOfBusiness: z
    .string()
    .min(3, "Business Type/Occupation must be at least 3 characters")
    .max(60, "Business Type/Occupation must be at most 60 characters"),
  estimatedTurnover: z.enum([
    "Less Than 10 Million",
    "11 Million - 50 Million",
    "51 Million - 200 Million",
    "More than 200 Million",
  ]),
  premiumPaymentSource: z.string().min(1, "Premium Payment Source is required"),
  otherPremiumPaymentSource: z.string().optional(),
});

type Schema = z.infer<typeof schema>;

const defaultValues: Schema = {
  branchOffice: "",
  insured: "",
  officeAddress: "",
  ownershipOfCompany: "Nigerian",
  contactPerson: "",
  website: "",
  incorporationNumber: "",
  incorporationState: "",
  dateOfIncorporationRegistration: new Date(),
  BVNNumber: "",
  contactPersonNo: "",
  taxIDNo: "",
  emailAddress: "",
  natureOfBusiness: "",
  estimatedTurnover: "Less Than 10 Million",
  premiumPaymentSource: "",
  otherPremiumPaymentSource: "",
};

export { schema, defaultValues, type Schema };
