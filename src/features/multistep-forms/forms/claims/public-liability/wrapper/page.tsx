import { Outlet } from "react-router-dom";
import { Stepper } from "./components/stepper";
import { SummaryDialog } from "./components/SummaryDialog.tsx";
import { useStore } from "./hooks/useStore";

const PublicLiabilityWrapper = () => {
  const { summaryDialogOpen } = useStore();

  return (
    <>
      <Stepper />
      <Outlet />
      {summaryDialogOpen && <SummaryDialog />}
    </>
  );
};

export { PublicLiabilityWrapper }; 