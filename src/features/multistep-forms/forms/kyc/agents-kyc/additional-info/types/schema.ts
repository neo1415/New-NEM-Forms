import { z } from "zod";
import validator from "validator";

const schema = z.object({
  agentsName: z.string().min(1, "Agent name is required."),
  agentsAddress: z.string().min(1, "Agent address is required."),
  naicomNo: z.string().min(1, "NAICOM license number is required."),
  licenseIssuedDate: z.coerce.date({
    errorMap: () => ({ message: "License issue date is required." }),
  }),
  licenseExpiryDate: z.coerce.date({
    errorMap: () => ({ message: "License expiry date is required." }),
  }),
  agentsEmail: z.string().email("Invalid email address."),
  website: z.string().url("Invalid website URL.").optional(),
  mobileNo: z
    .string()
    .min(1, "Mobile number is required.")
    .refine((val) => validator.isMobilePhone(val.replace(/^\+\d+\s/, ""), "en-NG"), {
      message: "Enter a valid mobile number.",
    }),
  taxIDNo: z.string().min(1, "Tax ID number is required."),
  arian: z.string().min(1, "ARIAN membership number is required."),
  listOfAgents: z.string().min(1, "List of approved principals is required."),
  country: z.string().min(1, "Country is required."),
  state: z.string().min(1, "State is required."),
  city: z.string().min(1, "City is required."),
});

type Schema = z.infer<typeof schema>;

const defaultValues: Schema = {
  agentsName: "",
  agentsAddress: "",
  naicomNo: "",
  licenseIssuedDate: new Date(),
  licenseExpiryDate: new Date(),
  agentsEmail: "",
  website: "",
  mobileNo: "",
  taxIDNo: "",
  arian: "",
  listOfAgents: "",
  country: "",
  state: "",
  city: "",
};

export { schema, schema as agentsKYCAdditionalInfoSchema, type Schema, defaultValues }; 