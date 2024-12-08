import {
  DatePicker as MuiDatePicker,
  DatePickerProps as MuiDatePickerProps,
} from "@mui/x-date-pickers";
import { forwardRef, ReactElement, Ref } from "react";
import { Controller, FieldValues, Path, useFormContext } from "react-hook-form";

type DatePickerProps<T extends FieldValues> = Omit<
  MuiDatePickerProps<Date>,
  "name" | "value" | "onChange"
> & {
  name: Path<T>;
};

const DatePicker = forwardRef(
  <T extends FieldValues>(
    { name, ...datePickerProps }: DatePickerProps<T>,
    ref: Ref<HTMLDivElement>
  ) => {
    const { control } = useFormContext<T>();

    return (
      <Controller
        name={name}
        control={control}
        render={({ field: { onChange, value }, fieldState: { error } }) => {
          const isValidDate = (val: unknown): val is Date => {
            return val instanceof Date && !isNaN(val.getTime());
          };

          const dateValue = isValidDate(value)
            ? value
            : value
            ? new Date(value as string)
            : null;

          return (
            <MuiDatePicker
              {...datePickerProps}
              value={dateValue}
              onChange={(newValue) => {
                const finalValue = isValidDate(newValue)
                  ? newValue.toISOString()
                  : newValue;
                onChange(finalValue);
              }}
              ref={ref}
              slotProps={{
                ...datePickerProps.slotProps,
                textField: {
                  ...datePickerProps.slotProps?.textField,
                  error: !!error,
                  helperText: error?.message,
                },
              }}
            />
          );
        }}
      />
    );
  }
) as <T extends FieldValues>(
  props: DatePickerProps<T>,
  ref: Ref<HTMLDivElement>
) => ReactElement;

export { DatePicker };
