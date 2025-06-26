import { Form } from "@/features/form/components/form";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import { DatePicker } from "@/features/form/components/controllers/date-picker";
import { TextField } from "@/features/form/components/controllers/text-field";
import { useStore } from "./hooks/useStore";
import { defaultValues, schema, Schema } from "./types/schema";
import Grid from "@mui/material/Grid2";
import { SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router";
import { LocationField } from "@/features/kyc/shared/components/location-field/page";

const Page = () => {
  return (
    <>
      <Grid size={{ xs: 6 }}>
        <TextField<Schema>
          name="agentsName"
          label="Agent's Name"
        />
      </Grid>

      <Grid size={{ xs: 12 }}>
        <TextField<Schema>
          name="agentsAddress"
          label="Agent's Office Address"
          multiline
          maxRows={3}
        />
      </Grid>

      <Grid size={{ xs: 6 }}>
        <TextField<Schema>
          name="naicomNo"
          label="NAICOM License Number (RIA)"
        />
      </Grid>

      <Grid size={{ xs: 6 }}>
        <DatePicker<Schema>
          name="lisenceIssuedDate"
          label="License Issued Date"
        />
      </Grid>

      <Grid size={{ xs: 6 }}>
        <DatePicker<Schema>
          name="lisenceExpiryDate"
          label="License Expiry Date"
        />
      </Grid>

      <Grid size={{ xs: 6 }}>
        <TextField<Schema>
          name="agentsEmail"
          label="Email Address"
          type="email"
        />
      </Grid>

      <Grid size={{ xs: 6 }}>
        <TextField<Schema>
          name="website"
          label="Website"
        />
      </Grid>

      <Grid size={{ xs: 6 }}>
        <TextField<Schema>
          name="mobileNumber"
          label="Mobile Number"
          format="phoneNumber"
        />
      </Grid>

      <Grid size={{ xs: 6 }}>
        <TextField<Schema>
          name="taxIDNo"
          label="Tax Identification Number"
        />
      </Grid>

      <Grid size={{ xs: 6 }}>
        <TextField<Schema>
          name="arian"
          label="ARIAN Membership Number"
        />
      </Grid>

      <Grid size={{ xs: 12 }}>
        <TextField<Schema>
          name="listOfAgents"
          label="List of Agents Approved Principals (Insurers)"
          multiline
          maxRows={3}
        />
      </Grid>

      <LocationField />
    </>
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
      submitButtonText="Save & Continue"
      slotProps={{
        submitButtonProps: { startIcon: <ArrowForwardIosRoundedIcon /> },
      }}
      schema={schema}
      values={formData}
      defaultValues={defaultValues}
      onSubmit={handleSubmit}
      readOnly={readOnly}
      title="Additional Information"
    >
      <Page />
    </Form>
  );
};

export { Provider as AgentsKYCAdditionalInfo }; 