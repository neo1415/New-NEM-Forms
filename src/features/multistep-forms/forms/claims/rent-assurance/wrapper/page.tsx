import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import { Stepper } from "./components/stepper";
import { SummaryDialog } from "./components/summary-dialog";

const RentAssuranceWrapper = () => {
  return (
    <Box sx={{ p: 3 }}>
      <Stepper />
      <Outlet />
      <SummaryDialog />
    </Box>
  );
};

export { RentAssuranceWrapper }; 