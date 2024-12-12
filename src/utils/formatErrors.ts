import { d } from "@/utils/dictionary";
import { FieldErrors } from "react-hook-form";

const formatErrors = <T extends Record<string, unknown>>(
  errors: FieldErrors<T>
) => {
  return Object.entries(errors).map(([field, error]) => ({
    field,
    label: d[field as keyof typeof d] || field,
    message: error?.message,
  }));
};

export { formatErrors };
