import { useStore as useInsuredDetailsStore } from "../../insured-details/hooks/useStore";
import { useStore as useDetailsOfLossStore } from "../../details-of-loss/hooks/useStore";
import { useStore as useReviewStore } from "../../review/hooks/useStore";
import { schema as insuredDetailsSchema } from "../../insured-details/types/schema";
import { schema as detailsOfLossSchema } from "../../details-of-loss/types/schema";
import { schema as reviewSchema } from "../../review/types/schema";
import {
  Stepper as MuiStepper,
  Step,
  StepButton,
  Typography,
} from "@mui/material";
import { useLocation } from "react-router";

const Stepper = () => {
  const { pathname } = useLocation();
  const { formData: insuredDetailsFormData } = useInsuredDetailsStore();
  const { formData: detailsOfLossFormData } = useDetailsOfLossStore();
  const { formData: reviewFormData, isSubmitted: isReviewSubmitted } = useReviewStore();

  const insuredDetailsSuccess = insuredDetailsSchema.safeParse(insuredDetailsFormData).success;
  const detailsOfLossSuccess = detailsOfLossSchema.safeParse(detailsOfLossFormData).success;
  const reviewSuccess = reviewSchema.safeParse(reviewFormData).success;

  const steps = [
    {
      href: "/claims/goods-in-transit/insured-details",
      label: "Insured Details",
      success: insuredDetailsSuccess,
    },
    {
      href: "/claims/goods-in-transit/details-of-loss",
      label: "Details of Loss",
      success: detailsOfLossSuccess,
    },
    {
      href: "/claims/goods-in-transit/review",
      label: "Review",
      success: reviewSuccess,
    },
  ];

  const activeStep = steps.findIndex((item) => item.href === pathname);

  return (
    <MuiStepper nonLinear activeStep={activeStep}>
      {steps.map((step) => (
        <Step key={step.href}>
          <StepButton
            color="inherit"
            href={step.href}
            optional={
              !step.success &&
              isReviewSubmitted && (
                <Typography variant="caption" color="error">
                  Invalid form data
                </Typography>
              )
            }
          >
            {step.label}
          </StepButton>
        </Step>
      ))}
    </MuiStepper>
  );
};

export { Stepper }; 