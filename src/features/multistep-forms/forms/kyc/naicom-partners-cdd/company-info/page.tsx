import { Form } from "@/features/form/components/form";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import { DatePicker } from "@/features/form/components/controllers/date-picker";
import { TextField } from "@/features/form/components/controllers/text-field";
import { useStore } from "./hooks/useStore";
import { defaultValues, schema, Schema } from "./types/schema";
import { d } from "@/utils/corporateCDDDictionary/dictionary";
import { Grid } from "@mui/material";
import { SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router";
import { FormErrorSummary } from "@/features/form/components/form-error-summary";
import { LocationField } from "@/features/form/components/controllers/location-field/index";

const Page = () => {
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
          name="registeredCompanyAddress"
          label={d.registeredCompanyAddress}
          required
          multiline
          rows={3}
        />
      </Grid>
      <Grid item xs={12}>
        <LocationField<Schema>
          countryFieldName="country"
          stateFieldName="state"
          cityFieldName="city"
          required
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
          name="contactPerson"
          label={d.contactPerson}
          required
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <TextField<Schema>
          name="contactPersonNo"
          label={d.contactPersonNo}
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
          name="VATRegistrationNumber"
          label={d.VATRegistrationNumber}
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
        <DatePicker<Schema>
          name="dateOfIncorporationRegistration"
          label={d.dateOfIncorporationRegistration}
      
          maxDate={new Date()}
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
        <TextField<Schema>
          name="natureOfBusiness"
          label={d.natureOfBusiness}
          required
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <TextField<Schema>
          name="BVNNo"
          label={d.BVNNo}
          required
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <DatePicker<Schema>
          name="NAICOMLisenceIssuingDate"
          label={d.NAICOMLisenceIssuingDate}
      
          maxDate={new Date()}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <DatePicker<Schema>
          name="NAICOMLisenceExpiryDate"
          label={d.NAICOMLisenceExpiryDate}
    
          minDate={new Date()}
        />
      </Grid>
    </Grid>
  );
};

export const CompanyInfo = () => {
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
      title={d.companyInfo}
    >
      <FormErrorSummary />
      <Page />
    </Form>
  );
}; 