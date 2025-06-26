import { Form } from "@/features/form/components/form";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import { DatePicker } from "@/features/form/components/controllers/date-picker";
import { TextField } from "@/features/form/components/controllers/text-field";
import { useStore } from "./hooks/useStore";
import { defaultValues, schema, Schema } from "./types/schema";
import { d } from "@/utils/brokersCDDDictionary/dictionary";
import { Grid, Typography } from "@mui/material";
import { SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router";
import { FormErrorSummary } from "@/features/form/components/form-error-summary";

const Page = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography variant="h6" gutterBottom>
          Local Account Details
        </Typography>
      </Grid>
      <Grid item xs={12} md={6}>
        <TextField<Schema>
          name="localBankName"
          label={d.localBankName}
          required
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <TextField<Schema>
          name="bankBranch"
          label={d.bankBranch}
          required
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <TextField<Schema>
          name="currentAccountNumber"
          label={d.currentAccountNumber}
          required
          type="number"
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <DatePicker<Schema>
          name="accountOpeningDate"
          label={d.accountOpeningDate}
          maxDate={new Date()}
        />
      </Grid>

      <Grid item xs={12} sx={{ mt: 4 }}>
        <Typography variant="h6" gutterBottom>
          Domicilliary Account Details (Optional)
        </Typography>
      </Grid>
      <Grid item xs={12} md={6}>
        <TextField<Schema>
          name="domAccountNumber2"
          label={d.domAccountNumber2}
          type="number"
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <TextField<Schema>
          name="foreignBankName2"
          label={d.foreignBankName2}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <TextField<Schema>
          name="bankBranchName2"
          label={d.bankBranchName2}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <TextField<Schema>
          name="currency"
          label={d.currency}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <DatePicker<Schema>
          name="accountOpeningDate2"
          label={d.accountOpeningDate2}
          maxDate={new Date()}
        />
      </Grid>
    </Grid>
  );
};

type ProviderProps = { readOnly?: boolean };

export const BrokersCddAccountDetails = ({ readOnly }: ProviderProps) => {
  const { formData, updateFormData } = useStore();
  const navigate = useNavigate();

  const handleSubmit: SubmitHandler<Schema> = async (data) => {
    updateFormData(data);
    navigate("../file-uploads");
  };

  return (
    <Form
      submitButtonText={d.saveAndContinue}
      slotProps={{
        submitButtonProps: {
          endIcon: <ArrowForwardIosRoundedIcon />,
        },
      }}
      schema={schema}
      values={formData as Schema}
      defaultValues={defaultValues}
      onSubmit={handleSubmit}
      readOnly={readOnly}
      title={d.accountDetails}
    >
      <FormErrorSummary />
      <Page />
    </Form>
  );
}; 