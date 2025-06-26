import { Form } from "@/features/form/components/form";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import { DatePicker } from "@/features/form/components/controllers/date-picker";
import { TextField } from "@/features/form/components/controllers/text-field";
import { useStore } from "./hooks/useStore";
import { defaultValues, schema, Schema } from "./types/schema";
import { d } from "@/utils/agentsKYCDictionary/dictionary";
import Grid from "@mui/material/Grid2";
import { SubmitHandler, useFormContext } from "react-hook-form";
import { useNavigate } from "react-router";
import { TextArea } from "@/features/form/components/controllers/text-area";
import { Menu } from "@/features/form/components/controllers/menu";
import { useState } from "react";

const Page = () => {
  const { control } = useFormContext();
  return (
    <Grid container spacing={2}>
      <Grid size={{ xs: 12 }}>
        <TextField<Schema>
          name="agentsName"
          label={d.agentsName}
          required
        />
      </Grid>
      <Grid size={{ xs: 12 }}>
        <TextField<Schema>
          name="agentsAddress"
          label={d.agentsAddress}
          multiline
          maxRows={3}
          required
        />
      </Grid>
      <Grid size={{ xs: 6 }}>
        <TextField<Schema>
          name="naicomNo"
          label={d.naicomNo}
          required
        />
      </Grid>
      <Grid size={{ xs: 6 }}>
        <DatePicker<Schema>
          name="licenseIssuedDate"
          label={d.licenseIssuedDate}
        />
      </Grid>
      <Grid size={{ xs: 6 }}>
        <DatePicker<Schema>
          name="licenseExpiryDate"
          label={d.licenseExpiryDate}
        />
      </Grid>
      <Grid size={{ xs: 6 }}>
        <TextField<Schema>
          name="agentsEmail"
          label={d.agentsEmail}
          type="email"
          required
        />
      </Grid>
      <Grid size={{ xs: 6 }}>
        <TextField<Schema>
          name="website"
          label={d.website}
        />
      </Grid>
      <Grid size={{ xs: 6 }}>
        <TextField<Schema>
          name="mobileNo"
          label={d.mobileNo}
          required
        />
      </Grid>
      <Grid size={{ xs: 6 }}>
        <TextField<Schema>
          name="taxIDNo"
          label={d.taxIDNo}
        />
      </Grid>
      <Grid size={{ xs: 6 }}>
        <TextField<Schema>
          name="arian"
          label={d.arian}
        />
      </Grid>
      <Grid size={{ xs: 12 }}>
        <TextField<Schema>
          name="listOfAgents"
          label={d.listOfAgents}
          multiline
          maxRows={3}
          required
        />
      </Grid>
    </Grid>
  );
};

type ProviderProps = { readOnly?: boolean };
const Provider = ({ readOnly }: ProviderProps) => {
  const navigate = useNavigate();
  const { formData, updateFormData } = useStore();

  const handleSubmit: SubmitHandler<Schema> = (data) => {
    updateFormData(data);
    navigate("/kyc/agents/financial-info");
  };

  return (
    <Form
      submitButtonText={d.saveAndContinue}
      slotProps={{
        submitButtonProps: { startIcon: <ArrowForwardIosRoundedIcon /> },
      }}
      schema={schema}
      values={formData}
      defaultValues={defaultValues}
      onSubmit={handleSubmit}
      readOnly={readOnly}
      title={d.additionalInfo}
    >
      <Page />
    </Form>
  );
};

export { Provider as AdditionalInfo }; 