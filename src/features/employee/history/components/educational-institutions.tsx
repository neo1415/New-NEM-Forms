import { DatePicker } from "@/controllers/date-picker";
import { ErrorMessage } from "@/controllers/error-message";
import { TextField } from "@/controllers/text-field";

import { Schema } from "@/features/employee/history/types/schema";
import { d } from "@/utils/dictionary";
import AddCircleRoundedIcon from "@mui/icons-material/AddCircleRounded";
import RemoveCircleOutlineRoundedIcon from "@mui/icons-material/RemoveCircleOutlineRounded";
import { IconButton, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { useFieldArray, useFormContext } from "react-hook-form";

const EducationalInstitutions = () => {
  const { control } = useFormContext<Schema>();

  const { fields, append, remove } = useFieldArray({
    control,
    name: "educationalInstitutions",
  });

  const handleAddClick = () => {
    append({
      degree: "",
      fieldOfStudy: "",
      graduationYear: new Date(),
      institutionName: "",
    });
  };

  const handleRemoveClick = (index: number) => {
    remove(index);
  };

  return (
    <>
      <Grid sx={{ display: "flex", alignItems: "center" }} size={{ xs: 12 }}>
        <Typography>{d.educationalInstitutions}:</Typography>
        <IconButton onClick={handleAddClick} color="success">
          <AddCircleRoundedIcon />
        </IconButton>
      </Grid>
      {fields.map((field, index) => (
        <Grid spacing={2} container size={{ xs: 12 }} key={field.id}>
          <Grid size={{ xs: 12 }}>
            <Typography>{`${d.institution} ${index + 1}:`}</Typography>
          </Grid>
          <Grid size={{ xs: 3 }}>
            <TextField<Schema>
              sx={{ width: 1 }}
              name={`educationalInstitutions.${index}.degree`}
              label={d.degree}
            />
          </Grid>
          <Grid size={{ xs: 3 }}>
            <TextField<Schema>
              sx={{ width: 1 }}
              name={`educationalInstitutions.${index}.fieldOfStudy`}
              label={d.fieldOfStudy}
            />
          </Grid>
          <Grid size={{ xs: 3 }}>
            <TextField<Schema>
              sx={{ width: 1 }}
              name={`educationalInstitutions.${index}.institutionName`}
              label={d.institutionName}
            />
          </Grid>
          <Grid size={{ xs: 2 }}>
            <DatePicker<Schema>
              sx={{ width: 1 }}
              name={`educationalInstitutions.${index}.graduationYear`}
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
        <ErrorMessage<Schema> name="educationalInstitutions" />
      </Grid>
    </>
  );
};

export { EducationalInstitutions };
