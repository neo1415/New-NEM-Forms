import { TextField } from "@/features/form/components/controllers/text-field";
import { FileUpload } from "@/features/form/components/controllers/file-upload";
import { ErrorMessage } from "@/features/form/components/error-message";
import { useFormContext } from "@/features/form/hooks/useFormContext";
import AddCircleRoundedIcon from "@mui/icons-material/AddCircleRounded";
import RemoveCircleOutlineRoundedIcon from "@mui/icons-material/RemoveCircleOutlineRounded";
import { Chip, IconButton, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { useFieldArray } from "react-hook-form";
import { Fragment } from "react";
import { Schema } from "../types/schema";

const GoodsEntries = () => {
  const { control, readOnly } = useFormContext<Schema>();

  const { fields, append, remove } = useFieldArray({
    control,
    name: "goodsEntries",
  });

  const handleAddClick = () => {
    append({
      quantity: "",
      description: "",
      value: "",
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
        id="goodsEntries"
      >
        <Typography variant="subtitle2">Particulars of Goods Lost or Damaged:</Typography>
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
              label={`Entry #${index + 1}`}
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
          <Grid size={{ xs: 4 }}>
            <TextField<Schema>
              name={`goodsEntries.${index}.quantity`}
              label="Quantity"
            />
          </Grid>
          <Grid size={{ xs: 4 }}>
            <TextField<Schema>
              name={`goodsEntries.${index}.description`}
              label="Description"
            />
          </Grid>
          <Grid size={{ xs: 4 }}>
            <TextField<Schema>
              name={`goodsEntries.${index}.value`}
              label="Value"
            />
          </Grid>
          <Grid size={{ xs: 3 }}>
            <FileUpload<Schema>
              name={`goodsEntries.${index}.invoiceFile`}
              label="Invoice"
              accept="application/pdf,image/*"
            />
          </Grid>
          <Grid size={{ xs: 3 }}>
            <FileUpload<Schema>
              name={`goodsEntries.${index}.deliveryNoteFile`}
              label="Delivery Note"
              accept="application/pdf,image/*"
            />
          </Grid>
          <Grid size={{ xs: 3 }}>
            <FileUpload<Schema>
              name={`goodsEntries.${index}.receiptFile`}
              label="Receipt"
              accept="application/pdf,image/*"
            />
          </Grid>
          <Grid size={{ xs: 3 }}>
            <FileUpload<Schema>
              name={`goodsEntries.${index}.correspondenceFile`}
              label="Correspondence"
              accept="application/pdf,image/*"
            />
          </Grid>
        </Fragment>
      ))}
      <Grid size={{ xs: 12 }}>
        <ErrorMessage<Schema> name="goodsEntries" />
      </Grid>
    </>
  );
};

export { GoodsEntries }; 