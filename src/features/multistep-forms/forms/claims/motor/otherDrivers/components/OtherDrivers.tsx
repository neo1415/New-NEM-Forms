import { TextField } from "@/features/form/components/controllers/text-field";
import { TextArea } from "@/features/form/components/controllers/text-area";
import { d } from "@/utils/motorDictionary/dictionary";
import AddCircleRoundedIcon from "@mui/icons-material/AddCircleRounded";
import RemoveCircleOutlineRoundedIcon from "@mui/icons-material/RemoveCircleOutlineRounded";
import { Chip, IconButton, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { useFieldArray } from "react-hook-form";
import { Fragment } from "react/jsx-runtime";
import { useFormContext } from "@/features/form/hooks/useFormContext";
import { Schema } from "../types/schema";

const OtherDrivers = () => {
  const { control, readOnly } = useFormContext<Schema>();

  const { fields, append, remove } = useFieldArray({
    control,
    name: "otherDrivers",
  });

  const handleAddClick = () => {
    append({
      carRegistrationNumber: "",
      carMakeModel: "",
      driverName: "",
      driverPhone: "",
      driverAddress: "",
      injuryDamageDescription: "",
    });
  };

  const handleRemoveClick = (index: number) => {
    remove(index);
  };

  return (
    <>
      <Grid
        sx={{ display: "flex", alignItems: "center" }}
        size={12}
        id="otherDrivers"
      >
        <Typography variant="subtitle2">{d.otherVehicleInvolved1}:</Typography>
        {!readOnly && (
          <IconButton onClick={handleAddClick} color="success">
            <AddCircleRoundedIcon />
          </IconButton>
        )}
      </Grid>
      {fields.map((field, index) => (
        <Fragment key={field.id}>
          <Grid
            sx={{ display: "flex", alignItems: "center" }}
            size={{ xs: 12 }}
          >
            <Chip
              label={`${d.otherVehicleInvolved1} #${index + 1}:`}
              size="small"
              color="secondary"
            />
            {!readOnly && (
              <IconButton
                color="error"
                onClick={() => handleRemoveClick(index)}
              >
                <RemoveCircleOutlineRoundedIcon />
              </IconButton>
            )}
          </Grid>
          <Grid size={{ xs: 6 }}>
            <TextField<Schema>
              name={`otherDrivers.${index}.carRegistrationNumber`}
              label={d.otherVehicleRegNumber1}
            />
          </Grid>
          <Grid size={{ xs: 6 }}>
            <TextField<Schema>
              name={`otherDrivers.${index}.carMakeModel`}
              label={d.otherVehicleMakeModel1}
            />
          </Grid>
          <Grid size={{ xs: 6 }}>
            <TextField<Schema>
              name={`otherDrivers.${index}.driverName`}
              label={d.otherDriverName1}
            />
          </Grid>
          <Grid size={{ xs: 6 }}>
            <TextField<Schema>
              name={`otherDrivers.${index}.driverPhone`}
              label={d.otherDriverPhone1}
            />
          </Grid>
          <Grid size={{ xs: 12 }}>
            <TextField<Schema>
              name={`otherDrivers.${index}.driverAddress`}
              label={d.otherDriverAddress1}
            />
          </Grid>
          <Grid size={{ xs: 12 }}>
            <TextArea<Schema>
              name={`otherDrivers.${index}.injuryDamageDescription`}
              label={d.injuryDamageDescription1}
            />
          </Grid>
        </Fragment>
      ))}
    </>
  );
};

export { OtherDrivers }; 