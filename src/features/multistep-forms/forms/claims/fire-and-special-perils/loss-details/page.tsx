import { Form } from "@/features/form/components/form";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import { DatePicker } from "@/features/form/components/controllers/date-picker";
import { TextField } from "@/features/form/components/controllers/text-field";
import { useStore } from "./hooks/useStore";
import { defaultValues, schema, Schema } from "./types/schema";
import { d } from "@/utils/fireDictionary/dictionary";
import Grid from "@mui/material/Grid2";
import { SubmitHandler, useWatch } from "react-hook-form";
import { useNavigate } from "react-router";
import { Autocomplete } from "@/features/form/components/controllers/autocomplete";
import { useFormContext } from "@/features/form/hooks/useFormContext";
import { 
  useRiskElement, 
  useSoleOwner, 
  useOtherInsurance, 
  usePreviousClaims,
  usePremisesPurpose 
} from "./hooks/useQueries";

const Page = () => {
  const riskElementQuery = useRiskElement();
  const soleOwnerQuery = useSoleOwner();
  const otherInsuranceQuery = useOtherInsurance();
  const previousClaimsQuery = usePreviousClaims();
  const premisesPurposeQuery = usePremisesPurpose();

  const { control, setValue } = useFormContext<Schema>();
  const riskElementValue = useWatch({ control, name: "riskElementIntroduced" });
  const soleOwnerValue = useWatch({ control, name: "soleOwner" });
  const otherInsuranceValue = useWatch({ control, name: "otherInsuranceCover" });
  const previousClaimsValue = useWatch({ control, name: "previousClaims" });

  return (
    <>
      <Grid size={{ xs: 8 }}>
        <TextField<Schema> name="premisesAddress" label={d.premisesAddress} multiline maxRows={3} />
      </Grid>
      <Grid size={{ xs: 4 }}>
        <TextField<Schema>
          name="premisesTelephone"
          label={d.premisesTelephone}
          format="phoneNumber"
        />
      </Grid>
      <Grid size={{ xs: 6 }}>
        <DatePicker<Schema> name="occurrenceDate" label={d.occurrenceDate} />
      </Grid>
      <Grid size={{ xs: 6 }}>
        <TextField<Schema> name="occurrenceTime" label={d.occurrenceTime} />
      </Grid>
      <Grid size={{ xs: 12 }}>
        <TextField<Schema>
          name="damageDescription"
          label={d.damageDescription}
          multiline
          maxRows={5}
        />
      </Grid>
      <Grid size={{ xs: 6 }}>
        <Autocomplete<Schema>
          name="premisesPurposePolicy"
          options={premisesPurposeQuery.data}
          loading={premisesPurposeQuery.isLoading}
          textFieldProps={{ label: d.premisesPurposePolicy }}
          onOptionSelect={(option) => {
            setValue("premisesPurposePolicy", option?.value === "yes");
          }}
        />
      </Grid>
      <Grid size={{ xs: 6 }}>
        <TextField<Schema>
          name="premisesPurposeAtTime"
          label={d.premisesPurposeAtTime}
        />
      </Grid>
      <Grid size={{ xs: 6 }}>
        <Autocomplete<Schema>
          name="riskElementIntroduced"
          options={riskElementQuery.data}
          loading={riskElementQuery.isLoading}
          textFieldProps={{ label: d.riskElementIntroduced }}
          onOptionSelect={(option) => {
            setValue("riskElementIntroduced", option?.value === "yes");
          }}
        />
      </Grid>
      {riskElementValue === true && (
        <Grid size={{ xs: 6 }}>
          <TextField<Schema>
            name="riskElementDetails"
            label={d.riskElementDetails}
          />
        </Grid>
      )}
      <Grid size={{ xs: 12 }}>
        <TextField<Schema>
          name="fireDiscoveryMeasures"
          label={d.fireDiscoveryMeasures}
          multiline
          maxRows={3}
        />
      </Grid>
      <Grid size={{ xs: 6 }}>
        <Autocomplete<Schema>
          name="soleOwner"
          options={soleOwnerQuery.data}
          loading={soleOwnerQuery.isLoading}
          textFieldProps={{ label: d.soleOwner }}
          onOptionSelect={(option) => {
            setValue("soleOwner", option?.value === "yes");
          }}
        />
      </Grid>
      {soleOwnerValue === false && (
        <Grid size={{ xs: 6 }}>
          <TextField<Schema>
            name="otherOwnersDetails"
            label={d.otherOwnersDetails}
          />
        </Grid>
      )}
      <Grid size={{ xs: 6 }}>
        <Autocomplete<Schema>
          name="otherInsuranceCover"
          options={otherInsuranceQuery.data}
          loading={otherInsuranceQuery.isLoading}
          textFieldProps={{ label: d.otherInsuranceCover }}
          onOptionSelect={(option) => {
            setValue("otherInsuranceCover", option?.value === "yes");
          }}
        />
      </Grid>
      {otherInsuranceValue === true && (
        <Grid size={{ xs: 6 }}>
          <TextField<Schema>
            name="otherInsurersDetails"
            label={d.otherInsurersDetails}
          />
        </Grid>
      )}
      <Grid size={{ xs: 12 }}>
        <TextField<Schema>
          name="premisesContentValue"
          label={d.premisesContentValue}
          format="currency"
        />
      </Grid>
      <Grid size={{ xs: 6 }}>
        <Autocomplete<Schema>
          name="previousClaims"
          options={previousClaimsQuery.data}
          loading={previousClaimsQuery.isLoading}
          textFieldProps={{ label: d.previousClaims }}
          onOptionSelect={(option) => {
            setValue("previousClaims", option?.value === "yes");
          }}
        />
      </Grid>
      {previousClaimsValue === true && (
        <Grid size={{ xs: 6 }}>
          <TextField<Schema>
            name="previousClaimsDetails"
            label={d.previousClaimsDetails}
          />
        </Grid>
      )}
    </>
  );
};

type ProviderProps = { readOnly?: boolean };
const Provider = ({ readOnly }: ProviderProps) => {
  const navigate = useNavigate();
  const { formData, updateFormData } = useStore();

  const handleSubmit: SubmitHandler<Schema> = (data) => {
    updateFormData(data);
    navigate("/claims/fire-and-special-perils/review");
  };

  return (
    <Form
      submitButtonText={d.nextStep}
      slotProps={{
        submitButtonProps: { startIcon: <ArrowForwardIosRoundedIcon /> },
      }}
      schema={schema}
      values={formData}
      defaultValues={defaultValues}
      onSubmit={handleSubmit}
      readOnly={readOnly}
      title="Details of Loss"
    >
      <Page />
    </Form>
  );
};

export { Provider as FireAndSpecialPerilsLossDetails }; 