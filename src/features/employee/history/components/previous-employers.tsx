import { TextField } from "@/controllers/text-field";

import { Schema } from "@/features/employee/history/types/schema";
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
    append({ jobTitle: "", name: "", responsibilities: "" });
  };

  const handleRemoveClick = (index: number) => {
    remove(index);
  };

  return (
    <>
      <Grid sx={{ display: "flex", alignItems: "center" }} size={12}>
        <Typography>Previous Employers:</Typography>
        <IconButton onClick={handleAddClick} color="success">
          <AddCircleRoundedIcon />
        </IconButton>
      </Grid>
      {fields.map((field, index) => (
        <Grid container size={{ xs: 12 }} key={field.id}>
          <Grid size={{ xs: 12 }}>
            <Typography>{`Employer ${index + 1}:`}</Typography>
          </Grid>
          <Grid size={{ xs: 3 }}>
            <TextField<Schema>
              sx={{ width: 1 }}
              name={`previousEmployers.${index}.name`}
              label="Name"
            />
          </Grid>
          <Grid size={{ xs: 4 }}>
            <TextField<Schema>
              sx={{ width: 1 }}
              name={`previousEmployers.${index}.jobTitle`}
              label="Job Title"
            />
          </Grid>
          <Grid size={{ xs: 4 }}>
            <TextField<Schema>
              sx={{ width: 1 }}
              name={`previousEmployers.${index}.responsibilities`}
              label="Responsibilities"
              multiline
              maxRows={4}
            />
          </Grid>
          <Grid
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            size={{ xs: 1 }}
          >
            <IconButton color="error" onClick={() => handleRemoveClick(index)}>
              <RemoveCircleOutlineRoundedIcon />
            </IconButton>
          </Grid>
        </Grid>
      ))}
    </>
  );
};

export { PreviousEmployers };
