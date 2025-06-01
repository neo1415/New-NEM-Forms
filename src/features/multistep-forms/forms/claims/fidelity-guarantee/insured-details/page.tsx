import { Form } from "@/features/form/components/form";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import { DatePicker } from "@/features/form/components/controllers/date-picker";
import { TextField } from "@/features/form/components/controllers/text-field";
import { useStore } from "./hooks/useStore";
import { defaultValues, schema, Schema } from "./types/schema";
import { d } from "@/utils/fidelityDictionary/dictionary";
import Grid from "@mui/material/Grid2";
import { SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router";
import { Menu } from "@/features/form/components/controllers/menu";

const Page = () => {
  const alertPreferenceOptions = [
    { value: "Email", label: "Email" },
    { value: "SMS", label: "SMS" },
    { value: "Both", label: "Both" },
  ];

  return (
    <>
      <Grid container spacing={2}>
        <Grid size={{ xs: 12, sm: 6 }}>
          <TextField<Schema>
            name="policyNumber"
            label={d.policyNumber}

          />
        </Grid>
        <Grid size={{ xs: 12, sm: 6 }}>
          <DatePicker<Schema>
            name="periodOfCoverFrom"
            label={d.periodOfCoverFrom}

          />
        </Grid>
        <Grid size={{ xs: 12, sm: 6 }}>
          <DatePicker<Schema>
            name="periodOfCoverTo"
            label={d.periodOfCoverTo}

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
            type="email"

          />
        </Grid>
        <Grid size={{ xs: 12 }}>
          <Menu<Schema>
            name="alertPreference"
            label={d.alertPreference}
            options={alertPreferenceOptions}

          />
        </Grid>
      </Grid>
    </>
  );
};

const Provider = () => {
  const navigate = useNavigate();
  const { formData, updateFormData } = useStore();

  const handleSubmit: SubmitHandler<Schema> = (data) => {
    updateFormData(data);
    navigate("/claims/fidelity-guarantee/loss-details");
  };

  return (
    <Form
      submitButtonText={d.nextStep}
      slotProps={{
        submitButtonProps: { endIcon: <ArrowForwardIosRoundedIcon /> },
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

export { Provider as FidelityGuaranteeInsuredDetails, Page }; 