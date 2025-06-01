import { Form } from "@/features/form/components/form";
import { schema, Schema, defaultValues } from "./types/schema";
import { d } from "@/utils/professionalIndemnityDictionary/dictionary";
import Grid from "@mui/material/Grid2";
import { SubmitHandler, useWatch } from "react-hook-form";
import { useStore } from "./hooks/useStore";
import { useNavigate } from "react-router-dom";
import { TextField } from "@/features/form/components/controllers/text-field";
import { DatePicker } from "@/features/form/components/controllers/date-picker";
import { Menu } from "@/features/form/components/controllers/menu";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";

type PageProps = {
  readOnly?: boolean;
};

const Page = ({ readOnly }: PageProps) => {
  const isClaimWritten = useWatch<Schema>({ name: "isClaimWritten" });

  return (
    <>
      <Grid container spacing={2}>
        <Grid size={{ xs: 12 }}>
          <TextField<Schema>
            name="claimNature"
            label={d.claimNature}
            multiline
            rows={3}
          />
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <DatePicker<Schema>
            name="claimAwarenessDate"
            label={d.claimAwarenessDate}
          />
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <DatePicker<Schema>
            name="claimIntimationDate"
            label={d.claimIntimationDate}
          />
        </Grid>

        <Grid size={{ xs: 12 }}>
          <Menu<Schema>
            name="isClaimWritten"
            label={d.isClaimWritten}
            options={[
              { value: "true", label: "Yes" },
              { value: "false", label: "No" },
            ]}
          />
        </Grid>

        {!isClaimWritten && (
          <Grid size={{ xs: 12 }}>
            <TextField<Schema>
              name="oralClaimDetails"
              label={d.oralClaimDetails}
              multiline
              rows={3}
            />
          </Grid>
        )}

        <Grid size={{ xs: 12, md: 6 }}>
          <TextField<Schema>
            name="claimAmount"
            label={d.claimAmount}
          />
        </Grid>
      </Grid>
    </>
  );
};

const Provider = ({ readOnly }: PageProps) => {
  const navigate = useNavigate();
  const { formData, updateFormData } = useStore();

  const handleSubmit: SubmitHandler<Schema> = (data) => {
    updateFormData(data);
    navigate("../response-details");
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
      title={d.claimDetails}
      readOnly={readOnly}
    >
      <Page readOnly={readOnly} />
    </Form>
  );
};

export { Provider as ProfessionalIndemnityClaimDetails, Page as ClaimDetails }; 