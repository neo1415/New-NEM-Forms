import { ErrorMessage } from "@/controllers/error-message";
import { TextField } from "@/controllers/text-field";

import { Schema } from "@/features/employee/history/types/schema";
import { d } from "@/utils/dictionary";
import AddCircleRoundedIcon from "@mui/icons-material/AddCircleRounded";
import RemoveCircleOutlineRoundedIcon from "@mui/icons-material/RemoveCircleOutlineRounded";
import { IconButton, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { useFieldArray, useFormContext } from "react-hook-form";

const PreviousEmployers = () => {
  const { control } = useFormContext<Schema>();

  const { fields, append, remove } = useFieldArray({
    control,
    name: "previousEmployers",
  });

  const handleAddClick = () => {
    append({ jobTitle: "", employerName: "", responsibilities: "" });
  };

  const handleRemoveClick = (index: number) => {
    remove(index);
  };

  return (
    <>
      <Grid sx={{ display: "flex", alignItems: "center" }} size={12}>
        <Typography>{d.previousEmployers}:</Typography>
        <IconButton onClick={handleAddClick} color="success">
          <AddCircleRoundedIcon />
        </IconButton>
      </Grid>
      {fields.map((field, index) => (
        <Grid spacing={2} container size={{ xs: 12 }} key={field.id}>
          <Grid
            sx={{ display: "flex", alignItems: "center" }}
            size={{ xs: 12 }}
          >
            <Typography>{`${d.employer} ${index + 1}:`}</Typography>
            <IconButton color="error" onClick={() => handleRemoveClick(index)}>
              <RemoveCircleOutlineRoundedIcon />
            </IconButton>
          </Grid>
          <Grid size={{ xs: 6 }}>
            <TextField<Schema>
              sx={{ width: 1 }}
              name={`previousEmployers.${index}.employerName`}
              label={d.employerName}
            />
          </Grid>
          <Grid size={{ xs: 6 }}>
            <TextField<Schema>
              sx={{ width: 1 }}
              name={`previousEmployers.${index}.jobTitle`}
              label={d.jobTitle}
            />
          </Grid>
          <Grid size={{ xs: 12 }}>
            <TextField<Schema>
              sx={{ width: 1 }}
              name={`previousEmployers.${index}.responsibilities`}
              label={d.responsibilities}
              multiline
              maxRows={4}
            />
          </Grid>
        </Grid>
      ))}
      <Grid size={{ xs: 12 }}>
        <ErrorMessage<Schema> name="previousEmployers" />
      </Grid>
    </>
  );
};

export { PreviousEmployers };
