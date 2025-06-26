import { DatePicker } from "@/features/form/components/controllers/date-picker";
import { Menu } from "@/features/form/components/controllers/menu";
import { TextField } from "@/features/form/components/controllers/text-field";
import Grid from "@mui/material/Grid2";
import { useWatch } from "react-hook-form";
import { Schema } from "../types/schema";
import { useFormContext } from "@/features/form/hooks/useFormContext";

export const DisabilityFields = () => {
  const { control } = useFormContext<Schema>();

  const canPerformDuties = useWatch({
    control,
    name: "canPerformDuties",
  });

  return (
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
  );
}; 