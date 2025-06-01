import { z } from "zod";

export const schema = z.object({
  accidentDateTime: z.string().min(1, "Date and time of accident is required"),
  place: z.string().min(1, "Place is required"),
  incidentDescription: z.string().min(1, "Incident description is required"),
  particularsOfInjuries: z.string().min(1, "Particulars of injuries is required"),
  witnesses: z.array(
    z.object({
      name: z.string().min(1, "Name is required"),
      address: z.string().min(1, "Address is required"),
    })
  ),
  doctorName: z.string().min(1, "Doctor's name is required"),
  doctorAddress: z.string().min(1, "Doctor's address is required"),
  isUsualDoctor: z.boolean(),
  totalIncapacitationFrom: z.date({
    required_error: "From date is required",
    invalid_type_error: "Invalid date format",
  }),
  totalIncapacitationTo: z.date({
    required_error: "To date is required",
    invalid_type_error: "Invalid date format",
  }),
  partialIncapacitationFrom: z.date({
    required_error: "From date is required",
    invalid_type_error: "Invalid date format",
  }),
  partialIncapacitationTo: z.date({
    required_error: "To date is required",
    invalid_type_error: "Invalid date format",
  }),
  insurers: z.array(
    z.object({
      name: z.string().min(1, "Name is required"),
      address: z.string().min(1, "Address is required"),
      policyNumber: z.string().min(1, "Policy number is required"),
    })
  ),
});

export type Schema = z.infer<typeof schema>;

export const defaultValues: Schema = {
  accidentDateTime: "",
  place: "",
  incidentDescription: "",
  particularsOfInjuries: "",
  witnesses: [],
  doctorName: "",
  doctorAddress: "",
  isUsualDoctor: false,
  totalIncapacitationFrom: new Date(),
  totalIncapacitationTo: new Date(),
  partialIncapacitationFrom: new Date(),
  partialIncapacitationTo: new Date(),
  insurers: [],
}; 