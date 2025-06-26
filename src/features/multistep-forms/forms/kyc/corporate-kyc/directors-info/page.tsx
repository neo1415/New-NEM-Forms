import { Form } from "@/features/form/components/form";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import { useStore } from "./hooks/useStore";
import { defaultValues, schema, Schema } from "./types/schema";
import { d } from "@/utils/corporateKYCDictionary/dictionary";
import Grid from "@mui/material/Grid2";
import { SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router";
import { Directors } from "./components/Directors";
import { FormErrorSummary } from "@/features/form/components/form-error-summary";
import { TextField } from "@/features/form/components/controllers/text-field";

const Page = () => {
  return (
    <Grid container spacing={2}>
      <Directors />
    </Grid>
  );
};

type ProviderProps = { readOnly?: boolean };

const Provider = ({ readOnly }: ProviderProps) => {
  const navigate = useNavigate();
  const { formData, updateFormData } = useStore();

  const handleSubmit: SubmitHandler<Schema> = (data) => {
    updateFormData(data);
    navigate("/kyc/corporate/financial-info");
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
      title={d.directorsInfo}
    >
      <FormErrorSummary />
      <Page />
      <TextField<Schema>
        name="phoneNumber"
        label="Phone Number"
        format="phoneNumber"
      />
    </Form>
  );
};

export { Provider as DirectorsInfo }; 