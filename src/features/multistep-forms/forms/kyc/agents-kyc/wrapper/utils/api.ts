import { Schema } from "../types/schema";

export const create = async (data: Schema) => {
  // TODO: Implement API call to submit KYC data
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(data);
    }, 1000);
  });
}; 