import { Form } from "@/features/form/components/form";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import { useStore } from "./hooks/useStore";
import { defaultValues, schema, Schema } from "./types/schema";
import { d } from "@/utils/corporateCDDDictionary/dictionary";
import { SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router";
import { FormErrorSummary } from "@/features/form/components/form-error-summary";
import { FileUpload } from "@/features/form/components/controllers/file-upload";
import { Box, Typography, IconButton, Grid } from "@mui/material";
import { useState } from "react";
import AddCircleRoundedIcon from "@mui/icons-material/AddCircleRounded";

const Page = () => {
  const [showSecondIdentification, setShowSecondIdentification] = useState(false);

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
      {showSecondIdentification && (
        <Grid item xs={12}>
          <FileUpload<Schema>
            name="identification2"
            label={d.identification2}
         
          />
        </Grid>
      )}
      {!showSecondIdentification && (
        <Grid item xs={12}>
          <IconButton
            onClick={() => setShowSecondIdentification(true)}
            sx={{ color: "success.main" }}
          >
            <AddCircleRoundedIcon />
            <Typography sx={{ ml: 1 }}>Add Another Identification</Typography>
          </IconButton>
        </Grid>
      )}
      <Grid item xs={12}>
        <FileUpload<Schema>
          name="formCO7"
          label={d.formCO7}

        />
      </Grid>
      <Grid item xs={12}>
        <FileUpload<Schema>
          name="VAT"
          label={d.VAT}
        
        />
      </Grid>
      <Grid item xs={12}>
        <FileUpload<Schema>
          name="tax"
          label={d.tax}
        
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

export const FileUploads = () => {
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
      onSubmit={handleSubmit}
      title={d.fileUploads}
    >
      <FormErrorSummary />
      <Page />
    </Form>
  );
}; 