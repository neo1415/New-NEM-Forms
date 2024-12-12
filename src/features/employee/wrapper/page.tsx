import { SummaryDialog } from "@/features/employee/wrapper/components/summary-dialog";
import { Box, Container, Paper } from "@mui/material";
import { Outlet } from "react-router";

const Page = () => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Container
        sx={{
          padding: 10,
        }}
        component={Paper}
        maxWidth="lg"
      >
        <SummaryDialog />
        <Outlet />
      </Container>
    </Box>
  );
};

export { Page as EmployeeWrapper };
