import { Form } from "@/features/form/components/form";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import { useStore } from "./hooks/useStore";
import { defaultValues, schema, Schema } from "./types/schema";
import { useStore as useWrapperStore } from "../wrapper/hooks/useStore";
import { Checkbox } from "@/features/form/components/controllers/checkbox";
import { d } from "@/utils/fireDictionary/dictionary";
import { Box, Stack, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { SubmitHandler } from "react-hook-form";

const termsAndConditions = [
  {
    title: "Data Privacy Notice",
    content: d.dataPrivacyNotice,
  },
  {
    title: "Data Use Purpose",
    content: d.dataUsePurpose,
  },
  {
    title: "Data Security",
    content: d.dataSecurity,
  },
  {
    title: "Data Sharing",
    content: d.dataSharing,
  },
];

const Page = () => {
  return (
    <>
      <Grid size={{ xs: 12 }}>
        <Stack
          sx={{
            gap: 2,
            maxHeight: 400,
            overflow: "scroll",
          }}
        >
          {termsAndConditions.map((item) => (
            <Box key={item.title}>
              <Typography variant="h6">{item.title}</Typography>
              <Typography variant="body1">{item.content}</Typography>
            </Box>
          ))}
        </Stack>
      </Grid>
      <Grid size={{ xs: 12 }}>
        <Checkbox<Schema>
          name="termsAndConditionsAccepted"
          label={`${d.iAcceptTermsAndConditions}.`}
        />
      </Grid>
    </>
  );
};

const Provider = () => {
  const { updateSummaryDialogOpen } = useWrapperStore();
  const { formData, updateFormData } = useStore();

  const handleSubmit: SubmitHandler<Schema> = (data) => {
    updateFormData(data);
    updateSummaryDialogOpen(true);
  };

  return (
    <Form
      submitButtonText={d.submit}
      slotProps={{
        submitButtonProps: { startIcon: <SendOutlinedIcon /> },
      }}
      schema={schema}
      values={formData}
      defaultValues={defaultValues}
      onSubmit={handleSubmit}
    >
      <Page />
    </Form>
  );
};

export { Provider as FireAndSpecialPerilsReview }; 