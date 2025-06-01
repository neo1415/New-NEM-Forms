import { z } from "zod";

const schema = z.object({
  incidentDateTime: z
    .string()
    .refine((val) => !isNaN(new Date(val).getTime()), {
      message: "Invalid date and time",
    }),
  incidentLocation: z.string().min(1).max(100),
  incidentDescription: z.string().min(1).max(500),
})


type Schema = z.infer<typeof schema>;

const defaultValues: Schema = {
  incidentDateTime: "",
  incidentLocation: "",
  incidentDescription: "",

};

export {
  schema,
  schema as motorIncidentDetailsSchema,
  type Schema,
  defaultValues,
};