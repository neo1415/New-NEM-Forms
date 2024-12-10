import { Autocomplete } from "@/controllers/autocomplete";
import { ErrorMessage } from "@/controllers/error-message";
import { TextField } from "@/controllers/text-field";
import { useRelationships } from "@/features/employee/additional-info/hooks/useQueries";

import { Schema } from "@/features/employee/additional-info/types/schema";
import AddCircleRoundedIcon from "@mui/icons-material/AddCircleRounded";
import RemoveCircleOutlineRoundedIcon from "@mui/icons-material/RemoveCircleOutlineRounded";
import { IconButton, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { useFieldArray, useFormContext } from "react-hook-form";

const References = () => {
  const { control } = useFormContext<Schema>();

  const { fields, append, remove } = useFieldArray({
    control,
    name: "references",
  });
  const relationshipsQuery = useRelationships();

  const handleAddClick = () => {
    append({
      name: "",
      relationship: "",
      contactInformation: "",
    });
  };

  const handleRemoveClick = (index: number) => {
    remove(index);
  };

  return (
    <>
      <Grid sx={{ display: "flex", alignItems: "center" }} size={{ xs: 12 }}>
        <Typography>References:</Typography>
        <IconButton onClick={handleAddClick} color="success">
          <AddCircleRoundedIcon />
        </IconButton>
      </Grid>
      {fields.map((field, index) => (
        <Grid spacing={2} container size={{ xs: 12 }} key={field.id}>
          <Grid size={{ xs: 12 }}>
            <Typography>{`Reference ${index + 1}:`}</Typography>
          </Grid>
          <Grid size={{ xs: 3 }}>
            <TextField<Schema>
              sx={{ width: 1 }}
              name={`references.${index}.name`}
              label="Name"
            />
          </Grid>
          <Grid size={{ xs: 3 }}>
            <Autocomplete<Schema>
              options={relationshipsQuery.data}
              sx={{ width: 1 }}
              name={`references.${index}.relationship`}
              textFieldProps={{ label: "Relationship" }}
            />
          </Grid>
          <Grid size={{ xs: 3 }}>
            <TextField<Schema>
              sx={{ width: 1 }}
              name={`references.${index}.contactInformation`}
              label="Contact Information"
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
      <Grid size={{ xs: 12 }}>
        <ErrorMessage<Schema> name="references" />
      </Grid>
    </>
  );
};

export { References };
