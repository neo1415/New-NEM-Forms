import { Form } from "@/features/form/components/form";
import { schema, Schema, defaultValues } from "./types/schema";
import { d } from "@/utils/professionalIndemnityDictionary/dictionary";
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
      <Grid size={{ xs: 12 }}>
        <TextField<Schema>
          name="claimantName"
          label={d.claimantName}
          multiline
          maxRows={3}
        />
      </Grid>

      <Grid size={{ xs: 12 }}>
        <TextField<Schema>
          name="claimantAddress"
          label={d.claimantAddress}
          multiline
          maxRows={3}
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
    navigate("../contract-details");
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
      title={d.claimantDetails}
      readOnly={readOnly}
    >
      <Page />
    </Form>
  );
};

export { Provider as ProfessionalIndemnityClaimantDetails, Page as ClaimantDetails }; 