import { Dialog, DialogActions, DialogContent, DialogTitle } from "@mui/material";
import { useStore as useCompanyDetailsStore } from "../../company-details/hooks/useStore";
import { useStore as useDirectorsInfoStore } from "../../directors-info/hooks/useStore";
import { useStore as useFinancialInfoStore } from "../../financial-info/hooks/useStore";
import { useStore as useFileUploadsStore } from "../../file-uploads/hooks/useStore";
import { useStore } from "../hooks/useStore";
import { schema } from "../types/schema";
import { getErrorMessage } from "@/utils/getErrorMessage";
import { showSnack } from "@/utils/showSnack";
import { LoadingButton } from "@mui/lab";
import { Button, Divider } from "@mui/material";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import { FormEvent } from "react";
import { d } from "@/utils/corporateKYCDictionary/dictionary";
import { useStore as useReviewStore } from "../../review/hooks/useStore";
import { FileUploads } from "../../file-uploads/page";
import { useMutations } from "../hooks/useMutations";
import { CompanyDetails } from "../../company-details/page";
import { DirectorsInfo } from "../../directors-info/page";
import { Review } from "../../review/page";

export const SummaryDialog = () => {
  const { open, updateOpen } = useStore();
  const { formData: companyDetailsData } = useCompanyDetailsStore();
  const { formData: directorsInfoData } = useDirectorsInfoStore();
  const { formData: fileUploadsData } = useFileUploadsStore();
  const { formData: reviewData } = useReviewStore();

  const { mutateAsync, isLoading } = useMutations();

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const data = {
        ...companyDetailsData,
        ...directorsInfoData,
        ...fileUploadsData,
        ...reviewData,
      };

      await schema.parseAsync(data);
      await mutateAsync(data);
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
            loading={isLoading}
          >
            {d.submit}
          </LoadingButton>
        </DialogActions>
      </form>
    </Dialog>
  );
}; 