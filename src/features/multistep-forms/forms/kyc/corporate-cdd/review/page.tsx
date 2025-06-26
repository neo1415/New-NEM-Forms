import { Form } from "@/features/form/components/form";
import { useStore } from "./hooks/useStore";
import { defaultValues, schema, Schema } from "./types/schema";
import { d } from "@/utils/corporateCDDDictionary/dictionary";
import Grid from "@mui/material/Grid2";
import { SubmitHandler } from "react-hook-form";
import { FormErrorSummary } from "@/features/form/components/form-error-summary";
import { Checkbox } from "@/features/form/components/controllers/checkbox";
import { useTermsAndConditions } from "@/features/terms-and-conditions/hooks/useTermsAndConditions";
import { Box, Stack, Typography } from "@mui/material";

const Page = () => {
  const { data: termsAndConditions } = useTermsAndConditions();

  return (
    <Grid container spacing={4}>
      <Grid size={{ xs: 12 }}>
        <Stack
          sx={{
            gap: 2,
            maxHeight: 400,
            overflow: "auto",
            padding: 2,
            border: "1px solid",
            borderColor: "divider",
            borderRadius: 1,
          }}
        >
          {termsAndConditions?.map((item) => (
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
          label="I accept the terms and conditions"
          required
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

export { Provider as Review }; 