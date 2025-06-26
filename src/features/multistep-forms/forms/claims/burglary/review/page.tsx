import { Form } from "@/features/form/components/form";
import { DatePicker } from "@/features/form/components/controllers/date-picker";
import { TextField } from "@/features/form/components/controllers/text-field";
import { useStore } from "../wrapper/hooks/useStore";
import Grid from "@mui/material/Grid2";
import { SubmitHandler } from "react-hook-form";
import { Schema, schema, defaultValues } from "./types/schema";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import { Checkbox } from "@/features/form/components/controllers/checkbox";
import { Typography } from "@mui/material";

const Page = () => {
  return (
    <>
      <Grid size={{ xs: 12 }}>
        <Typography variant="subtitle1" gutterBottom>
          Data Privacy
        </Typography>
        <Typography variant="body2" color="text.secondary" paragraph>
          i. Your data will solemnly be used for the purposes of this business contract and also to enable us reach you with the
          updates about our products and services.
        </Typography>
        <Typography variant="body2" color="text.secondary" paragraph>
          ii. Please note that your personal data will be treated with utmost respect and is well secured as required by Nigeria
          Data Protection Regulations 2019.
        </Typography>
        <Typography variant="body2" color="text.secondary" paragraph>
          iii. Your personal data shall not be shared with or sold to any third-party without your consent unless we are compelled
          by law or regulator.
        </Typography>
      </Grid>

      <Grid size={{ xs: 12 }}>
        <Typography variant="subtitle1" gutterBottom sx={{ mt: 2 }}>
          Declaration
        </Typography>
        <Typography variant="body2" color="text.secondary" paragraph>
          1. I/We declare to the best of my/our knowledge and belief that the information given on this form is true in every
          respect and agree that if I/we have made any false or fraudulent statement, be it suppression or concealment, the
          policy shall be cancelled and the claim shall be forfeited.
        </Typography>
        <Typography variant="body2" color="text.secondary" paragraph>
          2. I/We agree to provide additional information to NEM Insurance, if required.
        </Typography>
        <Typography variant="body2" color="text.secondary" paragraph>
          3. I/We agree to submit all required and requested for documents and NEM Insurance shall not be held
          responsible for any delay in settlement of claim due to non-fulfillment of requirements.
        </Typography>
      </Grid>

      <Grid size={{ xs: 12 }}>
        <Checkbox<Schema>
          name="termsAndConditionsAccepted"
          label="I accept the terms and conditions"
        />
      </Grid>

      <Grid size={{ xs: 6 }}>
        <TextField<Schema>
          name="signature"
          label="Signature"
        />
      </Grid>

      <Grid size={{ xs: 6 }}>
        <DatePicker<Schema>
          name="signatureDate"
          label="Date"
        />
      </Grid>
    </>
  );
};

type ProviderProps = {
  readOnly?: boolean;
};

const Provider = ({ readOnly }: ProviderProps) => {
  const { review, updateReview, updateSummaryDialogOpen } = useStore();

  const handleSubmit: SubmitHandler<Schema> = (data) => {
    updateReview(data);
    updateSummaryDialogOpen(true);
  };

  return (
    <Form
      schema={schema}
      values={review}
      defaultValues={defaultValues}
      onSubmit={handleSubmit}
      readOnly={readOnly}
      title="Review and Submit"
      submitButtonText="Submit"
      slotProps={{
        submitButtonProps: { startIcon: <SendOutlinedIcon /> },
      }}
    >
      <Page />
    </Form>
  );
};

export { Provider as ReviewPage }; 