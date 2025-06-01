import { Stepper } from "@/features/multistep-forms/forms/claims/motor/wrapper/components/stepper";
import { SummaryDialog } from "@/features/multistep-forms/forms/claims/motor/wrapper/components/summary-dialog";
import { Divider } from "@mui/material";
import { Outlet } from "react-router";

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

export { Page as EmployeeWrapper };
