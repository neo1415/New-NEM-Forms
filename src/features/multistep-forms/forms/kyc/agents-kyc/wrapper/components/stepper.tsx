import { useLocation, useNavigate } from "react-router";
import { d } from "@/utils/agentsKYCDictionary/dictionary";
import { Stepper as MuiStepper, Step, StepButton, Typography } from "@mui/material";
import { Box } from "@mui/material";
import { useStore as usePersonalInfoStore } from "../../personal-info/hooks/useStore";
import { useStore as useAdditionalInfoStore } from "../../additional-info/hooks/useStore";
import { useStore as useFinancialInfoStore } from "../../financial-info/hooks/useStore";
import { useStore as useReviewStore } from "../../review/hooks/useStore";
import { schema as personalInfoSchema } from "../../personal-info/types/schema";
import { schema as additionalInfoSchema } from "../../additional-info/types/schema";
import { schema as financialInfoSchema } from "../../financial-info/types/schema";
import { schema as reviewSchema } from "../../review/types/schema";

export const Stepper = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const { formData: personalInfoData } = usePersonalInfoStore();
  const { formData: additionalInfoData } = useAdditionalInfoStore();
  const { formData: financialInfoData } = useFinancialInfoStore();
  const { formData: reviewData, isSubmitted: isReviewSubmitted } = useReviewStore();

  const { success: personalInfoSuccess } = personalInfoSchema.safeParse(personalInfoData);
  const { success: additionalInfoSuccess } = additionalInfoSchema.safeParse(additionalInfoData);
  const { success: financialInfoSuccess } = financialInfoSchema.safeParse(financialInfoData);
  const { success: reviewSuccess } = reviewSchema.safeParse(reviewData);

  const steps = [
    {
      href: "/kyc/agents/personal-info",
      label: d.personalInfo,
      success: personalInfoSuccess,
    },
    {
      href: "/kyc/agents/additional-info",
      label: d.additionalInfo,
      success: additionalInfoSuccess,
    },
    {
      href: "/kyc/agents/financial-info",
      label: d.financialInfo,
      success: financialInfoSuccess,
    },
    {
      href: "/kyc/agents/review",
      label: d.review,
      success: reviewSuccess,
    },
  ];

  const activeStep = steps.findIndex((item) => item.href === pathname);

  const handleStepClick = (href: string) => {
    navigate(href);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <MuiStepper nonLinear activeStep={activeStep}>
        {steps.map((step) => (
          <Step key={step.href} completed={step.success}>
            <StepButton 
              onClick={() => handleStepClick(step.href)}
              optional={
                !step.success &&
                isReviewSubmitted && (
                  <Typography variant="caption" color="error">
                    {d.invalidFormData}
                  </Typography>
                )
              }
            >
              <Typography variant="body2">{step.label}</Typography>
            </StepButton>
          </Step>
        ))}
      </MuiStepper>
    </Box>
  );
}; 