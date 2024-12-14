import { useEmployeeAdditionalInfoStore } from "@/features/employee/additional-info/hooks/useStore";
import { EmployeeAdditionalInfo } from "@/features/employee/additional-info/page";
import { useEmployeeHistoryStore } from "@/features/employee/history/hooks/useStore";
import { EmployeeHistory } from "@/features/employee/history/page";
import { useEmployeePersonalInfoStore } from "@/features/employee/personal-info/hooks/useStore";
import { EmployeePersonalInfo } from "@/features/employee/personal-info/page";
import { useEmployeeReviewStore } from "@/features/employee/review/hooks/useStore";
import { EmployeeReview } from "@/features/employee/review/page";
import { useEmployeeSkillsStore } from "@/features/employee/skills/hooks/useStore";
import { EmployeeSkills } from "@/features/employee/skills/page";
import { useCreate } from "@/features/employee/wrapper/hooks/useMutations";
import { useStore } from "@/features/employee/wrapper/hooks/useStore";
import { schema } from "@/features/employee/wrapper/types/schema";
import { getErrorMessage } from "@/utils/getErrorMessage";
import { showSnack } from "@/utils/showSnack";
import { LoadingButton } from "@mui/lab";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
} from "@mui/material";
import { FormEvent } from "react";

const SummaryDialog = () => {
  const { summaryDialogOpen } = useStore();
  const createMutation = useCreate();

  const { formData: employeePersonalInfoFormData } =
    useEmployeePersonalInfoStore();
  const { formData: employeeHistoryFormData } = useEmployeeHistoryStore();
  const { formData: employeeSkillsFormData } = useEmployeeSkillsStore();
  const { formData: employeeAdditionalInfoFormData } =
    useEmployeeAdditionalInfoStore();
  const { formData: employeeReviewFormData } = useEmployeeReviewStore();

  const allFormData = {
    ...employeePersonalInfoFormData,
    ...employeeHistoryFormData,
    ...employeeSkillsFormData,
    ...employeeAdditionalInfoFormData,
    ...employeeReviewFormData,
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    try {
      schema.parse(allFormData);
      createMutation.mutate();
    } catch (e) {
      showSnack(getErrorMessage(e), "error");
    }
  };

  return (
    <Dialog
      open={summaryDialogOpen}
      component="form"
      onSubmit={onSubmit}
      fullWidth
      maxWidth="lg"
    >
      <DialogTitle variant="h5">Summary</DialogTitle>
      <DialogContent sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        <EmployeePersonalInfo readOnly />
        <Divider variant="middle" />
        <EmployeeHistory readOnly />
        <Divider variant="middle" />
        <EmployeeSkills readOnly />
        <Divider variant="middle" />
        <EmployeeAdditionalInfo readOnly />
        <Divider variant="middle" />
        <EmployeeReview readOnly />
        <Divider variant="middle" />
      </DialogContent>
      <DialogActions>
        <LoadingButton type="submit" loading={createMutation.isPending}>
          Submit
        </LoadingButton>
      </DialogActions>
    </Dialog>
  );
};

export { SummaryDialog };
