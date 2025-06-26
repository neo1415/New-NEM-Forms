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

  const hasHirePurchaseAgreement = useWatch({
    control,
    name: "hasHirePurchaseAgreement",
  });

  const hasRecoverySteps = useWatch({
    control,
    name: "hasRecoverySteps",
  });

  const hasOtherInsurance = useWatch({
    control,
    name: "hasOtherInsurance",
  });

  const hasPreviousClaim = useWatch({
    control,
    name: "hasPreviousClaim",
  });

  const hasPreviousBurglaryAllRiskClaim = useWatch({
    control,
    name: "hasPreviousBurglaryAllRiskClaim",
  });

  const hasInformedPolice = useWatch({
    control,
    name: "hasInformedPolice",
  });

  return (
    <>
      {/* Type of Claim Section */}
      <Grid size={{ xs: 12 }}>
        <Typography variant="subtitle1" gutterBottom>
          Claim Details
        </Typography>
      </Grid>
      <Grid size={{ xs: 6 }}>
        <TextField<Schema>
          name="typeOfClaim"
          label="Type of Claim"
        />
      </Grid>
      <Grid size={{ xs: 6 }}>
        <TextField<Schema>
          name="locationOfClaim"
          label="Location of Claim"
        />
      </Grid>
      <Grid size={{ xs: 6 }}>
        <DatePicker<Schema>
          name="dateOfOccurrence"
          label="Date of Occurrence"
        />
      </Grid>
      <Grid size={{ xs: 6 }}>
        <TextField<Schema>
          name="timeOfOccurrence"
          label="Time of Occurrence"
        />
      </Grid>
      <Grid size={{ xs: 12 }}>
        <TextArea<Schema>
          name="propertyInvolved"
          label="Describe Property Involved (model, make, year etc)"
          rows={4}
        />
      </Grid>
      <Grid size={{ xs: 12 }}>
        <TextArea<Schema>
          name="circumstancesOfLoss"
          label="Provide the circumstance of loss or damage"
          rows={4}
        />
      </Grid>
      <Grid size={{ xs: 12 }}>
        <TextField<Schema>
          name="estimateOfLoss"
          label="Estimate of Loss/Repairs"
        />
      </Grid>

      {/* Property Items Table */}
      <Grid size={{ xs: 12 }}>
        <PropertyItems />
      </Grid>

      {/* Additional Questions */}
      <Grid size={{ xs: 12 }}>
        <Typography variant="subtitle1" gutterBottom sx={{ mt: 3 }}>
          Additional Information
        </Typography>
      </Grid>
      <Grid size={{ xs: 6 }}>
        <Menu<Schema>
          name="isSoleOwner"
          label="Are you the sole owner of the property destroyed, stolen or damaged?"
          options={[
            { label: "Yes", value: "true" },
            { label: "No", value: "false" },
          ]}
        />
      </Grid>
      <Grid size={{ xs: 6 }}>
        <Menu<Schema>
          name="hasHirePurchaseAgreement"
          label="Are there any hire purchase agreements?"
          options={[
            { label: "Yes", value: "true" },
            { label: "No", value: "false" },
          ]}
        />
      </Grid>
      {hasHirePurchaseAgreement === "true" && (
        <>
          <Grid size={{ xs: 6 }}>
            <TextField<Schema>
              name="hireCompanyName"
              label="Hire Company Name"
            />
          </Grid>
          <Grid size={{ xs: 6 }}>
            <TextArea<Schema>
              name="hireCompanyAddress"
              label="Hire Company Address"
              rows={4}
            />
          </Grid>
        </>
      )}
      <Grid size={{ xs: 6 }}>
        <Menu<Schema>
          name="hasRecoverySteps"
          label="Have you taken any steps to recover the lost property?"
          options={[
            { label: "Yes", value: "true" },
            { label: "No", value: "false" },
          ]}
        />
      </Grid>
      {hasRecoverySteps === "true" && (
        <Grid size={{ xs: 12 }}>
          <TextArea<Schema>
            name="recoveryStepsDetails"
            label="Please provide details of recovery steps taken"
            rows={4}
          />
        </Grid>
      )}
      <Grid size={{ xs: 6 }}>
        <Menu<Schema>
          name="hasOtherInsurance"
          label="Are there any other insurance cover upon the same property?"
          options={[
            { label: "Yes", value: "true" },
            { label: "No", value: "false" },
          ]}
        />
      </Grid>
      {hasOtherInsurance === "true" && (
        <Grid size={{ xs: 12 }}>
          <TextArea<Schema>
            name="otherInsuranceDetails"
            label="Please give full details of Insurance Cover"
            rows={4}
          />
        </Grid>
      )}
      <Grid size={{ xs: 6 }}>
        <Menu<Schema>
          name="hasPreviousLoss"
          label="Have you ever sustained loss of the same nature?"
          options={[
            { label: "Yes", value: "true" },
            { label: "No", value: "false" },
          ]}
        />
      </Grid>
      <Grid size={{ xs: 12 }}>
        <TextField<Schema>
          name="propertyValueAtLoss"
          label="What was the total value of the property insured at the time of loss?"
        />
      </Grid>
      <Grid size={{ xs: 6 }}>
        <Menu<Schema>
          name="hasOtherInsuranceCover"
          label="At the time of the incident, was there any other insurance cover in place?"
          options={[
            { label: "Yes", value: "true" },
            { label: "No", value: "false" },
          ]}
        />
      </Grid>
      <Grid size={{ xs: 6 }}>
        <Menu<Schema>
          name="hasPreviousClaim"
          label="Have you previously made a Claim with any Insurer in respect of risks covered by this policy?"
          options={[
            { label: "Yes", value: "true" },
            { label: "No", value: "false" },
          ]}
        />
      </Grid>
      {hasPreviousClaim === "true" && (
        <Grid size={{ xs: 12 }}>
          <TextArea<Schema>
            name="previousClaimDetails"
            label="Please provide details of previous claims"
            rows={4}
          />
        </Grid>
      )}
      <Grid size={{ xs: 6 }}>
        <Menu<Schema>
          name="hasPreviousBurglaryLoss"
          label="Have you ever sustained a burglary loss?"
          options={[
            { label: "Yes", value: "true" },
            { label: "No", value: "false" },
          ]}
        />
      </Grid>
      <Grid size={{ xs: 6 }}>
        <Menu<Schema>
          name="hasPreviousBurglaryAllRiskClaim"
          label="Have you ever made a burglary/all risk claim?"
          options={[
            { label: "Yes", value: "true" },
            { label: "No", value: "false" },
          ]}
        />
      </Grid>
      {hasPreviousBurglaryAllRiskClaim === "true" && (
        <Grid size={{ xs: 12 }}>
          <TextArea<Schema>
            name="previousBurglaryDetails"
            label="Please provide details of previous burglary/all risk claims"
            rows={4}
          />
        </Grid>
      )}
      <Grid size={{ xs: 6 }}>
        <Menu<Schema>
          name="hasInformedPolice"
          label="Have you informed the police?"
          options={[
            { label: "Yes", value: "true" },
            { label: "No", value: "false" },
          ]}
        />
      </Grid>
      {hasInformedPolice === "true" && (
        <>
          <Grid size={{ xs: 6 }}>
            <TextField<Schema>
              name="policeStationName"
              label="Police Station Name"
            />
          </Grid>
          <Grid size={{ xs: 6 }}>
            <TextArea<Schema>
              name="policeStationAddress"
              label="Police Station Address"
              rows={4}
            />
          </Grid>
        </>
      )}
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
    navigate("/claims/all-risk/review");
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