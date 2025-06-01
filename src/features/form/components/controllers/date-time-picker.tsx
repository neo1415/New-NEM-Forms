import { useFormContext } from "@/features/form/hooks/useFormContext";
import { SxProps, Theme } from "@mui/material";
import {
  DateTimePicker as MuiDateTimePicker,
  DateTimePickerProps as MuiDateTimePickerProps,
} from "@mui/x-date-pickers";
import { forwardRef, ReactElement, Ref } from "react";
import { Controller, FieldValues, Path } from "react-hook-form";

type DateTimePickerProps<T extends FieldValues> = Omit<
  MuiDateTimePickerProps<Date>,
  "name" | "value" | "onChange"
> & {
  name: Path<T>;
};

const DateTimePicker = forwardRef(
  <T extends FieldValues>(
    { name, sx, ...dateTimePickerProps }: DateTimePickerProps<T>,
    ref: Ref<HTMLDivElement>
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
        render={({ field: { onChange, value }, fieldState: { error } }) => {
          const isValidDate = (val: unknown): val is Date =>
            val instanceof Date && !isNaN(val.getTime());

          const dateValue = isValidDate(value)
            ? value
            : value
            ? new Date(value as string)
            : null;

          return (
            <MuiDateTimePicker
              {...dateTimePickerProps}
              value={dateValue}
              onChange={(newValue) => {
                const finalValue = isValidDate(newValue)
                  ? newValue.toISOString()
                  : newValue;
                onChange(finalValue);
              }}
              ref={ref}
              disableOpenPicker={readOnly}
              sx={defaultSx}
              readOnly={readOnly}
             ampm={true} // AM/PM format// 24hr format; change to true if you prefer AM/PM
              minutesStep={1} // No seconds, step by 1 minute
              slotProps={{
                ...dateTimePickerProps.slotProps,
                textField: {
                  ...dateTimePickerProps.slotProps?.textField,
                  error: !!error,
                  helperText: error?.message,
                  name,
                },
              }}
            />
          );
        }}
      />
    );
  }
) as <T extends FieldValues>(
  props: DateTimePickerProps<T>,
  ref: Ref<HTMLDivElement>
) => ReactElement;

export { DateTimePicker };
