import { Stepper as MuiStepper, Step, StepButton } from "@mui/material";
import { useLocation } from "react-router";

const steps = [
  {
    label: "Insured Details",
    path: "/claims/employers-liability/insured-details",
  },
  {
    label: "Details of Loss",
    path: "/claims/employers-liability/details-of-loss",
  },
  {
    label: "Statement of Earnings",
    path: "/claims/employers-liability/statement-of-earnings",
  },
  {
    label: "Review",
    path: "/claims/employers-liability/review",
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