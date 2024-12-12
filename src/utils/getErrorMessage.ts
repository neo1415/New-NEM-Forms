import { ZodError } from "zod";

const getErrorMessage = (error: unknown): string => {
  let message: string;

  if (error instanceof ZodError) {
    message = error.errors[0].message;
  } else if (error instanceof Error) {
    message = error.message;
  } else if (error && typeof error === "object" && "message" in error) {
    message = String(error.message);
  } else if (typeof error === "string") {
    message = error;
  } else {
    message = "Unknown error";
  }

  return message;
};

export { getErrorMessage };
