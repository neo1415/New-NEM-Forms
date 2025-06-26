import { DatePicker } from "@/features/form/components/controllers/date-picker";
import { TextField } from "@/features/form/components/controllers/text-field";
import { useFormContext } from "@/features/form/hooks/useFormContext";
import { Autocomplete } from "@/features/form/components/controllers/autocomplete";
import Grid from "@mui/material/Grid2";
import { useWatch } from "react-hook-form";
import { Schema } from "../types/schema";

const DisabilityFields = () => {
  const { control, readOnly } = useFormContext<Schema>();

  const isTotallyDisabled = useWatch({
    control,
    name: "isTotallyDisabled",
  });

  return (
    <>
      <Grid size={{ xs: 12 }}>
        <Autocomplete<Schema>
          name="isTotallyDisabled"
          options={[
            { label: "Yes", value: "true" },
            { label: "No", value: "false" },
          ]}
          textFieldProps={{ label: "Is the Injured Party totally disabled?" }}
          disabled={readOnly}
        />
      </Grid>

      {isTotallyDisabled === "true" && (
        <>
          <Grid size={{ xs: 6 }}>
            <DatePicker<Schema>
              name="dateStoppedWorking"
              label="Date Stopped Working"
              disabled={readOnly}
            />
          </Grid>
          <Grid size={{ xs: 6 }}>
            <TextField<Schema>
              name="expectedDisablementDuration"
              label="Expected Duration of Disablement"
              disabled={readOnly}
            />
          </Grid>
          <Grid size={{ xs: 12 }}>
            <Autocomplete<Schema>
              name="canPerformDuties"
              options={[
                { label: "Yes", value: "true" },
                { label: "No", value: "false" },
              ]}
              textFieldProps={{ label: "Can the Injured Party perform any duties?" }}
              disabled={readOnly}
            />
          </Grid>
          {useWatch({ control, name: "canPerformDuties" }) === "true" && (
            <Grid size={{ xs: 12 }}>
              <TextField<Schema>
                name="currentServicesWorth"
                label="Current Value of Services"
                disabled={readOnly}
              />
            </Grid>
          )}
          <Grid size={{ xs: 12 }}>
            <Autocomplete<Schema>
              name="hasClaimBeenMade"
              options={[
                { label: "Yes", value: "true" },
                { label: "No", value: "false" },
              ]}
              textFieldProps={{ label: "Has the Injured Party made any claim on you?" }}
              disabled={readOnly}
            />
          </Grid>
        </>
      )}
    </>
  );
};

export { DisabilityFields }; 