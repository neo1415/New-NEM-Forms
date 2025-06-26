import { Outlet } from "react-router";
import { SummaryDialog } from "./components/summary-dialog";
import { Stepper } from "./components/stepper";
import { Box } from "@mui/material";

const Page = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
      <Stepper />
      <Outlet />
      <SummaryDialog />
    </Box>
  );
};

export { Page as AgentsKYCWrapper }; 