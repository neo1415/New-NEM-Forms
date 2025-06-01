import { Form } from "@/features/form/components/form";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import { DatePicker } from "@/features/form/components/controllers/date-picker";
import { TextField } from "@/features/form/components/controllers/text-field";
import { useStore } from "./hooks/useStore";
import { defaultValues, schema, Schema } from "./types/schema";
import { d } from "@/utils/fidelityDictionary/dictionary";
import Grid from "@mui/material/Grid2";
import { SubmitHandler, useWatch } from "react-hook-form";
import { useNavigate } from "react-router";
import { Autocomplete } from "@/features/form/components/controllers/autocomplete";
import { useFormContext } from "@/features/form/hooks/useFormContext";
import {
  usePreviousIrregularity,
  useDefaulterProperty,
  useOutstandingRemuneration,
  useAdditionalSecurity,
  useDischarged,
  useSettlementProposal,
} from "./hooks/useQueries";

const Page = () => {
  const previousIrregularityQuery = usePreviousIrregularity();
  const defaulterPropertyQuery = useDefaulterProperty();
  const outstandingRemunerationQuery = useOutstandingRemuneration();
  const additionalSecurityQuery = useAdditionalSecurity();
  const dischargedQuery = useDischarged();
  const settlementProposalQuery = useSettlementProposal();

  const { control, setValue } = useFormContext<Schema>();
  const previousIrregularity = useWatch({ control, name: "previousIrregularity" });
  const discharged = useWatch({ control, name: "discharged" });

  return (
    <>
      <Grid container spacing={2}>
        <Grid size={{ xs: 12, sm: 6 }}>
          <TextField<Schema>
            name="defaulterName"
            label={d.defaulterName}
          />
        </Grid>
        <Grid size={{ xs: 12, sm: 6 }}>
          <TextField<Schema>
            name="defaulterAge"
            label={d.defaulterAge}
          />
        </Grid>
        <Grid size={{ xs: 12 }}>
          <TextField<Schema>
            name="defaulterAddress"
            label={d.defaulterAddress}
            multiline
            rows={3}
          />
        </Grid>
        <Grid size={{ xs: 12 }}>
          <TextField<Schema>
            name="defaulterOccupation"
            label={d.defaulterOccupation}
          />
        </Grid>
        <Grid size={{ xs: 12, sm: 6 }}>
          <DatePicker<Schema>
            name="discoveryDate"
            label={d.discoveryDate}
          />
        </Grid>
        <Grid size={{ xs: 12 }}>
          <TextField<Schema>
            name="defaultDuration"
            label={d.defaultDuration}
            multiline
            rows={3}
          />
        </Grid>
        <Grid size={{ xs: 12 }}>
          <TextField<Schema>
            name="defaultAmount"
            label={d.defaultAmount}
          />
        </Grid>
        <Grid size={{ xs: 6 }}>
          <Autocomplete<Schema>
            name="previousIrregularity"
            options={previousIrregularityQuery.data}
            loading={previousIrregularityQuery.isLoading}
            textFieldProps={{ label: d.previousIrregularity }}
            onOptionSelect={(option) => {
              setValue("previousIrregularity", option?.value === "yes");
            }}
          />
        </Grid>
        {previousIrregularity === true && (
          <Grid size={{ xs: 6 }}>
            <TextField<Schema>
              name="previousIrregularityDetails"
              label={d.previousIrregularityDetails}
              multiline
              rows={3}
            />
          </Grid>
        )}
        <Grid size={{ xs: 12, sm: 6 }}>
          <DatePicker<Schema>
            name="lastCheckDate"
            label={d.lastCheckDate}
          />
        </Grid>
        <Grid size={{ xs: 6 }}>
          <Autocomplete<Schema>
            name="defaulterProperty"
            options={defaulterPropertyQuery.data}
            loading={defaulterPropertyQuery.isLoading}
            textFieldProps={{ label: d.defaulterProperty }}
            onOptionSelect={(option) => {
              setValue("defaulterProperty", option?.value === "yes");
            }}
          />
        </Grid>
        <Grid size={{ xs: 6 }}>
          <Autocomplete<Schema>
            name="outstandingRemuneration"
            options={outstandingRemunerationQuery.data}
            loading={outstandingRemunerationQuery.isLoading}
            textFieldProps={{ label: d.outstandingRemuneration }}
            onOptionSelect={(option) => {
              setValue("outstandingRemuneration", option?.value === "yes");
            }}
          />
        </Grid>
        <Grid size={{ xs: 6 }}>
          <Autocomplete<Schema>
            name="additionalSecurity"
            options={additionalSecurityQuery.data}
            loading={additionalSecurityQuery.isLoading}
            textFieldProps={{ label: d.additionalSecurity }}
            onOptionSelect={(option) => {
              setValue("additionalSecurity", option?.value === "yes");
            }}
          />
        </Grid>
        <Grid size={{ xs: 6 }}>
          <Autocomplete<Schema>
            name="discharged"
            options={dischargedQuery.data}
            loading={dischargedQuery.isLoading}
            textFieldProps={{ label: d.discharged }}
            onOptionSelect={(option) => {
              setValue("discharged", option?.value === "yes");
            }}
          />
        </Grid>
        {discharged === true && (
          <Grid size={{ xs: 6 }}>
            <DatePicker<Schema>
              name="dischargeDate"
              label={d.dischargeDate}
            />
          </Grid>
        )}
        <Grid size={{ xs: 6 }}>
          <Autocomplete<Schema>
            name="settlementProposal"
            options={settlementProposalQuery.data}
            loading={settlementProposalQuery.isLoading}
            textFieldProps={{ label: d.settlementProposal }}
            onOptionSelect={(option) => {
              setValue("settlementProposal", option?.value === "yes");
            }}
          />
        </Grid>
      </Grid>
    </>
  );
};

const Provider = () => {
  const navigate = useNavigate();
  const { formData, updateFormData } = useStore();

  const handleSubmit: SubmitHandler<Schema> = (data) => {
    updateFormData(data);
    navigate("/claims/fidelity-guarantee/review");
  };

  return (
    <Form
      submitButtonText={d.nextStep}
      slotProps={{
        submitButtonProps: { endIcon: <ArrowForwardIosRoundedIcon /> },
      }}
      schema={schema}
      values={formData}
      defaultValues={defaultValues}
      onSubmit={handleSubmit}
    >
      <Page />
    </Form>
  );
};

export { Provider as FidelityGuaranteeLossDetails, Page }; 