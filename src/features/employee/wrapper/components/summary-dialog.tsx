import { useEmployeeAdditionalInfoStore } from "@/features/employee/additional-info/hooks/useStore";
import { useEmployeeHistoryStore } from "@/features/employee/history/hooks/useStore";
import { useEmployeePersonalInfoStore } from "@/features/employee/personal-info/hooks/useStore";
import { useStore } from "@/features/employee/wrapper/hooks/useStore";
import { useEmployeeSkillsStore } from "@/features/employee/skills/hooks/useStore";
import { useCreate } from "@/features/employee/wrapper/hooks/useMutations";
import { LoadingButton } from "@mui/lab";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import { useEmployeeReviewStore } from "@/features/employee/review/hooks/useStore";
import { FormEvent } from "react";
import { schema } from "@/features/employee/wrapper/types/schema";
import { showSnack } from "@/utils/showSnack";
import { getErrorMessage } from "@/utils/getErrorMessage";
import { EmployeeAdditionalInfo } from "@/features/employee/additional-info/page";
import { EmployeeHistory } from "@/features/employee/history/page";
import { EmployeeSkills } from "@/features/employee/skills/page";
import { EmployeeReview } from "@/features/employee/review/page";
import { EmployeePersonalInfo } from "@/features/employee/personal-info/page";

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
      <DialogTitle>Summary</DialogTitle>
      <DialogContent>
        <EmployeePersonalInfo />
        <EmployeeHistory />
        <EmployeeSkills />
        <EmployeeAdditionalInfo />
        <EmployeeReview />
      </DialogContent>
      {fix social security and other number formats
      make final dialog responvie and better}
      <DialogActions>
        <LoadingButton type="submit" loading={createMutation.isPending}>
          Submit
        </LoadingButton>
      </DialogActions>
    </Dialog>
  );
};

export { SummaryDialog };
