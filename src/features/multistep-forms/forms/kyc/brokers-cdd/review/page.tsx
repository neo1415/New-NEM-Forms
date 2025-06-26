import { Form } from "@/features/form/components/form";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import { useStore } from "./hooks/useStore";
import { defaultValues, schema, Schema } from "./types/schema";
import { useStore as useWrapperStore } from "../wrapper/hooks/useStore";
import { Checkbox } from "@/features/form/components/controllers/checkbox";
import { d } from "@/utils/brokersCDDDictionary/dictionary";
import { Box, Stack, Typography, Grid } from "@mui/material";
import { SubmitHandler } from "react-hook-form";
import { DatePicker } from "@/features/form/components/controllers/date-picker";
import { TextField } from "@/features/form/components/controllers/text-field";
import { useTermsAndConditions } from "@/features/terms-and-conditions/hooks/useTermsAndConditions";
import { FormErrorSummary } from "@/features/form/components/form-error-summary";
import { getErrorMessage } from "@/utils/getErrorMessage";
import { showSnack } from "@/utils/showSnack";

type Props = {
  readOnly?: boolean;
};

const Page = () => {
  const { data: termsAndConditions } = useTermsAndConditions();

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Box sx={{ mb: 2 }}>
          <Typography variant="h6" gutterBottom>
            Terms and Conditions
          </Typography>
          <Stack spacing={2}>
            {termsAndConditions?.map((item, index) => (
              <Typography key={index} variant="body2">
                {item.content}
              </Typography>
            ))}
          </Stack>
        </Box>
      </Grid>
      <Grid item xs={12}>
        <Checkbox<Schema>
          name="termsAndConditionsAccepted"
          label={d.iAcceptTermsAndConditions}
          required
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <TextField<Schema>
          name="signature"
          label={d.signature}
          required
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <DatePicker<Schema>
          name="signatureDate"
          label={d.signatureDate}
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
  const { formData, updateFormData, setIsSubmitted } = useStore();

  const handleSubmit: SubmitHandler<Schema> = (data) => {
    updateFormData(data);
    setIsSubmitted(true);
    // Here you would typically submit the form data to your backend
    console.log("Form submitted:", data);
  };

  return (
    <Form
      submitButtonText="Submit Form"
      schema={schema}
      values={formData as Schema}
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

export { Provider as BrokersCddReview }; 