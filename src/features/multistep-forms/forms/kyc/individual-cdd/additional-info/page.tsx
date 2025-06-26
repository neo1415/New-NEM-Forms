import { Form } from "@/features/form/components/form";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import { DatePicker } from "@/features/form/components/controllers/date-picker";
import { TextField } from "@/features/form/components/controllers/text-field";
import { useStore } from "./hooks/useStore";
import { defaultValues, schema, Schema } from "./types/schema";
import { calculatePastDate } from "@/utils/calculatePastDate";
import { d } from "@/utils/individualKYCDictionary/dictionary";
import {Grid} from "@mui/material";
import { SubmitHandler, useFormContext } from "react-hook-form";
import { useNavigate } from "react-router";
import { Menu } from "@/features/form/components/controllers/menu";
import { useState } from "react";
import { FormErrorSummary } from "@/features/form/components/form-error-summary";

const Page = () => {
  const [showOtherIncomeSource, setShowOtherIncomeSource] = useState(false);
  const [showOtherPremiumSource, setShowOtherPremiumSource] = useState(false);
  const { control } = useFormContext<Schema>();
  const [showOtherBusinessType, setShowOtherBusinessType] = useState(false);

  return (
    <Grid container spacing={2}>
      <Grid item xs={6}>
        <Menu<Schema>
          name="businessType"
          label="Business Type"
          options={[
            { value: "Sole Proprietor", label: "Sole Proprietor" },
            { value: "Limited Liability Company", label: "Limited Liability Company" },
            { value: "Public Limited Company", label: "Public Limited Company" },
            { value: "Joint Venture", label: "Joint Venture" },
            { value: "Other", label: "Other(please specify)", isOther: true },
          ]}
          onOtherSelected={() => setShowOtherBusinessType(true)}
        />
      </Grid>

      {showOtherBusinessType && (
        <Grid item xs={6}>
          <TextField<Schema>
            name="otherBusinessType"
            label="Specify Business Type"
            required
          />
        </Grid>
      )}

      <Grid item xs={6}>
        <TextField<Schema>
          name="employersEmail"
          label="Employer's Email"
          type="email"
          required
        />
      </Grid>

      <Grid item xs={6}>
        <TextField<Schema>
          name="employersName"
          label="Employer's Name"
        />
      </Grid>

      <Grid item xs={6}>
        <TextField<Schema>
          name="employersTelephoneNumber"
          label="Employer's Telephone Number"
          type="number"
        />
      </Grid>

      <Grid item xs={6}>
        <TextField<Schema>
          name="employersAddress"
          label="Employer's Address"
        />
      </Grid>

      <Grid item xs={6}>
        <TextField<Schema>
          name="taxidentificationNumber"
          label="Tax Identification Number"
        />
      </Grid>

      <Grid item xs={6}>
        <TextField<Schema>
          name="BVNNumber"
          label="BVN"
          type="number"
          required
        />
      </Grid>

      <Grid item xs={6}>
        <Menu<Schema>
          name="identificationType"
          label="ID Type"
          options={[
            { value: "International passport", label: "International passport" },
            { value: "NIMC", label: "NIMC" },
            { value: "Drivers Licence", label: "Drivers Licence" },
            { value: "Voters Card", label: "Voters Card" },
            { value: "NIN", label: "NIN" },
          ]}
        />
      </Grid>

      <Grid item xs={6}>
        <TextField<Schema>
          name="identificationNumber"
          label="Identification Number"
          required
        />
      </Grid>

      <Grid item xs={6}>
        <TextField<Schema>
          name="issuingCountry"
          label="Issuing Country"
          required
        />
      </Grid>

      <Grid item xs={6}>
        <DatePicker<Schema>
          name="issuedDate"
          label="Issued Date"
        />
      </Grid>

      <Grid item xs={6}>
        <DatePicker<Schema>
          name="expiryDate"
          label="Expiry Date"
        />
      </Grid>

      <Grid item xs={12} md={6}>
        <Menu<Schema>
          name="annualIncomeRange"
          label={"annual Income Range"}
          options={[
            { value: "lessThanOneMillion", label: "Less Than One Million" },
            { value: "1-4Million", label: "1 - 4 Million" },
            { value: "4.1-10Million", label: "4.1 - 10 Million" },
            { value: "moreThan10Million", label: "More Than 10 Million" },
          ]}
        />
      </Grid>
    
      <Grid item xs={12} md={6}>
        <Menu<Schema>
          name="premiumPaymentSource"
          label={"Premium Payment Source"}
           options={[
            { value: "Salary or Business Income", label: "Salary or Business Income" },
            { value: "Investments or Dividends", label: "Investments or Dividends" },
            { value: "Other", label: "Others(please specify)", isOther: true },
          ]}
          onOtherSelected={() => setShowOtherPremiumSource(true)}
        />
      </Grid>
      {showOtherPremiumSource && (
        <Grid item xs={12} md={6}>
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
    navigate("/kyc/individual-cdd/financial-info");
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