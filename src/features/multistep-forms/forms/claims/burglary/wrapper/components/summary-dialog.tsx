import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import { useStore } from "../hooks/useStore";
import { useCreate } from "../hooks/useMutations";
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
import { InsuredDetailsPage } from "../../insured-details/page";
import { DetailsOfLossPage } from "../../details-of-loss/page";
import { ReviewPage } from "../../review/page";

const SummaryDialog = () => {
  const { summaryDialogOpen, updateSummaryDialogOpen } = useStore();
  const createMutation = useCreate();

  const handleClose = () => {
    updateSummaryDialogOpen(false);
  };

  const onSubmit = async (event: FormEvent) => {
    event.preventDefault();

    try {
      await createMutation.mutateAsync();
      handleClose();
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