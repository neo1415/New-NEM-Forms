import { useFormContext } from "@/features/form/hooks/useFormContext";
import {
  TextField as MuiTextField,
  TextFieldProps as MuiTextFieldProps,
  SxProps,
  Theme,
} from "@mui/material";
import { forwardRef, ReactElement, Ref } from "react";
import { Controller, FieldValues, Path } from "react-hook-form";

type TextAreaProps<T extends FieldValues> = Omit<
  MuiTextFieldProps,
  "name" | "error" | "helperText"
> & {
  name: Path<T>;
};

const TextArea = forwardRef(
  <T extends FieldValues>(
    { name, sx, rows = 4, ...textFieldProps }: TextAreaProps<T>,
    ref: Ref<HTMLInputElement>
  ) => {
    const { control, readOnly } = useFormContext<T>();

    const defaultSx: SxProps<Theme> = {
      width: 1,
      ...sx,
    };

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
            multiline
            rows={rows}
            sx={defaultSx}
            inputProps={{
              readOnly,
              ...(readOnly && { type: undefined }),
            }}
          />
        )}
      />
    );
  }
) as <T extends FieldValues>(
  props: TextAreaProps<T> & { ref?: Ref<HTMLInputElement> }
) => ReactElement;

export { TextArea };
