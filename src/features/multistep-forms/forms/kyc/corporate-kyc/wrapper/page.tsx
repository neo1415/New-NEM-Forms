import { Outlet } from "react-router-dom";
import { Stepper } from "./components/stepper";
import { SummaryDialog } from "./components/summary-dialog";
import { Box } from "@mui/material";

const Page = () => {
  return (
    <Box sx={{ p: 3 }}>
      <Stepper />
      <Box sx={{ mt: 3 }}>
        <Outlet />
      </Box>
      <SummaryDialog />
    </Box>
  );
};

export { Page as CorporateKYC }; 