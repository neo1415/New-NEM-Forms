import { Form } from "@/features/form/components/form";

import SendOutlinedIcon from "@mui/icons-material/SendOutlined";

import { useStore } from "@/features/employee/review/hooks/useStore";
import {
  defaultValues,
  schema,
  Schema,
} from "@/features/employee/review/types/schema";
import { useEmployeeWrapperStore } from "@/features/employee/wrapper/hooks/useStore";
import { Checkbox } from "@/features/form/components/controllers/checkbox";
import { Dropzone } from "@/features/form/components/controllers/dropzone";
import { d } from "@/utils/dictionary";
import Grid from "@mui/material/Grid2";
import { SubmitHandler } from "react-hook-form";

const Page = () => {
  return (
    <>
      <Grid size={{ xs: 6 }}>
        <Dropzone<Schema>
          name="portfolioFiles"
          accept={{
            "application/pdf": [".pdf"],
            "image/jpeg": [".jpg", ".jpeg"],
            "image/png": [".png"],
          }}
          label={d.uploadPortfolioFiles}
          maxFiles={3}
          maxSize={5 * 1024 * 1024}
        />
      </Grid>

      <Grid size={{ xs: 6 }}>
        <Dropzone<Schema>
          name="resumeFile"
          accept={{
            "application/pdf": [".pdf"],
          }}
          label={d.uploadResume}
          maxFiles={1}
          maxSize={5 * 1024 * 1024}
          multiple={false}
        />
      </Grid>

      <Grid size={{ xs: 12 }}>
        <Checkbox<Schema>
          name="termsAndConditionsAccepted"
          label={`${d.iAcceptTermsAndConditions}.`}
        />
      </Grid>
    </>
  );
};

type ProviderProps = {
  readOnly?: boolean;
};
const Provider = ({ readOnly }: ProviderProps) => {
  const { updateSummaryDialogOpen } = useEmployeeWrapperStore();
  const { formData, updateFormData } = useStore();

  const handleSubmit: SubmitHandler<Schema> = (data) => {
    updateFormData(data);
    updateSummaryDialogOpen(true);
  };

  return (
    <Form
      schema={schema}
      slotProps={{
        submitButtonProps: { startIcon: <SendOutlinedIcon /> },
      }}
      values={formData}
      defaultValues={defaultValues}
      onSubmit={handleSubmit}
      readOnly={readOnly}
      title={d.review}
    >
      <Page />
    </Form>
  );
};

export { Provider as EmployeeReview };
