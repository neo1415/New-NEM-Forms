import { Form } from "@/features/form/components/form";
import { schema, Schema, defaultValues } from "./types/schema";
import { d } from "@/utils/rentAssuranceDictionary/dictionary";
import Grid from "@mui/material/Grid2";
import { SubmitHandler } from "react-hook-form";
import { useStore } from "./hooks/useStore";
import { useNavigate } from "react-router";
import { TextField } from "@/features/form/components/controllers/text-field";
import { DatePicker } from "@/features/form/components/controllers/date-picker";
import { FileUpload } from "@/features/form/components/controllers/file-upload";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import { Typography, Box, Stack } from "@mui/material";

type PageProps = {
  readOnly?: boolean;
};

const Page = ({ readOnly }: PageProps) => {
  return (
    <Stack spacing={3}>
      <Box>
        <Typography variant="h6" gutterBottom>Declaration</Typography>
        <Box sx={{ typography: 'body1', textTransform: 'uppercase' }}>
          I <TextField<Schema> 
              name="declarantName" 
              sx={{ 
                display: 'inline-flex', 
                width: '200px', 
                mx: 1,
                '& .MuiInputBase-root': {
                  height: '35px'
                }
              }} 
            /> OF DO HEREBY WARRANT THE TRUTH OF THE ANSWERS AND PARTICULARS GIVEN ON THIS FORM, AND THAT I HAVE WITHHELD NO MATERIAL 
          INFORMATION AND I HEREBY CLAIM FOR LOSS AS SET OUT IN THE SCHEDULE HERETO, AMOUNTING IN ALL TO N
          <TextField<Schema> 
            name="claimAmount" 
            sx={{ 
              display: 'inline-flex', 
              width: '150px', 
              mx: 1,
              '& .MuiInputBase-root': {
                height: '35px'
              }
            }} 
          /> DATED THIS <DatePicker<Schema> 
            name="declarationDate" 
            sx={{ 
              display: 'inline-flex', 
              width: '200px', 
              mx: 1,
              '& .MuiInputBase-root': {
                height: '35px'
              }
            }} 
          />
        </Box>

        <Box sx={{ typography: 'body1', mt: 4, textTransform: 'uppercase' }}>
          SIGNATURE OF INSURED: <TextField<Schema> 
            name="signature" 
            sx={{ 
              display: 'inline-flex', 
              width: '200px', 
              mx: 1,
              '& .MuiInputBase-root': {
                height: '35px'
              }
            }} 
          />
        </Box>
      </Box>

      <Box>
        <Typography variant="h6" gutterBottom>Required Documents</Typography>
        <Grid container spacing={2}>
          <Grid size={{ xs: 12 }}>
            <FileUpload<Schema>
              name="rentAgreementFile"
              label="Upload Rent Agreement (PDF, JPG, JPEG, PNG, max 5MB)"
            />
          </Grid>
          <Grid size={{ xs: 12 }}>
            <FileUpload<Schema>
              name="demandNoteFile"
              label="Upload Demand Note (PDF, JPG, JPEG, PNG, max 5MB)"
            />
          </Grid>
          <Grid size={{ xs: 12 }}>
            <FileUpload<Schema>
              name="quitNoticeFile"
              label="Upload Quit Notice (PDF, JPG, JPEG, PNG, max 5MB)"
            />
          </Grid>
        </Grid>
      </Box>

      <Typography variant="body2" sx={{ textTransform: 'uppercase' }}>
        NOTE: PLEASE ATTACH A COPY OF THE RENT AGREEMENT AND DEMAND NOTE ON RENEWAL AND/OR QUIT NOTICE TO THE COMPLETED CLAIM FORM
      </Typography>
    </Stack>
  );
};

const Provider = ({ readOnly }: { readOnly?: boolean }) => {
  const navigate = useNavigate();
  const { formData, updateFormData } = useStore();

  const handleSubmit: SubmitHandler<Schema> = (data) => {
    updateFormData(data);
    navigate("../review");
  };

  return (
    <Form
      schema={schema}
      defaultValues={defaultValues}
      values={formData}
      onSubmit={handleSubmit}
      slotProps={{
        submitButtonProps: {
          children: d.saveAndContinue,
          endIcon: <ArrowForwardIosRoundedIcon />,
        },
      }}
      title={d.declarationStep}
      readOnly={readOnly}
    >
      <Page readOnly={readOnly} />
    </Form>
  );
};

export { Provider as RentAssuranceDeclaration };
export { Page as Declaration };
export type { PageProps as DeclarationProps }; 