import { useLocation, useNavigate } from "react-router";
import { d } from "@/utils/individualKYCDictionary/dictionary";
import { Stepper as MuiStepper, Step, StepButton, Typography } from "@mui/material";
import { Box } from "@mui/material";
import { useStore as usePersonalInfoStore } from "../../personal-info/hooks/useStore";
import { useStore as useFinancialInfoStore } from "../../financial-info/hooks/useStore";
import { useStore as useFileUploadsStore } from "../../file-uploads/hooks/useStore";
import { useStore as useReviewStore } from "../../review/hooks/useStore";
import { schema as personalInfoSchema } from "../../personal-info/types/schema";
import { schema as financialInfoSchema } from "../../financial-info/types/schema";
import { schema as fileUploadsSchema } from "../../file-uploads/types/schema";
import { schema as reviewSchema } from "../../review/types/schema";

export const Stepper = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const { formData: personalInfoData } = usePersonalInfoStore();
  const { formData: financialInfoData } = useFinancialInfoStore();
  const { formData: fileUploadsData } = useFileUploadsStore();
  const { formData: reviewData, isSubmitted: isReviewSubmitted } = useReviewStore();

  const { success: personalInfoSuccess } = personalInfoSchema.safeParse(personalInfoData);
  const { success: financialInfoSuccess } = financialInfoSchema.safeParse(financialInfoData);
  const { success: fileUploadsSuccess } = fileUploadsSchema.safeParse(fileUploadsData);
  const { success: reviewSuccess } = reviewSchema.safeParse(reviewData);

  const steps = [
    {
      href: "/kyc/individual/personal-info",
      label: d.personalInfo,
      success: personalInfoSuccess,
    },
    {
      href: "/kyc/individual/financial-info",
      label: d.financialInfo,
      success: financialInfoSuccess,
    },
    {
      href: "/kyc/individual/file-uploads",
      label: d.fileUploads,
      success: fileUploadsSuccess,
    },
    {
      href: "/kyc/individual/review",
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