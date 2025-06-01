import { d } from "@/utils/professionalIndemnityDictionary/dictionary";
import {
  Stepper as MuiStepper,
  Step,
  StepButton,
  Typography,
} from "@mui/material";
import { useLocation, useNavigate } from "react-router";
import { useStore as useInsuredDetailsStore } from "../../insured-details/hooks/useStore";
import { useStore as useClaimantDetailsStore } from "../../claimant-details/hooks/useStore";
import { useStore as useContractDetailsStore } from "../../contract-details/hooks/useStore";
import { useStore as useClaimDetailsStore } from "../../claim-details/hooks/useStore";
import { useStore as useResponseDetailsStore } from "../../response-details/hooks/useStore";
import { useStore as useReviewStore } from "../../review/hooks/useStore";
import { schema as insuredDetailsSchema } from "../../insured-details/types/schema";
import { schema as claimantDetailsSchema } from "../../claimant-details/types/schema";
import { schema as contractDetailsSchema } from "../../contract-details/types/schema";
import { schema as claimDetailsSchema } from "../../claim-details/types/schema";
import { schema as responseDetailsSchema } from "../../response-details/types/schema";
import { schema as reviewSchema } from "../../review/types/schema";

const Stepper = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const currentPath = location.pathname;

  const { formData: insuredDetailsFormData } = useInsuredDetailsStore();
  const { formData: claimantDetailsFormData } = useClaimantDetailsStore();
  const { formData: contractDetailsFormData } = useContractDetailsStore();
  const { formData: claimDetailsFormData } = useClaimDetailsStore();
  const { formData: responseDetailsFormData } = useResponseDetailsStore();
  const { formData: reviewFormData } = useReviewStore();

  const { success: insuredDetailsSuccess } = insuredDetailsSchema.safeParse(insuredDetailsFormData);
  const { success: claimantDetailsSuccess } = claimantDetailsSchema.safeParse(claimantDetailsFormData);
  const { success: contractDetailsSuccess } = contractDetailsSchema.safeParse(contractDetailsFormData);
  const { success: claimDetailsSuccess } = claimDetailsSchema.safeParse(claimDetailsFormData);
  const { success: responseDetailsSuccess } = responseDetailsSchema.safeParse(responseDetailsFormData);
  const { success: reviewSuccess } = reviewSchema.safeParse(reviewFormData);

  const steps = [
    {
      label: d.insuredDetails,
      href: "/claims/professional-indemnity/insured-details",
      success: insuredDetailsSuccess,
    },
    {
      label: d.claimantDetails,
      href: "/claims/professional-indemnity/claimant-details",
      success: claimantDetailsSuccess,
    },
    {
      label: d.contractDetails,
      href: "/claims/professional-indemnity/contract-details",
      success: contractDetailsSuccess,
    },
    {
      label: d.claimDetails,
      href: "/claims/professional-indemnity/claim-details",
      success: claimDetailsSuccess,
    },
    {
      label: d.responseDetails,
      href: "/claims/professional-indemnity/response-details",
      success: responseDetailsSuccess,
    },
    {
      label: d.review,
      href: "/claims/professional-indemnity/review",
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