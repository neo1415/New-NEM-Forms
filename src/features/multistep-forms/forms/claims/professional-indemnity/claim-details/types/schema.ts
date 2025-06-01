import { z } from "zod";
import { d } from "@/utils/professionalIndemnityDictionary/dictionary";

export const schema = z.object({
  claimNature: z.string({
    required_error: d.invalidFormData,
  }),
  claimAwarenessDate: z.date({
    required_error: d.invalidFormData,
  }),
  claimIntimationDate: z.date({
    required_error: d.invalidFormData,
  }),
  isClaimWritten: z.boolean({
    required_error: d.invalidFormData,
  }),
  oralClaimDetails: z.string().optional(),
  claimAmount: z.string({
    required_error: d.invalidFormData,
  }),
});

export type Schema = z.infer<typeof schema>;

export const defaultValues: Schema = {
  claimNature: "",
  claimAwarenessDate: new Date(),
  claimIntimationDate: new Date(),
  isClaimWritten: false,
  oralClaimDetails: "",
  claimAmount: "",
}; 