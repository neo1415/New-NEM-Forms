import { Dialog, Box, Stack, Typography, Button, DialogActions, DialogContent, DialogTitle, Divider } from "@mui/material";
import { useStore } from "../hooks/useStore";
import { useStore as useInsuredDetailsStore } from "../../insured-details/hooks/useStore";
import { useStore as useDetailsOfLossStore } from "../../details-of-loss/hooks/useStore";
import { useStore as useReviewStore } from "../../review/hooks/useStore";
import Grid from "@mui/material/Grid2";
import { useCreate } from "../hooks/useMutations";
import { schema } from "../types/schema";
import { getErrorMessage } from "@/utils/getErrorMessage";
import { showSnack } from "@/utils/showSnack";
import { FormEvent } from "react";
import { LoadingButton } from "@mui/lab";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import { InsuredDetailsPage } from "../../insured-details/page";
import { DetailsOfLossPage } from "../../details-of-loss/page";
import { ReviewPage } from "../../review/page";

export const SummaryDialog = () => {
  const { summaryDialogOpen, updateSummaryDialogOpen } = useStore();
  const { formData: insuredDetailsData } = useInsuredDetailsStore();
  const { formData: detailsOfLossData } = useDetailsOfLossStore();
  const { formData: reviewData } = useReviewStore();
  const createMutation = useCreate();

  const allFormData = {
    ...insuredDetailsData,
    ...detailsOfLossData,
    ...reviewData,
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
      <DialogContent sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
        <InsuredDetailsPage readOnly />
        <Divider />
        <DetailsOfLossPage readOnly />
        <Divider />
        <ReviewPage readOnly />
        <Divider />
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