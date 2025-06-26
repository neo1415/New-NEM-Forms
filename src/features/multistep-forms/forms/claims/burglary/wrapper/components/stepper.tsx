import {
  Stepper as MuiStepper,
  Step,
  StepButton,
  Typography,
  StepLabel,
} from "@mui/material";
import { useLocation, useNavigate } from "react-router";
import { useStore } from "../hooks/useStore";
import { schema as insuredDetailsSchema } from "../../insured-details/types/schema";
import { schema as detailsOfLossSchema } from "../../details-of-loss/types/schema";
import { schema as reviewSchema } from "../../review/types/schema";

export const Stepper = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const { insuredDetails, detailsOfLoss, review } = useStore();

  const { success: insuredDetailsSuccess } = insuredDetailsSchema.safeParse(
    insuredDetails
  );

  const { success: detailsOfLossSuccess } = detailsOfLossSchema.safeParse(
    detailsOfLoss
  );

  const { success: reviewSuccess } = reviewSchema.safeParse(review);

  const steps = [
    {
      href: "/claims/burglary/insured-details",
      label: "Insured Details",
      success: insuredDetailsSuccess,
    },
    {
      href: "/claims/burglary/details-of-loss",
      label: "Details of Loss",
      success: detailsOfLossSuccess,
    },
    {
      href: "/claims/burglary/review",
      label: "Review",
      success: reviewSuccess,
    },
  ];

  const activeStep = steps.findIndex((item) => item.href === pathname);

  const handleStepClick = (href: string) => {
    navigate(href);
  };

  return (
    <MuiStepper
      activeStep={activeStep}
      alternativeLabel
      sx={{ mb: 4 }}
    >
      {steps.map((step) => (
        <Step key={step.href}>
          <StepLabel 
            onClick={() => handleStepClick(step.href)}
            sx={{ cursor: 'pointer' }}
          >
            <Typography variant="caption">{step.label}</Typography>
          </StepLabel>
        </Step>
      ))}
    </MuiStepper>
  );
}; 