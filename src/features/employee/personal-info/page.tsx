import { FormErrorSummary } from "@/components/form-error-summary";
import { Autocomplete, AutocompleteOption } from "@/controllers/autocomplete";
import { DatePicker } from "@/controllers/date-picker";
import { TextField } from "@/controllers/text-field";
import {
  useCities,
  useStates,
} from "@/features/employee/personal-info/hooks/useQueries";
import { useStore } from "@/features/employee/personal-info/hooks/useStore";
import {
  defaultValues,
  schema,
  Schema,
} from "@/features/employee/personal-info/types/schema";
import { calculatePastDate } from "@/utils/calculatePastDate";
import { d } from "@/utils/dictionary";
import { zodResolver } from "@hookform/resolvers/zod";
import RestartAltOutlinedIcon from "@mui/icons-material/RestartAltOutlined";
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

const Page = () => {
  const navigate = useNavigate();

  const { updateFormData } = useStore();

  const statesQuery = useStates();
  const citiesQuery = useCities();

  const { control, setValue, handleSubmit, reset } = useFormContext<Schema>();
  const state = useWatch({ control, name: "state" });

  const handleOptionSelect = (option: AutocompleteOption | null) => {
    if (!option) {
      setValue("city", "");
    }
  };

  const handleResetFormClick = () => {
    updateFormData(defaultValues);
    reset(defaultValues);
  };

  const onSubmit: SubmitHandler<Schema> = (data) => {
    updateFormData(data);
    navigate("/history");
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
      <Grid size={{ xs: 4 }}>
        <TextField<Schema> name="firstName" label={d.firstName} />
      </Grid>
      <Grid size={{ xs: 4 }}>
        <TextField<Schema> name="lastName" label={d.lastName} />
      </Grid>
      <Grid size={{ xs: 4 }}>
        <DatePicker<Schema>
          name="dateOfBirth"
          label={d.dateOfBirth}
          maxDate={calculatePastDate(18)}
          minDate={calculatePastDate(100)}
        />
      </Grid>
      <Grid size={{ xs: 4 }}>
        <TextField<Schema> name="email" label={d.email} />
      </Grid>
      <Grid size={{ xs: 4 }}>
        <TextField<Schema>
          name="phoneNumber"
          label={d.phoneNumber}
          format="phoneNumber"
        />
      </Grid>
      <Grid size={{ xs: 4 }}>
        <TextField<Schema>
          name="socialSecurityNumber"
          label={d.socialSecurityNumber}
          format="socialSecurity"
        />
      </Grid>
      <Grid size={{ xs: 6 }}>
        <Autocomplete<Schema>
          name="state"
          options={statesQuery.data}
          loading={statesQuery.isLoading}
          textFieldProps={{ label: d.state }}
          onOptionSelect={handleOptionSelect}
        />
      </Grid>
      <Grid size={{ xs: 6 }}>
        {!!state && (
          <Autocomplete<Schema>
            name="city"
            options={citiesQuery.data}
            loading={citiesQuery.isLoading}
            textFieldProps={{ label: d.city }}
          />
        )}
      </Grid>
      <Grid size={{ xs: 12 }}>
        <TextField<Schema>
          name="streetAddress"
          label={d.streetAddress}
          multiline
          maxRows={4}
        />
      </Grid>
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

export { Provider as EmployeePersonalInfo };
