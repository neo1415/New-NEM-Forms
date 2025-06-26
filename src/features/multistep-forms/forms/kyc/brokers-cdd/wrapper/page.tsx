import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import { Stepper } from "./components/stepper";
import { SummaryDialog } from "./components/summary-dialog";

const Page = () => {
  return (
    <Box sx={{ width: 1 }}>
      <Box sx={{ mb: 4 }}>
        <Stepper />
      </Box>
      <Outlet />
      <SummaryDialog />
    </Box>
  );
}; 
export { Page as BrokersCDD }; 