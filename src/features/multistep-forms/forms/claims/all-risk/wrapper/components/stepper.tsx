import {
  Stepper as MuiStepper,
  Step,
  StepButton,
  Typography,
} from "@mui/material";
import { useLocation, useNavigate } from "react-router";
import { useStore as useInsuredDetailsStore } from "../../insured-details/hooks/useStore";
import { useStore as useDetailsOfLossStore } from "../../details-of-loss/hooks/useStore";
import { useStore as useReviewStore } from "../../review/hooks/useStore";
import { schema as insuredDetailsSchema } from "../../insured-details/types/schema";
import { schema as detailsOfLossSchema } from "../../details-of-loss/types/schema";
import { schema as reviewSchema } from "../../review/types/schema";

export const Stepper = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const { formData: insuredDetailsFormData } = useInsuredDetailsStore();
  const { formData: detailsOfLossFormData } = useDetailsOfLossStore();
  const { formData: reviewFormData } = useReviewStore();

  const { success: insuredDetailsSuccess } = insuredDetailsSchema.safeParse(
    insuredDetailsFormData
  );

  const { success: detailsOfLossSuccess } = detailsOfLossSchema.safeParse(
    detailsOfLossFormData
  );

  const { success: reviewSuccess } = reviewSchema.safeParse(reviewFormData);

  const steps = [
    {
      href: "/claims/all-risk/insured-details",
      label: "Insured Details",
      success: insuredDetailsSuccess,
    },
    {
      href: "/claims/all-risk/details-of-loss",
      label: "Details of Loss",
      success: detailsOfLossSuccess,
    },
    {
      href: "/claims/all-risk/review",
      label: "Review",
      success: reviewSuccess,
    },
  ];

  const activeStep = steps.findIndex((item) => item.href === pathname);

  const handleStepClick = (href: string) => {
    navigate(href);
  };

  return (
    <MuiStepper activeStep={activeStep} nonLinear>
      {steps.map((step) => (
        <Step key={step.href} completed={step.success}>
          <StepButton onClick={() => handleStepClick(step.href)}>
            <Typography variant="caption">{step.label}</Typography>
          </StepButton>
        </Step>
      ))}
    </MuiStepper>
  );
}; 