import { Form } from "@/features/form/components/form";
import { useStore } from "./hooks/useStore";
import { Schema, schema, defaultValues } from "./types/schema";
import { Box, Stack, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { SubmitHandler } from "react-hook-form";
import { Checkbox } from "@/features/form/components/controllers/checkbox";
import { DatePicker } from "@/features/form/components/controllers/date-picker";
import { TextField } from "@/features/form/components/controllers/text-field";
import { useStore as useWrapperStore } from "../wrapper/hooks/useStore";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";

const Page = () => {
  return (
    <>
      <Grid size={{ xs: 12 }}>
        <Stack spacing={2}>
          <Box>
            <Typography variant="h6">Data Privacy Notice</Typography>
            <Typography variant="body1">
              We are committed to protecting your personal information. The information you provide will be used to process your claim and may be shared with third parties involved in the claims process, such as loss adjusters, medical professionals, and legal representatives. By submitting this form, you consent to the processing of your personal data in accordance with our privacy policy.
            </Typography>
          </Box>
          <Box>
            <Typography variant="h6">Terms and Conditions</Typography>
            <Typography variant="body1">
              I declare that the information provided in this claim form is true and correct to the best of my knowledge. I understand that any false or misleading information may result in the rejection of my claim and possible legal action.
            </Typography>
          </Box>
        </Stack>
      </Grid>
      <Grid size={{ xs: 12 }}>
        <Checkbox<Schema>
          name="termsAndConditionsAccepted"
          label="I accept the terms and conditions and declare that all information provided is true and correct."
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
  const { updateSummaryDialogOpen } = useWrapperStore();
  const { formData, updateFormData, updateIsSubmitted } = useStore();

  const handleSubmit: SubmitHandler<Schema> = (data) => {
    updateFormData(data);
    updateSummaryDialogOpen(true);
    updateIsSubmitted(true);
  };

  const handleError = () => {
    updateIsSubmitted(true);
  };

  return (
    <Form
      schema={schema}
      slotProps={{
        submitButtonProps: { startIcon: <SendOutlinedIcon /> },
      }}
      values={formData}
      defaultValues={defaultValues}
      onSubmit={handleSubmit}
      onError={handleError}
      readOnly={readOnly}
      title="Review"
    >
      <Page />
    </Form>
  );
};

export { Provider as ReviewPage }; 