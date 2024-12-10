import { Checkbox } from "@/controllers/checkbox";
import { Dropzone } from "@/controllers/dropzone";
import { useEmployeeAdditionalInfoStore } from "@/features/employee/additional-info/hooks/useStore";
import { useEmployeeHistoryStore } from "@/features/employee/history/hooks/useStore";
import { useEmployeePersonalInfoStore } from "@/features/employee/personal-info/hooks/useStore";
import { SummaryDialog } from "@/features/employee/review/components/summary-dialog";
import {
  defaultValues,
  schema,
  Schema,
} from "@/features/employee/review/types/schema";
import { useEmployeeSkillsStore } from "@/features/employee/skills/hooks/useStore";
import { employeeWrapperSchema } from "@/features/employee/wrapper/types/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@mui/material";
import Grid from "@mui/material/Grid2";
import {
  FormProvider,
  SubmitHandler,
  useForm,
  useFormContext,
} from "react-hook-form";
import { useNavigate } from "react-router";

const Page = () => {
  const { handleSubmit, reset, getValues } = useFormContext<Schema>();
  const navigate = useNavigate();

  const handleResetFormClick = () => {
    reset(defaultValues);
  };

  const { formData: employeeAdditionalInfoFormData } =
    useEmployeeAdditionalInfoStore();
  const { formData: employeeHistoryFormData } = useEmployeeHistoryStore();
  const { formData: employeePersonalInfoFormData } =
    useEmployeePersonalInfoStore();
  const { formData: employeeSkillsFormData } = useEmployeeSkillsStore();

  const onSubmit: SubmitHandler<Schema> = (data) => {
    navigate("/");

    employeeWrapperSchema.parse({
      ...getValues(),
      ...employeeAdditionalInfoFormData,
      ...employeeHistoryFormData,
      ...employeePersonalInfoFormData,
      ...employeeSkillsFormData,
    });
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
      <SummaryDialog />
      <Page />
    </FormProvider>
  );
};

export { Provider as EmployeeReview };
