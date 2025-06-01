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
  Stack,
} from "@mui/material";
import { FormEvent } from "react";
import { d } from "@/utils/fidelityDictionary/dictionary";
import { useStore as useInsuredDetailsStore } from "../../insured-details/hooks/useStore";
import { useStore as useLossDetailsStore } from "../../loss-details/hooks/useStore";
import { Form } from "@/features/form/components/form";
import { Page as InsuredDetailsPage } from "../../insured-details/page";
import { Page as LossDetailsPage } from "../../loss-details/page";
import { Page as ReviewPage } from "../../review/page";

const SummaryDialog = () => {
  const { summaryDialogOpen, updateSummaryDialogOpen } = useStore();
  const createMutation = useCreate();

  const { formData: insuredDetailsFormData } = useInsuredDetailsStore();
  const { formData: lossDetailsFormData } = useLossDetailsStore();
  const { formData: reviewFormData } = useReviewStore();

  const allFormData = {
    ...insuredDetailsFormData,
    ...lossDetailsFormData,
    ...reviewFormData,
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
      <DialogContent>
        <Stack spacing={2}>
          <Form schema={schema} values={allFormData} onSubmit={() => {}}>
            <InsuredDetailsPage />
          </Form>
          <Divider />
          <Form schema={schema} values={allFormData} onSubmit={() => {}}>
            <LossDetailsPage />
          </Form>
        </Stack>
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