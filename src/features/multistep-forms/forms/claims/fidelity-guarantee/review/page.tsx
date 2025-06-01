import { Form } from "@/features/form/components/form";
import { schema, Schema, defaultValues } from "./types/schema";
import { d } from "@/utils/fidelityDictionary/dictionary";
import Grid from "@mui/material/Grid2";
import { SubmitHandler } from "react-hook-form";
import { Checkbox } from "@/features/form/components/controllers/checkbox";
import { Typography } from "@mui/material";
import { useStore } from "./hooks/useStore";
import { useStore as useWrapperStore } from "../wrapper/hooks/useStore";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";

const Page = () => {
  return (
    <>
      <Grid container spacing={2}>
        <Grid size={{ xs: 12 }}>
          <Typography variant="h6">{d.dataPrivacyNotice}</Typography>
        </Grid>

        <Grid size={{ xs: 12 }}>
          <Typography paragraph>{d.dataSecurity}</Typography>
          <Typography paragraph>{d.dataUsePurpose}</Typography>
          <Typography paragraph>{d.dataSharing}</Typography>
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

const Provider = () => {
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
      slotProps={{
        submitButtonProps: { startIcon: <SendOutlinedIcon /> },
      }}
      values={formData}
      defaultValues={defaultValues}
      onSubmit={handleSubmit}
      onError={handleError}
      title={d.review}
    >
      <Page />
    </Form>
  );
};

export { Provider as FidelityGuaranteeReview, Page }; 