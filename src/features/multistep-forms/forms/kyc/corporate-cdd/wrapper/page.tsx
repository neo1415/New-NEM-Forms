import { Box } from "@mui/material";
import { Outlet } from "react-router";
import { Stepper } from "./components/stepper";

const Page = () => {
  return (
    <Box sx={{ p: 3 }}>
      <Stepper />
      <Box sx={{ mt: 3 }}>
        <Outlet />
      </Box>
    </Box>
  );
};

export { Page as Provider }; 