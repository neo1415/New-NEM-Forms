import { Form } from "@/features/form/components/form";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import { TextField } from "@/features/form/components/controllers/text-field";
import { d } from "@/utils/motorDictionary/dictionary";
import Grid from "@mui/material/Grid2";
import { SubmitHandler} from "react-hook-form";
import { useNavigate } from "react-router";
import { Schema, schema, defaultValues } from "./types/schema";
import { TextArea } from "@/features/form/components/controllers/text-area";
import { DateTimePicker } from "@/features/form/components/controllers/date-time-picker";
import { useStore } from "./hooks/useStore";

const Page = () => {

  return (
    <>
      <Grid size={{ xs: 12 }}>
        <TextField<Schema> name="incidentLocation" label={d.incidentLocation} />
      </Grid>

      <Grid size={{ xs: 12 }}>
  <DateTimePicker<Schema>
    name="incidentDateTime"
    label="Incident Date & Time"
    ampm // optional: adds AM/PM
    minutesStep={5} // optional: snap to every 5 minutes
  />
</Grid>
    
        <Grid size={{ xs: 12 }}>
        <TextArea<Schema>
          name="incidentDescription"
          label={d.incidentDescription}
        />
      </Grid>

    </>
  );
};

type ProviderProps = { readOnly?: boolean };
const Provider = ({ readOnly }: ProviderProps) => {
  const navigate = useNavigate();

  const { formData, updateFormData } = useStore();

  const handleSubmit: SubmitHandler<Schema> = (data) => {
    updateFormData(data);
    navigate("/claims/motor/witnesses");
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
      title={d.incidentDetails}
    >
      <Page />
    </Form>
  );
};

export { Provider as IncidentDetails };
