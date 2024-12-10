import { useEmployeeAdditionalInfoStore } from "@/features/employee/additional-info/hooks/useStore";
import { useEmployeeHistoryStore } from "@/features/employee/history/hooks/useStore";
import { useEmployeePersonalInfoStore } from "@/features/employee/personal-info/hooks/useStore";
import ObjectDisplay from "@/features/employee/review/components/foo";
import { Schema } from "@/features/employee/review/types/schema";
import { useEmployeeSkillsStore } from "@/features/employee/skills/hooks/useStore";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import { useFormContext } from "react-hook-form";

const SummaryDialog = () => {
  const { formData: employeePersonalInfoFormData } =
    useEmployeePersonalInfoStore();
  const { formData: employeeHistoryFormData } = useEmployeeHistoryStore();
  const { formData: employeeSkillsFormData } = useEmployeeSkillsStore();
  const { formData: employeeAdditionalInfoFormData } =
    useEmployeeAdditionalInfoStore();
  const { watch } = useFormContext<Schema>();

  return (
    <Dialog open>
      <DialogTitle>Summary</DialogTitle>
      {now try to open it when review page submit button clicks
      try to display it better and more userfriendly}
      <DialogContent>
        <ObjectDisplay
          data={{
            ...employeePersonalInfoFormData,
            ...employeeHistoryFormData,
            ...employeeSkillsFormData,
            ...employeeAdditionalInfoFormData,
            ...watch(),
          }}
          title="Employment Application"
        />
      </DialogContent>
      <DialogActions>actions</DialogActions>
    </Dialog>
  );
};

export { SummaryDialog };
