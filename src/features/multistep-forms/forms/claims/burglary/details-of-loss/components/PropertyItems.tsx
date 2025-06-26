import { DatePicker } from "@/features/form/components/controllers/date-picker";
import { TextField } from "@/features/form/components/controllers/text-field";
import { useFormContext } from "@/features/form/hooks/useFormContext";
import { Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { useFieldArray, useWatch } from "react-hook-form";
import { Schema } from "../types/schema";
import AddCircleRoundedIcon from "@mui/icons-material/AddCircleRounded";
import RemoveCircleOutlineRoundedIcon from "@mui/icons-material/RemoveCircleOutlineRounded";
import { IconButton } from "@mui/material";

export const PropertyItems = () => {
  const { control, readOnly } = useFormContext<Schema>();
  const { fields, append, remove } = useFieldArray({
    control,
    name: "propertyItems",
  });

  // Watch all property items for real-time updates
  const propertyItems = useWatch({
    control,
    name: "propertyItems",
  });

  const formatCurrency = (value: string) => {
    const numericValue = value.replace(/[^0-9.-]+/g, "");
    return numericValue ? `₦${Number(numericValue).toLocaleString()}` : "";
  };

  const calculateTotal = (fieldName: "costPrice" | "estimatedValue" | "netAmountClaimed") => {
    return propertyItems?.reduce((acc, item) => {
      const value = item[fieldName] || "0";
      return acc + Number(value.replace(/[^0-9.-]+/g, ""));
    }, 0);
  };

  const totalCostPrice = calculateTotal("costPrice");
  const totalEstimatedValue = calculateTotal("estimatedValue");
  const totalNetAmountClaimed = calculateTotal("netAmountClaimed");

  const handleAddClick = () => {
    append({
      description: "",
      purchaseDate: new Date(),
      costPrice: "",
      estimatedValue: "",
      netAmountClaimed: "",
    });
  };

  return (
    <>
      <Grid size={{ xs: 12 }}>
        <Typography variant="subtitle1" gutterBottom>
          Property Description
        </Typography>
        <Typography variant="body2" color="text.secondary" paragraph>
          Please provide details of the property for which this claim is made.
        </Typography>
      </Grid>

      <Grid
        sx={{ display: "flex", alignItems: "center", mb: 2 }}
        size={12}
      >
        {!readOnly && (
          <IconButton onClick={handleAddClick} color="success">
            <AddCircleRoundedIcon />
          </IconButton>
        )}
      </Grid>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Description</TableCell>
              <TableCell>Date of Purchase</TableCell>
              <TableCell>Cost Price (₦)</TableCell>
              <TableCell>Estimated Value (₦)</TableCell>
              <TableCell>Net Amount Claimed (₦)</TableCell>
              {!readOnly && <TableCell>Actions</TableCell>}
            </TableRow>
          </TableHead>
          <TableBody>
            {fields.map((field, index) => (
              <TableRow key={field.id}>
                <TableCell>
                  <TextField<Schema>
                    name={`propertyItems.${index}.description`}
                    label="Description"
                  />
                </TableCell>
                <TableCell>
                  <DatePicker<Schema>
                    name={`propertyItems.${index}.purchaseDate`}
                    label="Purchase Date"
                  />
                </TableCell>
                <TableCell>
                  <TextField<Schema>
                    name={`propertyItems.${index}.costPrice`}
                    label="Cost Price"
                    onChange={(e) => {
                      e.target.value = formatCurrency(e.target.value);
                    }}
                  />
                </TableCell>
                <TableCell>
                  <TextField<Schema>
                    name={`propertyItems.${index}.estimatedValue`}
                    label="Estimated Value"
                    onChange={(e) => {
                      e.target.value = formatCurrency(e.target.value);
                    }}
                  />
                </TableCell>
                <TableCell>
                  <TextField<Schema>
                    name={`propertyItems.${index}.netAmountClaimed`}
                    label="Net Amount"
                    onChange={(e) => {
                      e.target.value = formatCurrency(e.target.value);
                    }}
                  />
                </TableCell>
                {!readOnly && (
                  <TableCell>
                    <IconButton
                      onClick={() => remove(index)}
                      color="error"
                    >
                      <RemoveCircleOutlineRoundedIcon />
                    </IconButton>
                  </TableCell>
                )}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Grid container spacing={2} sx={{ mt: 2 }}>
        <Grid size={{ xs: 4 }}>
          <Typography variant="subtitle1">
            Total Cost Price: ₦{totalCostPrice.toLocaleString()}
          </Typography>
        </Grid>
        <Grid size={{ xs: 4 }}>
          <Typography variant="subtitle1">
            Total Estimated Value: ₦{totalEstimatedValue.toLocaleString()}
          </Typography>
        </Grid>
        <Grid size={{ xs: 4 }}>
          <Typography variant="subtitle1">
            Total Net Amount Claimed: ₦{totalNetAmountClaimed.toLocaleString()}
          </Typography>
        </Grid>
      </Grid>
    </>
  );
}; 