import { Form } from "@/features/form/components/form";
import { schema, Schema, defaultValues } from "./types/schema";
import { d } from "@/utils/moneyInsuranceDictionary/dictionary";
import Grid from "@mui/material/Grid2";
import { SubmitHandler } from "react-hook-form";
import { useStore } from "./hooks/useStore";
import { useNavigate } from "react-router";
import { TextField } from "@/features/form/components/controllers/text-field";
import { DatePicker } from "@/features/form/components/controllers/date-picker";
import { Checkbox } from "@/features/form/components/controllers/checkbox";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import { Stack, Typography } from "@mui/material";

type PageProps = {
  readOnly?: boolean;
};

const Page = ({ readOnly }: PageProps) => {
  return (
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
        <Checkbox<Schema>
          name="dataPrivacyAccepted"
          label={d.dataPrivacyNotice}
        />
      </Grid>

      <Grid size={{ xs: 12 }}>
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
          name="declarationAccepted"
          label={d.declarationTitle}
        />
      </Grid>

      <Grid size={{ xs: 12, sm: 6 }}>
        <TextField<Schema>
          name="signature"
          label="Signature"
        />
      </Grid>

      <Grid size={{ xs: 12, sm: 6 }}>
        <DatePicker<Schema>
          name="signatureDate"
          label="Date"
        />
      </Grid>
    </Grid>
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
      title={d.declaration}
      readOnly={readOnly}
    >
      <Page readOnly={readOnly} />
    </Form>
  );
};

export { Provider as MoneyInsuranceDeclaration };
export { Page as Declaration };
 