
import { useMotorPersonalInfoStore } from "@/features/multistep-forms/forms/claims/motor/personal-info/hooks/useStore";
import { useMotorInsuranceReviewStore } from "@/features/multistep-forms/forms/claims/motor/review/hooks/useStore";

import { create } from "@/features/multistep-forms/forms/claims/motor/wrapper/utils/api";
import { getErrorMessage } from "@/utils/getErrorMessage";
import { showSnack } from "@/utils/showSnack";
import { useMutation } from "@tanstack/react-query";
import { useMotorIncidentDetailsStore } from "../../incident-details/hooks/useStore";
import { useWitnessesStore } from "../../witnesses/hooks/useStore";
import { useOtherDriverssStore } from "../../otherDrivers/hooks/useStore";
import { useVehicleDetailsStore } from "../../vehicle-details/hooks/useStore";

const useCreate = () => {
  const { formData: motorPersonalInfoFormData } =
    useMotorPersonalInfoStore();
  const { formData: vehicleDetailsData } = useVehicleDetailsStore();
  const { formData: motorIncidentDetailsFormData } = useMotorIncidentDetailsStore();
  const { formData: witnessesFormData } =
    useWitnessesStore();
  const { formData: otherDriversFormData } =
  useOtherDriverssStore();
  const { formData: employeeReviewFormData } = useMotorInsuranceReviewStore();


  return useMutation({
    mutationFn: () =>
      create({
        ...motorPersonalInfoFormData,
        ...vehicleDetailsData,
        ...motorIncidentDetailsFormData,
        ...witnessesFormData,
        ...otherDriversFormData,
        ...employeeReviewFormData,
      }),

    onSuccess: async () => {
      showSnack("Successful");
    },
    onError: (error) => {
      showSnack(getErrorMessage(error), { variant: "error" });
    },
  });
};

export { useCreate };
