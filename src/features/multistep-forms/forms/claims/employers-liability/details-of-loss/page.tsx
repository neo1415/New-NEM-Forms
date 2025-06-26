import { Form } from "@/features/form/components/form";
import { DatePicker } from "@/features/form/components/controllers/date-picker";
import { TextField } from "@/features/form/components/controllers/text-field";
import { useStore } from "./hooks/useStore";
import Grid from "@mui/material/Grid2";
import { SubmitHandler, useWatch } from "react-hook-form";
import { useNavigate } from "react-router";
import { Menu } from "@/features/form/components/controllers/menu";
import { Schema, schema, defaultValues } from "./types/schema";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import { DisabilityFields } from "./components/DisabilityFields";
import { Typography } from "@mui/material";
import { Witnesses } from "./components/Witnesses";
import { OtherInsurers } from "./components/OtherInsurers";
import { TextArea } from "@/features/form/components/controllers/text-area";
import { DateTimePicker } from "@/features/form/components/controllers/date-time-picker";
import { useFormContext } from "@/features/form/hooks/useFormContext";

const Page = () => {
  const { control } = useFormContext<Schema>();

  const isDirectEmployee = useWatch({
    control,
    name: "isDirectEmployee",
  });

  const hasPreviousAccidents = useWatch({
    control,
    name: "hasPreviousAccidents",
  });

  const isReceivingMedicalAttention = useWatch({
    control,
    name: "isReceivingMedicalAttention",
  });

  const isTotallyDisabled = useWatch({
    control,
    name: "isTotallyDisabled",
  });

  const canPerformDuties = useWatch({
    control,
    name: "canPerformDuties",
  });

  return (
    <>
      {/* Section 1 - Injured Party Details */}
      <Grid size={{ xs: 12 }}>
        <Typography variant="subtitle1" gutterBottom>
          Injured Party Details
        </Typography>
      </Grid>
      <Grid size={{ xs: 12 }}>
        <TextField<Schema>
          name="injuredPartyName"
          label="Name of Injured Party"
        />
      </Grid>
      <Grid size={{ xs: 6 }}>
        <TextField<Schema>
          name="injuredPartyAge"
          label="Age"
        />
      </Grid>
      <Grid size={{ xs: 6 }}>
        <TextField<Schema>
          name="injuredPartyAddress"
          label="Address"
          multiline
          maxRows={4}
        />
      </Grid>
      <Grid size={{ xs: 12 }}>
        <TextField<Schema>
          name="averageMonthlyEarnings"
          label="Average Monthly Earnings"
        />
      </Grid>
      <Grid size={{ xs: 12 }}>
        <TextField<Schema>
          name="occupation"
          label="Occupation"
        />
      </Grid>
      <Grid size={{ xs: 6 }}>
        <Menu<Schema>
          name="isDirectEmployee"
          label="Is the Injured Party in your direct employment?"
          options={[
            { label: "Yes", value: "true" },
            { label: "No", value: "false" },
          ]}
        />
      </Grid>
      {isDirectEmployee === "true" && (
        <Grid size={{ xs: 6 }}>
          <DatePicker<Schema>
            name="employmentDate"
            label="Date of Employment"
          />
        </Grid>
      )}
      <Grid size={{ xs: 6 }}>
        <Menu<Schema>
          name="maritalStatus"
          label="Marital Status"
          options={[
            { label: "Single", value: "single" },
            { label: "Married", value: "married" },
            { label: "Widowed", value: "widowed" },
          ]}
        />
      </Grid>
      <Grid size={{ xs: 6 }}>
        <TextField<Schema>
          name="childrenDetails"
          label="Children Details (Number and Ages)"
        />
      </Grid>
      <Grid size={{ xs: 6 }}>
        <Menu<Schema>
          name="hasPreviousAccidents"
          label="Has the injured party been previously involved in any accident?"
          options={[
            { label: "Yes", value: "true" },
            { label: "No", value: "false" },
          ]}
        />
      </Grid>
      {hasPreviousAccidents === "true" && (
        <Grid size={{ xs: 6 }}>
          <TextArea<Schema>
            name="previousAccidentsDetails"
            label="Please provide details of previous accidents"
            rows={4}
          />
        </Grid>
      )}

      {/* Section 2 - Injury Details */}
      <Grid size={{ xs: 12 }}>
        <Typography variant="subtitle1" gutterBottom sx={{ mt: 3 }}>
          Injury Details
        </Typography>
      </Grid>
      <Grid size={{ xs: 12 }}>
        <TextArea<Schema>
          name="natureOfInjuries"
          label="Please state the full nature of the injuries sustained (If incident occurred in connection with any machinery, provide details of machinery involved)"
          rows={4}
        />
      </Grid>
      <Grid size={{ xs: 6 }}>
        <TextField<Schema>
          name="personInChargeName"
          label="Name of Person in Charge"
        />
      </Grid>
      <Grid size={{ xs: 6 }}>
        <TextField<Schema>
          name="personInChargePosition"
          label="Position of Person in Charge"
        />
      </Grid>

      {/* Section 3 - Accident Details */}
      <Grid size={{ xs: 12 }}>
        <Typography variant="subtitle1" gutterBottom sx={{ mt: 3 }}>
          Accident Details
        </Typography>
      </Grid>
      <Grid size={{ xs: 12 }}>
        <DateTimePicker<Schema>
          name="accidentDate"
          label="Date and Time of Accident"
        />
      </Grid>
      <Grid size={{ xs: 12 }}>
        <TextArea<Schema>
          name="accidentLocation"
          label="Location of Accident"
          rows={4}
        />
      </Grid>
      <Grid size={{ xs: 6 }}>
        <DatePicker<Schema>
          name="dateReported"
          label="Date Reported"
        />
      </Grid>
      <Grid size={{ xs: 6 }}>
        <TextField<Schema>
          name="reportedBy"
          label="Reported By"
        />
      </Grid>
      <Grid size={{ xs: 6 }}>
        <DatePicker<Schema>
          name="dateStoppedWork"
          label="Date Stopped Work"
        />
      </Grid>
      <Grid size={{ xs: 12 }}>
        <TextArea<Schema>
          name="workEngagedIn"
          label="Work Engaged In at Time of Accident"
          rows={4}
        />
      </Grid>
      <Grid size={{ xs: 12 }}>
        <TextArea<Schema>
          name="accidentDescription"
          label="Description of Accident"
          rows={4}
        />
      </Grid>
      <Grid size={{ xs: 12 }}>
        <Menu<Schema>
          name="wasInjuredPartySober"
          label="Was the Injured Party sober or intoxicated?"
          options={[
            { label: "Sober", value: "sober" },
            { label: "Intoxicated", value: "intoxicated" },
          ]}
        />
      </Grid>

      {/* Section 4 & 5 - Medical Details */}
      <Grid size={{ xs: 12 }}>
        <Typography variant="subtitle1" gutterBottom sx={{ mt: 3 }}>
          Medical Details
        </Typography>
      </Grid>
      <Grid size={{ xs: 12 }}>
        <Menu<Schema>
          name="isReceivingMedicalAttention"
          label="Is the Injured Party receiving medical attention?"
          options={[
            { label: "Yes", value: "true" },
            { label: "No", value: "false" },
          ]}
        />
      </Grid>
      {isReceivingMedicalAttention === "true" && (
        <>
          <Grid size={{ xs: 6 }}>
            <TextField<Schema>
              name="hospitalName"
              label="Hospital Name"
            />
          </Grid>
          <Grid size={{ xs: 6 }}>
            <TextField<Schema>
              name="hospitalAddress"
              label="Hospital Address"
              multiline
              maxRows={4}
            />
          </Grid>
          <Grid size={{ xs: 6 }}>
            <TextField<Schema>
              name="doctorName"
              label="Doctor's Name"
            />
          </Grid>
          <Grid size={{ xs: 6 }}>
            <TextField<Schema>
              name="doctorAddress"
              label="Doctor's Address"
              multiline
              maxRows={4}
            />
          </Grid>
        </>
      )}

      {/* Section 6 - Disability Details */}
      <Grid size={{ xs: 12 }}>
        <Typography variant="subtitle1" gutterBottom sx={{ mt: 3 }}>
          Disability Details
        </Typography>
      </Grid>
      <Grid size={{ xs: 12 }}>
        <Menu<Schema>
          name="isTotallyDisabled"
          label="Is the Injured Party totally disabled?"
          options={[
            { label: "Yes", value: "true" },
            { label: "No", value: "false" },
          ]}
        />
      </Grid>
      {isTotallyDisabled === "true" && (
        <>
          <Grid size={{ xs: 6 }}>
            <DatePicker<Schema>
              name="dateStoppedWorking"
              label="Date Stopped Working"
            />
          </Grid>
          <Grid size={{ xs: 6 }}>
            <TextField<Schema>
              name="expectedDisablementDuration"
              label="Expected Duration of Disablement"
            />
          </Grid>
          <Grid size={{ xs: 12 }}>
            <Menu<Schema>
              name="canPerformDuties"
              label="Is the Injured Party able to carry out any part of their duties?"
              options={[
                { label: "Yes", value: "true" },
                { label: "No", value: "false" },
              ]}
            />
          </Grid>
          {canPerformDuties === "true" && (
            <Grid size={{ xs: 12 }}>
              <TextField<Schema>
                name="currentServicesWorth"
                label="What are their services presently worth?"
              />
            </Grid>
          )}
          <Grid size={{ xs: 12 }}>
            <Menu<Schema>
              name="hasClaimBeenMade"
              label="Has the Injured Party made any Claim on you?"
              options={[
                { label: "Yes", value: "true" },
                { label: "No", value: "false" },
              ]}
            />
          </Grid>
        </>
      )}

      {/* Section 7 - Witnesses */}
      <Grid size={{ xs: 12 }}>
        <Typography variant="subtitle1" gutterBottom sx={{ mt: 3 }}>
          Witnesses
        </Typography>
      </Grid>
      <Grid size={{ xs: 12 }}>
        <Witnesses />
      </Grid>

      {/* Section 8 - Other Insurers */}
      <Grid size={{ xs: 12 }}>
        <Typography variant="subtitle1" gutterBottom sx={{ mt: 3 }}>
          Other Insurers
        </Typography>
      </Grid>
      <Grid size={{ xs: 12 }}>
        <OtherInsurers />
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
    navigate("/claims/employers-liability/statement-of-earnings");
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
      <Page />
    </Form>
  );
};

export { Provider as DetailsOfLossPage }; 