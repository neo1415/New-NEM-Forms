import { vehicleDetailsSchema } from "@/features/multistep-forms/forms/claims/motor/vehicle-details/types/schema"
import { motorIncidentDetailsSchema} from "@/features/multistep-forms/forms/claims/motor/incident-details/types/schema";
import { useMotorPersonalInfoStore } from "@/features/multistep-forms/forms/claims/motor/personal-info/hooks/useStore";
import { motorPersonalInfoSchema } from "@/features/multistep-forms/forms/claims/motor/personal-info/types/schema";
import { motorInsuranceReviewSchema } from "@/features/multistep-forms/forms/claims/motor/review/types/schema";
import { d } from "@/utils/motorDictionary/dictionary";
import {
  Stepper as MuiStepper,
  Step,
  StepButton,
  Typography,
} from "@mui/material";
import { useLocation } from "react-router";
import { useWitnessesStore } from "../../witnesses/hooks/useStore";
import { WitnessesSchema } from "../../witnesses/types/schema";
import { useMotorIncidentDetailsStore } from "../../incident-details/hooks/useStore";
import { useVehicleDetailsStore } from "../../vehicle-details/hooks/useStore";
import { otherDriversSchema } from "../../otherDrivers/types/schema";
import { useOtherDriverssStore } from "../../otherDrivers/hooks/useStore";
import { useMotorInsuranceReviewStore } from "../../review/hooks/useStore";

const Stepper = () => {
  const { pathname } = useLocation();

  const { formData: motorPersonalInfoFormData } =
    useMotorPersonalInfoStore();
  const {formData: witnessesFormData} = useWitnessesStore();
  const { formData: motorIncidentDetailsFormData } = useMotorIncidentDetailsStore();
  const { formData: otherDriversFormData } = useOtherDriverssStore();
  const { formData: vehicleDetailsFormData } =
    useVehicleDetailsStore();
  const {
    formData: motorInsuranceReviewFormData,
    isSubmitted: ismotorInsuranceReviewSubmitted,
  } = useMotorInsuranceReviewStore();

  const { success: motorPersonaInfoSuccess } =
    motorPersonalInfoSchema.safeParse(motorPersonalInfoFormData);

  const { success: motorIncidentDetailsSuccess } = motorIncidentDetailsSchema.safeParse(
    motorIncidentDetailsFormData
  );

  const { success: witnessesSuccess } = WitnessesSchema.safeParse(
    witnessesFormData
  );

  const { success: vehicleDetailsSuccess } =
    vehicleDetailsSchema.safeParse(vehicleDetailsFormData);

    const { success: otherDriversSuccess } =
    otherDriversSchema.safeParse(otherDriversFormData);

  const { success: motorInsuranceReviewSuccess } = motorInsuranceReviewSchema.safeParse(
    motorInsuranceReviewFormData
  );

  const steps = [
    {
      href: "/employee/personal-info",
      label: d.personalInfo,
      success: motorPersonaInfoSuccess,
    },
    {
      href: "/claims/motor/vehicle-details",
      label: d.vehicleDetails,
      success: vehicleDetailsSuccess,
    },
    {
      href: "/claims/motor/incident-details",
      label: d.incidentDetails,
      success: motorIncidentDetailsSuccess,
    },
    {
      href: "/claims/motor/witnesses",
      label: d.witness,
      success: witnessesSuccess,
    },
    {
      href: "/claims/motor/other-drivers",
      label: d.OtherDrivers,
      success: otherDriversSuccess,
    },
    {
      href: "/claims/motor/review",
      label: d.review,
      success: motorInsuranceReviewSuccess,
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
              ismotorInsuranceReviewSubmitted && (
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
