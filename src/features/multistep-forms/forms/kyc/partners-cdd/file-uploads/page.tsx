import { Form } from "@/features/form/components/form";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import { useStore } from "./hooks/useStore";
import { defaultValues, schema, Schema } from "./types/schema";
import { d } from "@/utils/corporateCDDDictionary/dictionary";
import { SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router";
import { FormErrorSummary } from "@/features/form/components/form-error-summary";
import { FileUpload } from "@/features/form/components/controllers/file-upload";
import { Box, Typography, IconButton } from "@mui/material";
import { useState } from "react";
import AddCircleRoundedIcon from "@mui/icons-material/AddCircleRounded";

const Page = () => {
  const [showSecondIdentification, setShowSecondIdentification] = useState(false);

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3, width: '100%' }}>
      <Box>
        <Typography variant="h6" gutterBottom>
          {d.incorporation}
        </Typography>
        <FileUpload<Schema>
          name="incorporation"
          accept="image/*,.pdf"
        />
      </Box>
      <Box>
        <Typography variant="h6" gutterBottom>
          {d.identification}
        </Typography>
        <FileUpload<Schema>
          name="identification"
          accept="image/*,.pdf"
        />
      </Box>
      {!showSecondIdentification && (
        <Box>
          <IconButton onClick={() => setShowSecondIdentification(true)} color="primary">
            <AddCircleRoundedIcon />
            <Typography sx={{ ml: 1 }}>Add Second Identification</Typography>
          </IconButton>
        </Box>
      )}
      {showSecondIdentification && (
        <Box>
          <Typography variant="h6" gutterBottom>
            {d.identification2}
          </Typography>
          <FileUpload<Schema>
            name="identification2"
            accept="image/*,.pdf"
          />
        </Box>
      )}
      <Box>
        <Typography variant="h6" gutterBottom>
          {d.formCO7}
        </Typography>
        <FileUpload<Schema>
          name="formCO7"
          accept="image/*,.pdf"
        />
      </Box>
      <Box>
        <Typography variant="h6" gutterBottom>
          {d.VAT}
        </Typography>
        <FileUpload<Schema>
          name="VAT"
          accept="image/*,.pdf"
        />
      </Box>
      <Box>
        <Typography variant="h6" gutterBottom>
          {d.tax}
        </Typography>
        <FileUpload<Schema>
          name="tax"
          accept="image/*,.pdf"
        />
      </Box>
    </Box>
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