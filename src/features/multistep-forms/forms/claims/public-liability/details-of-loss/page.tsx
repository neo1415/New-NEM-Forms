import { Form } from "@/features/form/components/form";
import { schema, Schema, defaultValues } from "./types/schema";
import { d } from "@/utils/publicLiabilityDictionary/dictionary";
import Grid from "@mui/material/Grid2";
import { SubmitHandler, useFieldArray, useWatch } from "react-hook-form";
import { useStore } from "./hooks/useStore";
import { useNavigate } from "react-router";
import { TextField } from "@/features/form/components/controllers/text-field";
import { DatePicker } from "@/features/form/components/controllers/date-picker";
import { Menu } from "@/features/form/components/controllers/menu";
import { TextArea } from "@/features/form/components/controllers/text-area";
import { FileUpload } from "@/features/form/components/controllers/file-upload";
import { Chip, IconButton, Stack, Typography } from "@mui/material";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import AddCircleRoundedIcon from "@mui/icons-material/AddCircleRounded";
import RemoveCircleOutlineRoundedIcon from "@mui/icons-material/RemoveCircleOutlineRounded";
import { useFormContext } from "@/features/form/hooks/useFormContext";
import { Fragment } from "react";

type PageProps = {
  readOnly?: boolean;
};

const Page = ({ readOnly }: PageProps) => {
  const { control } = useFormContext<Schema>();

  const policeNotified = useWatch({
    control,
    name: "policeNotified",
  });

  const otherPolicies = useWatch({
    control,
    name: "otherPolicies",
  });

  const claimNoticeReceived = useWatch({
    control,
    name: "claimNoticeReceived",
  });

  const {
    fields: witnessFields,
    append: appendWitness,
    remove: removeWitness,
  } = useFieldArray({
    control,
    name: "witnesses",
  });

  return (
    <Grid container spacing={2}>
      <Grid size={{ xs: 12, sm: 6 }}>
        <DatePicker<Schema>
          name="accidentDateTime"
          label={d.accidentDateTime}
        />
      </Grid>

      <Grid size={{ xs: 12, sm: 6 }}>
        <TextField<Schema>
          name="accidentLocation"
          label={d.accidentLocation}
        />
      </Grid>

      <Grid size={{ xs: 12 }}>
        <TextArea<Schema>
          name="accidentDetails"
          label={d.accidentDetails}
        />
      </Grid>

      <Grid
        sx={{ display: "flex", alignItems: "center" }}
        size={12}
        id="witnesses"
      >
        <Typography variant="subtitle2">{d.witnesses}:</Typography>
        {!readOnly && (
          <IconButton
            onClick={() =>
              appendWitness({
                name: "",
                address: "",
                employmentStatus: "Employee",
              })
            }
            color="success"
          >
            <AddCircleRoundedIcon />
          </IconButton>
        )}
      </Grid>
      {witnessFields.map((field, index) => (
        <Fragment key={field.id}>
          <Grid
            sx={{ display: "flex", alignItems: "center" }}
            size={{ xs: 12 }}
          >
            <Chip
              label={`${d.witnessName} #${index + 1}:`}
              size="small"
              color="secondary"
            />
            {!readOnly && (
              <IconButton
                color="error"
                onClick={() => removeWitness(index)}
              >
                <RemoveCircleOutlineRoundedIcon />
              </IconButton>
            )}
          </Grid>
          <Grid size={{ xs: 12, sm: 4 }}>
            <TextField<Schema>
              name={`witnesses.${index}.name`}
              label={d.witnessName}
            />
          </Grid>
          <Grid size={{ xs: 12, sm: 4 }}>
            <TextField<Schema>
              name={`witnesses.${index}.address`}
              label={d.witnessAddress}
            />
          </Grid>
          <Grid size={{ xs: 12, sm: 4 }}>
            <Menu<Schema>
              name={`witnesses.${index}.employmentStatus`}
              label={d.employmentStatus}
              options={d.employmentStatusOptions.map((option) => ({
                value: option,
                label: option,
              }))}
            />
          </Grid>
        </Fragment>
      ))}

      <Grid size={{ xs: 12 }}>
        <TextArea<Schema>
          name="workDescription"
          label={d.workDescription}
        />
      </Grid>

      <Grid size={{ xs: 12, sm: 6 }}>
        <TextField<Schema>
          name="responsiblePersonName"
          label={d.responsiblePersonName}
        />
      </Grid>

      <Grid size={{ xs: 12, sm: 6 }}>
        <TextField<Schema>
          name="responsiblePersonAddress"
          label={d.responsiblePersonAddress}
        />
      </Grid>

      <Grid size={{ xs: 12, sm: 6 }}>
        <TextField<Schema>
          name="employerName"
          label={d.employerName}
        />
      </Grid>

      <Grid size={{ xs: 12, sm: 6 }}>
        <TextField<Schema>
          name="employerAddress"
          label={d.employerAddress}
        />
      </Grid>

      <Grid size={{ xs: 12, sm: 6 }}>
        <Menu<Schema>
          name="policeNotified"
          label={d.policeNotified}
          options={[
            { value: "true", label: "Yes" },
            { value: "false", label: "No" },
          ]}
        />
      </Grid>

      {policeNotified && (
        <>
          <Grid size={{ xs: 12, sm: 6 }}>
            <TextField<Schema>
              name="policeOfficerNumber"
              label={d.policeOfficerNumber}
            />
          </Grid>

          <Grid size={{ xs: 12, sm: 6 }}>
            <TextField<Schema>
              name="policeStation"
              label={d.policeStation}
            />
          </Grid>
        </>
      )}

      <Grid size={{ xs: 12, sm: 6 }}>
        <Menu<Schema>
          name="otherPolicies"
          label={d.otherPolicies}
          options={[
            { value: "true", label: "Yes" },
            { value: "false", label: "No" },
          ]}
        />
      </Grid>

      {otherPolicies && (
        <Grid size={{ xs: 12 }}>
          <TextArea<Schema>
            name="otherPoliciesDetails"
            label={d.otherPoliciesDetails}
          />
        </Grid>
      )}

      <Grid size={{ xs: 12, sm: 6 }}>
        <TextField<Schema>
          name="claimantName"
          label={d.claimantName}
        />
      </Grid>

      <Grid size={{ xs: 12, sm: 6 }}>
        <TextField<Schema>
          name="claimantAddress"
          label={d.claimantAddress}
        />
      </Grid>

      <Grid size={{ xs: 12 }}>
        <TextArea<Schema>
          name="injuryOrDamageNature"
          label={d.injuryOrDamageNature}
        />
      </Grid>

      <Grid size={{ xs: 12, sm: 6 }}>
        <Menu<Schema>
          name="claimNoticeReceived"
          label={d.claimNoticeReceived}
          options={[
            { value: "true", label: "Yes" },
            { value: "false", label: "No" },
          ]}
        />
      </Grid>

      {claimNoticeReceived && (
        <>
          <Grid size={{ xs: 12 }}>
            <TextArea<Schema>
              name="claimNoticeDetails"
              label={d.claimNoticeDetails}
            />
          </Grid>

          <Grid size={{ xs: 12 }}>
            <Typography variant="caption" gutterBottom>
              {d.claimDocumentsNote}
            </Typography>
            <FileUpload<Schema>
              name="claimDocuments"
              label={d.claimDocuments}
            />
          </Grid>
        </>
      )}
    </Grid>
  );
};

const Provider = ({ readOnly }: { readOnly?: boolean }) => {
  const navigate = useNavigate();
  const { formData, updateFormData } = useStore();

  const handleSubmit: SubmitHandler<Schema> = (data) => {
    updateFormData(data);
    navigate("../particulars-of-claimant");
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
      title={d.detailsOfLoss}
      readOnly={readOnly}
    >
      <Page readOnly={readOnly} />
    </Form>
  );
};

export { Provider as PublicLiabilityDetailsOfLoss };
export { Page as DetailsOfLoss };
export type { PageProps as DetailsOfLossProps }; 