import { Box } from "@mui/material";
import { Outlet } from "react-router";
import { Stepper } from "./components/stepper";
import { SummaryDialog } from "./components/summary-dialog";

const Provider = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
      <Stepper />
      <Outlet />
      <SummaryDialog />
    </Box>
  );
};

export { Provider as AllRiskWrapper }; 