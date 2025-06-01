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

const otherDriverSchema = z.object({
  carRegistrationNumber: z.string().min(1),
  carMakeModel: z.string().min(1),
  driverName: z.string().min(1),
  driverPhone: z.string().min(1),
  driverAddress: z.string().min(1),
  injuryDamageDescription: z.string().min(1).max(1000),
});

const schema = z
  .object({
  witness:  z.array(witnessSchema).min(1),
  otherWitnessPassengers: z.string().optional(),
  WitnessPassenger: z.array(WitnessPassengerEnum).min(1),
  otherVehiclesInvolved: z.string().min(1),
  otherDrivers: z.array(otherDriverSchema).optional(),
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

    if (data.otherVehiclesInvolved === "Yes" && (!data.otherDrivers || data.otherDrivers.length === 0)) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "At least one other driver must be added when other vehicles are involved",
        path: ["otherDrivers"],
      });
    }
  });

type Schema = z.infer<typeof schema>;

const defaultValues: Schema = {
  witness: [],
  WitnessPassenger: [],
  otherWitnessPassengers: " ",
  otherVehiclesInvolved: "",
  otherDrivers: [],
};

export {
  defaultValues,
  WitnessPassengerEnum,
  schema,
  schema as otherDriversSchema,
  type Schema,
};
