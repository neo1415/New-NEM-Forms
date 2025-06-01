import { Stepper } from "./components/stepper";
import { SummaryDialog } from "./components/summary-dialog";
import { Divider } from "@mui/material";
import { Outlet } from "react-router-dom";

const Page = () => {
  return (
    <>
      <SummaryDialog />
      <Stepper />
      <Divider sx={{ marginY: 2 }} />
      <Outlet />
    </>
  );
};

export { Page as FireAndSpecialPerilsWrapper }; 