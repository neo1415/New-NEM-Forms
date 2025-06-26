import { Chip, IconButton, Typography, Grid } from "@mui/material";
import { useFieldArray, useFormContext, useWatch } from "react-hook-form";
import { Fragment } from "react";

import { DatePicker } from "@/features/form/components/controllers/date-picker";
import { Menu } from "@/features/form/components/controllers/menu";
import { TextField } from "@/features/form/components/controllers/text-field";
import { d } from "@/utils/corporateCDDDictionary/dictionary";
import AddCircleRoundedIcon from "@mui/icons-material/AddCircleRounded";
import RemoveCircleOutlineRoundedIcon from "@mui/icons-material/RemoveCircleOutlineRounded";
import { Schema } from "../types/schema";
import { LocationField } from "@/features/form/components/controllers/location-field/index";

export const Directors = () => {
  const { control } = useFormContext<Schema>();
  const { fields, append, remove } = useFieldArray({
    control,
    name: "directors",
  });

  // Watch all sources of income at once
  const sourcesOfIncome = useWatch({
    control,
    name: "directors",
    defaultValue: []
  });

  const handleAddDirector = () => {
    append({
      title: "",
      gender: "male",
      firstName: "",
      middleName: "",
      lastName: "",
      residentialAddress: "",
      position: "",
      dob: new Date(),
      placeOfBirth: "",
      occupation: "",
      BVNNumber: "",
      taxIDNumber: "",
      intPassNo: "",
      passIssuedCountry: "",
      sourceOfIncome: "",
      otherSourceOfIncome: "",
      nationality: "",
      phoneNumber: "",
      email: "",
      idType: "International passport",
      idNumber: "",
      issuedDate: new Date(),
      expiryDate: new Date(),
      issuingBody: ""
    });
  };

  return (
    <Fragment>
      {fields.map((field, index) => {
        const sourceOfIncome = sourcesOfIncome[index]?.sourceOfIncome;

        return (
          <Fragment key={field.id}>
            <Grid item xs={12}>
              <Chip
                label={`Director ${index + 1}`}
                onDelete={index > 0 ? () => remove(index) : undefined}
                deleteIcon={<RemoveCircleOutlineRoundedIcon />}
                sx={{ mb: 2 }}
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <TextField<Schema>
                name={`directors.${index}.title`}
                label={d.title}
                required
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <Menu<Schema>
                name={`directors.${index}.gender`}
                label={d.gender}
                options={d.genderOptions}
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <TextField<Schema>
                name={`directors.${index}.firstName`}
                label={d.firstName}
                required
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <TextField<Schema>
                name={`directors.${index}.middleName`}
                label={d.middleName}
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <TextField<Schema>
                name={`directors.${index}.lastName`}
                label={d.lastName}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField<Schema>
                name={`directors.${index}.residentialAddress`}
                label={d.residentialAddress}
                required
                multiline
                rows={3}
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <TextField<Schema>
                name={`directors.${index}.position`}
                label={d.position}
                required
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <DatePicker<Schema>
                name={`directors.${index}.dob`}
                label={d.dob}
                maxDate={new Date()}
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <TextField<Schema>
                name={`directors.${index}.placeOfBirth`}
                label={d.placeOfBirth}
                required
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <TextField<Schema>
                name={`directors.${index}.occupation`}
                label={d.occupation}
                required
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <TextField<Schema>
                name={`directors.${index}.BVNNumber`}
                label={d.BVNNumber}
                required
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <TextField<Schema>
                name={`directors.${index}.taxIDNumber`}
                label={d.taxIDNumber}
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <TextField<Schema>
                name={`directors.${index}.intPassNo`}
                label={d.intPassNo}
                required
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <TextField<Schema>
                name={`directors.${index}.passIssuedCountry`}
                label={d.passIssuedCountry}
                required
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <Menu<Schema>
                name={`directors.${index}.sourceOfIncome`}
                label={d.sourceOfIncome}
                options={d.incomeSourceOptions}
              />
            </Grid>
            {sourceOfIncome === "Other" && (
              <Grid item xs={12} md={4}>
                <TextField<Schema>
                  name={`directors.${index}.otherSourceOfIncome`}
                  label={d.otherSourceOfIncome}
                  required
                />
              </Grid>
            )}
            <Grid item xs={12} md={4}>
              <TextField<Schema>
                name={`directors.${index}.nationality`}
                label={d.nationality}
                required
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <TextField<Schema>
                name={`directors.${index}.phoneNumber`}
                label={d.phoneNumber}
                required
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <TextField<Schema>
                name={`directors.${index}.email`}
                label={d.email}
                required
                type="email"
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <Menu<Schema>
                name={`directors.${index}.idType`}
                label={d.idType}
                options={d.idTypeOptions}
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <TextField<Schema>
                name={`directors.${index}.idNumber`}
                label={d.idNumber}
                required
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <DatePicker<Schema>
                name={`directors.${index}.issuedDate`}
                label={d.issuedDate}
                maxDate={new Date()}
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <DatePicker<Schema>
                name={`directors.${index}.expiryDate`}
                label={d.expiryDate}
                minDate={new Date()}
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <TextField<Schema>
                name={`directors.${index}.issuingBody`}
                label={d.issuingBody}
                required
              />
            </Grid>
          </Fragment>
        );
      })}
      <Grid item xs={12}>
        <IconButton 
          onClick={handleAddDirector} 
          sx={{ color: 'success.main' }}
        >
          <AddCircleRoundedIcon />
          <Typography sx={{ ml: 1 }}>Add Director</Typography>
        </IconButton>
      </Grid>
    </Fragment>
  );
}; 