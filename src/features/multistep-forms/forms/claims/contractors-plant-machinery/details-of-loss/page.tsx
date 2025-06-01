import { Form } from "@/features/form/components/form";
import { DatePicker } from "@/features/form/components/controllers/date-picker";
import { TextField } from "@/features/form/components/controllers/text-field";
import { useStore } from "./hooks/useStore";
import Grid from "@mui/material/Grid2";
import { SubmitHandler, useWatch } from "react-hook-form";
import { useNavigate } from "react-router";
import { Schema, schema, defaultValues } from "./types/schema";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import { Menu } from "@/features/form/components/controllers/menu";
import { useFormContext } from "@/features/form/hooks/useFormContext";
import { DateTimePicker } from "@/features/form/components/controllers/date-time-picker";
import { TextArea } from "@/features/form/components/controllers/text-area";

const Page = () => {
  const { control } = useFormContext<Schema>();

  const policeInformed = useWatch({
    control,
    name: "policeInformed",
  });

  const isSoleOwner = useWatch({
    control,
    name: "isSoleOwner",
  });

  return (
    <>
      <Grid size={{ xs: 6 }}>
        <TextField<Schema>
          name="itemNumber"
          label="Item Number (as listed in the policy schedule)"
        />
      </Grid>
      <Grid size={{ xs: 6 }}>
        <TextField<Schema>
          name="yearOfManufacture"
          label="Year of Manufacture"
        />
      </Grid>
      <Grid size={{ xs: 6 }}>
        <TextField<Schema>
          name="make"
          label="Make and Model of Plant/Machinery"
        />
      </Grid>
      <Grid size={{ xs: 6 }}>
        <TextField<Schema>
          name="registrationNumber"
          label="Registration/Serial Number"
        />
      </Grid>
      <Grid size={{ xs: 6 }}>
        <DatePicker<Schema>
          name="dateOfPurchase"
          label="Date of Purchase"
        />
      </Grid>
      <Grid size={{ xs: 6 }}>
        <TextField<Schema>
          name="costPrice"
          label="Original Cost Price"
          type="number"
        />
      </Grid>
      <Grid size={{ xs: 6 }}>
        <TextField<Schema>
          name="deductionForAge"
          label="Deduction for Age, Use and/or Wear and Tear"
          type="number"
        />
      </Grid>
      <Grid size={{ xs: 6 }}>
        <TextField<Schema>
          name="sumClaimedPresent"
          label="Sum Claimed for Present Value"
          type="number"
        />
      </Grid>
      <Grid size={{ xs: 6 }}>
        <TextField<Schema>
          name="sumClaimedRepairs"
          label="Sum Claimed for Repairs"
          type="number"
        />
      </Grid>
      <Grid size={{ xs: 12 }}>
        <DateTimePicker<Schema>
          name="dateTimeOfLoss"
          label="Date and Time of Loss/Damage"
        />
      </Grid>
      <Grid size={{ xs: 12 }}>
        <TextArea<Schema>
          name="lastSeenLocation"
          label="If NOT known, when and where was the property last seen intact?"
          rows={4}
        />
      </Grid>
      <Grid size={{ xs: 12 }}>
        <TextArea<Schema>
          name="lossLocation"
          label="Where did the loss/damage occur? (Please provide full address and location details)"
          rows={4}
        />
      </Grid>
      <Grid size={{ xs: 12 }}>
        <TextArea<Schema>
          name="damagedParts"
          label="Please describe the parts damaged and extent of damage in detail"
          rows={4}
        />
      </Grid>
      <Grid size={{ xs: 12 }}>
        <TextArea<Schema>
          name="inspectionLocation"
          label="Where can the damaged plant/machinery be inspected? (Please provide full address)"
          rows={4}
        />
      </Grid>
      <Grid size={{ xs: 12 }}>
        <TextArea<Schema>
          name="circumstances"
          label="Please give a FULL account of circumstances in which loss/damage was sustained"
          rows={6}
        />
      </Grid>
      <Grid size={{ xs: 12 }}>
        <TextArea<Schema>
          name="responsibleParties"
          label="State here any suspicions or information as to the person or parties responsible for the damage"
          rows={4}
        />
      </Grid>
      <Grid size={{ xs: 12 }}>
        <Menu<Schema>
          name="policeInformed"
          label="Have the Police Been Informed of this Incident?"
          options={[
            { value: "true", label: "Yes" },
            { value: "false", label: "No" },
          ]}
        />
      </Grid>
      {policeInformed === "true" && (
        <>
          <Grid size={{ xs: 12 }}>
            <TextArea<Schema>
              name="policeStation"
              label="If so, when and which Police station? (Please provide full details)"
              rows={4}
            />
          </Grid>
          <Grid size={{ xs: 12 }}>
            <TextArea<Schema>
              name="recoveryActions"
              label="Give particulars of any other action taken with the object of recovery of lost property"
              rows={4}
            />
          </Grid>
        </>
      )}
      <Grid size={{ xs: 12 }}>
        <Menu<Schema>
          name="isSoleOwner"
          label="Are you the sole owner of the property lost or damaged?"
          options={[
            { value: "true", label: "Yes" },
            { value: "false", label: "No" },
          ]}
        />
      </Grid>
      {isSoleOwner === "false" && (
        <Grid size={{ xs: 12 }}>
          <TextArea<Schema>
            name="ownershipDetails"
            label="If not, please provide full details of ownership"
            rows={4}
          />
        </Grid>
      )}
      <Grid size={{ xs: 12 }}>
        <TextArea<Schema>
          name="otherInsurance"
          label="Give details of any other insurance covering the property against theft, loss or damage"
          rows={4}
        />
      </Grid>
      <Grid size={{ xs: 12 }}>
        <TextArea<Schema>
          name="thirdPartyDetails"
          label="If loss/damage involved a Third Party, state name and details of their insurance company"
          rows={4}
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
  const { formData, updateFormData, updateIsSubmitted } = useStore();

  const handleSubmit: SubmitHandler<Schema> = (data) => {
    updateFormData(data);
    navigate("/claims/contractors-plant-machinery/review");
  };

  const handleError = () => {
    updateIsSubmitted(true);
  };

  return (
    <Form
      schema={schema}
      values={formData}
      defaultValues={defaultValues}
      onSubmit={handleSubmit}
      onError={handleError}
      readOnly={readOnly}
      title="Details of Plant/Machinery Lost or Damaged"
      submitButtonText="Next"
      slotProps={{
        submitButtonProps: { startIcon: <ArrowForwardIosRoundedIcon /> },
      }}
    >
      <Page />
    </Form>
  );
};

export { Provider as DetailsOfLossPage }; 