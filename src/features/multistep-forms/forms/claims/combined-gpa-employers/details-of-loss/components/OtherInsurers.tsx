import { TextField } from "@/features/form/components/controllers/text-field";
import AddCircleRoundedIcon from "@mui/icons-material/AddCircleRounded";
import RemoveCircleOutlineRoundedIcon from "@mui/icons-material/RemoveCircleOutlineRounded";
import { Chip, IconButton, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { useFieldArray } from "react-hook-form";
import { Fragment } from "react";
import { useFormContext } from "@/features/form/hooks/useFormContext";
import { Schema } from "../types/schema";

export const OtherInsurers = () => {
  const { control, readOnly } = useFormContext<Schema>();

  const { fields, append, remove } = useFieldArray({
    control,
    name: "otherInsurers",
  });

  const handleAddClick = () => {
    append({ name: "", address: "", policyNumber: "" });
  };

  const handleRemoveClick = (index: number) => {
    remove(index);
  };

  return (
    <>
      <Grid
        sx={{ display: "flex", alignItems: "center" }}
        size={12}
        id="otherInsurers"
      >
        <Typography variant="subtitle2">Other Insurers:</Typography>
        {!readOnly && (
          <IconButton onClick={handleAddClick} color="success">
            <AddCircleRoundedIcon />
          </IconButton>
        )}
      </Grid>
      {fields.map((field, index) => (
        <Fragment key={field.id}>
          <Grid container spacing={2}>
            <Grid size={{ xs: 12 }} sx={{ display: "flex", alignItems: "center" }}>
              <Chip
                label={`Insurer #${index + 1}:`}
                size="small"
                color="secondary"
              />
              {!readOnly && (
                <IconButton
                  color="error"
                  onClick={() => handleRemoveClick(index)}
                >
                  <RemoveCircleOutlineRoundedIcon />
                </IconButton>
              )}
            </Grid>
            <Grid size={{ xs: 4 }}>
              <TextField<Schema>
                name={`otherInsurers.${index}.name`}
                label="Name"
              />
            </Grid>
            <Grid size={{ xs: 4 }}>
              <TextField<Schema>
                name={`otherInsurers.${index}.address`}
                label="Address"
                multiline
                maxRows={4}
              />
            </Grid>
            <Grid size={{ xs: 4 }}>
              <TextField<Schema>
                name={`otherInsurers.${index}.policyNumber`}
                label="Policy Number"
              />
            </Grid>
          </Grid>
        </Fragment>
      ))}
    </>
  );
}; 