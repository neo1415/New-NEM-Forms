import { Form } from "@/features/form/components/form";
import { schema, Schema, defaultValues } from "./types/schema";
import { d } from "@/utils/professionalIndemnityDictionary/dictionary";
import Grid from "@mui/material/Grid2";
import { SubmitHandler, useWatch } from "react-hook-form";
import { useStore } from "./hooks/useStore";
import { useNavigate } from "react-router-dom";
import { TextField } from "@/features/form/components/controllers/text-field";
import { Menu } from "@/features/form/components/controllers/menu";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";

type PageProps = {
  readOnly?: boolean;
};

const Page = ({ readOnly }: PageProps) => {
  const hasAdditionalDetails = useWatch<Schema>({ name: "hasAdditionalDetails" });

  return (
    <>
      <Grid container spacing={2}>
        <Grid size={{ xs: 12 }}>
          <TextField<Schema>
            name="responseComments"
            label={d.responseComments}
            multiline
            rows={3}
          />
        </Grid>

        <Grid size={{ xs: 12 }}>
          <TextField<Schema>
            name="liabilityEstimate"
            label={d.liabilityEstimate}
            multiline
            rows={3}
          />
        </Grid>

        <Grid size={{ xs: 12 }}>
          <Menu<Schema>
            name="hasAdditionalDetails"
            label={d.hasAdditionalDetails}
            options={[
              { value: "true", label: "Yes" },
              { value: "false", label: "No" },
            ]}
          />
        </Grid>

        {hasAdditionalDetails && (
          <Grid size={{ xs: 12 }}>
            <TextField<Schema>
              name="additionalDetails"
              label={d.additionalDetails}
              multiline
              rows={3}
            />
          </Grid>
        )}

        <Grid size={{ xs: 12 }}>
          <TextField<Schema>
            name="lawyerDetails"
            label={d.lawyerDetails}
            multiline
            rows={3}
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
    navigate("../review");
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
      title={d.responseDetails}
      readOnly={readOnly}
    >
      <Page readOnly={readOnly} />
    </Form>
  );
};

export { Provider as ProfessionalIndemnityResponseDetails, Page as ResponseDetails }; 