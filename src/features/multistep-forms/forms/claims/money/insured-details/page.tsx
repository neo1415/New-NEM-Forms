import { Form } from "@/features/form/components/form";
import { schema, Schema, defaultValues } from "./types/schema";
import { d } from "@/utils/moneyInsuranceDictionary/dictionary";
import Grid from "@mui/material/Grid2";
import { SubmitHandler } from "react-hook-form";
import { useStore } from "./hooks/useStore";
import { useNavigate } from "react-router";
import { TextField } from "@/features/form/components/controllers/text-field";
import { Menu } from "@/features/form/components/controllers/menu";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";

type PageProps = {
  readOnly?: boolean;
};

const Page = ({ readOnly }: PageProps) => {
  return (
    <Grid container spacing={2}>
      <Grid size={{ xs: 12, sm: 6 }}>
        <TextField<Schema>
          name="policyNumber"
          label={d.policyNumber}
        />
      </Grid>

      <Grid size={{ xs: 12, sm: 6 }}>
        <TextField<Schema>
          name="companyName"
          label={d.companyName}
        />
      </Grid>

      <Grid size={{ xs: 12 }}>
        <TextField<Schema>
          name="companyAddress"
          label={d.companyAddress}
          multiline
          rows={3}
        />
      </Grid>

      <Grid size={{ xs: 12, sm: 6 }}>
        <TextField<Schema>
          name="contactPerson"
          label={d.contactPerson}
        />
      </Grid>

      <Grid size={{ xs: 12, sm: 6 }}>
        <TextField<Schema>
          name="contactEmail"
          label={d.contactEmail}
          type="email"
        />
      </Grid>

      <Grid size={{ xs: 12, sm: 6 }}>
        <TextField<Schema>
          name="contactPhone"
          label={d.contactPhone}
        />
      </Grid>

      <Grid size={{ xs: 12, sm: 6 }}>
        <Menu<Schema>
          name="preferredContactMethod"
          label={d.preferredContactMethod}
          options={d.preferredContactMethodOptions.map((option) => ({
            value: option,
            label: option,
          }))}
        />
      </Grid>
    </Grid>
  );
};

const Provider = ({ readOnly }: { readOnly?: boolean }) => {
  const navigate = useNavigate();
  const { formData, updateFormData } = useStore();

  const handleSubmit: SubmitHandler<Schema> = (data) => {
    updateFormData(data);
    navigate("../details-of-loss");
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

export { Provider as MoneyInsuranceInsuredDetails };
export { Page as InsuredDetails };
export type { PageProps as InsuredDetailsProps }; 