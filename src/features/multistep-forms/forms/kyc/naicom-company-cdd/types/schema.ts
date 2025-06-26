import { z } from "zod";

const directorSchema = z.object({
  firstName: z.string().min(3, "First name must be at least 3 characters").max(30, "First name must be at most 30 characters"),
  middleName: z.string().min(3, "Middle name must be at least 3 characters").max(30, "Middle name must be at most 30 characters").optional(),
  lastName: z.string().min(3, "Last name must be at least 3 characters").max(30, "Last name must be at most 30 characters"),
  dob: z.date(),
  placeOfBirth: z.string().min(3, "Place of birth must be at least 3 characters").max(30, "Place of birth must be at most 30 characters"),
  nationality: z.string().min(1, "Nationality is required"),
  country: z.string().min(3, "Country must be at least 3 characters"),
  state: z.string().min(3, "State must be at least 3 characters"),
  city: z.string().min(3, "City must be at least 3 characters"),
  occupation: z.string().min(3, "Occupation must be at least 3 characters").max(30, "Occupation must be at most 30 characters"),
  email: z.string().email("Invalid email address").min(6, "Email must be at least 6 characters").max(30, "Email must be at most 30 characters"),
  phoneNumber: z.string().min(5, "Phone number must be at least 5 characters").max(11, "Phone number must be at most 11 characters"),
  BVNNumber: z.string().length(11, "BVN must be exactly 11 digits"),
  employersName: z.string().min(2, "Employer's name must be at least 2 characters").max(50, "Employer's name must be at most 50 characters").optional(),
  employersPhoneNumber: z.string().min(5, "Phone number must be at least 5 characters").max(11, "Phone number must be at most 11 characters").optional(),
  residentialAddress: z.string().min(1, "Residential address is required"),
  taxIDNumber: z.string().optional(),
  idType: z.enum(["International passport", "NIMC", "Drivers licence", "Voters Card"]),
  idNumber: z.string().min(1, "ID number is required").max(20, "ID number must be at most 20 characters"),
  issuingBody: z.string().min(1, "Issuing body is required").max(50, "Issuing body must be at most 50 characters"),
  issuedDate: z.date(),
  expiryDate: z.date().optional(),
  sourceOfIncome: z.string().min(1, "Source of income is required"),
  otherSourceOfIncome: z.string().optional(),
});

const schema = z.object({
  // Company Information
  companyName: z.string().min(3, "Company name must be at least 3 characters").max(50, "Company name must be at most 50 characters"),
  registeredCompanyAddress: z.string().min(3, "Address must be at least 3 characters").max(60, "Address must be at most 60 characters"),
  incorporationNumber: z.string().min(7, "Incorporation number must be at least 7 characters").max(15, "Incorporation number must be at most 15 characters"),
  country: z.string().min(3, "Country must be at least 3 characters"),
  state: z.string().min(3, "State must be at least 3 characters"),
  city: z.string().min(3, "City must be at least 3 characters"),
  incorporationState: z.string().min(3, "Incorporation state must be at least 3 characters").max(50, "Incorporation state must be at most 50 characters"),
  dateOfIncorporationRegistration: z.date(),
  natureOfBusiness: z.string().min(3, "Nature of business must be at least 3 characters").max(60, "Nature of business must be at most 60 characters"),
  companyLegalForm: z.string().min(1, "Company type is required"),
  otherCompanyType: z.string().optional(),
  emailAddress: z.string().email("Invalid email address").min(5, "Email must be at least 5 characters").max(50, "Email must be at most 50 characters"),
  website: z.string().min(1, "Website is required"),
  taxIdentificationNumber: z.string().min(6, "Tax ID must be at least 6 characters").max(15, "Tax ID must be at most 15 characters").optional(),
  telephoneNumber: z.string().min(5, "Phone number must be at least 5 characters").max(11, "Phone number must be at most 11 characters"),

  // Directors Information
  directors: z.array(directorSchema),

  // Account Details - Local
  bankName: z.string().min(3, "Bank name must be at least 3 characters").max(50, "Bank name must be at most 50 characters"),
  accountNumber: z.string().min(7, "Account number must be at least 7 characters").max(10, "Account number must be at most 10 characters"),
  bankBranch: z.string().min(3, "Bank branch must be at least 3 characters").max(30, "Bank branch must be at most 30 characters"),
  accountOpeningDate: z.date(),

  // Account Details - Foreign (Optional)
  bankName2: z.string().optional(),
  accountNumber2: z.string().min(7, "Account number must be at least 7 characters").max(10, "Account number must be at most 10 characters").optional(),
  bankBranch2: z.string().optional(),
  accountOpeningDate2: z.date().optional(),

  // File Uploads
  cac: z.any(),
  identification: z.any(),
});

type Schema = z.infer<typeof schema>;

const defaultValues: Schema = {
  companyName: "",
  registeredCompanyAddress: "",
  incorporationNumber: "",
  country: "",
  state: "",
  city: "",
  incorporationState: "",
  dateOfIncorporationRegistration: new Date(),
  natureOfBusiness: "",
  companyLegalForm: "",
  otherCompanyType: "",
  emailAddress: "",
  website: "",
  taxIdentificationNumber: "",
  telephoneNumber: "",
  directors: [],
  bankName: "",
  accountNumber: "",
  bankBranch: "",
  accountOpeningDate: new Date(),
  bankName2: "",
  accountNumber2: "",
  bankBranch2: "",
  accountOpeningDate2: undefined,
  cac: null,
  identification: null,
};

export { schema, type Schema, defaultValues, directorSchema }; 