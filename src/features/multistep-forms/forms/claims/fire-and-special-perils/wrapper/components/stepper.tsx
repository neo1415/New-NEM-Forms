import { useStore as useInsuredDetailsStore } from "../../insured-details/hooks/useStore";
import { useStore as useLossDetailsStore } from "../../loss-details/hooks/useStore";
import { schema as insuredDetailsSchema } from "../../insured-details/types/schema";
import { schema as lossDetailsSchema } from "../../loss-details/types/schema";
import { d } from "@/utils/fireDictionary/dictionary";
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

  const { success: insuredDetailsSuccess } = insuredDetailsSchema.safeParse(
    insuredDetailsFormData
  );

  const { success: lossDetailsSuccess } = lossDetailsSchema.safeParse(
    lossDetailsFormData
  );

  const steps = [
    {
      href: "/claims/fire-and-special-perils/insured-details",
      label: "Insured Details",
      success: insuredDetailsSuccess,
    },
    {
      href: "/claims/fire-and-special-perils/loss-details",
      label: "Details of Loss",
      success: lossDetailsSuccess,
    },
    {
      href: "/claims/fire-and-special-perils/review",
      label: d.review,
      success: true,
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
              !step.success && (
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