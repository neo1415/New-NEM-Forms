import { Form } from "@/features/form/components/form";
import { DateTimePicker } from "@/features/form/components/controllers/date-time-picker";
import { TextField } from "@/features/form/components/controllers/text-field";
import { useStore } from "./hooks/useStore";
import Grid from "@mui/material/Grid2";
import { SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router";
import { Schema, schema, defaultValues } from "./types/schema";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import { Witnesses } from "./components/Witnesses";
import { Insurers } from "./components/Insurers";
import { Menu } from "@/features/form/components/controllers/menu";
import { DatePicker } from "@/features/form/components/controllers/date-picker";

const Page = ({ readOnly }: { readOnly?: boolean }) => {
  return (
    <>
      <Grid size={{ xs: 12 }}>
        <DateTimePicker<Schema>
          name="accidentDateTime"
          label="Date and Time of Accident"
          ampm
          minutesStep={5}
        />
      </Grid>
      <Grid size={{ xs: 12 }}>
        <TextField<Schema>
          name="place"
          label="Place where accident occurred"
          multiline
          maxRows={4}
        />
      </Grid>
      <Grid size={{ xs: 12 }}>
        <TextField<Schema>
          name="incidentDescription"
          label="Please provide a detailed description of how the accident occurred"
          multiline
          maxRows={4}
        />
      </Grid>
      <Grid size={{ xs: 12 }}>
        <TextField<Schema>
          name="particularsOfInjuries"
          label="Please provide details of injuries sustained"
          multiline
          maxRows={4}
        />
      </Grid>

      <Witnesses readOnly={readOnly} />

      <Grid size={{ xs: 6 }}>
        <TextField<Schema>
          name="doctorName"
          label="Name of attending doctor"
        />
      </Grid>
      <Grid size={{ xs: 6 }}>
        <TextField<Schema>
          name="doctorAddress"
          label="Address of attending doctor"
          multiline
          maxRows={4}
        />
      </Grid>

      <Grid size={{ xs: 12 }}>
        <Menu<Schema>
          name="isUsualDoctor"
          label="Is this your usual doctor?"
          options={[
            { value: "true", label: "Yes" },
            { value: "false", label: "No" },
          ]}
        />
      </Grid>

      <Grid size={{ xs: 6 }}>
        <DatePicker<Schema>
          name="totalIncapacitationFrom"
          label="Period of total incapacitation - From"
        />
      </Grid>
      <Grid size={{ xs: 6 }}>
        <DatePicker<Schema>
          name="totalIncapacitationTo"
          label="Period of total incapacitation - To"
        />
      </Grid>

      <Grid size={{ xs: 6 }}>
        <DatePicker<Schema>
          name="partialIncapacitationFrom"
          label="Period of partial incapacitation - From"
        />
      </Grid>
      <Grid size={{ xs: 6 }}>
        <DatePicker<Schema>
          name="partialIncapacitationTo"
          label="Period of partial incapacitation - To"
        />
      </Grid>

      <Insurers readOnly={readOnly} />
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
    navigate("/claims/group-personal-accident/review");
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
      title="Details of Loss"
    >
      <Page readOnly={readOnly} />
    </Form>
  );
};

export { Provider as DetailsOfLossPage }; 