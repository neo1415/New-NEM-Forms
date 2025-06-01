import { Form } from "@/features/form/components/form";
import { schema, Schema, defaultValues } from "./types/schema";
import { d } from "@/utils/rentAssuranceDictionary/dictionary";
import Grid from "@mui/material/Grid2";
import { SubmitHandler } from "react-hook-form";
import { useStore } from "./hooks/useStore";
import { useNavigate } from "react-router";
import { TextField } from "@/features/form/components/controllers/text-field";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";

type PageProps = {
  readOnly?: boolean;
};

const Page = ({ readOnly }: PageProps) => {
  return (
    <>
      <Grid container spacing={2}>
        <Grid size={{ xs: 12 }}>
          <TextField<Schema>
            name="beneficiaryName"
            label={d.beneficiaryName}
          />
        </Grid>

        <Grid size={{ xs: 6 }}>
          <TextField<Schema>
            name="beneficiaryAge"
            label={d.beneficiaryAge}
          />
        </Grid>

        <Grid size={{ xs: 12 }}>
          <TextField<Schema>
            name="beneficiaryAddress"
            label={d.beneficiaryAddress}
          />
        </Grid>

        <Grid size={{ xs: 6 }}>
          <TextField<Schema>
            name="beneficiaryEmail"
            label={d.beneficiaryEmail}
          />
        </Grid>

        <Grid size={{ xs: 6 }}>
          <TextField<Schema>
            name="beneficiaryPhone"
            label={d.beneficiaryPhone}
            format="phoneNumber"
          />
        </Grid>

        <Grid size={{ xs: 12 }}>
          <TextField<Schema>
            name="beneficiaryOccupation"
            label={d.beneficiaryOccupation}
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
    navigate("../declaration");
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
      title={d.beneficiaryDetails}
      readOnly={readOnly}
    >
      <Page readOnly={readOnly} />
    </Form>
  );
};

export { Provider as RentAssuranceBeneficiaryDetails };
export { Page as BeneficiaryDetails };
export type { PageProps as BeneficiaryDetailsProps }; 