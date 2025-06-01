import { z } from "zod";

const discovererSchema = z.object({
  name: z.string().min(1, "Name is required"),
  position: z.string().min(1, "Position is required"),
  salary: z.string().min(1, "Salary is required"),
});

const keyHolderSchema = z.object({
  name: z.string().min(1, "Name is required"),
  position: z.string().min(1, "Position is required"),
  salary: z.string().min(1, "Salary/Remuneration is required"),
});

export const schema = z.object({
  incidentDateTime: z.date(),
  incidentLocation: z.string().min(1, "Incident location is required"),
  
  // Transit Loss
  isTransitLoss: z.boolean(),
  transitLossDiscoverers: z.array(discovererSchema).optional(),
  policeEscortPresent: z.boolean().optional(),
  policeEscortDetails: z.string().optional(),
  employeeIntegrityCheck: z.boolean().optional(),
  employeeIntegrityDetails: z.string().optional(),

  // Safe Loss
  isSafeLoss: z.boolean(),
  safeLossDiscoverers: z.array(z.string()).optional(),
  safeInstallationDate: z.date().optional(),
  safeManufacturer: z.string().optional(),
  safeModel: z.string().optional(),
  keyHolders: z.array(keyHolderSchema).optional(),

  // Loss Amount
  lossAmount: z.string().min(1, "Loss amount is required"),
  lossDescription: z.string().min(1, "Loss description is required"),

  // Police Notification
  policeNotified: z.boolean(),
  policeStation: z.string().optional(),
  policeReference: z.string().optional(),

  // Previous Loss
  previousLoss: z.boolean(),
  previousLossDetails: z.string().optional(),
});

export type Schema = z.infer<typeof schema>;

export const defaultValues: Schema = {
  incidentDateTime: new Date(),
  incidentLocation: "",
  
  isTransitLoss: false,
  transitLossDiscoverers: [],
  policeEscortPresent: false,
  policeEscortDetails: "",
  employeeIntegrityCheck: false,
  employeeIntegrityDetails: "",

  isSafeLoss: false,
  safeLossDiscoverers: [],
  safeInstallationDate: new Date(),
  safeManufacturer: "",
  safeModel: "",
  keyHolders: [],

  lossAmount: "",
  lossDescription: "",

  policeNotified: false,
  policeStation: "",
  policeReference: "",

  previousLoss: false,
  previousLossDetails: "",
}; 