export const d = {
  // Common
  saveAndContinue: "Save & Continue",
  close: "Close",
  submit: "Submit",
  confirmInformation: "Confirm Information",

  // Sections
  insuredDetails: "Insured Details",
  detailsOfLoss: "Details of Loss",
  particularsOfClaimant: "Particulars of Possible Claimant",
  review: "Review",

  // Insured Details
  policyNumber: "Policy Number",
  coverPeriodFrom: "Period of Cover From",
  coverPeriodTo: "Period of Cover To",
  companyName: "Company Name (If Applicable)",
  address: "Address",
  phone: "Phone",
  email: "Email",
  alertPreference: "Alert Preference",
  alertPreferenceDescription: "We can send you alerts for any update on your claim. Please confirm how you would prefer to receive your alert",
  alertPreferenceOptions: ["Email", "SMS", "Both"],

  // Details of Loss
  accidentDateTime: "Date and Time of Accident",
  accidentLocation: "Place where accident occurred",
  accidentDetails: "Give full details of how accident occurred",
  
  // Witnesses
  witnesses: "Witnesses",
  witnessName: "Name",
  witnessAddress: "Address",
  employmentStatus: "Employment Status",
  employmentStatusOptions: ["Employee", "Independent"],
  addWitness: "Add Witness",
  removeWitness: "Remove",

  // Work and Responsibility
  workDescription: "What work were you or your employees engaged to do?",
  responsiblePersonName: "Name of Person who caused or who was to blame for the accident",
  responsiblePersonAddress: "Address of Person who caused or who was to blame for the accident",
  employerName: "Name of employer (if other than insured)",
  employerAddress: "Address of employer (if other than insured)",

  // Police Details
  policeNotified: "Were particulars taken by Police?",
  policeOfficerNumber: "Police Officer Number",
  policeStation: "Police Station",

  // Other Policies
  otherPolicies: "Do you hold any other policies covering you for this accident?",
  otherPoliciesDetails: "If YES, give particulars",

  // Claimant Details
  claimantName: "Name of Claimant",
  claimantAddress: "Address of Claimant",
  injuryOrDamageNature: "State nature of injury or damage",
  claimNoticeReceived: "Have you received notice of claims?",
  claimNoticeDetails: "If YES, from whom, when and in what form?",
  claimDocuments: "Upload claim documents",
  claimDocumentsNote: "If claims is in writing, please upload the form",

  // Declaration
  declarationTitle: "Declaration",
  declarationTruthfulness: "I/We declare to the best of my/our knowledge and belief that the information given on this form is true in every respect and agree that if I/we have made any false or fraudulent statement, be it suppression or concealment, the policy shall be cancelled and the claim shall be forfeited.",
  declarationAdditionalInfo: "I/We agree to provide additional information to NEM Insurance, if required.",
  declarationDocuments: "I/We agree to submit all required and requested for documents and NEM Insurance shall not be held responsible for any delay in settlement of claim due to non-fulfillment of requirements.",
  
  // Data Privacy
  dataPrivacyNotice: "Data Privacy Notice",
  dataUsePurpose: "i. Your data will solemnly be used for the purposes of this business contract and also to enable us reach you with the updates about our products and services.",
  dataSecurity: "ii. Please note that your personal data will be treated with utmost respect and is well secured as required by Nigeria Data Protection Regulations 2019.",
  dataSharing: "iii. Your personal data shall not be shared with or sold to any third-party without your consent unless we are compelled by law or regulator.",
  
  // Terms and Conditions
  iAcceptTermsAndConditions: "I accept the terms and conditions",

  // Particulars of Claimant
  claimFromWhom: "From whom",
  claimWhen: "When",
  claimInWhatForm: "In what form",
  isClaimInWriting: "Is the claim in writing?",
  uploadClaimForm: "Upload claim form (PDF, JPG, JPEG, PNG, max 5MB)",
} as const; 