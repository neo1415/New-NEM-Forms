import { Chip, IconButton, Typography, Grid } from "@mui/material";
import { useFieldArray, useFormContext, useWatch } from "react-hook-form";
import { Fragment } from "react";

import { DatePicker } from "@/features/form/components/controllers/date-picker";
import { Menu } from "@/features/form/components/controllers/menu";
import { TextField } from "@/features/form/components/controllers/text-field";
import { d } from "@/utils/brokersCDDDictionary/dictionary";
import AddCircleRoundedIcon from "@mui/icons-material/AddCircleRounded";
import RemoveCircleOutlineRoundedIcon from "@mui/icons-material/RemoveCircleOutlineRounded";
import { Schema } from "../types/schema";
import { useState } from "react";
import { CountryCodes } from "validator/lib/isISO31661Alpha2";
import { Autocomplete } from "@/features/form/components/controllers/autocomplete";

export const Directors = () => {
  const { control } = useFormContext<Schema>();
  const { fields, append, remove } = useFieldArray({
    control,
    name: "directors",
  });
  const [showOtherIncomeSource, setShowOtherIncomeSource] = useState<{ [key: number]: boolean }>({});

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
      dob: new Date(),
      placeOfBirth: "",
      nationality: "",
      residenceCountry: "",
      occupation: "",
      BVNNumber: "",
      employersName: "",
      phoneNumber: "",
      address: "",
      email: "",
      taxIDNumber: "",
      intPassNo: "",
      passIssuedCountry: "",
      idType: "International passport",
      idNumber: "",
      issuedBy: "",
      issuedDate: new Date(),
      expiryDate: new Date(),
      sourceOfIncome: "Salary Or Business Income",
      otherIncomeSource: "",
    });
  };


  const countries = Array.from(CountryCodes).map((country) => ({
    label: country,
    value: country,
  }));


  return (
    <Fragment>
      {fields.map((field, index) => {
     

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
            {/* <Grid item xs={12} md={4}>
              <Menu<Schema>
                name={`directors.${index}.gender`}
                label={d.gender}
                options={d.genderOptions}
              />
            </Grid> */}
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
            <Autocomplete
              name={`directors.${index}.nationality`}
              options={countries}
              textFieldProps={{
                label: d.nationality
              }}
            />
            </Grid>
            <Grid item xs={12} md={4}>
              <TextField<Schema>
                name={`directors.${index}.residenceCountry`}
                label={d.residenceCountry}
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
                name={`directors.${index}.employersName`}
                label={d.employersName}
                required
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <TextField<Schema>
                name={`directors.${index}.phoneNumber`}
                label={d.phoneNumber}
                required
                type="tel"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField<Schema>
                name={`directors.${index}.address`}
                label={d.address}
                required
                multiline
                rows={3}
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
              <TextField<Schema>
                name={`directors.${index}.taxIDNumber`}
                label={d.taxIDNumber}
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <TextField<Schema>
                name={`directors.${index}.intPassNo`}
                label={d.intPassNo}
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <TextField<Schema>
                name={`directors.${index}.passIssuedCountry`}
                label={d.passIssuedCountry}
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <Menu<Schema>
                name={`directors.${index}.idType`}
                label={d.idType}
                options={[
                  { value: "", label: "Choose Identification Type" },
                  { value: "international passport", label: "International Passport" },
                  { value: "NIMC", label: "NIMC" },
                  { value: "Drivers licence", label: "Driver's License" },
                  { value: "Voters Card", label: "Voter's Card" }
                ]}
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
              <TextField<Schema>
                name={`directors.${index}.issuedBy`}
                label={d.issuedBy}
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
              <Menu<Schema>
                name={`directors.${index}.sourceOfIncome`}
                label={d.sourceOfIncome}
                options={[
                  { value: "", label: "Choose Income Source" },
                  { value: "salary", label: "Salary or Business Income" },
                  { value: "investments", label: "Investments or Dividends" },
                  { value: "other", label: "Other(please specify)", isOther: true }
                ]}
                onOtherSelected={() => {
                  setShowOtherIncomeSource(prev => ({ ...prev, [index]: true }));
                }}
              />
            </Grid>
            {showOtherIncomeSource[index] && (
              <Grid item xs={12} md={4}>
              <TextField<Schema>
                name={`directors.${index}.otherIncomeSource`}
                label={d.otherIncomeSource}
              />
              </Grid>
            )}
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