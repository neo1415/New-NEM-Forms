import { Form } from "@/features/form/components/form";
import { schema, Schema, defaultValues } from "./types/schema";
import { d } from "@/utils/publicLiabilityDictionary/dictionary";
import Grid from "@mui/material/Grid2";
import { SubmitHandler } from "react-hook-form";
import { useStore } from "./hooks/useStore";
import { useNavigate } from "react-router";

import { DatePicker } from "@/features/form/components/controllers/date-picker";
import { Menu } from "@/features/form/components/controllers/menu";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import { Typography } from "@mui/material";
import { TextField } from "@/features/form/components/controllers/text-field";

type PageProps = {
  readOnly?: boolean;
};

const Page = ({ readOnly }: PageProps) => {
  return (
    <Grid container spacing={2}>
      <Grid size={{ xs: 12, sm: 6 }}>
        <TextField<Schema>
          name="policyNumber"
          label={d.policyNumber}
        />
      </Grid>

      <Grid size={{ xs: 12, sm: 6 }}>
        <DatePicker<Schema>
          name="coverPeriodFrom"
          label={d.coverPeriodFrom}
        />
      </Grid>

      <Grid size={{ xs: 12, sm: 6 }}>
        <DatePicker<Schema>
          name="coverPeriodTo"
          label={d.coverPeriodTo}
        />
      </Grid>

      <Grid size={{ xs: 12, sm: 6 }}>
        <TextField<Schema>
          name="companyName"
          label={d.companyName}
        />
      </Grid>

      <Grid size={{ xs: 12 }}>
        <TextField<Schema>
          name="address"
          label={d.address}
          multiline
          rows={3}
        />
      </Grid>

      <Grid size={{ xs: 12, sm: 6 }}>
        <TextField<Schema>
          name="phone"
          label={d.phone}
        />
      </Grid>

      <Grid size={{ xs: 12, sm: 6 }}>
        <TextField<Schema>
          name="email"
          label={d.email}
        />
      </Grid>

      <Grid size={{ xs: 12 }}>
        <Typography variant="body2" gutterBottom>
          {d.alertPreferenceDescription}
        </Typography>
        <Menu<Schema>
          name="alertPreference"
          label={d.alertPreference}
          options={d.alertPreferenceOptions.map((option) => ({
            value: option,
            label: option,
          }))}
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
    navigate("../details-of-loss");
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
      title={d.insuredDetails}
      readOnly={readOnly}
    >
      <Page readOnly={readOnly} />
    </Form>
  );
};

export { Provider as PublicLiabilityInsuredDetails };
export { Page as InsuredDetails };
export type { PageProps as InsuredDetailsProps }; 