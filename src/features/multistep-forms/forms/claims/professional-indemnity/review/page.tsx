import { Form } from "@/features/form/components/form";
import { schema, Schema, defaultValues } from "./types/schema";
import { d } from "@/utils/professionalIndemnityDictionary/dictionary";
import Grid from "@mui/material/Grid2";
import { SubmitHandler } from "react-hook-form";
import { Checkbox } from "@/features/form/components/controllers/checkbox";
import { Typography, Stack, Divider } from "@mui/material";
import { useStore } from "./hooks/useStore";
import { useStore as useWrapperStore } from "../wrapper/hooks/useStore";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import { DatePicker } from "@/features/form/components/controllers/date-picker";
import { TextField } from "@/features/form/components/controllers/text-field";

type PageProps = {
  readOnly?: boolean;
};

const Page = ({ readOnly }: PageProps) => {
  return (
    <>
      <Grid container spacing={2}>
        <Grid size={{ xs: 12 }}>
          <Typography variant="h6" gutterBottom>
            {d.dataPrivacyNotice}
          </Typography>
          <Stack spacing={2}>
            <Typography>{d.dataUsePurpose}</Typography>
            <Typography>{d.dataSecurity}</Typography>
            <Typography>{d.dataSharing}</Typography>
          </Stack>
        </Grid>

        <Grid size={{ xs: 12 }}>
          <Divider sx={{ my: 2 }} />
          <Typography variant="h6" gutterBottom>
            {d.declaration}
          </Typography>
          <Stack spacing={2}>
            <Typography>1. {d.declarationTruthfulness}</Typography>
            <Typography>2. {d.declarationAdditionalInfo}</Typography>
            <Typography>3. {d.declarationDocuments}</Typography>
          </Stack>
        </Grid>

        <Grid size={{ xs: 12 }}>
          <Checkbox<Schema>
            name="termsAndConditionsAccepted"
            label={d.iAcceptTermsAndConditions}
          />
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <TextField<Schema>
            name="signature"
            label={d.signatureLabel}
          />
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <DatePicker<Schema>
            name="signatureDate"
            label={d.dateLabel}
          />
        </Grid>
      </Grid>
    </>
  );
};

const Provider = ({ readOnly }: { readOnly?: boolean }) => {
  const { updateSummaryDialogOpen } = useWrapperStore();
  const { formData, updateFormData, updateIsSubmitted } = useStore();

  const handleSubmit: SubmitHandler<Schema> = (data) => {
    updateFormData(data);
    updateSummaryDialogOpen(true);
    updateIsSubmitted(true);
  };

  const handleError = () => {
    updateIsSubmitted(true);
  };

  return (
    <Form
      schema={schema}
      defaultValues={defaultValues}
      values={formData}
      onSubmit={handleSubmit}
      onError={handleError}
      slotProps={{
        submitButtonProps: {
          children: d.submit,
          startIcon: <SendOutlinedIcon />,
        },
      }}
      title={d.review}
      readOnly={readOnly}
    >
      <Page readOnly={readOnly} />
    </Form>
  );
};

export { Provider as ProfessionalIndemnityReview, Page as Review }; 