export const d = {
  // Common
  saveAndContinue: "Save & Continue",
  close: "Close",
  submit: "Submit",
  confirmInformation: "Confirm Information",

  // Sections
  insuredDetails: "Insured Details",
  detailsOfLoss: "Details of Loss",
  declaration: "Declaration",
  review: "Review",

  // Insured Details
  policyNumber: "Policy Number",
  companyName: "Company Name",
  companyAddress: "Company Address",
  contactPerson: "Contact Person",
  contactEmail: "Contact Email",
  contactPhone: "Contact Phone",
  preferredContactMethod: "Preferred Contact Method",
  preferredContactMethodOptions: ["Email", "Phone", "SMS"],

  // Details of Loss
  incidentDateTime: "Incident Date & Time",
  incidentLocation: "Incident Location",
  
  // Transit Loss
  isTransitLoss: "Is this a transit loss?",
  transitLossDiscoverers: "Transit Loss Discoverers",
  discovererName: "Name",
  discovererPosition: "Position",
  discovererSalary: "Salary",
  addDiscoverer: "Add Discoverer",
  removeDiscoverer: "Remove",
  policeEscortPresent: "Was there a police escort present?",
  policeEscortDetails: "Police Escort Details",
  employeeIntegrityCheck: "Have all employees involved been checked for integrity?",
  employeeIntegrityDetails: "Employee Integrity Check Details",

  // Safe Loss
  isSafeLoss: "Is this a safe loss?",
  safeLossDiscoverers: "Safe Loss Discoverers",
  safeInstallationDate: "Safe Installation Date",
  safeManufacturer: "Safe Manufacturer",
  safeModel: "Safe Model",
  keyHolders: "Key Holders",
  keyHolderName: "Name",
  keyHolderPosition: "Position",
  keyHolderSalary: "Salary/Remuneration",
  addKeyHolder: "Add Key Holder",
  removeKeyHolder: "Remove",

  // Loss Amount
  lossAmount: "Loss Amount",
  lossDescription: "Loss Description",

  // Police Notification
  policeNotified: "Was the police notified?",
  policeStation: "Police Station",
  policeReference: "Police Reference Number",

  // Previous Loss
  previousLoss: "Have you had any previous losses?",
  previousLossDetails: "Previous Loss Details",

  // Declaration
  declarationTitle: "Declaration",
  declarationTruthfulness: "I declare that all information provided in this form is true and accurate to the best of my knowledge.",
  declarationAdditionalInfo: "I understand that providing false information may result in the claim being rejected.",
  declarationDocuments: "I confirm that all supporting documents provided are genuine and unaltered.",
  dataPrivacyNotice: "Data Privacy Notice",
  dataUsePurpose: "The information collected in this form will be used to process your insurance claim.",
  dataSecurity: "We take appropriate measures to protect your personal information.",
  dataSharing: "Your information may be shared with relevant third parties for claim processing purposes.",
  iAcceptTermsAndConditions: "I accept the terms and conditions",
} as const; 