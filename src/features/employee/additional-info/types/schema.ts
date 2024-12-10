import { z } from "zod";
import validator from "validator";

const referencesSchema = z.object({
  name: z.string().min(1),
  relationship: z.string().min(1),
  contactInformation: z
    .string()
    .min(1)
    .refine((val) => validator.isEmail(val) || validator.isMobilePhone(val)),
});

const schema = z.object({
  portfolioLink: z.string().url().optional(),
  availabilityToStart: z.coerce.date().refine((date) => date >= new Date()),
  salaryExpectations: z.number().min(30000).max(1000000),
  references: z.array(referencesSchema).length(3),
});

type Schema = z.infer<typeof schema>;

const defaultValues: Schema = {
  availabilityToStart: new Date(),
  references: [],
  salaryExpectations: 30000,
  portfolioLink: "",
};

export { schema, schema as additionalInfoSchema, type Schema, defaultValues };
