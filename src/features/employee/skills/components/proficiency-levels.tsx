import { Autocomplete } from "@/controllers/autocomplete";
import { useProficiencyLevels } from "@/features/employee/skills/hooks/useQueries";

import { Schema } from "@/features/employee/skills/types/schema";
import { Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";

const ProficiencyLevels = () => {
  const proficiencyLevelsQuery = useProficiencyLevels();

  return (
    <>
      <Grid sx={{ display: "flex", alignItems: "center" }} size={{ xs: 12 }}>
        <Typography>Proficiency Levels:</Typography>
      </Grid>
      <Grid spacing={2} container size={{ xs: 12 }}>
        <Grid size={{ xs: 2.4 }}>
          <Autocomplete<Schema>
            name="proficiencyLevels.projectManagement"
            options={proficiencyLevelsQuery.data}
            textFieldProps={{ label: "Project Management" }}
          />
        </Grid>
        <Grid size={{ xs: 2.4 }}>
          <Autocomplete<Schema>
            name="proficiencyLevels.communication"
            options={proficiencyLevelsQuery.data}
            textFieldProps={{ label: "Communication" }}
          />
        </Grid>
        <Grid size={{ xs: 2.4 }}>
          <Autocomplete<Schema>
            name="proficiencyLevels.technicalSkills"
            options={proficiencyLevelsQuery.data}
            textFieldProps={{ label: "Technical Skills" }}
          />
        </Grid>
        <Grid size={{ xs: 2.4 }}>
          <Autocomplete<Schema>
            name="proficiencyLevels.leadership"
            options={proficiencyLevelsQuery.data}
            textFieldProps={{ label: "Leadership" }}
          />
        </Grid>
        <Grid size={{ xs: 2.4 }}>
          <Autocomplete<Schema>
            name="proficiencyLevels.problemSolving"
            options={proficiencyLevelsQuery.data}
            textFieldProps={{ label: "Problem Solving" }}
          />
        </Grid>
      </Grid>
    </>
  );
};

export { ProficiencyLevels };
