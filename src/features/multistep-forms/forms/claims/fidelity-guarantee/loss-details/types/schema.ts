import { z } from "zod";

const schema = z.object({
  defaulterName: z.string().min(1, "Name of defaulter is required"),
  defaulterAge: z.string().min(1, "Age is required"),
  defaulterAddress: z.string().min(1, "Present address is required"),
  defaulterOccupation: z.string().min(1, "Occupation is required"),
  discoveryDate: z.date(),
  defaultDuration: z.string().min(1, "Default duration and manner is required"),
  defaultAmount: z.string().min(1, "Default amount is required"),
  previousIrregularity: z.boolean(),
  previousIrregularityDetails: z.string().optional(),
  lastCheckDate: z.date(),
  defaulterProperty: z.boolean(),
  outstandingRemuneration: z.boolean(),
  additionalSecurity: z.boolean(),
  discharged: z.boolean(),
  dischargeDate: z.date().optional(),
  settlementProposal: z.boolean(),
}).refine(
  (data) => data.previousIrregularity === false || data.previousIrregularityDetails?.length,
  {
    path: ["previousIrregularityDetails"],
    message: "Please provide details of previous irregularities.",
  }
).refine(
  (data) => data.discharged === false || data.dischargeDate,
  {
    path: ["dischargeDate"],
    message: "Please provide the date of discharge.",
  }
);

type Schema = z.infer<typeof schema>;

const defaultValues: Schema = {
  defaulterName: "",
  defaulterAge: "",
  defaulterAddress: "",
  defaulterOccupation: "",
  discoveryDate: new Date(),
  defaultDuration: "",
  defaultAmount: "",
  previousIrregularity: false,
  previousIrregularityDetails: "",
  lastCheckDate: new Date(),
  defaulterProperty: false,
  outstandingRemuneration: false,
  additionalSecurity: false,
  discharged: false,
  dischargeDate: undefined,
  settlementProposal: false,
};

export { schema, type Schema, defaultValues }; 