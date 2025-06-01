// import { ErrorMessage } from "@/features/form/components/error-message";
import { TextField } from "@/features/form/components/controllers/text-field";
import { d } from "@/utils/motorDictionary/dictionary";
import AddCircleRoundedIcon from "@mui/icons-material/AddCircleRounded";
import RemoveCircleOutlineRoundedIcon from "@mui/icons-material/RemoveCircleOutlineRounded";
import { Chip, IconButton, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { useFieldArray } from "react-hook-form";
import { Fragment } from "react/jsx-runtime";
import { useFormContext } from "@/features/form/hooks/useFormContext";
import { Schema } from "../types/schema";

const Witnesses = () => {
  const { control, readOnly } = useFormContext<Schema>();

  const { fields, append, remove } = useFieldArray({
    control,
    name: "witness",
  });

  const handleAddClick = () => {
    append({ witnessName: "", witnessPhone: "", witnessAddress: "" });
  };

  const handleRemoveClick = (index: number) => {
    remove(index);
  };

  return (
    <>
      <Grid
        sx={{ display: "flex", alignItems: "center" }}
        size={12}
        id="witness"
      >
        <Typography variant="subtitle2">{d.witness}:</Typography>
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
              label={`${d.employer} #${index + 1}:`}
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
              name={`witness.${index}.witnessName`}
              label={d.witnessName}
            />
          </Grid>
          <Grid size={{ xs: 6 }}>
            <TextField<Schema>
              name={`witness.${index}.witnessPhone`}
              label={d.witnessPhone}
            />
          </Grid>
          <Grid size={{ xs: 12 }}>
            <TextField<Schema>
              name={`witness.${index}.witnessAddress`}
              label={d.witnessAddress}
              multiline
              maxRows={4}
            />
          </Grid>
        </Fragment>
      ))}
      {/* <Grid size={{ xs: 12 }}>
        <ErrorMessage<Schema> name="previousEmployers" />
      </Grid> */}
    </>
  );
};

export { Witnesses };
