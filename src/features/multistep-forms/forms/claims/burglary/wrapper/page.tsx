import { Outlet } from "react-router";
import { SummaryDialog } from "./components/summary-dialog";
import { Stepper } from "./components/stepper";

const Provider = () => {
  return (
    <>
      <Stepper />
      <Outlet />
      <SummaryDialog />
    </>
  );
};

export { Provider as BurglaryWrapper }; 