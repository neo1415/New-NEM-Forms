import { Form } from "@/features/form/components/form";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import { DatePicker } from "@/features/form/components/controllers/date-picker";
import { TextField } from "@/features/form/components/controllers/text-field";
import { Menu } from "@/features/form/components/controllers/menu";
import { useStore } from "./hooks/useStore";
import { useState } from "react";
import { defaultValues, schema, Schema } from "./types/schema";
import { d } from "@/utils/brokersCDDDictionary/dictionary";
import { Grid } from "@mui/material";
import { SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router";
import { LocationField } from "@/features/form/components/controllers/location-field/index";
import { FormErrorSummary } from "@/features/form/components/form-error-summary";

const Page = () => {
  const [showOtherCompanyType, setShowOtherCompanyType] = useState(false);

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={6}>
        <TextField<Schema>
          name="companyName"
          label={d.companyName}
          required
        />
      </Grid>
      <Grid item xs={12}>
        <TextField<Schema>
          name="companyAddress"
          label={d.companyAddress}
          required
          multiline
          rows={3}
        />
      </Grid>
      <Grid item xs={6}>
        <LocationField<Schema>
          countryFieldName="country"
          stateFieldName="state"
          cityFieldName="city"
          required
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <TextField<Schema>
          name="incorporationNumber"
          label={d.incorporationNumber}
          required
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <TextField<Schema>
          name="registrationNumber"
          label={d.registrationNumber}
          required
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <TextField<Schema>
          name="incorporationState"
          label={d.incorporationState}
          required
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <Menu<Schema>
          name="companyLegalForm"
          label={d.companyLegalForm}
          options={[
            { value: "soleProprietor", label: "Sole Proprietor" },
            { value: "unlimitedLiabilityCompany", label: "Unlimited Liability Company" },
            { value: "limitedLiabilityCompany", label: "Limited Liability Company" },
            { value: "publicLimitedCompany", label: "Public Limited Company" },
            { value: "jointVenture", label: "Joint Venture" },
            { value: "other", label: "Other(please specify)", isOther: true }
          ]}
          onOtherSelected={() => setShowOtherCompanyType(true)}
        />
      </Grid>
      {showOtherCompanyType && (
        <Grid item xs={12} md={6}>
          <TextField<Schema>
            name="otherCompanyType"
            label={d.otherCompanyType}
            required
          />
        </Grid>
      )}
      <Grid item xs={12} md={6}>
        <DatePicker<Schema>
          name="dateOfIncorporationRegistration"
          label={d.dateOfIncorporationRegistration}
          maxDate={new Date()}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <TextField<Schema>
          name="emailAddress"
          label={d.emailAddress}
          required
          type="email"
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <TextField<Schema>
          name="website"
          label={d.website}
          required
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <TextField<Schema>
          name="natureOfBusiness"
          label={d.natureOfBusiness}
          required
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <TextField<Schema>
          name="taxIdentificationNumber"
          label={d.taxIdentificationNumber}
          required
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <TextField<Schema>
          name="telephoneNumber"
          label={d.telephoneNumber}
          required
          type="tel"
        />
      </Grid>
    </Grid>
  );
};

type ProviderProps = { readOnly?: boolean };

export const BrokersCDDCompanyInfo = ({ readOnly }: ProviderProps) => {
  const { formData, updateFormData } = useStore();
  const navigate = useNavigate();

  const handleSubmit: SubmitHandler<Schema> = async (data) => {
    updateFormData(data);
    navigate("../directors-info");
  };

  return (
    <Form
      submitButtonText={d.saveAndContinue}
      slotProps={{
        submitButtonProps: {
          endIcon: <ArrowForwardIosRoundedIcon />,
        },
      }}
      schema={schema}
      values={formData as Schema}
      defaultValues={defaultValues}
      onSubmit={handleSubmit}
      readOnly={readOnly}
      title={d.companyInfo}
    >
      <FormErrorSummary />
      <Page />
    </Form>
  );
}; 