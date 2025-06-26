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
import { CompanyDetails } from "../../company-info/page";
import { DirectorsInfo } from "../../directors-info/page";
import { AccountDetails } from "../../account-details/page";
import { FileUploads } from "../../file-uploads/page";
import { Review } from "../../review/page";

export const SummaryDialog = () => {
  const { open, updateOpen } = useStore();
  const { formData: companyInfoData } = useCompanyInfoStore();
  const { formData: directorsInfoData } = useDirectorsInfoStore();
  const { formData: accountDetailsData } = useAccountDetailsStore();
  const { formData: fileUploadsData } = useFileUploadsStore();
  const { formData: reviewData } = useReviewStore();

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const data = {
        ...companyInfoData,
        ...directorsInfoData,
        ...accountDetailsData,
        ...fileUploadsData,
        ...reviewData,
      };

      await schema.parseAsync(data);

      // TODO: Submit form data to API
      showSnack("Form submitted successfully", { variant: "success" });
      updateOpen(false);
    } catch (error) {
      showSnack(getErrorMessage(error), { variant: "error" });
    }
  };

  return (
    <Dialog open={open} onClose={() => updateOpen(false)} maxWidth="md" fullWidth>
      <DialogTitle>{d.confirmInformation}</DialogTitle>
      <Divider />
      <form onSubmit={handleSubmit}>
        <DialogContent>
          <CompanyDetails readOnly />
          <Divider sx={{ my: 2 }} />
          <DirectorsInfo readOnly />
          <Divider sx={{ my: 2 }} />
          <AccountDetails readOnly />
          <Divider sx={{ my: 2 }} />
          <FileUploads readOnly />
          <Divider sx={{ my: 2 }} />
          <Review readOnly />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => updateOpen(false)}>{d.close}</Button>
          <LoadingButton
            type="submit"
            variant="contained"
            startIcon={<SendOutlinedIcon />}
          >
            {d.submit}
          </LoadingButton>
        </DialogActions>
      </form>
    </Dialog>
  );
}; 