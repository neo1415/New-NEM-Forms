import { useStore as useInsuredDetailsStore } from "../../insured-details/hooks/useStore";
import { useStore as useLossDetailsStore } from "../../loss-details/hooks/useStore";
import { useStore as useReviewStore } from "../../review/hooks/useStore";
import { schema as insuredDetailsSchema } from "../../insured-details/types/schema";
import { schema as lossDetailsSchema } from "../../loss-details/types/schema";
import { schema as reviewSchema } from "../../review/types/schema";
import { d } from "@/utils/fidelityDictionary/dictionary";
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
  const { formData: lossDetailsFormData } = useLossDetailsStore();
  const { formData: reviewFormData, isSubmitted: isReviewSubmitted } = useReviewStore();

  const { success: insuredDetailsSuccess } = insuredDetailsSchema.safeParse(
    insuredDetailsFormData
  );

  const { success: lossDetailsSuccess } = lossDetailsSchema.safeParse(
    lossDetailsFormData
  );

  const { success: reviewSuccess } = reviewSchema.safeParse(reviewFormData);

  const steps = [
    {
      href: "/claims/fidelity-guarantee/insured-details",
      label: "Insured Details",
      success: insuredDetailsSuccess,
    },
    {
      href: "/claims/fidelity-guarantee/loss-details",
      label: "Loss Details",
      success: lossDetailsSuccess,
    },
    {
      href: "/claims/fidelity-guarantee/review",
      label: d.review,
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
                  {d.invalidFormData}
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