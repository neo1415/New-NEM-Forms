import { z } from "zod";

const witnessSchema = z.object({
  name: z.string().min(1, "Name is required"),
  address: z.string().min(1, "Address is required"),
});

const otherInsurerSchema = z.object({
  name: z.string().min(1, "Name is required"),
  address: z.string().min(1, "Address is required"),
  policyNumber: z.string().min(1, "Policy number is required"),
});

export const schema = z.object({
  // Injured Party Information
  injuredPartyName: z.string().min(1, "Name is required"),
  injuredPartyAge: z.string().min(1, "Age is required"),
  injuredPartyAddress: z.string().min(1, "Address is required"),
  averageMonthlyEarnings: z.string().min(1, "Average monthly earnings is required"),
  occupation: z.string().min(1, "Occupation is required"),
  isDirectEmployee: z.enum(["true", "false"], {
    required_error: "Please specify if the injured party is in your direct employment",
  }),
  employmentDate: z.date().optional(),
  regularEmployerDetails: z.string().optional(),
  employmentDuration: z.string().optional(),
  maritalStatus: z.enum(["single", "married", "widowed"], {
    required_error: "Marital status is required",
  }),
  hasPreviousAccidents: z.enum(["true", "false"], {
    required_error: "Please specify if there were previous accidents",
  }),
  previousAccidentsDetails: z.string().optional(),

  // Injury Details
  natureOfInjuries: z.string().min(1, "Nature of injuries is required"),
  personInChargeName: z.string().min(1, "Person in charge name is required"),
  personInChargePosition: z.string().min(1, "Person in charge position is required"),

  // Accident Details
  accidentDate: z.date({
    required_error: "Accident date is required",
    invalid_type_error: "Invalid date format",
  }),
  accidentTime: z.string().min(1, "Accident time is required"),
  accidentLocation: z.string().min(1, "Accident location is required"),
  dateReported: z.date({
    required_error: "Report date is required",
    invalid_type_error: "Invalid date format",
  }),
  reportedBy: z.string().min(1, "Reporter name is required"),
  dateStoppedWork: z.date({
    required_error: "Date stopped work is required",
    invalid_type_error: "Invalid date format",
  }),
  workEngagedIn: z.string().min(1, "Work description is required"),
  accidentDescription: z.string().min(1, "Accident description is required"),
  wasInjuredPartySober: z.enum(["sober", "intoxicated"]),

  // Medical Details
  isReceivingMedicalAttention: z.enum(["true", "false"], {
    required_error: "Please specify if receiving medical attention",
  }),
  hospitalName: z.string().optional(),
  hospitalAddress: z.string().optional(),
  doctorName: z.string().optional(),
  doctorAddress: z.string().optional(),

  // Disability Details
  isTotallyDisabled: z.enum(["true", "false"], {
    required_error: "Please specify if totally disabled",
  }),
  dateStoppedWorking: z.date().optional(),
  expectedDisablementDuration: z.string().optional(),
  canPerformDuties: z.enum(["true", "false"]).optional(),
  currentServicesWorth: z.string().optional(),
  hasClaimBeenMade: z.enum(["true", "false"]).optional(),

  // Witnesses and Other Insurers
  witnesses: z.array(witnessSchema),
  otherInsurers: z.array(otherInsurerSchema),
}).refine(
  (data) => {
    if (data.isDirectEmployee === "true") {
      return !!data.employmentDate;
    }
    return true;
  },
  {
    message: "Employment date is required for direct employees",
    path: ["employmentDate"],
  }
).refine(
  (data) => {
    if (data.hasPreviousAccidents === "true") {
      return !!data.previousAccidentsDetails;
    }
    return true;
  },
  {
    message: "Previous accidents details are required",
    path: ["previousAccidentsDetails"],
  }
).refine(
  (data) => {
    if (data.isReceivingMedicalAttention === "true") {
      return !!data.hospitalName && !!data.hospitalAddress && !!data.doctorName && !!data.doctorAddress;
    }
    return true;
  },
  {
    message: "Hospital and doctor details are required if receiving medical attention",
    path: ["hospitalName"],
  }
).refine(
  (data) => {
    if (data.isTotallyDisabled === "true") {
      return !!data.dateStoppedWorking && 
             !!data.expectedDisablementDuration && 
             data.canPerformDuties !== undefined &&
             (data.canPerformDuties === "true" ? !!data.currentServicesWorth : true) &&
             data.hasClaimBeenMade !== undefined;
    }
    return true;
  },
  {
    message: "All disability-related fields are required when totally disabled",
    path: ["dateStoppedWorking"],
  }
);

export type Schema = z.infer<typeof schema>;

export const defaultValues: Schema = {
  injuredPartyName: "",
  injuredPartyAge: "",
  injuredPartyAddress: "",
  averageMonthlyEarnings: "",
  occupation: "",
  isDirectEmployee: "false",
  employmentDate: undefined,
  regularEmployerDetails: "",
  employmentDuration: "",
  maritalStatus: "single",
  hasPreviousAccidents: "false",
  previousAccidentsDetails: "",
  natureOfInjuries: "",
  personInChargeName: "",
  personInChargePosition: "",
  accidentDate: new Date(),
  accidentTime: "",
  accidentLocation: "",
  dateReported: new Date(),
  reportedBy: "",
  dateStoppedWork: new Date(),
  workEngagedIn: "",
  accidentDescription: "",
  wasInjuredPartySober: "sober",
  isReceivingMedicalAttention: "false",
  hospitalName: "",
  hospitalAddress: "",
  doctorName: "",
  doctorAddress: "",
  isTotallyDisabled: "false",
  dateStoppedWorking: undefined,
  expectedDisablementDuration: "",
  canPerformDuties: undefined,
  currentServicesWorth: "",
  hasClaimBeenMade: undefined,
  witnesses: [],
  otherInsurers: [],
}; 