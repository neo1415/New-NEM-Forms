import { Form } from "@/features/form/components/form";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import { useStore } from "./hooks/useStore";
import { defaultValues, schema, Schema } from "./types/schema";
import { d } from "@/utils/brokersCDDDictionary/dictionary";
import { SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router";
import { FormErrorSummary } from "@/features/form/components/form-error-summary";
import { FileUpload } from "@/features/form/components/controllers/file-upload";
import { Box, Typography, Grid } from "@mui/material";

const Page = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <FileUpload<Schema>
          name="incorporation"
          label={d.incorporation}
    
        />
      </Grid>
      <Grid item xs={12}>
        <FileUpload<Schema>
          name="identification"
          label={d.identification}
    
        />
      </Grid>
      <Grid item xs={12}>
        <FileUpload<Schema>
          name="identification2"
          label={d.identification2}
   
        />
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h6" gutterBottom>
          For NAICOM Regulated Companies
        </Typography>
        <FileUpload<Schema>
          name="NAICOMForm"
          label={d.NAICOMForm}
        />
      </Grid>
    </Grid>
  );
};

type ProviderProps = { readOnly?: boolean };

export const BrokersCddFileUploads = ({ readOnly }: ProviderProps) => {
  const { formData, updateFormData } = useStore();
  const navigate = useNavigate();

  const handleSubmit: SubmitHandler<Schema> = async (data) => {
    updateFormData(data);
    navigate("../review");
  };

  return (
    <Form
      submitButtonText={d.saveAndContinue}
      slotProps={{
        submitButtonProps: {
          endIcon: <ArrowForwardIosRoundedIcon />,
        },
      }}
      schema={schema}
      values={formData as Schema}
      defaultValues={defaultValues}
      readOnly={readOnly} 
      onSubmit={handleSubmit}
      title={d.fileUploads}
    >
      <FormErrorSummary />
      <Page />
    </Form>
  );
}; 