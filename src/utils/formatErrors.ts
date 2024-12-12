import { d } from "@/utils/dictionary";
import { FieldErrors } from "react-hook-form";

type ErrorMessage = {
  field: string;
  label: string;
  message: string | undefined;
};

const humanizeFieldName = (field: string): string => {
  return field
    .split(/(?=[A-Z])/)
    .join(" ")
    .replace(/^./, (str) => str.toUpperCase());
};

const formatErrors = <T extends Record<string, unknown>>(
  errors: FieldErrors<T>
): ErrorMessage[] => {
  const formattedErrors: ErrorMessage[] = [];

  const processErrors = (obj: any, parentField = ""): void => {
    // Guard clause for null/undefined
    if (!obj || typeof obj !== "object") {
      return;
    }

    make nested array object error better and categorize them
    Object.entries(obj).forEach(([key, value]) => {
      // Skip if key or value is undefined
      if (!key || value === undefined) {
        return;
      }

      const currentField = parentField ? `${parentField}.${key}` : key;

      if (Array.isArray(value)) {
        // Handle array fields (like previousEmployers)
        value.forEach((item, index) => {
          if (item) {
            processErrors(item, `${currentField}[${index}]`);
          }
        });
      } else if (value && typeof value === "object") {
        if (value.message) {
          // This is an error object
          formattedErrors.push({
            field: currentField,
            label: d[key as keyof typeof d] || humanizeFieldName(key),
            message: value.message,
          });
        } else {
          // This is a nested object
          processErrors(value, currentField);
        }
      }
    });
  };

  try {
    processErrors(errors);
  } catch (error) {
    console.error("Error processing form errors:", error);
  }

  return formattedErrors;
};

export { formatErrors };
