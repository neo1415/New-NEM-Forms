import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import { useStore as useReviewStore } from "../../review/hooks/useStore";
import { useCreate } from "../hooks/useMutations";
import { useStore } from "../hooks/useStore";
import { schema } from "../types/schema";
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
import { d } from "@/utils/fireDictionary/dictionary";
import { useStore as useInsuredDetailsStore } from "../../insured-details/hooks/useStore";
import { useStore as useLossDetailsStore } from "../../loss-details/hooks/useStore";
import { FireAndSpecialPerilsInsuredDetails } from "../../insured-details/page";
import { FireAndSpecialPerilsLossDetails } from "../../loss-details/page";
import { Stack } from "@mui/material";

const SummaryDialog = () => {
  const { summaryDialogOpen, updateSummaryDialogOpen } = useStore();
  const { formData: insuredDetailsFormData } = useInsuredDetailsStore();
  const { formData: lossDetailsFormData } = useLossDetailsStore();
  const { formData: reviewFormData } = useReviewStore();

  const createMutation = useCreate();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      const data = {
        ...insuredDetailsFormData,
        ...lossDetailsFormData,
        ...reviewFormData,
      };

      const validatedData = schema.parse(data);

      await createMutation.mutateAsync(validatedData);

      showSnack("Form submitted successfully", { variant: "success" });
      updateSummaryDialogOpen(false);
    } catch (error) {
      showSnack(getErrorMessage(error), { variant: "error" });
    }
  };

  return (
    <Dialog
      open={summaryDialogOpen}
      onClose={() => updateSummaryDialogOpen(false)}
      maxWidth="md"
      fullWidth
    >
      <DialogTitle>{d.confirmInformation}</DialogTitle>
      <DialogContent>
        <form onSubmit={handleSubmit}>
          <Stack spacing={2}>
            <FireAndSpecialPerilsInsuredDetails readOnly />
            <Divider />
            <FireAndSpecialPerilsLossDetails readOnly />
          </Stack>
          <DialogActions>
            <Button onClick={() => updateSummaryDialogOpen(false)}>
              {d.cancel}
            </Button>
            <LoadingButton
              loading={createMutation.isPending}
              type="submit"
              variant="contained"
              startIcon={<SendOutlinedIcon />}
            >
              {d.submit}
            </LoadingButton>
          </DialogActions>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export { SummaryDialog }; 