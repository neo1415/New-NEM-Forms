import { Form } from "@/features/form/components/form";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import { DatePicker } from "@/features/form/components/controllers/date-picker";
import { TextField } from "@/features/form/components/controllers/text-field";
// import { LocationField } from "@/features/form/components/controllers/location-field";
import { useStore } from "./hooks/useStore";
import { defaultValues, schema, Schema } from "./types/schema";
import { d } from "@/utils/agentsKYCDictionary/dictionary";
import Grid from "@mui/material/Grid2";
import { SubmitHandler, useFormContext } from "react-hook-form";
import { useNavigate } from "react-router";
import { Menu } from "@/features/form/components/controllers/menu";
import { Autocomplete } from "@/features/form/components/controllers/autocomplete";
import { countryCodes } from "@/features/form/components/controllers/phone-field/data/country-codes";
import { useState } from "react";

const Page = () => {
  const [showOtherIncomeSource, setShowOtherIncomeSource] = useState(false);
  const { control } = useFormContext<Schema>();

  return (
    <Grid container spacing={2}>
      <Grid size={{ xs: 4 }}>
        <TextField<Schema>
          name="firstName"
          label={d.firstName}
          required
        />
      </Grid>
      <Grid size={{ xs: 4 }}>
        <TextField<Schema>
          name="middleName"
          label={d.middleName}
        />
      </Grid>
      <Grid size={{ xs: 4 }}>
        <TextField<Schema>
          name="lastName"
          label={d.lastName}
          required
        />
      </Grid>
      <Grid size={{ xs: 12 }}>
        <TextField<Schema>
          name="residentialAddress"
          label={d.residentialAddress}
          multiline
          maxRows={3}
          required
        />
      </Grid>
      <Grid size={{ xs: 4 }}>
        <Menu<Schema>
          name="gender"
          label={d.gender}
          options={d.genderOptions.map(opt => ({ value: opt.value, label: opt.label }))}
          sx={{ width: "100%" }}
        />
      </Grid>
      <Grid size={{ xs: 4 }}>
        <TextField<Schema>
          name="position"
          label={d.position}
          required
        />
      </Grid>
      <Grid size={{ xs: 4 }}>
        <DatePicker<Schema>
          name="dateOfBirth"
          label={d.dateOfBirth}
        />
      </Grid>
      <Grid size={{ xs: 6 }}>
        <TextField<Schema>
          name="placeOfBirth"
          label={d.placeOfBirth}
          required
        />
      </Grid>
      <Grid size={{ xs: 6 }}>
        <Menu<Schema>
          name="sourceOfIncome"
          label={d.sourceOfIncome}
          options={[
            { value: "salaryOrBusinessIncome", label: "Salary/Business Income" },
            { value: "investmentsOrDividends", label: "Investments/Dividends" },
            { value: "Other", label: "Other", isOther: true }
          ]}
          onOtherSelected={() => setShowOtherIncomeSource(true)}
          sx={{ width: "100%" }}
        />
      </Grid>
      {showOtherIncomeSource && (
        <Grid size={{ xs: 12 }}>
          <TextField<Schema>
            name="otherIncomeSource"
            label={d.otherIncomeSource}
            required
          />
        </Grid>
      )}
      <Grid size={{ xs: 6 }}>
        <TextField<Schema>
          name="nationality"
          label={d.nationality}
          required
        />
      </Grid>
      <Grid size={{ xs: 6 }}>
        <TextField<Schema>
          name="phoneNumber"
          label={d.phoneNumber}
          required
          format="phoneNumber"
        />
      </Grid>
      <Grid size={{ xs: 4 }}>
        <TextField<Schema>
          name="bvnNumber"
          label={d.bvnNumber}
          inputProps={{
            pattern: "[0-9]*",
            inputMode: "numeric",
            maxLength: 11,
            minLength: 11,
          }}
          required
        />
      </Grid>
      <Grid size={{ xs: 4 }}>
        <TextField<Schema>
          name="taxIdNumber"
          label={d.taxIdNumber}
        />
      </Grid>
      <Grid size={{ xs: 4 }}>
        <TextField<Schema>
          name="occupation"
          label={d.occupation}
          required
        />
      </Grid>
      <Grid size={{ xs: 12 }}>
        <TextField<Schema>
          name="email"
          label={d.email}
          type="email"
          required
        />
      </Grid>
      <Grid size={{ xs: 6 }}>
        <Menu<Schema>
          name="idType"
          label={d.idType}
          options={[
            { value: "international passport", label: "International Passport" },
            { value: "NIMC", label: "NIMC" },
            { value: "Drivers licence", label: "Driver's License" },
            { value: "Voters Card", label: "Voter's Card" }
          ]}
          sx={{ width: "100%" }}
        />
      </Grid>
      <Grid size={{ xs: 6 }}>
        <TextField<Schema>
          name="idNumber"
          label={d.idNumber}
          required
        />
      </Grid>
      <Grid size={{ xs: 6 }}>
        <DatePicker<Schema>
          name="issuedDate"
          label={d.issuedDate}
        />
      </Grid>
      <Grid size={{ xs: 6 }}>
        <DatePicker<Schema>
          name="expiryDate"
          label={d.expiryDate}
        />
      </Grid>
      <Grid size={{ xs: 12 }}>
        <TextField<Schema>
          name="issuingBody"
          label={d.issuingBody}
          required
        />
      </Grid>
    </Grid>
  );
};

type ProviderProps = { readOnly?: boolean };
const Provider = ({ readOnly }: ProviderProps) => {
  const navigate = useNavigate();

  const { formData, updateFormData } = useStore();

  const handleSubmit: SubmitHandler<Schema> = (data) => {
    updateFormData(data);
    navigate("/kyc/agents/additional-info");
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
      title={d.personalInfo}
    >
      <Page />
    </Form>
  );
};

export { Provider as PersonalInfo };