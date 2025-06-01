import { useFieldArray, useFormContext } from "react-hook-form";
import { Schema } from "../types/schema";
import { Chip, IconButton, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { TextField } from "@/features/form/components/controllers/text-field";
import AddCircleRoundedIcon from "@mui/icons-material/AddCircleRounded";
import RemoveCircleOutlineRoundedIcon from "@mui/icons-material/RemoveCircleOutlineRounded";
import { Fragment } from "react";

type Props = {
  readOnly?: boolean;
};

export const Witnesses = ({ readOnly }: Props = {}) => {
  const { control } = useFormContext<Schema>();
  const { fields, append, remove } = useFieldArray({
    control,
    name: "witnesses",
  });

  const handleAddClick = () => {
    append({ name: "", address: "" });
  };

  const handleRemoveClick = (index: number) => {
    remove(index);
  };

  return (
    <>
      <Grid
        sx={{ display: "flex", alignItems: "center" }}
        size={12}
        id="witnesses"
      >
        <Typography variant="subtitle2">Please provide name and address of any witnesses to the accident:</Typography>
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
              label={`Witness #${index + 1}`}
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
              name={`witnesses.${index}.name`}
              label="Witness Name"
            />
          </Grid>
          <Grid size={{ xs: 6 }}>
            <TextField<Schema>
              name={`witnesses.${index}.address`}
              label="Witness Address"
              multiline
              maxRows={4}
            />
          </Grid>
        </Fragment>
      ))}
    </>
  );
}; 