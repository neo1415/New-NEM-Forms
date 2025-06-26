import { Dialog, DialogActions, DialogContent, DialogTitle } from "@mui/material";
import { useStore as useCompanyInfoStore } from "../../company-info/hooks/useStore";
import { useStore as useDirectorsInfoStore } from "../../directors-info/hooks/useStore";
import { useStore as useAccountDetailsStore } from "../../account-details/hooks/useStore";
import { useStore as useFileUploadsStore } from "../../file-uploads/hooks/useStore";
import { useStore as useReviewStore } from "../../review/hooks/useStore";
import { useStore } from "../hooks/useStore";
import { schema } from "../types/schema";
import { getErrorMessage } from "@/utils/getErrorMessage";
import { showSnack } from "@/utils/showSnack";
import { LoadingButton } from "@mui/lab";
import { Button, Divider } from "@mui/material";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import { FormEvent } from "react";
import { d } from "@/utils/corporateCDDDictionary/dictionary";
import { CompanyInfo } from "../../company-info/page";
import { DirectorsInfo } from "../../directors-info/page";
import { AccountDetails } from "../../account-details/page";
import { FileUploads } from "../../file-uploads/page";
import { Review } from "../../review/page";

export const SummaryDialog = () => {
  const { open, updateOpen, formData: wrapperFormData } = useStore();
  const { formData: companyInfoData } = useCompanyInfoStore();
  const { formData: directorsInfoData } = useDirectorsInfoStore();
  const { formData: accountDetailsData } = useAccountDetailsStore();
  const { formData: fileUploadsData } = useFileUploadsStore();
  const { formData: reviewData, isSubmitted } = useReviewStore();

  const handleClose = () => {
    updateOpen(false);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const data = {
        ...companyInfoData,
        ...directorsInfoData,
        ...accountDetailsData,
        ...fileUploadsData,
        ...reviewData,
      };

      await schema.parseAsync(data);

      // TODO: Add API call here
      showSnack("Form submitted successfully", { variant: "success" });
      handleClose();
    } catch (error) {
      showSnack(getErrorMessage(error), { variant: "error" });
    }
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      maxWidth="md"
      fullWidth
      scroll="paper"
      PaperProps={{
        component: "form",
        onSubmit: handleSubmit,
      }}
    >
      <DialogTitle>{d.summary}</DialogTitle>
      <DialogContent dividers>
        <CompanyInfo />
        <Divider sx={{ my: 2 }} />
        <DirectorsInfo />
        <Divider sx={{ my: 2 }} />
        <AccountDetails />
        <Divider sx={{ my: 2 }} />
        <FileUploads />
        <Divider sx={{ my: 2 }} />
        <Review readOnly />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>{d.cancel}</Button>
        <LoadingButton
          type="submit"
          variant="contained"
          startIcon={<SendOutlinedIcon />}
          loading={isSubmitted}
        >
          {d.submit}
        </LoadingButton>
      </DialogActions>
    </Dialog>
  );
}; 