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
import { useFieldArray } from "react-hook-form";
import { Schema } from "../../statement-of-earnings/types/schema";

export const MonthlyEarningsTable = () => {
  const { control } = useFormContext<Schema>();
  const { fields } = useFieldArray({
    control,
    name: "monthlyEarnings",
  });

  const totalWages = fields.reduce((acc, field, index) => {
    const amount = control._formValues.monthlyEarnings[index]?.wagesAndBonus || "0";
    return acc + Number(amount.replace(/[^0-9.-]+/g, ""));
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
                  />
                </TableCell>
                <TableCell>
                  <TextField<Schema>
                    name={`monthlyEarnings.${index}.wagesAndBonus`}
                    label="Amount"
                  />
                </TableCell>
                <TableCell>
                  <TextField<Schema>
                    name={`monthlyEarnings.${index}.reasonForAbsence`}
                    label="Reason"
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

      <Grid container spacing={2}>
        <Grid size={{ xs: 12 }}>
          <TextField<Schema>
            name="monthlyAllowanceValue"
            label="State the Monthly value of any allowances i.e. Food, Fuel, or Housing allowed to the Injured Party"
          />
        </Grid>
      </Grid>
    </>
  );
}; 