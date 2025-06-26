import { Form } from "@/features/form/components/form";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import { useStore } from "./hooks/useStore";
import { defaultValues, schema, Schema } from "./types/schema";
import { d } from "@/utils/individualKYCDictionary/dictionary";
import Grid from "@mui/material/Grid2";
import { SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router";
import { Typography, Box } from "@mui/material";
import { FileUpload } from "@/features/form/components/controllers/file-upload";
import { FormErrorSummary } from "@/features/form/components/form-error-summary";

const Page = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3, width: '100%' }}>
      <Box>
        <Typography variant="h6" gutterBottom>
          {d.meansOfIdentification}
        </Typography>
        <FileUpload<Schema>
          name="identification"
          accept="image/*,.pdf"
        />
      </Box>
    </Box>
  );
};

type ProviderProps = { readOnly?: boolean };

const Provider = ({ readOnly }: ProviderProps) => {
  const navigate = useNavigate();
  const { formData, updateFormData } = useStore();

  const handleSubmit: SubmitHandler<Schema> = (data) => {
    updateFormData(data);
    navigate("/kyc/individual/review");
  };

  return (
    <Form
      submitButtonText={d.saveAndContinue}
      slotProps={{
        submitButtonProps: { 
          endIcon: <ArrowForwardIosRoundedIcon />,
          sx: { mt: 4 }
        },
      }}
      schema={schema}
      values={formData as Schema}
      defaultValues={defaultValues}
      onSubmit={handleSubmit}
      readOnly={readOnly}
      title={d.fileUploads}
    >
      <FormErrorSummary />
      <Page />
    </Form>
  );
};

export { Provider as FileUploads }; 