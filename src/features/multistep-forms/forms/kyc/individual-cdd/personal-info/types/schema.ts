// src/features/kyc/pages/schemas/personal-info.ts

import { z } from "zod";

const schema = z.object({
  title: z.string().min(1, "Title is required"),
  firstName: z.string().min(1, "First Name is required"),
  lastName: z.string().min(1, "Last Name is required"),
  contactAddress: z.string().min(1, "Contact Address is required"),
  gender: z.enum(["male", "female"]),
  country: z.string().min(1, "Residence Country is required"),
  dateOfBirth: z.date({ required_error: "Date of Birth is required" }),
  placeOfBirth: z.string().min(1, "Place of Birth is required"),
  emailAddress: z.string().email("Invalid email address"),
  GSMno: z.string().min(1, "Mobile Number is required"),
  residentialAddress: z.string().min(1, "Residential Address is required"),
  nationality: z.string().min(1, "Nationality is required"),
  occupation: z.string().min(1, "Occupation is required"),
  position: z.string().optional(),
});

type Schema = z.infer<typeof schema>;

const defaultValues: Schema = {
  title: "",
  firstName: "",
  lastName: "",
  contactAddress: "",
  gender: "male",
  country: "",
  dateOfBirth: new Date(),
  placeOfBirth: "",
  emailAddress: "",
  GSMno: "",
  residentialAddress: "",
  nationality: "",
  occupation: "",
  position: "",
};

export { schema, defaultValues, type Schema };
