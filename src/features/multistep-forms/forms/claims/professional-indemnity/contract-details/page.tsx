import { Form } from "@/features/form/components/form";
import { schema, Schema, defaultValues } from "./types/schema";
import { d } from "@/utils/professionalIndemnityDictionary/dictionary";
import Grid from "@mui/material/Grid2";
import { SubmitHandler, useWatch } from "react-hook-form";
import { useStore } from "./hooks/useStore";
import { useNavigate } from "react-router";
import { TextField } from "@/features/form/components/controllers/text-field";
import { DatePicker } from "@/features/form/components/controllers/date-picker";
import { Menu } from "@/features/form/components/controllers/menu";
import { TextArea } from "@/features/form/components/controllers/text-area";
import { FileUpload } from "@/features/form/components/controllers/file-upload";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import { useFormContext } from "@/features/form/hooks/useFormContext";

type PageProps = {
  readOnly?: boolean;
};

const Page = ({ readOnly }: PageProps) => {
  const { control, setValue } = useFormContext<Schema>();

  const isContractWritten = useWatch({
    control,
    name: "isContractWritten",
  });

  return (
    <>
      <Grid size={{ xs: 12 }}>
        <TextArea<Schema>
          name="contractPurpose"
          label={d.contractPurpose}
        />
      </Grid>

      <Grid size={{ xs: 6 }}>
        <Menu<Schema>
          name="isContractWritten"
          label={d.isContractWritten}
          options={[
            { value: "true", label: "Yes" },
            { value: "false", label: "No" },
          ]}
          sx={{ width: "100%" }}
          onChange={(event) => {
            const selectedValue = (event.target as HTMLElement).textContent === "Yes";
            setValue("isContractWritten", selectedValue);
          }}
        />
      </Grid>

      {isContractWritten === true && (
        <Grid size={{ xs: 12 }}>
          <FileUpload<Schema>
            name="contractEvidenceFile"
            label="Upload contract evidence (PDF, JPG, JPEG, PNG, max 5MB)"
          />
        </Grid>
      )}

      {isContractWritten === false && (
        <Grid size={{ xs: 12 }}>
          <TextArea<Schema>
            name="contractTermsDetails"
            label={d.contractTermsDetails}
          />
        </Grid>
      )}

      <Grid size={{ xs: 6 }}>
        <DatePicker<Schema>
          name="workPerformanceDate"
          label={d.workPerformanceDate}
        />
      </Grid>

      <Grid size={{ xs: 6 }}>
        <TextField<Schema>
          name="responsiblePerson"
          label={d.responsiblePerson}
        />
      </Grid>

      <Grid size={{ xs: 12 }}>
        <TextArea<Schema>
          name="responsiblePersonDetails"
          label={d.responsiblePersonDetails}
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
    navigate("../claim-details");
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
      title={d.contractDetails}
      readOnly={readOnly}
    >
      <Page readOnly={readOnly} />
    </Form>
  );
};

export { Provider as ProfessionalIndemnityContractDetails };
export type { PageProps as ContractDetailsProps };
export { Page as ContractDetails }; 