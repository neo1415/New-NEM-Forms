import { Autocomplete } from "@/controllers/autocomplete";

import RestartAltOutlinedIcon from "@mui/icons-material/RestartAltOutlined";
import { TextField } from "@/controllers/text-field";
import { EducationalInstitutions } from "@/features/employee/history/components/educational-institutions";
import { PreviousEmployers } from "@/features/employee/history/components/previous-employers";
import {
  useDegrees,
  useEmploymentStatuses,
  useReasonsForLeaving,
} from "@/features/employee/history/hooks/useQueries";
import { useStore } from "@/features/employee/history/hooks/useStore";
import {
  defaultValues,
  ReasonForLeavingEnum,
  schema,
  Schema,
} from "@/features/employee/history/types/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, IconButton } from "@mui/material";
import Grid from "@mui/material/Grid2";
import {
  FormProvider,
  SubmitHandler,
  useForm,
  useFormContext,
  useWatch,
} from "react-hook-form";
import { useNavigate } from "react-router";
import { d } from "@/utils/dictionary";
import { FormErrorSummary } from "@/components/form-error-summary";

const Page = () => {
  const navigate = useNavigate();

  const employmentStatusesQuery = useEmploymentStatuses();
  const reasonsForLeavingQuery = useReasonsForLeaving();
  const degreesQuery = useDegrees();

  const { control, handleSubmit, reset } = useFormContext<Schema>();
  const { updateFormData } = useStore();

  const reasonsForLeavingPreviousJobs = useWatch({
    control,
    name: "reasonsForLeavingPreviousJobs",
  });

  const handleResetFormClick = () => {
    updateFormData(defaultValues);
    reset(defaultValues);
  };

  const onSubmit: SubmitHandler<Schema> = (data) => {
    updateFormData(data);
    navigate("/skills");
  };

  return (
    <Grid
      container
      spacing={2}
      component="form"
      onSubmit={handleSubmit(onSubmit)}
    >
      <Grid size={{ xs: 12 }}>
        <IconButton onClick={handleResetFormClick} color="secondary">
          <RestartAltOutlinedIcon />
        </IconButton>
      </Grid>
      <Grid size={{ xs: 12 }}>
        <FormErrorSummary />
      </Grid>
      <Grid size={{ xs: 12 }}>
        <Autocomplete<Schema>
          name="currentEmploymentStatus"
          options={employmentStatusesQuery.data}
          textFieldProps={{ label: d.currentEmploymentStatus }}
        />
      </Grid>

      <Grid size={{ xs: 6 }}>
        <Autocomplete<Schema, true>
          name="reasonsForLeavingPreviousJobs"
          options={reasonsForLeavingQuery.data}
          textFieldProps={{ label: d.reasonsForLeavingPreviousJobs }}
          multiple={true}
        />
      </Grid>

      <Grid size={{ xs: 6 }}>
        {reasonsForLeavingPreviousJobs.includes(
          ReasonForLeavingEnum.enum.OTHER
        ) && (
          <TextField<Schema>
            sx={{ width: 1 }}
            name="otherReasonsForLeaving"
            label={d.otherReasonsForLeaving}
            multiline
            maxRows={4}
          />
        )}
      </Grid>

      <Grid size={{ xs: 12 }}>
        <Autocomplete<Schema>
          name="highestDegreeObtained"
          options={degreesQuery.data}
          textFieldProps={{ label: d.highestDegreeObtained }}
        />
      </Grid>

      <PreviousEmployers />
      <EducationalInstitutions />

      <Grid offset="auto">
        <Button type="submit" variant="contained">
          {d.nextStep}
        </Button>
      </Grid>
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

export { Provider as EmployeeHistory };
