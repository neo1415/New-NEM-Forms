import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import { Stepper } from "./components/stepper";
import { SummaryDialog } from "./components/summary-dialog";

const MoneyInsuranceWrapper = () => {
  return (
    <Box>
      <Stepper />
      <Outlet />
      <SummaryDialog />
    </Box>
  );
};

export { MoneyInsuranceWrapper }; 