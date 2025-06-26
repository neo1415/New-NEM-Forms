import { Form } from "@/features/form/components/form";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import { DatePicker } from "@/features/form/components/controllers/date-picker";
import { TextField } from "@/features/form/components/controllers/text-field";
import { useStore } from "./hooks/useStore";
import { defaultValues, schema, Schema } from "./types/schema";
import { d } from "@/utils/corporateCDDDictionary/dictionary";
import Grid from "@mui/material/Grid2";
import { SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router";
import { FormErrorSummary } from "@/features/form/components/form-error-summary";
import { Typography, Divider } from "@mui/material";

const Page = () => {
  return (
    <Grid container spacing={2}>
      <Grid size={{ xs: 12 }}>
        <Typography variant="h6" gutterBottom>{d.localAccountDetails}</Typography>
      </Grid>
      <Grid size={{ xs: 6 }}>
        <TextField<Schema>
          name="bankName"
          label={d.bankName}
          required
        />
      </Grid>
      <Grid size={{ xs: 6 }}>
        <TextField<Schema>
          name="accountNumber"
          label={d.accountNumber}
          required
          format="number"
        />
      </Grid>
      <Grid size={{ xs: 6 }}>
        <TextField<Schema>
          name="bankBranch"
          label={d.bankBranch}
          required
        />
      </Grid>
      <Grid size={{ xs: 6 }}>
        <DatePicker<Schema>
          name="accountOpeningDate"
          label={d.accountOpeningDate}
          maxDate={new Date()}
        />
      </Grid>

      <Grid size={{ xs: 12 }}>
        <Divider sx={{ my: 3 }} />
        <Typography variant="h6" gutterBottom>{d.foreignAccountDetails}</Typography>
      </Grid>
      <Grid size={{ xs: 6 }}>
        <TextField<Schema>
          name="bankName2"
          label={d.bankName}
        />
      </Grid>
      <Grid size={{ xs: 6 }}>
        <TextField<Schema>
          name="accountNumber2"
          label={d.accountNumber}
          format="number"
        />
      </Grid>
      <Grid size={{ xs: 6 }}>
        <TextField<Schema>
          name="bankBranch2"
          label={d.bankBranch}
        />
      </Grid>
      <Grid size={{ xs: 6 }}>
        <DatePicker<Schema>
          name="accountOpeningDate2"
          label={d.accountOpeningDate}
          maxDate={new Date()}
        />
      </Grid>
    </Grid>
  );
};

type ProviderProps = {
  readOnly?: boolean;
};

const Provider = ({ readOnly }: ProviderProps) => {
  const navigate = useNavigate();
  const { formData, updateFormData } = useStore();

  const handleSubmit: SubmitHandler<Schema> = (data) => {
    updateFormData(data);
    navigate("/kyc/naicom-company-cdd/file-uploads");
  };

  return (
    <Form
      submitButtonText={d.saveAndContinue}
      slotProps={{
        submitButtonProps: { endIcon: <ArrowForwardIosRoundedIcon /> },
      }}
      schema={schema}
      values={{ ...defaultValues, ...formData }}
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

export { Provider as AccountDetails }; 