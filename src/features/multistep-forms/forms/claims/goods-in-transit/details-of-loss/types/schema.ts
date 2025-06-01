import { z } from "zod";

const goodsEntrySchema = z.object({
  quantity: z.string().min(1, "Quantity is required"),
  description: z.string().min(1, "Description is required"),
  value: z.string().min(1, "Value is required"),
  invoiceFile: z.instanceof(File).optional(),
  deliveryNoteFile: z.instanceof(File).optional(),
  receiptFile: z.instanceof(File).optional(),
  correspondenceFile: z.instanceof(File).optional(),
});

const witnessSchema = z.object({
  name: z.string().min(1, "Name is required"),
  address: z.string().min(1, "Address is required"),
});

export const schema = z.object({
  // Loss details
  dateOfLoss: z.coerce.date({
    required_error: "Date of loss is required",
    invalid_type_error: "Invalid date format",
  }),
  timeOfLoss: z.string().min(1, "Time of loss is required"),
  timeOfLossPeriod: z.enum(["am", "pm"]),
  placeOfOccurrence: z.string().min(1, "Place of occurrence is required"),
  goodsConcerned: z.string().min(1, "Description of goods is required"),
  numberOfPackages: z.string().min(1, "Number of packages is required"),
  totalWeight: z.string().min(1, "Total weight is required"),
  totalValue: z.string().min(1, "Total value is required"),
  goodsPacking: z.string().min(1, "Packing details are required"),
  circumstancesOfLoss: z.string().min(1, "Circumstances of loss are required"),

  // Vehicle involvement
  isVehicleInvolved: z.enum(["true", "false"]),
  vehicleOwnerName: z.string().optional(),
  vehicleOwnerAddress: z.string().optional(),

  // Witness details
  witnesses: z.array(witnessSchema),

  // Police details
  policeStationAddress: z.string().min(1, "Police station address is required"),
  dateReportedToPolice: z.coerce.date({
    required_error: "Date reported is required",
    invalid_type_error: "Invalid date format",
  }),

  // Dispatch details
  dispatchAddress: z.string().min(1, "Dispatch address is required"),
  dateDispatched: z.coerce.date({
    required_error: "Date dispatched is required",
    invalid_type_error: "Invalid date format",
  }),
  consigneeName: z.string().min(1, "Consignee name is required"),
  consigneeAddress: z.string().min(1, "Consignee address is required"),

  // Goods details
  goodsEntries: z.array(goodsEntrySchema).min(1, "At least one goods entry is required"),
  damagedGoodsInspectionAddress: z.string().min(1, "Inspection address is required"),

  // Claim type
  claimType: z.enum(["owner", "carrier"]),

  // Owner section
  goodsTransportMethod: z.string().optional(),
  transporterName: z.string().optional(),
  transporterInsurersName: z.string().optional(),
  transporterInsurersAddress: z.string().optional(),

  // Carrier section
  goodsOwnerName: z.string().optional(),
  goodsOwnerAddress: z.string().optional(),
  goodsOwnerInsurersName: z.string().optional(),
  goodsOwnerInsurersAddress: z.string().optional(),

  // Additional details
  goodsConditionOnReceipt: z.enum(["true", "false"]),
  checkedByDriver: z.enum(["true", "false"]),
  vehicleRegistrationNumber: z.string().min(1, "Vehicle registration number is required"),
  employeesLoadedUnloaded: z.enum(["true", "false"]),
  receiptGiven: z.enum(["true", "false"]),
  carriageConditions: z.string().min(1, "Carriage conditions are required"),
  carriageConditionsFile: z.instanceof(File).optional(),
  claimMadeByOwner: z.enum(["true", "false"]),
  dateClaimReceived: z.coerce.date().optional(),
}).refine(
  (data) => {
    if (data.isVehicleInvolved === "true") {
      return data.vehicleOwnerName && data.vehicleOwnerAddress;
    }
    return true;
  },
  {
    message: "Vehicle owner details are required when a vehicle is involved",
    path: ["vehicleOwnerName"],
  }
).refine(
  (data) => {
    if (data.claimType === "owner") {
      return data.goodsTransportMethod && data.transporterName && 
             data.transporterInsurersName && data.transporterInsurersAddress;
    }
    return true;
  },
  {
    message: "All owner section fields are required when claiming as owner",
    path: ["goodsTransportMethod"],
  }
).refine(
  (data) => {
    if (data.claimType === "carrier") {
      return data.goodsOwnerName && data.goodsOwnerAddress && 
             data.goodsOwnerInsurersName && data.goodsOwnerInsurersAddress;
    }
    return true;
  },
  {
    message: "All carrier section fields are required when claiming as carrier",
    path: ["goodsOwnerName"],
  }
).refine(
  (data) => {
    if (data.claimMadeByOwner === "true") {
      return !!data.dateClaimReceived;
    }
    return true;
  },
  {
    message: "Date claim received is required when claim is made by owner",
    path: ["dateClaimReceived"],
  }
);

export type Schema = z.infer<typeof schema>;

export const defaultValues: Schema = {
  dateOfLoss: new Date(),
  timeOfLoss: "",
  timeOfLossPeriod: "am",
  placeOfOccurrence: "",
  goodsConcerned: "",
  numberOfPackages: "",
  totalWeight: "",
  totalValue: "",
  goodsPacking: "",
  circumstancesOfLoss: "",
  isVehicleInvolved: "false",
  vehicleOwnerName: "",
  vehicleOwnerAddress: "",
  witnesses: [],
  policeStationAddress: "",
  dateReportedToPolice: new Date(),
  dispatchAddress: "",
  dateDispatched: new Date(),
  consigneeName: "",
  consigneeAddress: "",
  goodsEntries: [],
  damagedGoodsInspectionAddress: "",
  claimType: "owner",
  goodsTransportMethod: "",
  transporterName: "",
  transporterInsurersName: "",
  transporterInsurersAddress: "",
  goodsOwnerName: "",
  goodsOwnerAddress: "",
  goodsOwnerInsurersName: "",
  goodsOwnerInsurersAddress: "",
  goodsConditionOnReceipt: "false",
  checkedByDriver: "false",
  vehicleRegistrationNumber: "",
  employeesLoadedUnloaded: "false",
  receiptGiven: "false",
  carriageConditions: "",
  claimMadeByOwner: "false",
  dateClaimReceived: undefined,
}; 