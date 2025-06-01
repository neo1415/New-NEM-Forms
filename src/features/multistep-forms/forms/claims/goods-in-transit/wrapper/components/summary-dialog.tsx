import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import { useStore as useInsuredDetailsStore } from "../../insured-details/hooks/useStore";
import { useStore as useDetailsOfLossStore } from "../../details-of-loss/hooks/useStore";
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
import { Form } from "@/features/form/components/form";
import { InsuredDetailsPage } from "../../insured-details/page";
import { DetailsOfLossPage } from "../../details-of-loss/page";
import { ReviewPage } from "../../review/page";

const SummaryDialog = () => {
  const { summaryDialogOpen, updateSummaryDialogOpen } = useStore();
  const createMutation = useCreate();

  const { formData: insuredDetailsFormData } = useInsuredDetailsStore();
  const { formData: detailsOfLossFormData } = useDetailsOfLossStore();
  const { formData: reviewFormData } = useReviewStore();

  const allFormData = {
    ...insuredDetailsFormData,
    ...detailsOfLossFormData,
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
      <DialogTitle variant="h5">Confirm Information</DialogTitle>
      <DialogContent>
        <Stack spacing={2}>
          <Form schema={schema} values={allFormData} onSubmit={() => {}}>
            <InsuredDetailsPage readOnly />
          </Form>
          <Divider />
          <Form schema={schema} values={allFormData} onSubmit={() => {}}>
            <DetailsOfLossPage readOnly />
          </Form>
          <Divider />
          <Form schema={schema} values={allFormData} onSubmit={() => {}}>
            <ReviewPage readOnly />
          </Form>
        </Stack>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="inherit">
          Close
        </Button>
        <LoadingButton
          type="submit"
          loading={createMutation.isPending}
          variant="contained"
          startIcon={<SendOutlinedIcon />}
        >
          Submit
        </LoadingButton>
      </DialogActions>
    </Dialog>
  );
};

export { SummaryDialog }; 