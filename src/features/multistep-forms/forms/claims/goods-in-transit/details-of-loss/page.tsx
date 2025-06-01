import { Form } from "@/features/form/components/form";
import { DatePicker } from "@/features/form/components/controllers/date-picker";
import { TextField } from "@/features/form/components/controllers/text-field";
import { useStore } from "./hooks/useStore";
import Grid from "@mui/material/Grid2";
import { SubmitHandler, useWatch } from "react-hook-form";
import { useNavigate } from "react-router";
import { Autocomplete } from "@/features/form/components/controllers/autocomplete";
import { Schema, schema, defaultValues } from "./types/schema";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import { GoodsEntries } from "./components/GoodsEntries";
import { Witnesses } from "./components/Witnesses";
import { useFormContext } from "@/features/form/hooks/useFormContext";
import { FileUpload } from "@/features/form/components/controllers/file-upload";
import { Menu } from "@/features/form/components/controllers/menu";
import { DateTimePicker } from "@/features/form/components/controllers/date-time-picker";

const Page = () => {
  const { control } = useFormContext<Schema>();

  const isVehicleInvolved: "true" | "false" = useWatch({
    control,
    name: "isVehicleInvolved",
  });

  const claimType: "owner" | "carrier" = useWatch({
    control,
    name: "claimType",
  });

  const claimMadeByOwner: "true" | "false" = useWatch({
    control,
    name: "claimMadeByOwner",
  });

  return (
    <>
      <Grid size={{ xs: 12 }}>
        <DatePicker<Schema>
          name="dateOfLoss"
          label="Date of Loss"
        />
      </Grid>
      <Grid size={{ xs: 6 }}>
        <TextField<Schema>
          name="timeOfLoss"
          label="Time of Loss"
        />
      </Grid>
      <Grid size={{ xs: 6 }}>
        <Autocomplete<Schema>
          name="timeOfLossPeriod"
          options={[
            { label: "AM", value: "am" },
            { label: "PM", value: "pm" },
          ]}
          textFieldProps={{ label: "Period" }}
        />
      </Grid>
      <Grid size={{ xs: 12 }}>
        <TextField<Schema>
          name="placeOfOccurrence"
          label="Place of Occurrence"
          multiline
          maxRows={4}
        />
      </Grid>
      <Grid size={{ xs: 12 }}>
        <TextField<Schema>
          name="goodsConcerned"
          label="Description of Goods"
          multiline
          maxRows={4}
        />
      </Grid>
      <Grid size={{ xs: 4 }}>
        <TextField<Schema>
          name="numberOfPackages"
          label="Number of Packages"
        />
      </Grid>
      <Grid size={{ xs: 4 }}>
        <TextField<Schema>
          name="totalWeight"
          label="Total Weight"
        />
      </Grid>
      <Grid size={{ xs: 4 }}>
        <TextField<Schema>
          name="totalValue"
          label="Total Value"
        />
      </Grid>
      <Grid size={{ xs: 12 }}>
        <TextField<Schema>
          name="goodsPacking"
          label="How were the goods packed?"
          multiline
          maxRows={4}
        />
      </Grid>
      <Grid size={{ xs: 12 }}>
        <TextField<Schema>
          name="circumstancesOfLoss"
          label="Circumstances of Loss or Damage"
          multiline
          maxRows={4}
        />
      </Grid>

      <Grid size={{ xs: 12 }}>
        <Menu<Schema>
          name="isVehicleInvolved"
          label="Was another vehicle involved?"
          options={[
            { value: "true", label: "Yes" },
            { value: "false", label: "No" },
          ]}
        />
      </Grid>

      {isVehicleInvolved === "true" && (
        <>
          <Grid size={{ xs: 6 }}>
            <TextField<Schema>
              name="vehicleOwnerName"
              label="Vehicle Owner Name"
            />
          </Grid>
          <Grid size={{ xs: 6 }}>
            <TextField<Schema>
              name="vehicleOwnerAddress"
              label="Vehicle Owner Address"
              multiline
              maxRows={4}
            />
          </Grid>

          <Witnesses />

          <Grid size={{ xs: 6 }}>
            <TextField<Schema>
              name="policeStationAddress"
              label="Police Station Address"
              multiline
              maxRows={4}
            />
          </Grid>
          <Grid size={{ xs: 6 }}>
            <DatePicker<Schema>
              name="dateReportedToPolice"
              label="Date Reported to Police"
            />
          </Grid>

          <Grid size={{ xs: 6 }}>
            <TextField<Schema>
              name="dispatchAddress"
              label="Dispatch Address"
              multiline
              maxRows={4}
            />
          </Grid>
          <Grid size={{ xs: 6 }}>
            <DatePicker<Schema>
              name="dateDispatched"
              label="Date Dispatched"
            />
          </Grid>

          <Grid size={{ xs: 6 }}>
            <TextField<Schema>
              name="consigneeName"
              label="Consignee Name"
            />
          </Grid>
          <Grid size={{ xs: 6 }}>
            <TextField<Schema>
              name="consigneeAddress"
              label="Consignee Address"
              multiline
              maxRows={4}
            />
          </Grid>
        </>
      )}

      <GoodsEntries />

      <Grid size={{ xs: 12 }}>
        <TextField<Schema>
          name="damagedGoodsInspectionAddress"
          label="Address where damaged goods can be inspected"
          multiline
          maxRows={4}
        />
      </Grid>

      <Grid size={{ xs: 12 }}>
        <Autocomplete<Schema>
          name="claimType"
          options={[
            { label: "Owner of the Goods", value: "owner" },
            { label: "Carrier of the Goods", value: "carrier" },
          ]}
          textFieldProps={{ label: "Are you claiming as the owner or carrier of the goods?" }}
        />
      </Grid>

      {claimType === "owner" && (
        <>
          <Grid size={{ xs: 6 }}>
            <TextField<Schema>
              name="goodsTransportMethod"
              label="How were the goods transported?"
            />
          </Grid>
          <Grid size={{ xs: 6 }}>
            <TextField<Schema>
              name="transporterName"
              label="Transporter Name"
            />
          </Grid>
          <Grid size={{ xs: 6 }}>
            <TextField<Schema>
              name="transporterInsurersName"
              label="Transporter's Insurers Name"
            />
          </Grid>
          <Grid size={{ xs: 6 }}>
            <TextField<Schema>
              name="transporterInsurersAddress"
              label="Transporter's Insurers Address"
              multiline
              maxRows={4}
            />
          </Grid>
        </>
      )}

      {claimType === "carrier" && (
        <>
          <Grid size={{ xs: 6 }}>
            <TextField<Schema>
              name="goodsOwnerName"
              label="Goods Owner Name"
            />
          </Grid>
          <Grid size={{ xs: 6 }}>
            <TextField<Schema>
              name="goodsOwnerAddress"
              label="Goods Owner Address"
              multiline
              maxRows={4}
            />
          </Grid>
          <Grid size={{ xs: 6 }}>
            <TextField<Schema>
              name="goodsOwnerInsurersName"
              label="Goods Owner's Insurers Name"
            />
          </Grid>
          <Grid size={{ xs: 6 }}>
            <TextField<Schema>
              name="goodsOwnerInsurersAddress"
              label="Goods Owner's Insurers Address"
              multiline
              maxRows={4}
            />
          </Grid>
        </>
      )}

      <Grid size={{ xs: 6 }}>
        <Menu<Schema>
          name="goodsConditionOnReceipt"
          label="Were the goods in sound condition when received?"
          options={[
            { value: "true", label: "Yes" },
            { value: "false", label: "No" },
          ]}
        />
      </Grid>
      <Grid size={{ xs: 6 }}>
        <Menu<Schema>
          name="checkedByDriver"
          label="Were they checked by your driver?"
          options={[
            { value: "true", label: "Yes" },
            { value: "false", label: "No" },
          ]}
        />
      </Grid>

      <Grid size={{ xs: 12 }}>
        <TextField<Schema>
          name="vehicleRegistrationNumber"
          label="Vehicle Registration Number"
        />
      </Grid>

      <Grid size={{ xs: 6 }}>
        <Menu<Schema>
          name="employeesLoadedUnloaded"
          label="Did you or your employees load or unload the vehicle?"
          options={[
            { value: "true", label: "Yes" },
            { value: "false", label: "No" },
          ]}
        />
      </Grid>
      <Grid size={{ xs: 6 }}>
        <Menu<Schema>
          name="receiptGiven"
          label="Was a receipt given?"
          options={[
            { value: "true", label: "Yes" },
            { value: "false", label: "No" },
          ]}
        />
      </Grid>

      <Grid size={{ xs: 12 }}>
        <TextField<Schema>
          name="carriageConditions"
          label="What conditions of carriage do you use?"
          multiline
          maxRows={4}
        />
      </Grid>
      <Grid size={{ xs: 12 }}>
        <FileUpload<Schema>
          name="carriageConditionsFile"
          label="Attach specimen copy of carriage conditions"
          accept="application/pdf,image/*"
        />
      </Grid>

      <Grid size={{ xs: 6 }}>
        <Menu<Schema>
          name="claimMadeByOwner"
          label="Has a claim been made against you by the owner?"
          options={[
            { value: "true", label: "Yes" },
            { value: "false", label: "No" },
          ]}
        />
      </Grid>
      {claimMadeByOwner === "true" && (
        <Grid size={{ xs: 6 }}>
          <DatePicker<Schema>
            name="dateClaimReceived"
            label="Date Claim Received"
          />
        </Grid>
      )}
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
    navigate("/claims/goods-in-transit/review");
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