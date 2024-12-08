import { Autocomplete } from "@/controllers/autocomplete";
import { TextField } from "@/controllers/text-field";
import { EducationalInstitutions } from "@/features/employee/history/components/educational-institutions";
import { PreviousEmployers } from "@/features/employee/history/components/previous-employers";
import { useStore } from "@/features/employee/history/hooks/useStore";
import {
  defaultValues,
  EmploymentStatusEnum,
  HighestDegreeEnum,
  ReasonsForLeavingEnum,
  schema,
  Schema,
} from "@/features/employee/history/types/schema";
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
  const { control, handleSubmit } = useFormContext<Schema>();
  const { updateFormData } = useStore();

  const currentEmploymentStatus = useWatch({
    control,
    name: "currentEmploymentStatus",
  });

  const onSubmit: SubmitHandler<Schema> = (data) => {
    updateFormData(data);
  };

  return (
    <Grid
      container
      component="form"
      spacing={2}
      onSubmit={handleSubmit(onSubmit)}
    >
      <Grid size={{ xs: 12 }}>
        <Autocomplete<Schema>
          name="currentEmploymentStatus"
          options={EmploymentStatusEnum.options.map((item) => ({
            label: item,
            value: item,
          }))}
          textFieldProps={{ label: "Current Employment Status" }}
        />
      </Grid>

      <Grid size={{ xs: 12 }}>
        {currentEmploymentStatus === "other" && (
          <TextField<Schema>
            sx={{ width: 1 }}
            name="otherEmploymentStatus"
            label="Other Employment Status"
          />
        )}
      </Grid>
      <Grid size={{ xs: 6 }}>
        <Autocomplete<Schema, true>
          name="reasonsForLeavingPreviousJobs"
          options={ReasonsForLeavingEnum.options.map((item) => ({
            label: item,
            value: item,
          }))}
          textFieldProps={{ label: "Current Employment Status" }}
          multiple={true}
        />
      </Grid>

      <Grid size={{ xs: 6 }}>
        <Autocomplete<Schema>
          name="highestDegreeObtained"
          options={HighestDegreeEnum.options.map((item) => ({
            label: item,
            value: item,
          }))}
          textFieldProps={{ label: "Highest Degree Obtained" }}
        />
      </Grid>
      <Grid size={{ xs: 12 }}>
        <TextField<Schema>
          sx={{ width: 1 }}
          name="otherReasonsForLeaving"
          label="Other Reasons For Leaving"
          multiline
          maxRows={4}
        />
      </Grid>

      <PreviousEmployers />
      <EducationalInstitutions />

      <Button type="submit" variant="contained">
        Next Step
      </Button>
    </Grid>
  );
};

const Provider = () => {
  const form = useForm<Schema>({
    mode: "all",
    defaultValues,
    resolver: zodResolver(schema),
  });
  return (
    <FormProvider {...form}>
      <Page />
    </FormProvider>
  );
};

export { Provider as EmployeeHistory };
