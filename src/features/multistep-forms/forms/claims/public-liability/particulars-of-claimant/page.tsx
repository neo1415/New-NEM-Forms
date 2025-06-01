import { Form } from "@/features/form/components/form";
import { schema, Schema, defaultValues } from "./types/schema";
import { d } from "@/utils/publicLiabilityDictionary/dictionary";
import Grid from "@mui/material/Grid2";
import { SubmitHandler, useWatch } from "react-hook-form";
import { useStore } from "./hooks/useStore";
import { useNavigate } from "react-router";
import { TextField } from "@/features/form/components/controllers/text-field";
import { Menu } from "@/features/form/components/controllers/menu";
import { DatePicker } from "@/features/form/components/controllers/date-picker";
import { FileUpload } from "@/features/form/components/controllers/file-upload";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import { useFormContext } from "@/features/form/hooks/useFormContext";

type PageProps = {
  readOnly?: boolean;
};

const Page = ({ readOnly }: PageProps) => {
  const { control } = useFormContext<Schema>();
  const isClaimInWriting = useWatch({
    control,
    name: "isClaimInWriting",
  });

  return (
    <Grid container spacing={2}>
      <Grid size={{ xs: 12 }}>
        <TextField<Schema>
          name="claimantName"
          label={d.claimantName}
        />
      </Grid>

      <Grid size={{ xs: 12, sm: 4 }}>
        <TextField<Schema>
          name="claimFromWhom"
          label={d.claimFromWhom}
        />
      </Grid>

      <Grid size={{ xs: 12, sm: 4 }}>
        <DatePicker<Schema>
          name="claimWhen"
          label={d.claimWhen}
        />
      </Grid>

      <Grid size={{ xs: 12, sm: 4 }}>
        <TextField<Schema>
          name="claimInWhatForm"
          label={d.claimInWhatForm}
        />
      </Grid>

      <Grid size={{ xs: 12, sm: 6 }}>
        <Menu<Schema>
          name="isClaimInWriting"
          label={d.isClaimInWriting}
          options={[
            { value: "true", label: "Yes" },
            { value: "false", label: "No" },
          ]}
        />
      </Grid>

      {isClaimInWriting && (
        <Grid size={{ xs: 12 }}>
          <FileUpload<Schema>
            name="claimWrittenForm"
            label={d.uploadClaimForm}
          />
        </Grid>
      )}
    </Grid>
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
      title={d.particularsOfClaimant}
      readOnly={readOnly}
    >
      <Page readOnly={readOnly} />
    </Form>
  );
};

export { Provider as PublicLiabilityParticularsOfClaimant };
export { Page as ParticularsOfClaimant };
export type { PageProps as ParticularsOfClaimantProps }; 