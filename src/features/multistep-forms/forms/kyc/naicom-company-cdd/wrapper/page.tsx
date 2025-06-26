import { Box } from "@mui/material";
import { Outlet } from "react-router";
import { Stepper } from "./components/stepper";
import { SummaryDialog } from "./components/summary-dialog";

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

export const Provider = () => {
  return <Page />;
}; 