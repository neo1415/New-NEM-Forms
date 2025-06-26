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

  return (
    <Grid container spacing={2}>
      <Grid item xs={6}>
        <TextField<Schema> name="title" label="Title" required />
      </Grid>

      <Grid item xs={6}>
        <TextField<Schema> name="firstName" label="First Name" required />
      </Grid>

      <Grid item xs={6}>
        <TextField<Schema> name="lastName" label="Last Name" required />
      </Grid>

      <Grid item xs={6}>
        <TextField<Schema>
          name="contactAddress"
          label="Contact Address"
          required
        />
      </Grid>

      <Grid item xs={6}>
        <Menu<Schema>
          name="gender"
          label="Gender"
          options={[
            { value: "male", label: "Male" },
            { value: "female", label: "Female" },
          ]}
        />
      </Grid>

      <Grid item xs={6}>
        <TextField<Schema> name="country" label="Residence Country" required />
      </Grid>

      <Grid item xs={6}>
        <DatePicker<Schema> name="dateOfBirth" label="Date Of Birth" />
      </Grid>

      <Grid item xs={6}>
        <TextField<Schema> name="placeOfBirth" label="Place of Birth" required />
      </Grid>

      <Grid item xs={6}>
        <TextField<Schema>
          name="emailAddress"
          label="Email"
          type="email"
          required
        />
      </Grid>

      <Grid item xs={6}>
        <TextField<Schema>
          name="GSMno"
          label="Mobile Number"
          type="number"
          required
        />
      </Grid>

      <Grid item xs={12}>
        <TextField<Schema>
          name="residentialAddress"
          label="Residential Address"
          required
        />
      </Grid>

      <Grid item xs={6}>
        <TextField<Schema> name="nationality" label="Nationality" required />
      </Grid>

      <Grid item xs={6}>
        <TextField<Schema> name="occupation" label="Occupation" required />
      </Grid>

      <Grid item xs={6}>
        <TextField<Schema> name="position" label="Position" />
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