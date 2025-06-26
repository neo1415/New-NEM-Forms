import { Form } from "@/features/form/components/form";
import { DatePicker } from "@/features/form/components/controllers/date-picker";
import { TextField } from "@/features/form/components/controllers/text-field";
import { useStore } from "../wrapper/hooks/useStore";
import Grid from "@mui/material/Grid2";
import { SubmitHandler, useWatch } from "react-hook-form";
import { useNavigate } from "react-router";
import { Menu } from "@/features/form/components/controllers/menu";
import { Schema, schema, defaultValues } from "./types/schema";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import { Typography } from "@mui/material";
import { TextArea } from "@/features/form/components/controllers/text-area";
import { useFormContext } from "@/features/form/hooks/useFormContext";
import { PropertyItems } from "./components/PropertyItems";

const Page = () => {
  const { control } = useFormContext<Schema>();

  const premisesOccupied = useWatch({
    control,
    name: "premisesOccupied",
  });

  const hasSuspects = useWatch({
    control,
    name: "hasSuspects",
  });

  const hasInformedPolice = useWatch({
    control,
    name: "hasInformedPolice",
  });

  const isSoleOwner = useWatch({
    control,
    name: "isSoleOwner",
  });

  const hasOtherInsurance = useWatch({
    control,
    name: "hasOtherInsurance",
  });

  const hasPreviousTheft = useWatch({
    control,
    name: "hasPreviousTheft",
  });

  return (
    <>
      <Grid size={{ xs: 12 }}>
        <Typography variant="subtitle1" gutterBottom>
          Premises Details
        </Typography>
      </Grid>
      <Grid size={{ xs: 12 }}>
        <TextArea<Schema>
          name="premisesAddress"
          label="Full Address of Premises Involved"
          rows={4}
        />
      </Grid>
      <Grid size={{ xs: 6 }}>
        <TextField<Schema>
          name="premisesTelephone"
          label="Premises Telephone"
        />
      </Grid>
      <Grid size={{ xs: 6 }}>
        <DatePicker<Schema>
          name="theftDate"
          label="Date of Theft"
        />
      </Grid>
      <Grid size={{ xs: 6 }}>
        <TextField<Schema>
          name="theftTime"
          label="Time of Theft"
        />
      </Grid>
      <Grid size={{ xs: 12 }}>
        <TextArea<Schema>
          name="entryDetails"
          label="Give full details of how entry to premises was effected"
          rows={4}
        />
      </Grid>
      <Grid size={{ xs: 12 }}>
        <TextArea<Schema>
          name="roomsEntered"
          label="Which rooms were entered?"
          rows={4}
        />
      </Grid>
      <Grid size={{ xs: 6 }}>
        <Menu<Schema>
          name="premisesOccupied"
          label="Were the premises occupied at time of loss?"
          options={[
            { label: "Yes", value: "true" },
            { label: "No", value: "false" },
          ]}
        />
      </Grid>
      {premisesOccupied === "false" && (
        <Grid size={{ xs: 6 }}>
          <TextField<Schema>
            name="lastOccupiedDateTime"
            label="State date and hour they were last occupied"
          />
        </Grid>
      )}
      <Grid size={{ xs: 6 }}>
        <Menu<Schema>
          name="hasSuspects"
          label="Do your suspicions rest upon anyone?"
          options={[
            { label: "Yes", value: "true" },
            { label: "No", value: "false" },
          ]}
        />
      </Grid>
      {hasSuspects === "true" && (
        <Grid size={{ xs: 6 }}>
          <TextField<Schema>
            name="suspectName"
            label="State name"
          />
        </Grid>
      )}
      <Grid size={{ xs: 6 }}>
        <Menu<Schema>
          name="hasInformedPolice"
          label="Have you informed the Police?"
          options={[
            { label: "Yes", value: "true" },
            { label: "No", value: "false" },
          ]}
        />
      </Grid>
      {hasInformedPolice === "true" && (
        <>
          <Grid size={{ xs: 6 }}>
            <DatePicker<Schema>
              name="policeNotificationDate"
              label="Date of Notification"
            />
          </Grid>
          <Grid size={{ xs: 6 }}>
            <TextField<Schema>
              name="policeStationName"
              label="Name of Police Station"
            />
          </Grid>
          <Grid size={{ xs: 12 }}>
            <TextArea<Schema>
              name="policeStationAddress"
              label="Address of Police Station"
              rows={4}
            />
          </Grid>
        </>
      )}
      <Grid size={{ xs: 6 }}>
        <Menu<Schema>
          name="isSoleOwner"
          label="Are you the sole owner of the property damaged or stolen?"
          options={[
            { label: "Yes", value: "true" },
            { label: "No", value: "false" },
          ]}
        />
      </Grid>
      {isSoleOwner === "false" && (
        <>
          <Grid size={{ xs: 6 }}>
            <TextField<Schema>
              name="otherOwnersName"
              label="Name of Other Owners"
            />
          </Grid>
          <Grid size={{ xs: 12 }}>
            <TextArea<Schema>
              name="otherOwnersAddress"
              label="Address of Other Owners"
              rows={4}
            />
          </Grid>
        </>
      )}
      <Grid size={{ xs: 6 }}>
        <Menu<Schema>
          name="hasOtherInsurance"
          label="Is there any other insurance cover against this loss?"
          options={[
            { label: "Yes", value: "true" },
            { label: "No", value: "false" },
          ]}
        />
      </Grid>
      {hasOtherInsurance === "true" && (
        <>
          <Grid size={{ xs: 6 }}>
            <TextField<Schema>
              name="otherInsurersName"
              label="Name of Other Insurers"
            />
          </Grid>
          <Grid size={{ xs: 12 }}>
            <TextArea<Schema>
              name="otherInsurersAddress"
              label="Address of Other Insurers"
              rows={4}
            />
          </Grid>
        </>
      )}
      <Grid size={{ xs: 12 }}>
        <TextField<Schema>
          name="totalContentsValue"
          label="At the time of loss, what amount would you value the total contents of your premises?"
        />
      </Grid>
      <Grid size={{ xs: 6 }}>
        <TextField<Schema>
          name="firePolicySum"
          label="What is the sum insured under your fire policy?"
        />
      </Grid>
      <Grid size={{ xs: 6 }}>
        <TextField<Schema>
          name="fireInsurersName"
          label="Name of Fire Insurers"
        />
      </Grid>
      <Grid size={{ xs: 12 }}>
        <TextArea<Schema>
          name="fireInsurersAddress"
          label="Address of Fire Insurers"
          rows={4}
        />
      </Grid>
      <Grid size={{ xs: 6 }}>
        <Menu<Schema>
          name="hasPreviousTheft"
          label="Have you ever sustained a previous loss by burglary or theft?"
          options={[
            { label: "Yes", value: "true" },
            { label: "No", value: "false" },
          ]}
        />
      </Grid>
      {hasPreviousTheft === "true" && (
        <Grid size={{ xs: 12 }}>
          <TextArea<Schema>
            name="previousTheftDetails"
            label="Explain the circumstances"
            rows={4}
          />
        </Grid>
      )}

      {/* Property Items Table */}
      <Grid size={{ xs: 12 }}>
        <PropertyItems />
      </Grid>
    </>
  );
};

type ProviderProps = {
  readOnly?: boolean;
};

const Provider = ({ readOnly }: ProviderProps) => {
  const navigate = useNavigate();
  const { detailsOfLoss, updateDetailsOfLoss } = useStore();

  const handleSubmit: SubmitHandler<Schema> = (data) => {
    updateDetailsOfLoss(data);
    navigate("/claims/burglary/review");
  };

  return (
    <Form
      schema={schema}
      values={detailsOfLoss}
      defaultValues={defaultValues}
      onSubmit={handleSubmit}
      readOnly={readOnly}
      title="Details of Loss"
      submitButtonText="Save and Continue"
      slotProps={{
        submitButtonProps: { startIcon: <ArrowForwardIosRoundedIcon /> },
      }}
    >
      <Page />
    </Form>
  );
};

export { Provider as DetailsOfLossPage }; 