import { Box } from "@mui/material";
import { Outlet } from "react-router";
import { Stepper } from "./components/stepper";
import { SummaryDialog } from "./components/summary-dialog";

type Props = {
  readOnly?: boolean;
};

const Page = ({ readOnly }: Props) => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
      <Stepper />
      <Outlet context={{ readOnly }} />
      <SummaryDialog />
    </Box>
  );
};

export { Page as Provider }; 