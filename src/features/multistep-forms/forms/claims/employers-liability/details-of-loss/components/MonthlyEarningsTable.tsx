import { DatePicker } from "@/features/form/components/controllers/date-picker";
import { TextField } from "@/features/form/components/controllers/text-field";
import { ErrorMessage } from "@/features/form/components/error-message";
import { useFormContext } from "@/features/form/hooks/useFormContext";
import { Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { useFieldArray, useWatch } from "react-hook-form";
import { Fragment } from "react";
import { Schema } from "../types/schema";
import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";

export const MonthlyEarningsTable = () => {
  const { control, readOnly } = useFormContext<Schema>();

  const { fields } = useFieldArray({
    control,
    name: "monthlyEarnings",
  });

  const monthlyEarnings = useWatch({
    control,
    name: "monthlyEarnings",
  });

  // Calculate total wages
  const totalWages = monthlyEarnings?.reduce((sum, entry) => {
    const wages = parseFloat(entry.wagesAndBonus) || 0;
    return sum + wages;
  }, 0);

  return (
    <>
      <Grid size={{ xs: 12 }}>
        <Typography variant="subtitle1" gutterBottom>
          Statement of Injured Party's Earnings
        </Typography>
        <Typography variant="body2" color="text.secondary" paragraph>
          Please provide the monthly earnings for the past 12 months or duration of employment. Include reasons for any absences.
        </Typography>
      </Grid>

      <TableContainer component={Paper} sx={{ mt: 2 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Month Ending</TableCell>
              <TableCell>Wages and Bonus</TableCell>
              <TableCell>Reason for Absence (if any)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {fields.map((field, index) => (
              <TableRow key={field.id}>
                <TableCell>
                  <DatePicker<Schema>
                    name={`monthlyEarnings.${index}.monthEnding`}
                    label={`Month ${index + 1}`}
                    disabled={readOnly}
                  />
                </TableCell>
                <TableCell>
                  <TextField<Schema>
                    name={`monthlyEarnings.${index}.wagesAndBonus`}
                    label="Amount"
                    disabled={readOnly}
                  />
                </TableCell>
                <TableCell>
                  <TextField<Schema>
                    name={`monthlyEarnings.${index}.reasonForAbsence`}
                    label="Reason"
                    disabled={readOnly}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Grid size={{ xs: 12 }}>
        <Typography variant="subtitle1" sx={{ mt: 2 }}>
          Total Wages Earned: ₦{totalWages.toLocaleString()}
        </Typography>
      </Grid>

      <Box sx={{ mt: 2 }}>
        <Grid container spacing={2}>
          <Grid size={{ xs: 12 }}>
            <TextField<Schema>
              name="monthlyAllowanceValue"
              label="State the Monthly value of any allowances (i.e. Food, Fuel, or Housing allowed to the Injured Party)"
            />
          </Grid>
        </Grid>
      </Box>
    </>
  );
}; 