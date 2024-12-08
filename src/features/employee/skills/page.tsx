import { Autocomplete } from "@/controllers/autocomplete";
import { TextField } from "@/controllers/text-field";
import { ProficiencyLevels } from "@/features/employee/skills/components/proficiency-levels";
import { SkillSets } from "@/features/employee/skills/components/skill-sets";
import {
  useCoreCompetencies,
  useLanguages,
} from "@/features/employee/skills/hooks/useQueries";
import { useStore } from "@/features/employee/skills/hooks/useStore";
import {
  CoreCompetencyEnum,
  defaultValues,
  schema,
  Schema,
} from "@/features/employee/skills/types/schema";
import { useFormLogger } from "@/hooks/useFormLogger";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@mui/material";
import Grid from "@mui/material/Grid2";
import {
  FormProvider,
  SubmitHandler,
  useForm,
  useFormContext,
  useWatch,
} from "react-hook-form";

const Page = () => {
  const { control, handleSubmit, reset } = useFormContext<Schema>();
  const { updateFormData } = useStore();

  const coreCompetenciesQuery = useCoreCompetencies();
  const languagesQuery = useLanguages();

  const coreCompetencies = useWatch({
    control,
    name: "coreCompetencies",
  });

  const handleResetFormClick = () => {
    updateFormData(defaultValues);
    reset(defaultValues);
  };

  const onSubmit: SubmitHandler<Schema> = (data) => {
    updateFormData(data);
  };

  useFormLogger();

  return (
    <Grid
      container
      component="form"
      spacing={2}
      onSubmit={handleSubmit(onSubmit)}
    >
      <Grid size={{ xs: 12 }}>
        <Button onClick={handleResetFormClick}>Reset</Button>
      </Grid>

      <Grid size={{ xs: 6 }}>
        <Autocomplete<Schema, true>
          name="coreCompetencies"
          options={coreCompetenciesQuery.data}
          textFieldProps={{ label: "Core Competencies" }}
          multiple
        />
      </Grid>

      <Grid size={{ xs: 6 }}>
        {coreCompetencies.includes(CoreCompetencyEnum.enum.OTHER) && (
          <TextField<Schema>
            sx={{ width: 1 }}
            name="otherCoreCompetencies"
            label="Other Core Competencies"
            multiline
            maxRows={4}
          />
        )}
      </Grid>

      <Grid size={{ xs: 12 }}>
        <Autocomplete<Schema, true>
          name="languagesSpoken"
          options={languagesQuery.data}
          textFieldProps={{ label: "Languages Spoken" }}
          multiple
        />
      </Grid>

      <ProficiencyLevels />
      <SkillSets />

      <Button type="submit" variant="contained">
        Next Step
      </Button>
    </Grid>
  );
};

const Provider = () => {
  const { formData } = useStore();

  const form = useForm<Schema>({
    mode: "all",
    resolver: zodResolver(schema),
    values: formData,
  });

  return (
    <FormProvider {...form}>
      <Page />
    </FormProvider>
  );
};

export { Provider as EmployeeSkills };
