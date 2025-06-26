import { useLocation, useNavigate } from "react-router";
import { d } from "@/utils/corporateKYCDictionary/dictionary";
import { Stepper as MuiStepper, Step, StepButton, Typography } from "@mui/material";
import { Box } from "@mui/material";
import { useStore as useCompanyDetailsStore } from "../../company-details/hooks/useStore";
import { useStore as useDirectorsInfoStore } from "../../directors-info/hooks/useStore";
import { useStore as useFileUploadsStore } from "../../file-uploads/hooks/useStore";
import { useStore as useReviewStore } from "../../review/hooks/useStore";
import { schema as companyDetailsSchema } from "../../company-details/types/schema";
import { schema as directorsInfoSchema } from "../../directors-info/types/schema";
import { schema as fileUploadsSchema } from "../../file-uploads/types/schema";
import { schema as reviewSchema } from "../../review/types/schema";

export const Stepper = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const { formData: companyDetailsData } = useCompanyDetailsStore();
  const { formData: directorsInfoData } = useDirectorsInfoStore();

  const { formData: fileUploadsData } = useFileUploadsStore();
  const { formData: reviewData, isSubmitted: isReviewSubmitted } = useReviewStore();

  const { success: companyDetailsSuccess } = companyDetailsSchema.safeParse(companyDetailsData);
  const { success: directorsInfoSuccess } = directorsInfoSchema.safeParse(directorsInfoData);
  const { success: fileUploadsSuccess } = fileUploadsSchema.safeParse(fileUploadsData);
  const { success: reviewSuccess } = reviewSchema.safeParse(reviewData);

  const steps = [
    {
      href: "/kyc/corporate-kyc/company-details",
      label: d.companyDetails,
      success: companyDetailsSuccess,
    },
    {
      href: "/kyc/corporate-kyc/directors-info",
      label: d.directorsInfo,
      success: directorsInfoSuccess,
    },
    {
      href: "/kyc/corporate-kyc/file-uploads",
      label: d.fileUploads,
      success: fileUploadsSuccess,
    },
    {
      href: "/kyc/corporate-kyc/review",
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