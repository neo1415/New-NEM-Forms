import { Form } from "@/features/form/components/form";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import { DatePicker } from "@/features/form/components/controllers/date-picker";
import { TextField } from "@/features/form/components/controllers/text-field";
import { useStore } from "./hooks/useStore";
import { defaultValues, schema, Schema } from "./types/schema";
import { calculatePastDate } from "@/utils/calculatePastDate";
import { d } from "@/utils/individualKYCDictionary/dictionary";
import Grid from "@mui/material/Grid2";
import { SubmitHandler, useFormContext } from "react-hook-form";
import { useNavigate } from "react-router";
import { Menu } from "@/features/form/components/controllers/menu";
import { useState } from "react";
import { FormErrorSummary } from "@/features/form/components/form-error-summary";

const Page = () => {
  const [showOtherIncomeSource, setShowOtherIncomeSource] = useState(false);
  const [showOtherPremiumSource, setShowOtherPremiumSource] = useState(false);
  const { control } = useFormContext<Schema>();

  return (
    <Grid container spacing={2}>
      <Grid size={{ xs: 6 }}>
        <TextField<Schema>
          name="officeLocation"
          label={d.officeLocation}
          required
        />
      </Grid>
      <Grid size={{ xs: 6 }}>
        <TextField<Schema>
          name="title"
          label={d.title}
          required
        />
      </Grid>
      <Grid size={{ xs: 6 }}>
        <TextField<Schema>
          name="firstName"
          label={d.firstName}
          required
        />
      </Grid>
      <Grid size={{ xs: 6 }}>
        <TextField<Schema>
          name="middleName"
          label={d.middleName}
          required
        />
      </Grid>
      <Grid size={{ xs: 6 }}>
        <TextField<Schema>
          name="lastName"
          label={d.lastName}
          required
        />
      </Grid>
      <Grid size={{ xs: 6 }}>
        <TextField<Schema>
          name="contactAddress"
          label={d.contactAddress}
          multiline
          maxRows={3}
          required
        />
      </Grid>
      <Grid size={{ xs: 6 }}>
        <TextField<Schema>
          name="occupation"
          label={d.occupation}
          required
        />
      </Grid>
      <Grid size={{ xs: 6 }}>
        <Menu<Schema>
          name="gender"
          label={d.gender}
          options={[
            { value: "male", label: "Male" },
            { value: "female", label: "Female" },
          ]}
        />
      </Grid>
      <Grid size={{ xs: 6 }}>
        <DatePicker<Schema>
          name="dateOfBirth"
          label={d.dateOfBirth}
          maxDate={calculatePastDate(18)}
          minDate={calculatePastDate(100)}
        />
      </Grid>
      <Grid size={{ xs: 6 }}>
        <TextField<Schema>
          name="mothersMaidenName"
          label={d.mothersMaidenName}
          required
        />
      </Grid>
      <Grid size={{ xs: 6 }}>
        <TextField<Schema>
          name="employersName"
          label={d.employersName}
        />
      </Grid>
      <Grid size={{ xs: 6 }}>
        <TextField<Schema>
          name="employersTelephoneNumber"
          label={d.employersTelephoneNumber}
          format="phoneNumber"
        />
      </Grid>
      <Grid size={{ xs: 12 }}>
        <TextField<Schema>
          name="employersAddress"
          label={d.employersAddress}
          multiline
          maxRows={3}
        />
      </Grid>
      <Grid size={{ xs: 6 }}>
        <TextField<Schema>
          name="city"
          label={d.city}
          required
        />
      </Grid>
      <Grid size={{ xs: 6 }}>
        <TextField<Schema>
          name="state"
          label={d.state}
          required
        />
      </Grid>
      <Grid size={{ xs: 6 }}>
        <TextField<Schema>
          name="country"
          label={d.country}
          required
        />
      </Grid>
      <Grid size={{ xs: 6 }}>
        <Menu<Schema>
          name="nationality"
          label={d.nationality}
          options={[
            { value: "Nigerian", label: "Nigerian" },
            { value: "Foreign", label: "Foreign" },
            { value: "Both", label: "Both" },
          ]}
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
      <Grid size={{ xs: 6 }}>
        <TextField<Schema>
          name="GSMno"
          label={d.GSMno}
          format="phoneNumber"
        />
      </Grid>
      <Grid size={{ xs: 6 }}>
        <TextField<Schema>
          name="emailAddress"
          label={d.emailAddress}
          type="email"
          required
        />
      </Grid>
      <Grid size={{ xs: 6 }}>
        <TextField<Schema>
          name="taxIDNo"
          label={d.taxIDNo}
        />
      </Grid>
      <Grid size={{ xs: 6 }}>
        <TextField<Schema>
          name="BVN"
          label={d.BVN}
          required
          inputProps={{
            pattern: "[0-9]*",
            inputMode: "numeric",
            maxLength: 11,
            minLength: 11,
          }}
        />
      </Grid>
      <Grid size={{ xs: 6 }}>
        <Menu<Schema>
          name="identificationType"
          label={d.identificationType}
          options={[
            { value: "International passport", label: "International Passport" },
            { value: "NIMC", label: "NIMC" },
            { value: "Drivers Licence", label: "Driver's License" },
            { value: "Voters Card", label: "Voter's Card" },
            { value: "NIN", label: "NIN" },
          ]}
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
      <Grid size={{ xs: 6 }}>
        <Menu<Schema>
          name="sourceOfIncome"
          label={d.sourceOfIncome}
          options={[
            { value: "Salary or Business Income", label: "Salary or Business Income" },
            { value: "Investments or Dividends", label: "Investments or Dividends" },
            { value: "Other", label: "Other(please specify)", isOther: true },
          ]}
          onOtherSelected={() => setShowOtherIncomeSource(true)}
        />
      </Grid>
      {showOtherIncomeSource && (
        <Grid size={{ xs: 6 }}>
          <TextField<Schema>
            name="otherSourceOfIncome"
            label={d.otherSourceOfIncome}
            required
          />
        </Grid>
      )}
      <Grid size={{ xs: 6 }}>
        <Menu<Schema>
          name="annualIncomeRange"
          label={d.annualIncomeRange}
          options={[
            { value: "Less Than 1 Million", label: "Less Than 1 Million" },
            { value: "1 Million - 4 Million", label: "1 Million - 4 Million" },
            { value: "4.1 Million - 10 Million", label: "4.1 Million - 10 Million" },
            { value: "More than 10 Million", label: "More than 10 Million" },
          ]}
        />
      </Grid>
      <Grid size={{ xs: 6 }}>
        <Menu<Schema>
          name="premiumPaymentSource"
          label={d.premiumPaymentSource}
          options={[
            { value: "Salary or Business Income", label: "Salary or Business Income" },
            { value: "Investments or Dividends", label: "Investments or Dividends" },
            { value: "Other", label: "Others(please specify)", isOther: true },
          ]}
          onOtherSelected={() => setShowOtherPremiumSource(true)}
        />
      </Grid>
      {showOtherPremiumSource && (
        <Grid size={{ xs: 6 }}>
          <TextField<Schema>
            name="otherPremiumPaymentSource"
            label={d.otherPremiumPaymentSource}
            required
          />
        </Grid>
      )}
    </Grid>
  );
};

type ProviderProps = { readOnly?: boolean };

const Provider = ({ readOnly }: ProviderProps) => {
  const navigate = useNavigate();
  const { formData, updateFormData } = useStore();

  const handleSubmit: SubmitHandler<Schema> = (data) => {
    updateFormData(data);
    navigate("/kyc/individual/financial-info");
  };

  return (
    <Form
      submitButtonText={d.saveAndContinue}
      slotProps={{
        submitButtonProps: { endIcon: <ArrowForwardIosRoundedIcon /> },
      }}
      schema={schema}
      values={formData as Schema}
      defaultValues={defaultValues}
      onSubmit={handleSubmit}
      readOnly={readOnly}
      title={d.personalInfo}
    >
      <FormErrorSummary />
      <Page />
    </Form>
  );
};

export { Provider as PersonalInfo }; 