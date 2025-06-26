import { Form } from "@/features/form/components/form";
import { useStore } from "./hooks/useStore";
import Grid from "@mui/material/Grid2";
import { SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router";
import { Schema, schema, defaultValues } from "./types/schema";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import { Typography } from "@mui/material";
import { MonthlyEarningsTable } from "../details-of-loss/components/MonthlyEarningsTable";

const Page = () => {
  return (
    <>
      <Grid size={{ xs: 12 }}>
        <Typography variant="subtitle1" gutterBottom>
          Statement of Earnings
        </Typography>
        <Typography variant="body2" color="text.secondary" paragraph>
          THE WORKMAN'S COMPENSATION ORDINANCE PROVIDES FOR COMPENSATION BASED ON THE
          WORKMAN'S AVERAGE MONTHLY EARNING DURING THE PAST 12 MONTHS OR SUCH SHORT PERIOD
          AS HE MAY HAVE BEEN IN THE EMPLOYER'S SERVICE.
        </Typography>
      </Grid>
      <MonthlyEarningsTable />
    </>
  );
};

type ProviderProps = {
  readOnly?: boolean;
};

const Provider = ({ readOnly }: ProviderProps) => {
  const navigate = useNavigate();
  const { formData, updateFormData } = useStore();

  const handleSubmit: SubmitHandler<Schema> = (data) => {
    updateFormData(data);
    navigate("/claims/combined-gpa-employers/review");
  };

  return (
    <Form
      submitButtonText="Save and Continue"
      slotProps={{
        submitButtonProps: { startIcon: <ArrowForwardIosRoundedIcon /> },
      }}
      schema={schema}
      values={formData}
      defaultValues={defaultValues}
      onSubmit={handleSubmit}
      readOnly={readOnly}
      title="Statement of Earnings"
    >
      <Page />
    </Form>
  );
};

export { Provider as StatementOfEarningsPage }; 