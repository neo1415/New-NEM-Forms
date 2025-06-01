import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import { useStore as useInsuredDetailsStore } from "../../insured-details/hooks/useStore";
import { useStore as useClaimantDetailsStore } from "../../claimant-details/hooks/useStore";
import { useStore as useContractDetailsStore } from "../../contract-details/hooks/useStore";
import { useStore as useClaimDetailsStore } from "../../claim-details/hooks/useStore";
import { useStore as useResponseDetailsStore } from "../../response-details/hooks/useStore";
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
import { d } from "@/utils/professionalIndemnityDictionary/dictionary";
import { InsuredDetails } from "../../insured-details/page";
import { ClaimantDetails } from "../../claimant-details/page";
import { ContractDetails } from "../../contract-details/page";
import { ClaimDetails } from "../../claim-details/page";
import { ResponseDetails } from "../../response-details/page";
import { Review } from "../../review/page";

const SummaryDialog = () => {
  const { summaryDialogOpen, updateSummaryDialogOpen } = useStore();
  const createMutation = useCreate();

  const { formData: insuredDetailsFormData } = useInsuredDetailsStore();
  const { formData: claimantDetailsFormData } = useClaimantDetailsStore();
  const { formData: contractDetailsFormData } = useContractDetailsStore();
  const { formData: claimDetailsFormData } = useClaimDetailsStore();
  const { formData: responseDetailsFormData } = useResponseDetailsStore();
  const { formData: reviewFormData } = useReviewStore();

  const allFormData = {
    ...insuredDetailsFormData,
    ...claimantDetailsFormData,
    ...contractDetailsFormData,
    ...claimDetailsFormData,
    ...responseDetailsFormData,
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
      <DialogContent sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
        <InsuredDetails readOnly />
        <Divider />
        <ClaimantDetails readOnly />
        <Divider />
        <ContractDetails readOnly />
        <Divider />
        <ClaimDetails readOnly />
        <Divider />
        <ResponseDetails readOnly />
        <Divider />
        <Review readOnly />
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