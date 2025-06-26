import { useController, Control, FieldValues, Path } from "react-hook-form";
import { DatePicker as MuiDatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";

interface Props<T extends FieldValues> {
  name: Path<T>;
  label: string;
  minDate?: Date;
  maxDate?: Date;
  control?: Control<T>;
}

export const DatePicker = <T extends FieldValues>({
  name,
  label,
  minDate,
  maxDate,
  control,
}: Props<T>) => {
  const {
    field: { onChange, value },
    fieldState: { error },
  } = useController({
    name,
    control,
  });

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <MuiDatePicker
        label={label}
        value={value}
        onChange={onChange}
        minDate={minDate}
        maxDate={maxDate}
        slotProps={{
          textField: {
            fullWidth: true,
            error: !!error,
            helperText: error?.message,
          },
        }}
      />
    </LocalizationProvider>
  );
};
