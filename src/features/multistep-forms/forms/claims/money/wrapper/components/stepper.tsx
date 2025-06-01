import { d } from "@/utils/moneyInsuranceDictionary/dictionary";
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

const Stepper = () => {
  const currentPath = useLocation().pathname;
  const navigate = useNavigate();

  const { formData: insuredDetailsFormData } = useInsuredDetailsStore();
  const { formData: detailsOfLossFormData } = useDetailsOfLossStore();
  const { formData: reviewFormData } = useReviewStore();

  const { success: insuredDetailsSuccess } = insuredDetailsSchema.safeParse(insuredDetailsFormData);
  const { success: detailsOfLossSuccess } = detailsOfLossSchema.safeParse(detailsOfLossFormData);
  const { success: reviewSuccess } = reviewSchema.safeParse(reviewFormData);

  const steps = [
    {
      label: d.insuredDetails,
      href: "/claims/money/insured-details",
      success: insuredDetailsSuccess,
    },
    {
      label: d.detailsOfLoss,
      href: "/claims/money/details-of-loss",
      success: detailsOfLossSuccess,
    },
    {
      label: d.review,
      href: "/claims/money/review",
      success: reviewSuccess,
    },
  ];

  const activeStep = steps.findIndex((step) => step.href === currentPath);

  const handleStepClick = (href: string) => {
    navigate(href);
  };

  return (
    <MuiStepper
      activeStep={activeStep}
      alternativeLabel
      sx={{ mb: 4 }}
      nonLinear
    >
      {steps.map((step, index) => (
        <Step key={step.label} completed={step.success}>
          <StepButton onClick={() => handleStepClick(step.href)}>
            <Typography variant="caption">{step.label}</Typography>
          </StepButton>
        </Step>
      ))}
    </MuiStepper>
  );
};

export { Stepper }; 