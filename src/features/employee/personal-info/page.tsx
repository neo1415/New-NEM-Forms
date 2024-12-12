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
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Stack } from "@mui/material";
import {
  FormProvider,
  SubmitHandler,
  useForm,
  useFormContext,
  useWatch,
} from "react-hook-form";
import { useNavigate } from "react-router";

const Page = () => {
  const { control, setValue, handleSubmit, reset } = useFormContext<Schema>();
  const { updateFormData } = useStore();

  const navigate = useNavigate();

  const state = useWatch({ control, name: "state" });

  const statesQuery = useStates();
  const citiesQuery = useCities();

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
    <Stack sx={{ gap: 2 }} component="form" onSubmit={handleSubmit(onSubmit)}>
      <Button onClick={handleResetFormClick}>Reset</Button>
      <TextField<Schema> name="firstName" label="First Name" />
      <TextField<Schema> name="lastName" label="Last Name" />
      <TextField<Schema> name="email" label="Email" />
      <TextField<Schema> name="phoneNumber" label="Phone Number" />
      <DatePicker<Schema> name="dateOfBirth" label="Date of Birth" />
      <Autocomplete<Schema>
        name="state"
        options={statesQuery.data}
        loading={statesQuery.isLoading}
        textFieldProps={{ label: "State" }}
        onOptionSelect={handleOptionSelect}
      />
      <Autocomplete<Schema>
        name="city"
        options={citiesQuery.data}
        loading={citiesQuery.isLoading}
        textFieldProps={{ label: "City" }}
        disabled={!state}
      />
      <TextField<Schema> name="streetAddress" label="Street Address" />
      <TextField<Schema>
        name="socialSecurityNumber"
        label="Social Security Number"
        format="socialSecurity"
      />
      <Button type="submit" variant="contained">
        Next Step
      </Button>
    </Stack>
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
