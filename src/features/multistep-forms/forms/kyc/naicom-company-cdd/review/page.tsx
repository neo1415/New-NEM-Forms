import { Form } from "@/features/form/components/form";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import { useStore } from "./hooks/useStore";
import { defaultValues, schema, Schema } from "./types/schema";
import { useStore as useWrapperStore } from "../wrapper/hooks/useStore";
import { Checkbox } from "@/features/form/components/controllers/checkbox";
import { d } from "@/utils/corporateCDDDictionary/dictionary";
import { Box, Stack, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { SubmitHandler } from "react-hook-form";
import { DatePicker } from "@/features/form/components/controllers/date-picker";
import { TextField } from "@/features/form/components/controllers/text-field";
import { useTermsAndConditions } from "@/features/terms-and-conditions/hooks/useTermsAndConditions";
import { FormErrorSummary } from "@/features/form/components/form-error-summary";
import { getErrorMessage } from "@/utils/getErrorMessage";
import { showSnack } from "@/utils/showSnack";

type Props = {
  readOnly?: boolean;
};

const Page = () => {
  const termsAndConditionsQuery = useTermsAndConditions();

  return (
    <Grid container spacing={2}>
      <Grid size={{ xs: 12 }}>
        <Stack
          sx={{
            gap: 2,
            maxHeight: 400,
            overflow: "auto",
          }}
        >
          {termsAndConditionsQuery.data?.map((item: { title: string; content: string }) => (
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
          label={d.iAcceptTermsAndConditions}
          required
        />
      </Grid>
      <Grid size={{ xs: 12 }}>
        <Typography variant="h6" gutterBottom>
          {d.declaration}
        </Typography>
      </Grid>
      <Grid size={{ xs: 6 }}>
        <TextField<Schema>
          name="signature"
          label={d.signature}
          required
        />
      </Grid>
      <Grid size={{ xs: 6 }}>
        <DatePicker<Schema>
          name="signatureDate"
          label={d.signatureDate}
          maxDate={new Date()}
     
        />
      </Grid>
    </Grid>
  );
};

export const Review = ({ readOnly }: Props) => {
  const { formData, updateFormData, updateIsSubmitted } = useStore();
  const { updateOpen } = useWrapperStore();

  const handleSubmit: SubmitHandler<Schema> = async (data) => {
    try {
      await schema.parseAsync(data);
    updateFormData(data);
      updateOpen(true);
      updateIsSubmitted(true);
    } catch (error) {
      showSnack(getErrorMessage(error), { variant: "error" });
      updateIsSubmitted(true);
    }
  };

  return (
    <Form
      submitButtonText={d.submit}
      slotProps={{
        submitButtonProps: {
          startIcon: <SendOutlinedIcon />,
          fullWidth: false,
          sx: {
            width: { xs: 1, md: "33.33%" },
            alignSelf: "flex-end",
          },
        },
      }}
      schema={schema}
      values={formData as Schema}
      defaultValues={defaultValues}
      onSubmit={handleSubmit}
      readOnly={readOnly}
      title={d.review}
    >
      <FormErrorSummary />
      <Page />
    </Form>
  );
};