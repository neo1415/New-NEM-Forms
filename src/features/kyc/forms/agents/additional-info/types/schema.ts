import { z } from "zod";
import { schema as locationSchema } from "@/features/kyc/shared/components/location-field/types/schema";

const schema = z.object({
  agentsName: z.string().min(1, "Agent's name is required"),
  agentsAddress: z.string().min(1, "Agent's office address is required"),
  naicomNo: z.string().min(1, "NAICOM license number is required"),
  lisenceIssuedDate: z.coerce.date({
    errorMap: () => ({ message: "License issue date is required" }),
  }),
  lisenceExpiryDate: z.coerce.date({
    errorMap: () => ({ message: "License expiry date is required" }),
  }),
  agentsEmail: z.string().email("Invalid email address"),
  website: z.string().optional(),
  mobileNumber: z.string().min(1, "Mobile number is required"),
  taxIDNo: z.string().optional(),
  arian: z.string().min(1, "ARIAN membership number is required"),
  listOfAgents: z.string().optional(),
  ...locationSchema.shape,
});

export type Schema = z.infer<typeof schema>;

export const defaultValues: Schema = {
  agentsName: "",
  agentsAddress: "",
  naicomNo: "",
  lisenceIssuedDate: new Date(),
  lisenceExpiryDate: new Date(),
  agentsEmail: "",
  website: "",
  mobileNumber: "",
  taxIDNo: "",
  arian: "",
  listOfAgents: "",
  country: "",
  state: "",
  city: "",
};

export { schema }; 