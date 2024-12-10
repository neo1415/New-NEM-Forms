import { DatePicker } from "@/controllers/date-picker";
import { Slider } from "@/controllers/slider";
import { TextField } from "@/controllers/text-field";
import { References } from "@/features/employee/additional-info/components/references";
import { useStore } from "@/features/employee/additional-info/hooks/useStore";
import {
  defaultValues,
  schema,
  Schema,
} from "@/features/employee/additional-info/types/schema";
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
  const { handleSubmit, reset } = useFormContext<Schema>();
  const { updateFormData } = useStore();
  const navigate = useNavigate();

  const handleResetFormClick = () => {
    updateFormData(defaultValues);
    reset(defaultValues);
  };

  const onSubmit: SubmitHandler<Schema> = (data) => {
    updateFormData(data);
    navigate("/review");
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

      <Grid size={{ xs: 12 }}>
        <TextField<Schema> name="portfolioLink" label="Portfolio Link" />
      </Grid>

      <Grid size={{ xs: 12 }}>
        <DatePicker<Schema>
          name="availabilityToStart"
          label="Availability to Start"
        />
      </Grid>

      <Grid size={{ xs: 12 }}>
        <Slider<Schema>
          name="salaryExpectations"
          min={30000}
          max={1000000}
          marks={[
            {
              value: 30000,
              label: 30000,
            },
            {
              value: 1000000,
              label: 1000000,
            },
          ]}
        />
      </Grid>

      <References />

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

export { Provider as EmployeeAdditionalInfo };
