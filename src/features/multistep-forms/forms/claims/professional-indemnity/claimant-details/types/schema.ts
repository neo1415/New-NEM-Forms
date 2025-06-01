import { z } from "zod";
import { d } from "@/utils/professionalIndemnityDictionary/dictionary";

const schema = z.object({
  claimantName: z.string().min(1, d.invalidFormData),
  claimantAddress: z.string().min(1, d.invalidFormData),
});

type Schema = z.infer<typeof schema>;

const defaultValues: Schema = {
  claimantName: "",
  claimantAddress: "",
};

export { schema, type Schema, defaultValues }; 