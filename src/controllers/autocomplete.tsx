import {
  Autocomplete as MuiAutocomplete,
  AutocompleteProps as MuiAutocompleteProps,
  TextField as MuiTextField,
  AutocompleteValue,
} from "@mui/material";
import { forwardRef, ReactElement, Ref } from "react";
import { Controller, FieldValues, Path, useFormContext } from "react-hook-form";

type AutocompleteOption<V extends string | number = number> = {
  label: string;
  value: V;
};

type AutocompleteProps<
  T extends FieldValues,
  V extends string | number,
  Multiple extends boolean = false
> = Omit<
  MuiAutocompleteProps<AutocompleteOption<V>, Multiple, false, false>,
  "renderInput" | "onChange" | "options" | "multiple"
> & {
  name: Path<T>;
  textFieldProps?: Omit<
    React.ComponentProps<typeof MuiTextField>,
    "name" | "error" | "helperText"
  >;
  options: AutocompleteOption<V>[] | undefined;
  multiple?: Multiple;
  onOptionSelect?: Multiple extends true
    ? (options: AutocompleteOption<V>[]) => void
    : (option: AutocompleteOption<V> | null) => void;
};

const Autocomplete = forwardRef(
  <
    T extends FieldValues,
    V extends string | number,
    Multiple extends boolean = false
  >(
    {
      name,
      options = [],
      textFieldProps,
      onOptionSelect,
      multiple = false as Multiple,
      ...autocompleteProps
    }: AutocompleteProps<T, V, Multiple>,
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
        }) => {
          const getValue = (): AutocompleteValue<
            AutocompleteOption<V>,
            Multiple,
            false,
            false
          > => {
            if (multiple) {
              return options.filter((option) =>
                Array.isArray(value) ? value.includes(option.value) : false
              ) as AutocompleteValue<
                AutocompleteOption<V>,
                Multiple,
                false,
                false
              >;
            }
            return (options.find((option) => option.value === value) ||
              null) as AutocompleteValue<
              AutocompleteOption<V>,
              Multiple,
              false,
              false
            >;
          };

          return (
            <MuiAutocomplete<AutocompleteOption<V>, Multiple, false, false>
              {...autocompleteProps}
              {...field}
              multiple={multiple}
              options={options}
              value={getValue()}
              onChange={(_, newValue) => {
                if (multiple) {
                  const values = (newValue as AutocompleteOption<V>[]).map(
                    (option) => option.value
                  );
                  onChange(values);
                  if (onOptionSelect) {
                    (
                      onOptionSelect as (
                        options: AutocompleteOption<V>[]
                      ) => void
                    )(newValue as AutocompleteOption<V>[]);
                  }
                } else {
                  const singleValue = newValue as AutocompleteOption<V> | null;
                  onChange(singleValue?.value ?? "");
                  if (onOptionSelect) {
                    (
                      onOptionSelect as (
                        option: AutocompleteOption<V> | null
                      ) => void
                    )(singleValue);
                  }
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
          );
        }}
      />
    );
  }
) as <
  T extends FieldValues,
  V extends string | number,
  Multiple extends boolean = false
>(
  props: AutocompleteProps<T, V, Multiple> & { ref?: Ref<HTMLInputElement> }
) => ReactElement;

export { Autocomplete, type AutocompleteOption };
