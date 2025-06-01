import { Form } from "@/features/form/components/form";

import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import { DatePicker } from "@/features/form/components/controllers/date-picker";
import { TextField } from "@/features/form/components/controllers/text-field";
import { useStore } from "./hooks/useStore";
import {
  defaultValues,
  schema,
  Schema,
} from "./types/schema";
import { calculatePastDate } from "@/utils/calculatePastDate";
import { d } from "@/utils/motorDictionary/dictionary";
import Grid from "@mui/material/Grid2";
import { SubmitHandler} from "react-hook-form";
import { useNavigate } from "react-router";
import { Menu } from "@/features/form/components/controllers/menu";
// import {
//   Autocomplete,
//   AutocompleteOption,
// } from "@/features/form/components/controllers/autocomplete";
// import { useFormContext } from "@/features/form/hooks/useFormContext";

const Page = () => {
  // const statesQuery = useStates();
  // const citiesQuery = useCities();

  // const { control, setValue } = useFormContext<Schema>();
  // const state = useWatch({ control, name: "state" });

  // const handleOptionSelect = (option: AutocompleteOption | null) => {
  //   if (!option) {
  //     setValue("city", "");
  //   }
  // };

  const genderOptions = [
  { value: "Male", label: "Male" },
  { value: "Female", label: "Female" },
  { value: "Other", label: "Other" },
];


  return (
    <>
     <Grid size={{ xs: 6 }}>
        <TextField<Schema> name="policyNumber" label={d.policyNumber} />
      </Grid>
      <Grid size={{ xs: 3 }}>
        <DatePicker<Schema> name="periodOfCoverFrom" label={d.periodOfCoverFrom} />
      </Grid>
      <Grid size={{ xs: 3 }}>
        <DatePicker<Schema> name="periodOfCoverTo" label={d.periodOfCoverTo} />
      </Grid>
     <Grid size={{ xs: 4 }}>
  <TextField<Schema> name="insuredNameOrCompanyName" label={d.insuredName} />
</Grid>
<Grid size={{ xs: 4 }}>
  <TextField<Schema> name="title" label={d.title} />
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
  <Menu<Schema>
    name="gender"
    options={genderOptions}
    sx={{ width: "100%" }}
  />
</Grid>
<Grid size={{ xs: 4 }}>
  <TextField<Schema> name="email" label={d.email} />
</Grid>
<Grid size={{ xs: 4 }}>
  <TextField<Schema>
    name="phone"
    label={d.phoneNumber}
    format="phoneNumber"
  />
</Grid>
 <Grid size={{ xs: 12 }}>
    <TextField<Schema> name="address" label={d.address} multiline maxRows={3} />
  </Grid>
    </>
  );
};

type ProviderProps = { readOnly?: boolean };
const Provider = ({ readOnly }: ProviderProps) => {
  const navigate = useNavigate();

  const { formData, updateFormData } = useStore();

  const handleSubmit: SubmitHandler<Schema> = (data) => {
    updateFormData(data);
    navigate("/claims/motor/vehicle-details");
  };

  return (
    <Form
      submitButtonText={d.saveAndContinue}
      slotProps={{
        submitButtonProps: { startIcon: <ArrowForwardIosRoundedIcon /> },
      }}
      schema={schema}
      values={formData}
      defaultValues={defaultValues}
      onSubmit={handleSubmit}
      readOnly={readOnly}
      title={d.personalInfo}
    >
      <Page />
    </Form>
  );
};

export { Provider as MotorPersonalInfo };
