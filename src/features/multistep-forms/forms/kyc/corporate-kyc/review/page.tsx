import { Form } from "@/features/form/components/form";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import { useStore } from "./hooks/useStore";
import { defaultValues, schema, Schema } from "./types/schema";
import { useStore as useWrapperStore } from "../wrapper/hooks/useStore";
import { Checkbox } from "@/features/form/components/controllers/checkbox";
import { d } from "@/utils/corporateKYCDictionary/dictionary";
import { Box, Stack, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { SubmitHandler } from "react-hook-form";
import { DatePicker } from "@/features/form/components/controllers/date-picker";
import { useTermsAndConditions } from "@/features/terms-and-conditions/hooks/useTermsAndConditions";
import { TextField } from "@/features/form/components/controllers/text-field";
import { FormErrorSummary } from "@/features/form/components/form-error-summary";

const Page = () => {
  const termsAndConditionsQuery = useTermsAndConditions();

  return (
    <>
      <Grid container spacing={2}>
        <Grid size={{ xs: 12 }}>
          <Stack
            sx={{
              gap: 2,
              maxHeight: 400,
              overflow: "auto",
            }}
          >
            {termsAndConditionsQuery.data?.map((item) => (
              <Box key={item.title}>
                <Typography variant="h6">{item.title}</Typography>
                <Typography variant="body1">{item.content}</Typography>
              </Box>
            ))}
          </Stack>
        </Grid>
        <Grid size={{ xs: 12 }}>
          <Checkbox<Schema>
            name="termsAndConditionsAccepted"
            label={d.iAcceptTermsAndConditions}
            required
          />
        </Grid>
        <Grid size={{ xs: 12 }}>
          <Typography variant="h6" gutterBottom>
            {d.declaration}
          </Typography>
        </Grid>
        <Grid size={{ xs: 6 }}>
          <TextField<Schema>
            name="signature"
            label={d.signature}
            required
          />
        </Grid>
        <Grid size={{ xs: 6 }}>
          <DatePicker<Schema>
            name="signatureDate"
            label={d.signatureDate}
          />
        </Grid>
      </Grid>
    </>
  );
};

type ProviderProps = { readOnly?: boolean };

const Provider = ({ readOnly }: ProviderProps) => {
  const { formData, updateFormData, updateIsSubmitted } = useStore();
  const { updateOpen } = useWrapperStore();

  const handleSubmit: SubmitHandler<Schema> = (data) => {
    updateFormData(data);
    updateIsSubmitted(true);
    updateOpen(true);
  };

  return (
    <Form
      submitButtonText={d.submit}
      slotProps={{
        submitButtonProps: { startIcon: <SendOutlinedIcon /> },
      }}
      schema={schema}
      values={formData}
      defaultValues={defaultValues}
      onSubmit={handleSubmit}
      readOnly={readOnly}
      title={d.review}
    >
      <FormErrorSummary />
      <Page />
    </Form>
  );
};

export { Provider as Review }; 