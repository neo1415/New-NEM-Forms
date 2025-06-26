import { Form } from "@/features/form/components/form";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import { useStore } from "./hooks/useStore";
import { defaultValues, schema, Schema } from "./types/schema";
import { d } from "@/utils/corporateCDDDictionary/dictionary";
import { SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router";
import { FormErrorSummary } from "@/features/form/components/form-error-summary";
import { FileUpload } from "@/features/form/components/controllers/file-upload";
import { Box, Typography } from "@mui/material";

const Page = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3, width: '100%' }}>
      <Box>
        <Typography variant="h6" gutterBottom>
          {d.cacCertificate}
        </Typography>
        <FileUpload<Schema>
          name="cacCertificate"
          accept="image/*,.pdf"
        />
      </Box>
      <Box>
        <Typography variant="h6" gutterBottom>
          {d.identification}
        </Typography>
        <FileUpload<Schema>
          name="meansOfIdentification"
          accept="image/*,.pdf"
        />
      </Box>
      <Box>
        <Typography variant="h6" gutterBottom>
          NAICOM License Certificate
        </Typography>
        <FileUpload<Schema>
          name="cacForm"
          accept="image/*,.pdf"
        />
      </Box>
    </Box>
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
    navigate("/kyc/naicom-company-cdd/review");
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
      values={formData}
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