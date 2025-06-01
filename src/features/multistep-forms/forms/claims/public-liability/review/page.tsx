import { Form } from "@/features/form/components/form";
import { schema, Schema, defaultValues } from "./types/schema";
import { d } from "@/utils/publicLiabilityDictionary/dictionary";
import Grid from "@mui/material/Grid2";
import { SubmitHandler } from "react-hook-form";
import { useStore } from "./hooks/useStore";
import { useStore as useWrapperStore } from "../wrapper/hooks/useStore";
import { Checkbox } from "@/features/form/components/controllers/checkbox";
import { Typography, Stack, Divider } from "@mui/material";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";

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
            {d.declarationTitle}
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
      </Grid>
    </>
  );
};

const Provider = ({ readOnly }: { readOnly?: boolean }) => {
  const { updateSummaryDialogOpen } = useWrapperStore();
  const { formData, updateFormData } = useStore();

  const handleSubmit: SubmitHandler<Schema> = (data) => {
    updateFormData(data);
    updateSummaryDialogOpen(true);
  };

  return (
    <Form
      schema={schema}
      defaultValues={defaultValues}
      values={formData}
      onSubmit={handleSubmit}
      slotProps={{
        submitButtonProps: {
          children: d.review,
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

export { Provider as PublicLiabilityReview };
export { Page as Review };
export type { PageProps as ReviewProps }; 