import { z } from "zod";
import { ApiWitnessPassengerEnum } from "./apiTypes";

const WitnessPassengerEnum = z.nativeEnum(ApiWitnessPassengerEnum);

const witnessSchema = z.object({
  witnessName: z.string().min(1),
  witnessPhone: z.string().min(1),
  witnessAddress: z.string().max(1000),
});

// const educationalInstitutionsSchema = z.object({
//   institutionName: z.string().min(1),
//   degree: z.string().min(1),
//   fieldOfStudy: z.string().min(1),
//   graduationYear: z.coerce.date().max(new Date()).min(calculatePastDate(100)),
// });

const schema = z
  .object({
  witness:  z.array(witnessSchema).min(1),
  otherWitnessPassengers: z.string().optional(),
  WitnessPassenger: z.array(WitnessPassengerEnum).min(1),
  })
  .superRefine((data, ctx) => {
    const hasOtherWitnessPassengers =
      data.WitnessPassenger.includes(
        WitnessPassengerEnum.enum.MORE
      );

    if (hasOtherWitnessPassengers && !data.otherWitnessPassengers) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Required",
        path: ["otherWitnessPassengers"],
      });
    }
  });

type Schema = z.infer<typeof schema>;

const defaultValues: Schema = {
  witness: [],
  WitnessPassenger: [],
  otherWitnessPassengers: " "
};

export {
  defaultValues,
WitnessPassengerEnum,
  schema,
  schema as WitnessesSchema,
  type Schema,
};
