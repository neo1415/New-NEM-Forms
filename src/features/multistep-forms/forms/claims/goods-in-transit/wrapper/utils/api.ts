import { Schema } from "../types/schema";

export const create = async (data: Schema) => {
  // TODO: Implement actual API call
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(data);
    }, 1000);
  });
}; 