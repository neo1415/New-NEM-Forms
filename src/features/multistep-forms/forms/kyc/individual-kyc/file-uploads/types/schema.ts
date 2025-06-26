import { z } from "zod";

const schema = z.object({
  identification: z.instanceof(File, { message: "Please upload your means of identification" }).nullable(),
});

type Schema = z.infer<typeof schema>;

const defaultValues: Schema = {
  identification: null,
};

export { schema, type Schema, defaultValues }; 