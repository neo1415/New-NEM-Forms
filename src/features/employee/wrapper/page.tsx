import { Stepper } from "@/features/employee/wrapper/components/stepper";
import { SummaryDialog } from "@/features/employee/wrapper/components/summary-dialog";
import { Container, Divider, Paper } from "@mui/material";
import { Outlet } from "react-router";

const Page = () => {
  return (
    <Container
      sx={{
        padding: 10,
      }}
      component={Paper}
      maxWidth="md"
    >
      <SummaryDialog />
      <Stepper />
      <Divider sx={{ marginY: 2 }} />
      <Outlet />
    </Container>
  );
};

export { Page as EmployeeWrapper };
