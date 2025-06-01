import { Form } from "@/features/form/components/form";
import { schema, Schema, defaultValues } from "./types/schema";
import { d } from "@/utils/professionalIndemnityDictionary/dictionary";
import Grid from "@mui/material/Grid2";
import { SubmitHandler } from "react-hook-form";
import { useStore } from "./hooks/useStore";
import { useNavigate } from "react-router";
import { TextField } from "@/features/form/components/controllers/text-field";
import { DatePicker } from "@/features/form/components/controllers/date-picker";
import { Menu } from "@/features/form/components/controllers/menu";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";

type PageProps = {
  readOnly?: boolean;
};

const Page = ({ readOnly }: PageProps) => {
  const titleOptions = d.titleOptions.map((option) => ({
    label: option,
    value: option,
  }));

  const genderOptions = d.genderOptions.map((option) => ({
    label: option,
    value: option,
  }));

  const alertPreferenceOptions = d.alertPreferenceOptions.map((option) => ({
    label: option,
    value: option,
  }));

  return (
    <>
      <Grid size={{ xs: 6 }}>
        <TextField<Schema>
          name="policyNumber"
          label={d.policyNumber}
        />
      </Grid>

      <Grid size={{ xs: 3 }}>
        <DatePicker<Schema>
          name="periodOfCoverFrom"
          label={d.periodOfCoverFrom}
        />
      </Grid>

      <Grid size={{ xs: 3 }}>
        <DatePicker<Schema>
          name="periodOfCoverTo"
          label={d.periodOfCoverTo}
        />
      </Grid>

      <Grid size={{ xs: 4 }}>
        <TextField<Schema>
          name="nameOfInsured"
          label={d.nameOfInsured}
        />
      </Grid>

      <Grid size={{ xs: 4 }}>
        <TextField<Schema>
          name="companyName"
          label={d.companyName}
        />
      </Grid>

      <Grid size={{ xs: 4 }}>
        <Menu<Schema>
          name="title"
          label={d.title}
          options={titleOptions}
          sx={{ width: "100%" }}
        />
      </Grid>

      <Grid size={{ xs: 4 }}>
        <DatePicker<Schema>
          name="dateOfBirth"
          label={d.dateOfBirth}
        />
      </Grid>

      <Grid size={{ xs: 4 }}>
        <Menu<Schema>
          name="gender"
          label={d.gender}
          options={genderOptions}
          sx={{ width: "100%" }}
        />
      </Grid>

      <Grid size={{ xs: 4 }}>
        <Menu<Schema>
          name="alertPreference"
          label={d.alertPreference}
          options={alertPreferenceOptions}
          sx={{ width: "100%" }}
        />
      </Grid>

      <Grid size={{ xs: 12 }}>
        <TextField<Schema>
          name="address"
          label={d.address}
          multiline
          maxRows={3}
        />
      </Grid>

      <Grid size={{ xs: 6 }}>
        <TextField<Schema>
          name="phone"
          label={d.phone}
          format="phoneNumber"
        />
      </Grid>

      <Grid size={{ xs: 6 }}>
        <TextField<Schema>
          name="email"
          label={d.email}
          type="email"
        />
      </Grid>
    </>
  );
};

const Provider = ({ readOnly }: { readOnly?: boolean }) => {
  const navigate = useNavigate();
  const { formData, updateFormData } = useStore();

  const handleSubmit: SubmitHandler<Schema> = (data) => {
    updateFormData(data);
    navigate("../claimant-details");
  };

  return (
    <Form
      schema={schema}
      defaultValues={defaultValues}
      values={formData}
      onSubmit={handleSubmit}
      slotProps={{
        submitButtonProps: {
          children: d.saveAndContinue,
          endIcon: <ArrowForwardIosRoundedIcon />,
        },
      }}
      title={d.insuredDetails}
      readOnly={readOnly}
    >
      <Page readOnly={readOnly} />
    </Form>
  );
};

export { Provider as ProfessionalIndemnityInsuredDetails, Page as InsuredDetails }; 