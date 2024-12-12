import { Checkbox } from "@/controllers/checkbox";
import { Dropzone } from "@/controllers/dropzone";
import { useStore } from "@/features/employee/review/hooks/useStore";
import {
  defaultValues,
  schema,
  Schema,
} from "@/features/employee/review/types/schema";
import { useEmployeeWrapperStore } from "@/features/employee/wrapper/hooks/useStore";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@mui/material";
import Grid from "@mui/material/Grid2";
import {
  FormProvider,
  SubmitHandler,
  useForm,
  useFormContext,
} from "react-hook-form";

const Page = () => {
  const { handleSubmit, reset } = useFormContext<Schema>();

  const { updateFormData } = useStore();
  const { updateSummaryDialogOpen } = useEmployeeWrapperStore();
  const handleResetFormClick = () => {
    reset(defaultValues);
  };

  const onSubmit: SubmitHandler<Schema> = (data) => {
    updateFormData(data);
    updateSummaryDialogOpen(true);
  };

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
        <Dropzone<Schema>
          name="portfolioFiles"
          accept={{
            "application/pdf": [".pdf"],
            "image/jpeg": [".jpg", ".jpeg"],
            "image/png": [".png"],
          }}
          label="Upload Portfolio Files (Max 3 files, 5MB each)"
          maxFiles={3}
          maxSize={5 * 1024 * 1024}
        />
      </Grid>

      <Grid size={{ xs: 6 }}>
        <Dropzone<Schema>
          name="resumeFile"
          accept={{
            "application/pdf": [".pdf"],
          }}
          label="Upload Resume (PDF only, max 5MB)"
          maxFiles={1}
          maxSize={5 * 1024 * 1024}
          multiple={false}
        />
      </Grid>

      <Grid size={{ xs: 12 }}>
        <Checkbox<Schema>
          name="termsAndConditionsAccepted"
          label="I accept the terms and conditions."
        />
      </Grid>

      <Button type="submit" variant="contained">
        Next Step
      </Button>
    </Grid>
  );
};

const Provider = () => {
  const form = useForm<Schema>({
    mode: "all",
    resolver: zodResolver(schema),
    defaultValues,
  });

  return (
    <FormProvider {...form}>
      <Page />
    </FormProvider>
  );
};

export { Provider as EmployeeReview };
