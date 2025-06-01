import { Autocomplete } from "@/features/form/components/controllers/autocomplete";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";

import { Form } from "@/features/form/components/form";
import { TextField } from "@/features/form/components/controllers/text-field";
import {
  useWitnessPassenger,
} from "@/features/multistep-forms/forms/claims/motor/witnesses/hooks/useQueries";
import { useStore } from "@/features/multistep-forms/forms/claims/motor/witnesses/hooks/useStore";
import {
  defaultValues,
  schema,
  Schema,
  WitnessPassengerEnum,
} from "@/features/multistep-forms/forms/claims/motor/witnesses/types/schema";
import { d } from "@/utils/motorDictionary/dictionary";
import Grid from "@mui/material/Grid2";
import { SubmitHandler, useWatch } from "react-hook-form";
import { useNavigate } from "react-router";
import { useFormContext } from "@/features/form/hooks/useFormContext";
import { Witnesses } from "./components/Witness";

const Page = () => {
  const witnessPassengerQuery = useWitnessPassenger();


  const { control } = useFormContext<Schema>();

  const WitnessPassenger = useWatch({
    control,
    name: "WitnessPassenger",
  });

  return (
    <>
    <Witnesses />
      <Grid size={{ xs: 6 }}>
        <Autocomplete<Schema, true>
          name="WitnessPassenger"
          options={witnessPassengerQuery.data}
          textFieldProps={{ label: d.witnessPassenger }}
          multiple={true}
        />
      </Grid>

      <Grid size={{ xs: 6 }}>
        {WitnessPassenger.includes(
          WitnessPassengerEnum.enum.MORE
        ) && (
          <TextField<Schema>
            name="otherWitnessPassengers"
            label={d.otherWitnessPassengers}
            multiline
            maxRows={4}
          />
        )}
      </Grid>

      {/* <EducationalInstitutions /> */}
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
    navigate("/claims/motor/other-drivers");
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
      title={d.otherWitnessPassengers}
    >
      <Page />
    </Form>
  );
};

export { Provider as WitnessPage };
