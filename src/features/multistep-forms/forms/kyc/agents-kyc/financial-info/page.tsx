import { Form } from "@/features/form/components/form";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import { DatePicker } from "@/features/form/components/controllers/date-picker";
import { TextField } from "@/features/form/components/controllers/text-field";
import { useStore } from "./hooks/useStore";
import { defaultValues, schema, Schema } from "./types/schema";
import { d } from "@/utils/agentsKYCDictionary/dictionary";
import Grid from "@mui/material/Grid2";
import { SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router";
import { Typography, Divider } from "@mui/material";

const Page = () => {
  return (
    <Grid container spacing={2}>
      <Grid size={{ xs: 12 }}>
        <Typography variant="h6" gutterBottom>
          {d.localAccountDetails}
        </Typography>
      </Grid>
      <Grid size={{ xs: 6 }}>
        <TextField<Schema>
          name="localAccountNumber"
          label={d.accountNumber}
          required
        />
      </Grid>
      <Grid size={{ xs: 6 }}>
        <TextField<Schema>
          name="localBankName"
          label={d.bankName}
          required
        />
      </Grid>
      <Grid size={{ xs: 6 }}>
        <TextField<Schema>
          name="localBankBranch"
          label={d.bankBranch}
          required
        />
      </Grid>
      <Grid size={{ xs: 6 }}>
        <DatePicker<Schema>
          name="localAccountOpeningDate"
          label={d.accountOpeningDate}
        />
      </Grid>

      <Grid size={{ xs: 12 }}>
        <Divider sx={{ my: 3 }} />
        <Typography variant="h6" gutterBottom>
          {d.foreignAccountDetails}
        </Typography>
      </Grid>
      <Grid size={{ xs: 6 }}>
        <TextField<Schema>
          name="foreignAccountNumber"
          label={d.accountNumber}
        />
      </Grid>
      <Grid size={{ xs: 6 }}>
        <TextField<Schema>
          name="foreignBankName"
          label={d.bankName}
        />
      </Grid>
      <Grid size={{ xs: 6 }}>
        <TextField<Schema>
          name="foreignBankBranch"
          label={d.bankBranch}
        />
      </Grid>
      <Grid size={{ xs: 6 }}>
        <DatePicker<Schema>
          name="foreignAccountOpeningDate"
          label={d.accountOpeningDate}
        />
      </Grid>
    </Grid>
  );
};

type ProviderProps = { readOnly?: boolean };

const Provider = ({ readOnly }: ProviderProps) => {
  const navigate = useNavigate();
  const { formData, updateFormData } = useStore();

  const handleSubmit: SubmitHandler<Schema> = (data) => {
    updateFormData(data);
    navigate("../review");
  };

  return (
    <Form
      submitButtonText={d.saveAndContinue}
      slotProps={{
        submitButtonProps: { endIcon: <ArrowForwardIosRoundedIcon /> },
      }}
      schema={schema}
      values={formData}
      defaultValues={defaultValues}
      onSubmit={handleSubmit}
      readOnly={readOnly}
      title={d.financialInfo}
    >
      <Page />
    </Form>
  );
};

export { Provider as FinancialInfo }; 