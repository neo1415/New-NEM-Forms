import { Form } from "@/features/form/components/form";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import { Menu } from "@/features/form/components/controllers/menu";
import { d } from "@/utils/motorDictionary/dictionary";
import Grid from "@mui/material/Grid2";
import { SubmitHandler, useWatch } from "react-hook-form";
import { useNavigate } from "react-router";
import { Schema, schema, defaultValues } from "./types/schema";
import { useStore } from "./hooks/useStore";
import { OtherDrivers } from "./components/OtherDrivers";
import { useFormContext } from "@/features/form/hooks/useFormContext";

const Page = () => {
  const { control } = useFormContext<Schema>();

  const otherVehiclesInvolved = useWatch({
    control,
    name: "otherVehiclesInvolved",
  });

  return (
    <>
      <Grid size={{ xs: 12 }}>
        <Menu<Schema>
          name="otherVehiclesInvolved"
          label="Were other vehicles involved in the accident?"
          options={[
            { value: "Yes", label: "Yes" },
            { value: "No", label: "No" },
          ]}
        />
      </Grid>

      {otherVehiclesInvolved === "Yes" && <OtherDrivers />}
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
    navigate("/claims/motor/review");
  };

  return (
    <Form
      submitButtonText={d.saveAndContinue}
      slotProps={{
        submitButtonProps: { startIcon: <ArrowForwardIosRoundedIcon /> },
      }}
      schema={schema}
      values={formData}
      defaultValues={defaultValues}
      onSubmit={handleSubmit}
      readOnly={readOnly}
      title="Other Vehicles Involved"
    >
      <Page />
    </Form>
  );
};

export { Provider as OtherDriversPage };
