import { useFormContext } from "@/features/form/hooks/useFormContext";
import { Autocomplete as MuiAutocomplete, TextField as MuiTextField, Grid as MuiGrid } from "@mui/material";
import { useEffect, useState } from "react";
import { Controller, FieldValues, Path } from "react-hook-form";
import { countries } from "./data/countries";

type LocationFieldProps<T extends FieldValues> = {
  countryFieldName: Path<T>;
  stateFieldName: Path<T>;
  cityFieldName: Path<T>;
  required?: boolean;
};

export const LocationField = <T extends FieldValues>({
  countryFieldName,
  stateFieldName,
  cityFieldName,
  required = false,
}: LocationFieldProps<T>) => {
  const { control } = useFormContext<T>();
  const [selectedCountry, setSelectedCountry] = useState<string | null>(null);
  const [selectedState, setSelectedState] = useState<string | null>(null);
  const [states, setStates] = useState<string[]>([]);
  const [cities, setCities] = useState<string[]>([]);

  useEffect(() => {
    if (selectedCountry) {
      const countryData = countries.find((c) => c.name === selectedCountry);
      setStates(countryData?.states.map((s) => s.name) || []);
      setSelectedState(null);
      setCities([]);
    }
  }, [selectedCountry]);

  useEffect(() => {
    if (selectedState && selectedCountry) {
      const countryData = countries.find((c) => c.name === selectedCountry);
      const stateData = countryData?.states.find((s) => s.name === selectedState);
      setCities(stateData?.cities || []);
    }
  }, [selectedState, selectedCountry]);

  return (
    <MuiGrid container spacing={2}>
      <MuiGrid item xs={12}>
        <Controller
          name={countryFieldName}
          control={control}
          rules={{ required: required ? "Country is required" : false }}
          render={({ field, fieldState: { error } }) => (
            <MuiAutocomplete
              {...field}
              options={countries.map((country) => country.name)}
              freeSolo
              onChange={(_, value) => {
                field.onChange(value);
                setSelectedCountry(value as string | null);
              }}
              renderInput={(params) => (
                <MuiTextField
                  {...params}
                  label="Country"
                  error={!!error}
                  helperText={error?.message}
                  required={required}
                />
              )}
            />
          )}
        />
      </MuiGrid>
      <MuiGrid item xs={12}>
        <Controller
          name={stateFieldName}
          control={control}
          rules={{ required: required ? "State is required" : false }}
          render={({ field, fieldState: { error } }) => (
            <MuiAutocomplete
              {...field}
              options={states}
              freeSolo
              disabled={!selectedCountry}
              onChange={(_, value) => {
                field.onChange(value);
                setSelectedState(value as string | null);
              }}
              renderInput={(params) => (
                <MuiTextField
                  {...params}
                  label="State/Province"
                  error={!!error}
                  helperText={error?.message}
                  required={required}
                />
              )}
            />
          )}
        />
      </MuiGrid>
      <MuiGrid item xs={12}>
        <Controller
          name={cityFieldName}
          control={control}
          rules={{ required: required ? "City is required" : false }}
          render={({ field, fieldState: { error } }) => (
            <MuiAutocomplete
              {...field}
              options={cities}
              freeSolo
              disabled={!selectedState}
              renderInput={(params) => (
                <MuiTextField
                  {...params}
                  label="City"
                  error={!!error}
                  helperText={error?.message}
                  required={required}
                />
              )}
            />
          )}
        />
      </MuiGrid>
    </MuiGrid>
  );
}; 