import { Schema } from "../types/schema";

export const create = async (data: Schema) => {
  // This is a mock API call
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Form submitted:", data);
      resolve(data);
    }, 2000);
  });
}; 