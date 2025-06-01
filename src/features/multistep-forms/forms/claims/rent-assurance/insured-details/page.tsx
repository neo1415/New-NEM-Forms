import { Form } from "@/features/form/components/form";
import { schema, Schema, defaultValues } from "./types/schema";
import { d } from "@/utils/rentAssuranceDictionary/dictionary";
import Grid from "@mui/material/Grid2";
import { SubmitHandler } from "react-hook-form";
import { useStore } from "./hooks/useStore";
import { useNavigate } from "react-router";
import { TextField } from "@/features/form/components/controllers/text-field";
import { DatePicker } from "@/features/form/components/controllers/date-picker";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";

type PageProps = {
  readOnly?: boolean;
};

const Page = ({ readOnly }: PageProps) => {
  return (
    <>
      <Grid container spacing={2}>
        <Grid size={{ xs: 6 }}>
          <TextField<Schema>
            name="policyNumber"
            label={d.policyNumber}
          />
        </Grid>

        <Grid size={{ xs: 6 }}>
          <DatePicker<Schema>
            name="periodOfCoverFrom"
            label={d.periodOfCoverFrom}
          />
        </Grid>

        <Grid size={{ xs: 6 }}>
          <DatePicker<Schema>
            name="periodOfCoverTo"
            label={d.periodOfCoverTo}
          />
        </Grid>

        <Grid size={{ xs: 12 }}>
          <TextField<Schema>
            name="nameOfInsured"
            label={d.nameOfInsured}
          />
        </Grid>

        <Grid size={{ xs: 12 }}>
          <TextField<Schema>
            name="address"
            label={d.address}
          />
        </Grid>

        <Grid size={{ xs: 6 }}>
          <TextField<Schema>
            name="age"
            label={d.age}
          />
        </Grid>

        <Grid size={{ xs: 6 }}>
          <TextField<Schema>
            name="email"
            label={d.email}
          />
        </Grid>

        <Grid size={{ xs: 6 }}>
          <TextField<Schema>
            name="phone"
            label={d.phone}
            format="phoneNumber"
          />
        </Grid>

        <Grid size={{ xs: 12 }}>
          <TextField<Schema>
            name="nameOfLandlord"
            label={d.nameOfLandlord}
          />
        </Grid>

        <Grid size={{ xs: 12 }}>
          <TextField<Schema>
            name="addressOfLandlord"
            label={d.addressOfLandlord}
          />
        </Grid>

        <Grid size={{ xs: 6 }}>
          <DatePicker<Schema>
            name="residencyDuration"
            label={d.residencyDuration}
          />
        </Grid>
      </Grid>
    </>
  );
};

const Provider = ({ readOnly }: { readOnly?: boolean }) => {
  const navigate = useNavigate();
  const { formData, updateFormData } = useStore();

  const handleSubmit: SubmitHandler<Schema> = (data) => {
    updateFormData(data);
    navigate("../claim-information");
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

export { Provider as RentAssuranceInsuredDetails };
export { Page as InsuredDetails };
export type { PageProps as InsuredDetailsProps }; 