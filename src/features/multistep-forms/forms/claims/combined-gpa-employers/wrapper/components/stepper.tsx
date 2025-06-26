import { Step, StepButton, Stepper as MuiStepper } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import { useStore as useInsuredDetailsStore } from "../../insured-details/hooks/useStore";
import { useStore as useDetailsOfLossStore } from "../../details-of-loss/hooks/useStore";
import { useStore as useStatementOfEarningsStore } from "../../statement-of-earnings/hooks/useStore";
import { useStore as useReviewStore } from "../../review/hooks/useStore";
import { schema as insuredDetailsSchema } from "../../insured-details/types/schema";
import { schema as detailsOfLossSchema } from "../../details-of-loss/types/schema";
import { schema as statementOfEarningsSchema } from "../../statement-of-earnings/types/schema";
import { schema as reviewSchema } from "../../review/types/schema";

export const Stepper = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const { formData: insuredDetailsFormData } = useInsuredDetailsStore();
  const { formData: detailsOfLossFormData } = useDetailsOfLossStore();
  const { formData: statementOfEarningsFormData } = useStatementOfEarningsStore();
  const { formData: reviewFormData, isSubmitted: isReviewSubmitted } = useReviewStore();

  const { success: insuredDetailsSuccess } = insuredDetailsSchema.safeParse(
    insuredDetailsFormData
  );

  const { success: detailsOfLossSuccess } = detailsOfLossSchema.safeParse(
    detailsOfLossFormData
  );

  const { success: statementOfEarningsSuccess } = statementOfEarningsSchema.safeParse(
    statementOfEarningsFormData
  );

  const { success: reviewSuccess } = reviewSchema.safeParse(reviewFormData);

  const steps = [
    {
      href: "/claims/combined-gpa-employers/insured-details",
      label: "Insured Details",
      success: insuredDetailsSuccess,
    },
    {
      href: "/claims/combined-gpa-employers/details-of-loss",
      label: "Details of Loss",
      success: detailsOfLossSuccess,
    },
    {
      href: "/claims/combined-gpa-employers/statement-of-earnings",
      label: "Statement of Earnings",
      success: statementOfEarningsSuccess,
    },
    {
      href: "/claims/combined-gpa-employers/review",
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
            {step.label}
          </StepButton>
        </Step>
      ))}
    </MuiStepper>
  );
}; 