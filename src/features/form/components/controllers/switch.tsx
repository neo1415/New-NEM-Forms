import { useFormContext } from "@/features/form/hooks/useFormContext";
import {
  FormControl,
  FormControlLabel,
  FormControlLabelProps,
  Switch as MuiSwitch,
  SwitchProps as MuiSwitchProps,
  useTheme,
} from "@mui/material";
import { forwardRef, ReactElement, Ref } from "react";
import { Controller, FieldValues, Path } from "react-hook-form";

type SwitchProps<T extends FieldValues> = Omit<
  MuiSwitchProps,
  "name" | "checked" | "defaultChecked"
> & {
  name: Path<T>;
  label?: string;
  labelPlacement?: FormControlLabelProps["labelPlacement"];
};

const Switch = forwardRef(
  <T extends FieldValues>(
    {
      name,
      label,
      labelPlacement = "end",
      ...switchProps
    }: SwitchProps<T>,
    ref: Ref<HTMLButtonElement>
  ) => {
    const { control, readOnly } = useFormContext<T>();
    const theme = useTheme();

    return (
      <Controller
        name={name}
        control={control}
        render={({
          field: { value, onChange, ...field },
          fieldState: { error },
        }) => {
          const switchComponent = (
            <MuiSwitch
              {...switchProps}
              {...field}
              inputRef={ref}
              checked={!!value}
              onChange={(event) => onChange(event.target.checked)}
              disabled={readOnly}
            />
          );

          return (
            <FormControl error={!!error}>
              {label ? (
                <FormControlLabel
                  sx={{
                    "& .MuiFormControlLabel-label": {
                      color: error ? theme.palette.error.main : "inherit",
                    },
                  }}
                  disabled={readOnly}
                  control={switchComponent}
                  label={label}
                  labelPlacement={labelPlacement}
                />
              ) : (
                switchComponent
              )}
            </FormControl>
          );
        }}
      />
    );
  }
) as <T extends FieldValues>(
  props: SwitchProps<T> & { ref?: Ref<HTMLButtonElement> }
) => ReactElement;

export { Switch }; 