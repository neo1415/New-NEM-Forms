import { TextField } from "@/features/form/components/controllers/text-field";
import { DatePicker } from "@/features/form/components/controllers/date-picker";
import { Autocomplete } from "@/features/form/components/controllers/autocomplete";
import { useFormContext } from "@/features/form/hooks/useFormContext";
import { d } from "@/utils/corporateCDDDictionary/dictionary";
import AddCircleRoundedIcon from "@mui/icons-material/AddCircleRounded";
import RemoveCircleOutlineRoundedIcon from "@mui/icons-material/RemoveCircleOutlineRounded";
import { Chip, IconButton, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { useFieldArray } from "react-hook-form";
import { Fragment } from "react/jsx-runtime";
import { Schema } from "../types/schema";
import { Menu } from "@/features/form/components/controllers/menu";
import { useState } from "react";

const Directors = () => {
  const { control, readOnly } = useFormContext<Schema>();
  const [showOtherIncomeSource, setShowOtherIncomeSource] = useState<{ [key: number]: boolean }>({});

  const { fields, append, remove } = useFieldArray({
    control,
    name: "directors",
  });

  const handleAddClick = () => {
    append({
      firstName: "",
      middleName: "",
      lastName: "",
      dob: new Date(),
      placeOfBirth: "",
      nationality: "",
      country: "",
      occupation: "",
      email: "",
      phoneNumber: "",
      BVNNumber: "",
      employersName: "",
      employersPhoneNumber: "",
      residentialAddress: "",
      taxIDNumber: "",
      idType: "",
      idNumber: "",
      issuingBody: "",
      issuedDate: new Date(),
      expiryDate: null,
      sourceOfIncome: "",
      otherSourceOfIncome: "",
    });
  };

  const handleRemoveClick = (index: number) => {
    remove(index);
  };

  return (
    <>
      <Grid sx={{ display: "flex", alignItems: "center" }} size={12} id="directors">
        <Typography variant="subtitle2">{d.directorsInfo}:</Typography>
        {!readOnly && (
          <IconButton onClick={handleAddClick} color="success">
            <AddCircleRoundedIcon />
          </IconButton>
        )}
      </Grid>
      {fields.map((field, index) => (
        <Fragment key={field.id}>
          <Grid sx={{ display: "flex", alignItems: "center" }} size={{ xs: 12 }}>
            <Chip label={`${d.director} #${index + 1}`} size="small" color="secondary" />
            {!readOnly && (
              <IconButton color="error" onClick={() => handleRemoveClick(index)}>
                <RemoveCircleOutlineRoundedIcon />
              </IconButton>
            )}
          </Grid>
          <Grid size={{ xs: 6 }}>
            <TextField<Schema>
              name={`directors.${index}.firstName`}
              label={d.firstName}
            />
          </Grid>
          <Grid size={{ xs: 6 }}>
            <TextField<Schema>
              name={`directors.${index}.middleName`}
              label={d.middleName}
            />
          </Grid>
          <Grid size={{ xs: 6 }}>
            <TextField<Schema>
              name={`directors.${index}.lastName`}
              label={d.lastName}
            />
          </Grid>
          <Grid size={{ xs: 6 }}>
            <DatePicker<Schema>
              name={`directors.${index}.dob`}
              label={d.dob}
            />
          </Grid>
          <Grid size={{ xs: 6 }}>
            <TextField<Schema>
              name={`directors.${index}.placeOfBirth`}
              label={d.placeOfBirth}
            />
          </Grid>
          <Grid size={{ xs: 6 }}>
            <Autocomplete<Schema>
              name={`directors.${index}.nationality`}
              options={d.countries}
              textFieldProps={{
                label: d.nationality
              }}
            />
          </Grid>
          <Grid size={{ xs: 6 }}>
            <Autocomplete<Schema>
              name={`directors.${index}.country`}
              options={d.countries}
              textFieldProps={{
                label: d.country
              }}
            />
          </Grid>
          <Grid size={{ xs: 6 }}>
            <TextField<Schema>
              name={`directors.${index}.occupation`}
              label={d.occupation}
            />
          </Grid>
          <Grid size={{ xs: 6 }}>
            <TextField<Schema>
              name={`directors.${index}.email`}
              label={d.email}
              type="email"
            />
          </Grid>
          <Grid size={{ xs: 6 }}>
            <TextField<Schema>
              name={`directors.${index}.phoneNumber`}
              label={d.phoneNumber}
              format="phoneNumber"
            />
          </Grid>
          <Grid size={{ xs: 6 }}>
            <TextField<Schema>
              name={`directors.${index}.BVNNumber`}
              label={d.BVNNumber}
              inputProps={{
                pattern: "[0-9]*",
                inputMode: "numeric",
                maxLength: 11,
                minLength: 11,
              }}
            />
          </Grid>
          <Grid size={{ xs: 6 }}>
            <TextField<Schema>
              name={`directors.${index}.employersName`}
              label={d.employersName}
            />
          </Grid>
          <Grid size={{ xs: 6 }}>
            <TextField<Schema>
              name={`directors.${index}.employersPhoneNumber`}
              label={d.employersPhoneNumber}
              format="phoneNumber"
            />
          </Grid>
          <Grid size={{ xs: 12 }}>
            <TextField<Schema>
              name={`directors.${index}.residentialAddress`}
              label={d.residentialAddress}
              multiline
              maxRows={3}
            />
          </Grid>
          <Grid size={{ xs: 6 }}>
            <TextField<Schema>
              name={`directors.${index}.taxIDNumber`}
              label={d.taxIDNumber}
            />
          </Grid>
          <Grid size={{ xs: 6 }}>
            <Menu<Schema>
              name={`directors.${index}.idType`}
              label={d.idType}
              options={d.idTypeOptions}
            />
          </Grid>
          <Grid size={{ xs: 6 }}>
            <TextField<Schema>
              name={`directors.${index}.idNumber`}
              label={d.idNumber}
            />
          </Grid>
          <Grid size={{ xs: 6 }}>
            <TextField<Schema>
              name={`directors.${index}.issuingBody`}
              label={d.issuingBody}
            />
          </Grid>
          <Grid size={{ xs: 6 }}>
            <DatePicker<Schema>
              name={`directors.${index}.issuedDate`}
              label={d.issuedDate}
            />
          </Grid>
          <Grid size={{ xs: 6 }}>
            <DatePicker<Schema>
              name={`directors.${index}.expiryDate`}
              label={d.expiryDate}
            />
          </Grid>
          <Grid size={{ xs: 6 }}>
            <Menu<Schema>
              name={`directors.${index}.sourceOfIncome`}
              label={d.sourceOfIncome}
              options={d.incomeSourceOptions}
              onOtherSelected={() => {
                setShowOtherIncomeSource(prev => ({ ...prev, [index]: true }));
              }}
            />
          </Grid>
          {showOtherIncomeSource[index] && (
            <Grid size={{ xs: 6 }}>
              <TextField<Schema>
                name={`directors.${index}.otherSourceOfIncome`}
                label={d.otherSourceOfIncome}
              />
            </Grid>
          )}
        </Fragment>
      ))}
    </>
  );
};

export { Directors }; 