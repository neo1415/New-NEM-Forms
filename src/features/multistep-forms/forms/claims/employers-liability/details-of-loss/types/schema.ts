import { z } from "zod";

const witnessSchema = z.object({
  name: z.string().min(1, "Name is required"),
  address: z.string().min(1, "Address is required"),
});

const monthlyEarningSchema = z.object({
  monthEnding: z.date({
    required_error: "Month ending is required",
    invalid_type_error: "Invalid date format",
  }),
  wagesAndBonus: z.string().min(1, "Wages and bonus is required"),
  reasonForAbsence: z.string().optional(),
});

export const schema = z.object({
  // Section 1
  injuredPartyName: z.string().min(1, "Name is required"),
  injuredPartyAge: z.string().min(1, "Age is required"),
  injuredPartyAddress: z.string().min(1, "Address is required"),
  averageMonthlyEarnings: z.string().min(1, "Average monthly earnings is required"),
  occupation: z.string().min(1, "Occupation is required"),
  isDirectEmployee: z.enum(["true", "false"]),
  employmentDate: z.date().optional(),
  maritalStatus: z.enum(["single", "married", "widowed"]),
  childrenDetails: z.string().optional(),
  hasPreviousAccidents: z.enum(["true", "false"]),
  previousAccidentsDetails: z.string().optional(),

  // Section 2
  natureOfInjuries: z.string().min(1, "Nature of injuries is required"),
  personInChargeName: z.string().min(1, "Person in charge name is required"),
  personInChargePosition: z.string().min(1, "Person in charge position is required"),

  // Section 3
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

  // Section 4 & 5
  isReceivingMedicalAttention: z.enum(["true", "false"]),
  hospitalName: z.string().optional(),
  hospitalAddress: z.string().optional(),
  doctorName: z.string().optional(),
  doctorAddress: z.string().optional(),

  // Section 6
  isTotallyDisabled: z.enum(["true", "false"]),
  dateStoppedWorking: z.date().optional(),
  expectedDisablementDuration: z.string().optional(),
  canPerformDuties: z.enum(["true", "false"]).optional(),
  currentServicesWorth: z.string().optional(),
  hasClaimBeenMade: z.enum(["true", "false"]).optional(),

  // Section 7 & 8
  witnesses: z.array(witnessSchema),
  otherInsurers: z.array(z.object({
    name: z.string().min(1, "Name is required"),
    address: z.string().min(1, "Address is required"),
    policyNumber: z.string().min(1, "Policy number is required"),
  })),

  // Statement of Earnings
  monthlyEarnings: z.array(monthlyEarningSchema).min(12, "12 months of earnings are required"),
  monthlyAllowanceValue: z.string().min(1, "Monthly allowance value is required"),
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
  maritalStatus: "single",
  childrenDetails: "",
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
  monthlyEarnings: Array(12).fill({
    monthEnding: new Date(),
    wagesAndBonus: "",
    reasonForAbsence: "",
  }),
  monthlyAllowanceValue: "",
}; 