import { Form } from "@/features/form/components/form";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import { DatePicker } from "@/features/form/components/controllers/date-picker";
import { TextField } from "@/features/form/components/controllers/text-field";
import {
  useHire,
  useOwned,
  useRegistered} from '@/features/multistep-forms/forms/claims/motor/vehicle-details/hooks/useQueries'
import { useStore } from "./hooks/useStore";
import { calculatePastDate } from "@/utils/calculatePastDate";
import { d } from "@/utils/motorDictionary/dictionary";
import Grid from "@mui/material/Grid2";
import { SubmitHandler, useWatch } from "react-hook-form";
import { useNavigate } from "react-router";
import {
  Autocomplete,
} from "@/features/form/components/controllers/autocomplete";
import { useFormContext } from "@/features/form/hooks/useFormContext";
import { Schema, schema, defaultValues } from "./types/schema";
import { Menu } from "@/features/form/components/controllers/menu";
import { TextArea } from "@/features/form/components/controllers/text-area";

const Page = () => {
  const registeredQuery = useRegistered();
  const hiredQuery = useHire()
  const ownedQuery = useOwned()


  const { control, setValue } = useFormContext<Schema>();
 const registeredValue = useWatch({ control, name: "vehicleRegisteredInName" });
  const hireValue = useWatch({ control, name: "hirePurchase" });
  const ownedValue =useWatch({control, name: 'vehicleOwnership'})

//   const options = [
//   { value: "Yes", label: "Yes" },
//   { value: "No", label: "No" },
// ];


  return (
    <>

     <Grid size={{ xs: 6 }}>
        <Autocomplete<Schema>
          name="vehicleRegisteredInName"
          options={registeredQuery.data}
          loading={registeredQuery.isLoading}
          textFieldProps={{ label: d.vehicleRegisteredInName }}
          onOptionSelect={(option) => {
            setValue("vehicleRegisteredInName", option?.value === "no");
          }}
        />
      </Grid>

      {registeredValue === true && (
        <Grid size={{ xs: 6 }}>
          <TextField<Schema>
            name="registeredInYourNameDetails"
            label="If not, give details"
          />
        </Grid>
      )}

     <Grid size={{ xs: 6 }}>
        <Autocomplete<Schema>
          name="hirePurchase"
          options={hiredQuery.data}
          loading={hiredQuery.isLoading}
          textFieldProps={{ label: d.hirePurchase }}
          onOptionSelect={(option) => {
            setValue("hirePurchase", option?.value === "yes");
          }}
        />
      </Grid>

      {hireValue === true && (
        <Grid size={{ xs: 6 }}>
          <TextField<Schema>
            name="hirePurchaseDetails"
            label="If so, give details"
          />
        </Grid>
      )}

       <Grid size={{ xs: 6 }}>
        <Autocomplete<Schema>
          name="vehicleOwnership"
          options={ownedQuery.data}
          loading={ownedQuery.isLoading}
          textFieldProps={{ label: d.vehicleOwnership }}
          onOptionSelect={(option) => {
            setValue("vehicleOwnership", option?.value === "yes");
          }}
        />
      </Grid>

      {ownedValue === true && (
        <Grid size={{ xs: 6 }}>
          <TextField<Schema>
            name="ownershipDetails"
            label="If so, give details"
          />
        </Grid>
      )}

      <Grid size={{ xs: 6 }}>
        <DatePicker<Schema>
          name="vehicleYear"
          label={d.vehicleYear}
          maxDate={calculatePastDate(18)}
          minDate={calculatePastDate(100)}
        />
      </Grid>
      <Grid size={{ xs: 4 }}>
        <TextField<Schema> name="vehicleUsage" label={d.vehicleUsage} />
      </Grid>
<Grid size={{ xs: 4 }}>
  <Menu<Schema>
    name="trailerAttached"
    label={d.trailerAttached}
    options={[
      { value: "true", label: "Yes" },
      { value: "false", label: "No" },
    ]}
    sx={{ width: "100%" }}
  />
</Grid>
    <Grid size={{ xs: 4 }}>
      <TextField<Schema>
      name="vehicleRegistrationNumber"
      label={d.vehicleRegistrationNumber}
      />
    </Grid>
            <Grid size={{ xs: 4 }}>
        <TextField<Schema>
          name="vehicleMakeModel"
          label={d.vehicleMakeModel}
        />
      </Grid>

        <Grid size={{ xs: 4 }}>
        <TextField<Schema>
          name="engineNumber"
          label={d.engineNumber}
        />
      </Grid>

        <Grid size={{ xs: 4 }}>
        <TextField<Schema>
          name="chassisNumber"
          label={d.chassisNumber}
        />
      </Grid>

        <Grid size={{ xs: 12 }}>
        <TextArea<Schema>
          name="vehicleDamageDescription"
          label={d.vehicleDamageDescription}
        />
      </Grid>

      <Grid size={{ xs: 4 }}>
        <TextField<Schema>
          name="vehicleInspectionAddress"
          label={d.vehicleInspectionAddress}
          multiline
          maxRows={4}
        />
      </Grid>
        <Grid size={{ xs: 4 }}>
        <TextField<Schema>
          name="vehicleInspectionName"
          label={d.vehicleInspectionName}
          multiline
          maxRows={4}
        />
      </Grid>
        <Grid size={{ xs: 4 }}>
        <TextField<Schema>
          name="vehicleInspectionTelephone"
          label={d.vehicleInspectionTelephone}
          multiline
          maxRows={4}
        />
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
    navigate("/claims/motor/incident-details");
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
      title={d.insuredVehicle}
    >
      <Page />
    </Form>
  );
};

export { Provider as VehicleDetails };
