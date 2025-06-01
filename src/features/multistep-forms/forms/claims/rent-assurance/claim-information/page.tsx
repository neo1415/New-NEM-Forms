import { Form } from "@/features/form/components/form";
import { schema, Schema, defaultValues } from "./types/schema";
import { d } from "@/utils/rentAssuranceDictionary/dictionary";
import Grid from "@mui/material/Grid2";
import { SubmitHandler } from "react-hook-form";
import { useStore } from "./hooks/useStore";
import { useNavigate } from "react-router";
import { TextField } from "@/features/form/components/controllers/text-field";
import { DatePicker } from "@/features/form/components/controllers/date-picker";
import { Menu } from "@/features/form/components/controllers/menu";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";

type PageProps = {
  readOnly?: boolean;
};

const Page = ({ readOnly }: PageProps) => {
  return (
    <Grid container spacing={2}>
      <Grid size={{ xs: 12, sm: 6 }}>
        <TextField<Schema>
          name="policyNumber"
          label={d.policyNumber}
        />
      </Grid>

      <Grid size={{ xs: 12, sm: 6 }}>
        <DatePicker<Schema>
          name="defaultPeriodFrom"
          label={d.defaultPeriodFrom}
        />
      </Grid>

      <Grid size={{ xs: 12, sm: 6 }}>
        <DatePicker<Schema>
          name="defaultPeriodTo"
          label={d.defaultPeriodTo}
        />
      </Grid>

      <Grid size={{ xs: 12, sm: 6 }}>
        <TextField<Schema>
          name="amountDefaulted"
          label={d.amountDefaulted}
        />
      </Grid>

      <Grid size={{ xs: 12, sm: 6 }}>
        <DatePicker<Schema>
          name="rentDueDate"
          label={d.rentDueDate}
        />
      </Grid>

      <Grid size={{ xs: 12, sm: 6 }}>
        <Menu<Schema>
          name="rentPaymentFrequency"
          label={d.rentPaymentFrequency}
          options={d.rentPaymentFrequencyOptions.map((option) => ({
            value: option,
            label: option,
          }))}
        />
      </Grid>

      <Grid size={{ xs: 12 }}>
        <TextField<Schema>
          name="inabilityReason"
          label={d.inabilityReason}
          multiline
          rows={4}
        />
      </Grid>
    </Grid>
  );
};

const Provider = ({ readOnly }: { readOnly?: boolean }) => {
  const navigate = useNavigate();
  const { formData, updateFormData } = useStore();

  const handleSubmit: SubmitHandler<Schema> = (data) => {
    updateFormData(data);
    navigate("../beneficiary-details");
  };

  return (
    <Form
      schema={schema}
      defaultValues={defaultValues}
      values={formData}
      onSubmit={handleSubmit}
      slotProps={{
        submitButtonProps: {
          children: d.saveAndContinue,
          endIcon: <ArrowForwardIosRoundedIcon />,
        },
      }}
      title={d.claimInformation}
      readOnly={readOnly}
    >
      <Page readOnly={readOnly} />
    </Form>
  );
};

export { Provider as RentAssuranceClaimInformation };
export { Page as ClaimInformation };
export type { PageProps as ClaimInformationProps }; 