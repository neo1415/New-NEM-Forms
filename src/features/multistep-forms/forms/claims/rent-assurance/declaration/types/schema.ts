import { z } from "zod";
import { d } from "@/utils/rentAssuranceDictionary/dictionary";

export const schema = z.object({
  declarantName: z.string().min(1, "Required"),
  claimAmount: z.string().min(1, "Required"),
  declarationDate: z.date(),
  signature: z.string().min(1, "Required"),
  rentAgreementFile: z.instanceof(File).optional(),
  demandNoteFile: z.instanceof(File).optional(),
  quitNoticeFile: z.instanceof(File).optional(),
});

export const defaultValues = {
  declarantName: "",
  claimAmount: "",
  declarationDate: undefined,
  signature: "",
  rentAgreementFile: undefined,
  demandNoteFile: undefined,
  quitNoticeFile: undefined,
};

export type Schema = z.infer<typeof schema>; 