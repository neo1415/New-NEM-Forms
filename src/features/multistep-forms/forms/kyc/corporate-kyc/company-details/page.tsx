import { Form } from "@/features/form/components/form";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import { DatePicker } from "@/features/form/components/controllers/date-picker";
import { TextField } from "@/features/form/components/controllers/text-field";
import { useStore } from "./hooks/useStore";
import { defaultValues, schema, Schema } from "./types/schema";
import { d } from "@/utils/corporateKYCDictionary/dictionary";
import {Grid} from "@mui/material";
import { SubmitHandler, useFormContext } from "react-hook-form";
import { useNavigate } from "react-router";
import { Menu } from "@/features/form/components/controllers/menu";
import { useState } from "react";
import { FormErrorSummary } from "@/features/form/components/form-error-summary";
import { LocationField } from "@/features/form/components/controllers/location-field/index";

const Page = () => {
  const [showOtherPremiumSource, setShowOtherPremiumSource] = useState(false);
  const { control } = useFormContext<Schema>();

  return (
    <Grid container spacing={2}>
      <Grid item xs={6}>
        <TextField<Schema> name="branchOffice" label="NEM Branch Office" required />
      </Grid>

      <Grid item xs={6}>
        <TextField<Schema> name="insured" label="Insured" required />
      </Grid>

      <Grid item xs={6}>
        <TextField<Schema> name="officeAddress" label="Office Address" required />
      </Grid>

      <Grid item xs={6}>
        <Menu<Schema>
          name="ownershipOfCompany"
          label="Ownership of Company"
          options={[
            { value: "Nigerian", label: "Nigerian" },
            { value: "Foreign", label: "Foreign" },
            { value: "Both", label: "Both" },
          ]}
        />
      </Grid>

      <Grid item xs={6}>
        <TextField<Schema> name="contactPerson" label="Contact Person" required />
      </Grid>

      <Grid item xs={6}>
        <TextField<Schema> name="website" label="Website" required />
      </Grid>

      <Grid item xs={6}>
        <TextField<Schema>
          name="incorporationNumber"
          label="Incorporation Number"
          required
        />
      </Grid>

      <Grid item xs={6}>
        <TextField<Schema>
          name="incorporationState"
          label="Incorporation State"
          required
        />
      </Grid>

      <Grid item xs={6}>
        <DatePicker<Schema>
          name="dateOfIncorporationRegistration"
          label="Date of Incorporation/Registration"
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
        <TextField<Schema>
          name="contactPersonNo"
          label="Contact Person Mobile Number"
          type="number"
          required
        />
      </Grid>

      <Grid item xs={6}>
        <TextField<Schema>
          name="taxIDNo"
          label="Tax Identification Number"
        />
      </Grid>

      <Grid item xs={6}>
        <TextField<Schema>
          name="emailAddress"
          label="Email Address"
          type="email"
          required
        />
      </Grid>

      <Grid item xs={6}>
        <TextField<Schema>
          name="natureOfBusiness"
          label="Business Type/Occupation"
          required
        />
      </Grid>

      <Grid item xs={6}>
        <Menu<Schema>
          name="estimatedTurnover"
          label="Estimated Turnover"
          options={[
            { value: "Less Than 10 Million", label: "Less Than 10 Million" },
            { value: "11 Million - 50 Million", label: "11 Million - 50 Million" },
            { value: "51 Million - 200 Million", label: "51 Million - 200 Million" },
            { value: "More than 200 Million", label: "More than 200 Million" },
          ]}
        />
      </Grid>

      <Grid item xs={6}>
        <Menu<Schema>
          name="premiumPaymentSource"
          label="Premium Payment Source"
          options={[
            { value: "Salary or Business Income", label: "Salary or Business Income" },
            { value: "Investments or Dividends", label: "Investments or Dividends" },
            { value: "Other", label: "Other(please specify)", isOther: true },
          ]}
          onOtherSelected={() => setShowOtherPremiumSource(true)}
        />
      </Grid>

      {showOtherPremiumSource && (
        <Grid item xs={6}>
          <TextField<Schema>
            name="otherPremiumPaymentSource"
            label="Specify Premium Payment Source"
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
    navigate("/kyc/corporate/directors-info");
  };

  return (
    <Form
      submitButtonText={d.saveAndContinue}
      slotProps={{
        submitButtonProps: { endIcon: <ArrowForwardIosRoundedIcon /> },
      }}
      schema={schema}
      values={formData}
      defaultValues={defaultValues}
      onSubmit={handleSubmit}
      readOnly={readOnly}
      title={d.companyDetails}
    >
      <FormErrorSummary />
      <Page />
    </Form>
  );
};

export { Provider as CompanyDetails }; 