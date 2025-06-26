import { Chip, IconButton, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { useFieldArray, useFormContext, useWatch } from "react-hook-form";
import { Fragment, useState, useEffect } from "react";

import { Autocomplete } from "@/features/form/components/controllers/autocomplete";
import { DatePicker } from "@/features/form/components/controllers/date-picker";
import { Menu } from "@/features/form/components/controllers/menu";
import { TextField } from "@/features/form/components/controllers/text-field";
import { d } from "@/utils/corporateCDDDictionary/dictionary";
import AddCircleRoundedIcon from "@mui/icons-material/AddCircleRounded";
import RemoveCircleOutlineRoundedIcon from "@mui/icons-material/RemoveCircleOutlineRounded";
import { Schema } from "../types/schema";

type Props = {
  readOnly?: boolean;
};

export const Directors = ({ readOnly }: Props) => {
  const {
    control,
  } = useFormContext<Schema>();
  const { fields, append, remove } = useFieldArray({
    control,
    name: "directors",
  });

  const [showOtherIncomeSource, setShowOtherIncomeSource] = useState<{ [key: number]: boolean }>({});

  const sourceOfIncomes = useWatch({
    control,
    name: "directors",
  });

  useEffect(() => {
    if (sourceOfIncomes) {
      const newShowOtherIncomeSource = { ...showOtherIncomeSource };
      sourceOfIncomes.forEach((director, index) => {
        if (director.sourceOfIncome === "Other") {
          newShowOtherIncomeSource[index] = true;
        } else {
          newShowOtherIncomeSource[index] = false;
        }
      });
      setShowOtherIncomeSource(newShowOtherIncomeSource);
    }
  }, [sourceOfIncomes]);

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
      <Grid size={{ xs: 12 }}>
        <Typography variant="h6" gutterBottom>
          {d.directorsInfo}
        </Typography>
      </Grid>
      {fields.map((field, index) => (
        <Fragment key={field.id}>
          <Grid size={{ xs: 12 }}>
            <Chip
              label={`${d.director} ${index + 1}`}
              onDelete={index > 0 ? () => handleRemoveClick(index) : undefined}
              deleteIcon={<RemoveCircleOutlineRoundedIcon />}
              sx={{ mb: 2 }}
            />
          </Grid>
          <Grid size={{ xs: 6 }}>
            <TextField<Schema>
              name={`directors.${index}.firstName`}
              label={d.firstName}
              required
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
              required
            />
          </Grid>
          <Grid size={{ xs: 6 }}>
            <DatePicker<Schema>
              name={`directors.${index}.dob`}
              label={d.dob}
              maxDate={new Date()}
            />
          </Grid>
          <Grid size={{ xs: 6 }}>
            <TextField<Schema>
              name={`directors.${index}.placeOfBirth`}
              label={d.placeOfBirth}
              required
            />
          </Grid>
          <Grid size={{ xs: 6 }}>
            <TextField<Schema>
              name={`directors.${index}.nationality`}
              label={d.nationality}
              required
            />
          </Grid>
          <Grid size={{ xs: 6 }}>
            <TextField<Schema>
              name={`directors.${index}.country`}
              label={d.country}
              required
            />
          </Grid>
          <Grid size={{ xs: 6 }}>
            <TextField<Schema>
              name={`directors.${index}.occupation`}
              label={d.occupation}
              required
            />
          </Grid>
          <Grid size={{ xs: 6 }}>
            <TextField<Schema>
              name={`directors.${index}.email`}
              label={d.email}
              type="email"
              required
            />
          </Grid>
          <Grid size={{ xs: 6 }}>
            <TextField<Schema>
              name={`directors.${index}.phoneNumber`}
              label={d.phoneNumber}
              format="phoneNumber"
              required
            />
          </Grid>
          <Grid size={{ xs: 6 }}>
            <TextField<Schema>
              name={`directors.${index}.BVNNumber`}
              label={d.BVNNumber}
              required
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
          <Grid size={{ xs: 6 }}>
            <TextField<Schema>
              name={`directors.${index}.residentialAddress`}
              label={d.residentialAddress}
              required
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
              required
            />
          </Grid>
          <Grid size={{ xs: 6 }}>
            <TextField<Schema>
              name={`directors.${index}.issuingBody`}
              label={d.issuingBody}
              required
            />
          </Grid>
          <Grid size={{ xs: 6 }}>
            <DatePicker<Schema>
              name={`directors.${index}.issuedDate`}
              label={d.issuedDate}
              maxDate={new Date()}
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
            
            />
          </Grid>
          {showOtherIncomeSource[index] && (
            <Grid size={{ xs: 6 }}>
              <TextField<Schema>
                name={`directors.${index}.otherSourceOfIncome`}
                label={d.otherSourceOfIncome}
                required
              />
            </Grid>
          )}
        </Fragment>
      ))}
      <Grid size={{ xs: 12 }}>
        <IconButton onClick={handleAddClick} color="primary">
          <AddCircleRoundedIcon />
        </IconButton>
      </Grid>
    </>
  );
}; 