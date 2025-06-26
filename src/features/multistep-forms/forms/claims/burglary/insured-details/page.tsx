import { Form } from "@/features/form/components/form";
import { DatePicker } from "@/features/form/components/controllers/date-picker";
import { TextField } from "@/features/form/components/controllers/text-field";
import { useStore } from "../wrapper/hooks/useStore";
import Grid from "@mui/material/Grid2";
import { SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router";
import { Menu } from "@/features/form/components/controllers/menu";
import { Schema, schema, defaultValues } from "./types/schema";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import { Typography } from "@mui/material";

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
        <Typography variant="subtitle1" gutterBottom sx={{ mt: 2 }}>
          Personal Information
        </Typography>
      </Grid>
      <Grid size={{ xs: 6 }}>
        <TextField<Schema>
          name="nameOfInsured"
          label="Name of Insured"
        />
      </Grid>
      <Grid size={{ xs: 6 }}>
        <TextField<Schema>
          name="companyName"
          label="Company Name (if applicable)"
        />
      </Grid>
      <Grid size={{ xs: 6 }}>
        <TextField<Schema>
          name="title"
          label="Title"
        />
      </Grid>
      <Grid size={{ xs: 6 }}>
        <DatePicker<Schema>
          name="dateOfBirth"
          label="Date of Birth"
        />
      </Grid>
      <Grid size={{ xs: 6 }}>
        <Menu<Schema>
          name="gender"
          label="Gender"
          options={[
            { label: "Male", value: "Male" },
            { label: "Female", value: "Female" },
          ]}
        />
      </Grid>
      <Grid size={{ xs: 12 }}>
        <Typography variant="subtitle1" gutterBottom sx={{ mt: 2 }}>
          Contact Information
        </Typography>
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
        <Menu<Schema>
          name="alertPreference"
          label="Alert Preference"
          options={[
            { label: "Email", value: "Email" },
            { label: "SMS", value: "SMS" },
            { label: "Both", value: "Both" },
          ]}
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
  const { insuredDetails, updateInsuredDetails } = useStore();

  const handleSubmit: SubmitHandler<Schema> = (data) => {
    updateInsuredDetails(data);
    navigate("/claims/burglary/details-of-loss");
  };

  return (
    <Form
      submitButtonText="Save and Continue"
      slotProps={{
        submitButtonProps: { startIcon: <ArrowForwardIosRoundedIcon /> },
      }}
      schema={schema}
      values={insuredDetails}
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