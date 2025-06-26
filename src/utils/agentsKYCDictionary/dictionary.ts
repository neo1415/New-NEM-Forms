export const d = {
  // Common
  saveAndContinue: "Save & Continue",
  invalidFormData: "Invalid form data",
  close: "Close",
  submit: "Submit",

  // Form Sections
  personalInfo: "Personal Information",
  additionalInfo: "Additional Information",
  financialInfo: "Financial Information",
  confirmInformation: "Confirm Information",

  // Personal Info Fields
  firstName: "First Name",
  middleName: "Middle Name",
  lastName: "Last Name",
  residentialAddress: "Residential Address",
  gender: "Gender",
  position: "Position/Role",
  dateOfBirth: "Date of Birth",
  placeOfBirth: "Place of Birth",
  sourceOfIncome: "Other Source of Income",
  otherIncomeSource: "Other Source of Income (please specify)",
  nationality: "Nationality",
  phoneNumber: "Phone Number",
  bvnNumber: "BVN",
  taxIdNumber: "Tax ID Number",
  occupation: "Occupation",
  email: "Email",
  idType: "Valid means of ID",
  idNumber: "Identification Number",
  issuedDate: "Issued Date",
  expiryDate: "Expiry Date",
  issuingBody: "Issuing Body",

  // Additional Info Fields
  agentsName: "Agent Name",
  agentsAddress: "Agents Office Address",
  naicomNo: "Naicom License Number (RIA)",
  licenseIssuedDate: "License Issued Date",
  licenseExpiryDate: "License Expiry Date",
  agentsEmail: "Email Address",
  website: "Website",
  mobileNo: "Mobile Number",
  taxIDNo: "Tax Identification Number",
  arian: "ARIAN Membership Number",
  listOfAgents: "List of Agents Approved Principals (Insurers)",

  // Financial Info Fields
  accountNumber: "Account Number",
  bankName: "Bank Name",
  bankBranch: "Bank Branch",
  accountOpeningDate: "Account Opening Date",

  // Menu Options
  genderOptions: [
    { value: "male", label: "Male" },
    { value: "female", label: "Female" },
  ],

  idTypeOptions: [
    { value: "international passport", label: "International passport" },
    { value: "NIMC", label: "NIMC" },
    { value: "Drivers licence", label: "Drivers licence" },
    { value: "Voters Card", label: "Voters Card" },
  ],

  incomeSourceOptions: [
    { value: "salaryOrBusinessIncome", label: "Salary Or Business Income" },
    { value: "investmentsOrDividends", label: "Investments Or Dividends" },
    { value: "Other", label: "Other(please specify)" },
  ],

  localAccountDetails: "Local Account Details",
  foreignAccountDetails: "Foreign Account Details",
  iAcceptTermsAndConditions: "I accept the terms and conditions",
  declaration: "Declaration",
  signatureDate: "Signature Date",
  review: "Review",
} as const; 