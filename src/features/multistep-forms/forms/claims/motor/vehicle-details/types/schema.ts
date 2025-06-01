import { z } from "zod";

const schema = z.object({
    vehicleRegisteredInName: z.boolean(),
    registeredInYourNameDetails: z.string().max(200).optional(),

    vehicleOwnership: z.boolean(),
    ownershipDetails: z.string().max(200).optional(),

    hirePurchase: z.boolean(),
    hirePurchaseDetails: z.string().max(200).optional(),

  vehicleUsage: z.string().min(1).max(100),
  trailerAttached: z.boolean(),
  vehicleRegistrationNumber: z.string().min(1).max(20),
  vehicleMakeModel: z.string().min(1).max(100),
  vehicleYear: z
    .string()
    .regex(/^\d{4}$/, "Year must be a 4-digit number")
    .refine((val) => {
      const year = parseInt(val);
      const currentYear = new Date().getFullYear();
      return year >= 1900 && year <= currentYear;
    }, "Enter a valid year"),
  engineNumber: z.string().min(1).max(50),
  chassisNumber: z.string().min(1).max(50),
  vehicleDamageDescription: z.string().min(1).max(500),
  vehicleInspectionAddress: z.string().min(1).max(200),
   vehicleInspectionTelephone: z.string().min(1).max(200),
    vehicleInspectionName: z.string().min(1).max(200)
}) .refine(
    (data) =>
      data.vehicleRegisteredInName === false
        ? data.registeredInYourNameDetails?.length
        : true,
    {
      path: ["registeredInYourNameDetails"],
      message: "Please provide details if not registered in your name.",
    }
  )
  .refine(
    (data) =>
      data.vehicleOwnership === false ? data.ownershipDetails?.length : true,
    {
      path: ["ownershipDetails"],
      message: "Please provide details if not owned solely by you.",
    }
  )
  .refine(
    (data) => (data.hirePurchase ? data.hirePurchaseDetails?.length : true),
    {
      path: ["hirePurchaseDetails"],
      message: "Please provide details if vehicle is on hire purchase.",
    }
  );


type Schema = z.infer<typeof schema>;

const defaultValues: Schema = {
  vehicleRegisteredInName: false,
  vehicleOwnership: false,
  hirePurchase: false,
  hirePurchaseDetails: "",
  vehicleUsage: "",
  trailerAttached: false,
  vehicleRegistrationNumber: "",
  vehicleMakeModel: "",
  vehicleYear: "",
  engineNumber: "",
  chassisNumber: "",
  vehicleDamageDescription: "",
  vehicleInspectionAddress: "",
  vehicleInspectionTelephone: "",
  vehicleInspectionName: "",
};

export {
  schema,
  schema as vehicleDetailsSchema,
  type Schema,
  defaultValues,
};