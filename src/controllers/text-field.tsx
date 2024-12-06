import {
  TextField as MuiTextField,
  TextFieldProps as MuiTextFieldProps,
} from "@mui/material";
import { forwardRef, ReactElement, Ref } from "react";
import { Controller, FieldValues, Path, useFormContext } from "react-hook-form";

type TextFieldProps<T extends FieldValues> = Omit<
  MuiTextFieldProps,
  "name" | "error" | "helperText"
> & {
  name: Path<T>;
};

const TextField = forwardRef(
  <T extends FieldValues>(
    { name, ...textFieldProps }: TextFieldProps<T>,
    ref: Ref<HTMLInputElement>
  ) => {
    const { control } = useFormContext<T>();

    return (
      <Controller
        name={name}
        control={control}
        render={({ field, fieldState: { error } }) => (
          <MuiTextField
            {...textFieldProps}
            {...field}
            inputRef={ref}
            error={!!error}
            helperText={error?.message}
          />
        )}
      />
    );
  }
) as <T extends FieldValues>(
  props: TextFieldProps<T> & { ref?: Ref<HTMLInputElement> }
) => ReactElement;

export { TextField };
