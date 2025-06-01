import { Stepper as MuiStepper, Step, StepButton } from "@mui/material";
import { useLocation } from "react-router";

const steps = [
  {
    label: "Insured Details",
    path: "/claims/contractors-plant-machinery/insured-details",
  },
  {
    label: "Details of Loss",
    path: "/claims/contractors-plant-machinery/details-of-loss",
  },
  {
    label: "Review",
    path: "/claims/contractors-plant-machinery/review",
  },
];

export const Stepper = () => {
  const { pathname } = useLocation();
  const activeStep = steps.findIndex((item) => item.path === pathname);

  return (
    <MuiStepper nonLinear activeStep={activeStep}>
      {steps.map((step) => (
        <Step key={step.path}>
          <StepButton color="inherit" href={step.path}>
            {step.label}
          </StepButton>
        </Step>
      ))}
    </MuiStepper>
  );
}; 