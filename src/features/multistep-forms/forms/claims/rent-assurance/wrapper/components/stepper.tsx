import { d } from "@/utils/rentAssuranceDictionary/dictionary";
import {
  Stepper as MuiStepper,
  Step,
  StepButton,
  Typography,
} from "@mui/material";
import { useLocation, useNavigate } from "react-router";
import { useStore as useInsuredDetailsStore } from "../../insured-details/hooks/useStore";
import { useStore as useClaimInformationStore } from "../../claim-information/hooks/useStore";
import { useStore as useBeneficiaryDetailsStore } from "../../beneficiary-details/hooks/useStore";
import { useStore as useDeclarationStore } from "../../declaration/hooks/useStore";
import { useStore as useReviewStore } from "../../review/hooks/useStore";
import { schema as insuredDetailsSchema } from "../../insured-details/types/schema";
import { schema as claimInformationSchema } from "../../claim-information/types/schema";
import { schema as beneficiaryDetailsSchema } from "../../beneficiary-details/types/schema";
import { schema as declarationSchema } from "../../declaration/types/schema";
import { schema as reviewSchema } from "../../review/types/schema";

const Stepper = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const currentPath = location.pathname;

  const { formData: insuredDetailsFormData } = useInsuredDetailsStore();
  const { formData: claimInformationFormData } = useClaimInformationStore();
  const { formData: beneficiaryDetailsFormData } = useBeneficiaryDetailsStore();
  const { formData: declarationFormData } = useDeclarationStore();
  const { formData: reviewFormData } = useReviewStore();

  const { success: insuredDetailsSuccess } = insuredDetailsSchema.safeParse(insuredDetailsFormData);
  const { success: claimInformationSuccess } = claimInformationSchema.safeParse(claimInformationFormData);
  const { success: beneficiaryDetailsSuccess } = beneficiaryDetailsSchema.safeParse(beneficiaryDetailsFormData);
  const { success: declarationSuccess } = declarationSchema.safeParse(declarationFormData);
  const { success: reviewSuccess } = reviewSchema.safeParse(reviewFormData);

  const steps = [
    {
      label: d.insuredDetails,
      href: "/claims/rent-assurance/insured-details",
      success: insuredDetailsSuccess,
    },
    {
      label: d.claimInformation,
      href: "/claims/rent-assurance/claim-information",
      success: claimInformationSuccess,
    },
    {
      label: d.beneficiaryDetails,
      href: "/claims/rent-assurance/beneficiary-details",
      success: beneficiaryDetailsSuccess,
    },
    {
      label: d.declarationStep,
      href: "/claims/rent-assurance/declaration",
      success: declarationSuccess,
    },
    {
      label: d.review,
      href: "/claims/rent-assurance/review",
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