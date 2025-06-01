import { z } from "zod";

const witnessSchema = z.object({
  name: z.string().min(1, "Name is required"),
  address: z.string().min(1, "Address is required"),
  employmentStatus: z.enum(["Employee", "Independent"], {
    required_error: "Employment status is required",
  }),
});

export const schema = z.object({
  accidentDateTime: z.date({
    required_error: "Accident date and time is required",
    invalid_type_error: "Invalid date format",
  }),
  accidentLocation: z.string().min(1, "Accident location is required"),
  accidentDetails: z.string().min(1, "Accident details are required"),
  witnesses: z.array(witnessSchema),
  workDescription: z.string().min(1, "Work description is required"),
  responsiblePersonName: z.string().min(1, "Name of responsible person is required"),
  responsiblePersonAddress: z.string().min(1, "Address of responsible person is required"),
  employerName: z.string().optional(),
  employerAddress: z.string().optional(),
  policeNotified: z.boolean(),
  policeOfficerNumber: z.string().optional(),
  policeStation: z.string().optional(),
  otherPolicies: z.boolean(),
  otherPoliciesDetails: z.string().optional(),
  claimantName: z.string().min(1, "Claimant name is required"),
  claimantAddress: z.string().min(1, "Claimant address is required"),
  injuryOrDamageNature: z.string().min(1, "Nature of injury or damage is required"),
  claimNoticeReceived: z.boolean(),
  claimNoticeDetails: z.string().optional(),
  claimDocuments: z.instanceof(File).optional(),
});

export type Schema = z.infer<typeof schema>;

export const defaultValues: Schema = {
  accidentDateTime: new Date(),
  accidentLocation: "",
  accidentDetails: "",
  witnesses: [],
  workDescription: "",
  responsiblePersonName: "",
  responsiblePersonAddress: "",
  employerName: "",
  employerAddress: "",
  policeNotified: false,
  policeOfficerNumber: "",
  policeStation: "",
  otherPolicies: false,
  otherPoliciesDetails: "",
  claimantName: "",
  claimantAddress: "",
  injuryOrDamageNature: "",
  claimNoticeReceived: false,
  claimNoticeDetails: "",
  claimDocuments: undefined,
}; 