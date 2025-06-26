import { Form } from "@/features/form/components/form";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import { DatePicker } from "@/features/form/components/controllers/date-picker";
import { TextField } from "@/features/form/components/controllers/text-field";
import { useStore } from "./hooks/useStore";
import { defaultValues, schema, Schema } from "./types/schema";
import { d } from "@/utils/corporateCDDDictionary/dictionary";
import Grid from "@mui/material/Grid2";
import { SubmitHandler, useFormContext } from "react-hook-form";
import { useNavigate } from "react-router";
import { Menu } from "@/features/form/components/controllers/menu";
import { Autocomplete } from "@/features/form/components/controllers/autocomplete";
import { useState } from "react";
import { FormErrorSummary } from "@/features/form/components/form-error-summary";

const Page = () => {
  const [showOtherCompanyType, setShowOtherCompanyType] = useState(false);
  const { control } = useFormContext<Schema>();

  return (
    <Grid container spacing={2}>
      <Grid size={{ xs: 6 }}>
        <TextField<Schema>
          name="companyName"
          label={d.companyName}
          required
        />
      </Grid>
      <Grid size={{ xs: 6 }}>
        <TextField<Schema>
          name="registeredCompanyAddress"
          label={d.registeredCompanyAddress}
          multiline
          maxRows={3}
          required
        />
      </Grid>
      <Grid size={{ xs: 6 }}>
        <TextField<Schema>
          name="incorporationNumber"
          label={d.incorporationNumber}
          required
        />
      </Grid>
      <Grid size={{ xs: 6 }}>
        <Autocomplete<Schema>
          name="incorporationState"
          options={d.nigerianStates}
          textFieldProps={{
            label: d.incorporationState,
          }}
        />
      </Grid>
      <Grid size={{ xs: 6 }}>
        <DatePicker<Schema>
          name="dateOfIncorporationRegistration"
          label={d.dateOfIncorporationRegistration}
          maxDate={new Date()}
        />
      </Grid>
      <Grid size={{ xs: 6 }}>
        <TextField<Schema>
          name="natureOfBusiness"
          label={d.natureOfBusiness}
          required
        />
      </Grid>
      <Grid size={{ xs: 6 }}>
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
        <Grid size={{ xs: 6 }}>
          <TextField<Schema>
            name="otherCompanyType"
            label={d.otherCompanyType}
            required
          />
        </Grid>
      )}
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
          name="website"
          label={d.website}
          required
        />
      </Grid>
      <Grid size={{ xs: 6 }}>
        <TextField<Schema>
          name="taxIdentificationNumber"
          label={d.taxIdentificationNumber}
        />
      </Grid>
      <Grid size={{ xs: 6 }}>
        <TextField<Schema>
          name="telephoneNumber"
          label={d.telephoneNumber}
          format="phoneNumber"
          required
        />
      </Grid>
    </Grid>
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
    navigate("/kyc/corporate-cdd/directors-info");
  };

  return (
    <Form
      submitButtonText={d.saveAndContinue}
      slotProps={{
        submitButtonProps: { endIcon: <ArrowForwardIosRoundedIcon /> },
      }}
      schema={schema}
      values={{ ...defaultValues, ...formData }}
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

export { Provider as CompanyDetails };