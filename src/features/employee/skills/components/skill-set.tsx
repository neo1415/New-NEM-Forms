import { Autocomplete } from "@/controllers/autocomplete";
import { TextField } from "@/controllers/text-field";
import {
  useSkillCategories,
  useSkills,
  useSkillSubcategories,
} from "@/features/employee/skills/hooks/useQueries";

import { Schema } from "@/features/employee/skills/types/schema";
import RemoveCircleOutlineRoundedIcon from "@mui/icons-material/RemoveCircleOutlineRounded";
import { IconButton, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { UseFieldArrayRemove, useFormContext, useWatch } from "react-hook-form";

type SkillSetProps = {
  fieldIndex: number;
  fieldRemove: UseFieldArrayRemove;
};
const SkillSet = ({ fieldIndex, fieldRemove }: SkillSetProps) => {
  const { control } = useFormContext<Schema>();

  const category = useWatch({
    control,
    name: `skillSets.${fieldIndex}.category`,
  });
  const subcategory = useWatch({
    control,
    name: `skillSets.${fieldIndex}.subcategory`,
  });

  const skillCategoriesQuery = useSkillCategories();
  const skillSubcategoriesQuery = useSkillSubcategories(category);
  const skillsQuery = useSkills(subcategory);

  const handleRemoveClick = () => {
    fieldRemove(fieldIndex);
  };

  return (
    <Grid spacing={2} container size={{ xs: 12 }}>
      <Grid size={{ xs: 12 }}>
        <Typography>{`Skill ${fieldIndex + 1}:`}</Typography>
      </Grid>
      <Grid container size={{ xs: 11 }}>
        <Grid size={{ xs: 4 }}>
          <Autocomplete<Schema>
            name={`skillSets.${fieldIndex}.category`}
            options={skillCategoriesQuery.data}
            textFieldProps={{ label: "Category" }}
          />
        </Grid>
        <Grid size={{ xs: 4 }}>
          <Autocomplete<Schema>
            name={`skillSets.${fieldIndex}.subcategory`}
            options={skillSubcategoriesQuery.data}
            textFieldProps={{ label: "Sub Category" }}
          />
        </Grid>
        <Grid size={{ xs: 4 }}>
          <Autocomplete<Schema, true>
            name={`skillSets.${fieldIndex}.skills`}
            options={skillsQuery.data}
            textFieldProps={{ label: "Skills" }}
            multiple
          />
        </Grid>
        <Grid size={{ xs: 2 }}>
          <TextField<Schema>
            sx={{ width: 1 }}
            name={`skillSets.${fieldIndex}.yearsOfExperience`}
            label="Years of Experience"
            type="number"
          />
        </Grid>
        <Grid size={{ xs: 10 }}>
          <TextField<Schema>
            sx={{ width: 1 }}
            name={`skillSets.${fieldIndex}.description`}
            label="Description"
            multiline
            maxRows={4}
          />
        </Grid>
      </Grid>
      <Grid
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        size={{ xs: 1 }}
      >
        <IconButton color="error" onClick={handleRemoveClick}>
          <RemoveCircleOutlineRoundedIcon />
        </IconButton>
      </Grid>
    </Grid>
  );
};

export { SkillSet };
