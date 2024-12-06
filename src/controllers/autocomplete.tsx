import {
  Autocomplete as MuiAutocomplete,
  AutocompleteProps as MuiAutocompleteProps,
  TextField as MuiTextField,
} from "@mui/material";
import { forwardRef, ReactElement, Ref } from "react";
import { Controller, FieldValues, Path, useFormContext } from "react-hook-form";

type AutocompleteOption = {
  label: string;
  value: string | number;
};

type AutocompleteProps<T extends FieldValues> = Omit<
  MuiAutocompleteProps<AutocompleteOption, false, false, false>,
  "renderInput" | "onChange" | "options"
> & {
  name: Path<T>;
  textFieldProps?: Omit<
    React.ComponentProps<typeof MuiTextField>,
    "name" | "error" | "helperText"
  >;
  options: AutocompleteOption[] | undefined;
  onOptionSelect?: (option: AutocompleteOption | null) => void;
};

const Autocomplete = forwardRef(
  <T extends FieldValues>(
    {
      name,
      options = [],
      textFieldProps,
      onOptionSelect,
      ...autocompleteProps
    }: AutocompleteProps<T>,
    ref: Ref<HTMLInputElement>
  ) => {
    const { control } = useFormContext<T>();

    return (
      <Controller
        name={name}
        control={control}
        render={({
          field: { onChange, value, ...field },
          fieldState: { error },
        }) => (
          <MuiAutocomplete<AutocompleteOption, false, false, false>
            {...autocompleteProps}
            {...field}
            options={options}
            value={options.find((option) => option.value === value) || null}
            onChange={(_, newValue) => {
              onChange(newValue?.value ?? "");
              if (onOptionSelect) {
                onOptionSelect(newValue);
              }
            }}
            renderInput={(params) => (
              <MuiTextField
                {...params}
                {...textFieldProps}
                inputRef={ref}
                error={!!error}
                helperText={error?.message}
              />
            )}
          />
        )}
      />
    );
  }
) as <T extends FieldValues>(
  props: AutocompleteProps<T> & { ref?: Ref<HTMLInputElement> }
) => ReactElement;

export { Autocomplete, type AutocompleteOption };
