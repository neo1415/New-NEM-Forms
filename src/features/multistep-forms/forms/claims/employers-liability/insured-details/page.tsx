import { Form } from "@/features/form/components/form";
import { DatePicker } from "@/features/form/components/controllers/date-picker";
import { TextField } from "@/features/form/components/controllers/text-field";
import { useStore } from "./hooks/useStore";
import Grid from "@mui/material/Grid2";
import { SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router";
import { Autocomplete } from "@/features/form/components/controllers/autocomplete";
import { Schema, schema, defaultValues } from "./types/schema";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";

const Page = () => {
  return (
    <>
      <Grid size={{ xs: 6 }}>
        <TextField<Schema>
          name="policyNumber"
          label="Policy Number"
        />
      </Grid>
      <Grid size={{ xs: 6 }}>
        <DatePicker<Schema>
          name="periodOfCoverFrom"
          label="Period of Cover From"
        />
      </Grid>
      <Grid size={{ xs: 6 }}>
        <DatePicker<Schema>
          name="periodOfCoverTo"
          label="Period of Cover To"
        />
      </Grid>
      <Grid size={{ xs: 12 }}>
        <TextField<Schema>
          name="nameOfInsured"
          label="Name of Insured"
        />
      </Grid>
      <Grid size={{ xs: 12 }}>
        <TextField<Schema>
          name="address"
          label="Address"
          multiline
          maxRows={4}
        />
      </Grid>
      <Grid size={{ xs: 6 }}>
        <TextField<Schema>
          name="phone"
          label="Phone"
        />
      </Grid>
      <Grid size={{ xs: 6 }}>
        <TextField<Schema>
          name="email"
          label="Email"
        />
      </Grid>
      <Grid size={{ xs: 12 }}>
        <Autocomplete<Schema>
          name="alertPreference"
          options={[
            { label: "Email", value: "Email" },
            { label: "SMS", value: "SMS" },
            { label: "Both", value: "Both" },
          ]}
          textFieldProps={{ 
            label: "How would you prefer to receive claim updates?"
          }}
        />
      </Grid>
    </>
  );
};

type ProviderProps = {
  readOnly?: boolean;
};

const Provider = ({ readOnly }: ProviderProps) => {
  const navigate = useNavigate();
  const { formData, updateFormData } = useStore();

  const handleSubmit: SubmitHandler<Schema> = (data) => {
    updateFormData(data);
    navigate("/claims/employers-liability/details-of-loss");
  };

  return (
    <Form
      submitButtonText="Save and Continue"
      slotProps={{
        submitButtonProps: { startIcon: <ArrowForwardIosRoundedIcon /> },
      }}
      schema={schema}
      values={formData}
      defaultValues={defaultValues}
      onSubmit={handleSubmit}
      readOnly={readOnly}
      title="Insured Details"
    >
      <Page />
    </Form>
  );
};

export { Provider as InsuredDetailsPage }; 