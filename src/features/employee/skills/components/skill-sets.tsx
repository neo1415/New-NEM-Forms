import { ErrorMessage } from "@/controllers/error-message";
import { SkillSet } from "@/features/employee/skills/components/skill-set";

import { Schema } from "@/features/employee/skills/types/schema";
import AddCircleRoundedIcon from "@mui/icons-material/AddCircleRounded";
import { IconButton, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { useFieldArray, useFormContext } from "react-hook-form";

const SkillSets = () => {
  const { control } = useFormContext<Schema>();

  const { fields, append, remove } = useFieldArray({
    control,
    name: "skillSets",
  });

  const handleAddClick = () => {
    append({
      category: "",
      subcategory: "",
      skills: [],
      description: "",
      yearsOfExperience: 2,
    });
  };

  return (
    <>
      <Grid sx={{ display: "flex", alignItems: "center" }} size={12}>
        <Typography>Skill Sets:</Typography>
        <IconButton onClick={handleAddClick} color="success">
          <AddCircleRoundedIcon />
        </IconButton>
      </Grid>
      {fields.map((field, index) => (
        <SkillSet fieldIndex={index} fieldRemove={remove} key={field.id} />
      ))}
      <Grid size={{ xs: 12 }}>
        <ErrorMessage<Schema>
          name={"skillSets.root" as `skillSets.${number}`}
        />
        <ErrorMessage<Schema> name="skillSets" />
      </Grid>
    </>
  );
};

export { SkillSets };
