import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import { useEmployeeHistoryStore } from "@/features/multistep-forms/forms/claims/motor/history/hooks/useStore";
import { useMotorInsuranceReviewStore } from "@/features/multistep-forms/forms/claims/motor/review/hooks/useStore";
import { MotorInsuranceReview } from "@/features/multistep-forms/forms/claims/motor/review/page";
import { useCreate } from "@/features/multistep-forms/forms/claims/motor/wrapper/hooks/useMutations";
import { useStore } from "@/features/multistep-forms/forms/claims/motor/wrapper/hooks/useStore";
import { schema } from "@/features/multistep-forms/forms/claims/motor/wrapper/types/schema";
import { getErrorMessage } from "@/utils/getErrorMessage";
import { showSnack } from "@/utils/showSnack";
import { LoadingButton } from "@mui/lab";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
} from "@mui/material";
import { FormEvent } from "react";
import { d } from "@/utils/motorDictionary/dictionary";
import { useOtherDriverssStore } from "../../otherDrivers/hooks/useStore";
import { useMotorPersonalInfoStore } from "../../personal-info/hooks/useStore";
import { useWitnessesStore } from "../../witnesses/hooks/useStore";
import { useMotorIncidentDetailsStore } from "../../incident-details/hooks/useStore";
import { MotorPersonalInfo } from "../../personal-info/page";
import { VehicleDetails } from "../../vehicle-details/page";
import { IncidentDetails } from "../../incident-details/page";
import { WitnessPage } from "../../witnesses/page";
import { OtherDriversPage } from "../../otherDrivers/page";

const SummaryDialog = () => {
  const { summaryDialogOpen, updateSummaryDialogOpen } = useStore();
  const createMutation = useCreate();

  const { formData: motorPersonalInfoFormData } =
    useMotorPersonalInfoStore();
  const { formData: vehicleDetailsData } = useEmployeeHistoryStore();
  const { formData: motorIncidentDetailsFormData } = useMotorIncidentDetailsStore();
  const { formData: witnessesFormData } =
    useWitnessesStore();
  const { formData: otherDriversFormData } =
  useOtherDriverssStore();
  const { formData: motorInsuranceReviewFormData } = useMotorInsuranceReviewStore();

  const allFormData = {
    ...motorPersonalInfoFormData,
    ...vehicleDetailsData,
    ...motorIncidentDetailsFormData,
    ...witnessesFormData,
    ...otherDriversFormData,
    ...motorInsuranceReviewFormData,
  };

  const handleClose = () => {
    if (!createMutation.isPending) {
      updateSummaryDialogOpen(false);
    }
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    try {
      schema.parse(allFormData);
      createMutation.mutate(undefined, { onSuccess: handleClose });
    } catch (error) {
      showSnack(getErrorMessage(error), { variant: "error" });
    }
  };

  return (
    <Dialog
      open={summaryDialogOpen}
      component="form"
      onSubmit={onSubmit}
      fullWidth
      maxWidth="md"
      onClose={handleClose}
    >
      <DialogTitle variant="h5">{d.confirmInformation}</DialogTitle>
      <DialogContent sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
        <MotorPersonalInfo readOnly />
        <Divider />
        <VehicleDetails readOnly />
        <Divider />
        <IncidentDetails readOnly />
        <Divider />
        <WitnessPage readOnly />
        <Divider />
        <OtherDriversPage readOnly />
        <Divider />
        <MotorInsuranceReview readOnly />
        <Divider />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="inherit">
          {d.close}
        </Button>
        <LoadingButton
          type="submit"
          loading={createMutation.isPending}
          variant="contained"
          startIcon={<SendOutlinedIcon />}
        >
          {d.submit}
        </LoadingButton>
      </DialogActions>
    </Dialog>
  );
};

export { SummaryDialog };
